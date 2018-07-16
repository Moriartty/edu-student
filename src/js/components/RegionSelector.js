import {connect} from 'react-redux';
import appAction from 'actions/app';
import {Cascader} from 'antd';

class RegionSelector extends React.Component {
    static defaultProps={
        level:3
    };

    constructor(props){
        super(props);

        const {value, level, provinceDicList} = this.props;
        if(value&&value.length>1&&value[0]&&value[1]){ //只有选择第二级以下时才需要预加载第二个列表以下
            this.state={options:[]};
            let actions=[appAction.fetchCityDicList(value[0])];
            if(value[2]){
                actions.push(appAction.fetchCountyDicList(value[1]));
            }
            //本来有初始选项的
            Promise.all(actions).then((resultList) => { //resultList是从第二级列表开始
                this.setState({
                    options:provinceDicList.map(o => ({
                        category:'province',
                        value:o.id,
                        label:o.name,
                        isLeaf: level==1,
                        children:value[0]==o.id&&resultList[0].map(city => ({ //第二级
                            category:'city',
                            value:city.id,
                            label:city.name,
                            isLeaf: level==2,
                            children:value[1]==city.id&&resultList[1]&&resultList[1].map(county => ({ //第三级
                                category:'county',
                                value:county.id,
                                label:county.name,
                                isLeaf: level==3,
                                children:value[2]==county.id&&resultList[2]&&resultList[2].map(place => ({ //第四级
                                    category:'place',
                                    value:place.id,
                                    label:place.name,
                                    isLeaf: level==4,
                                }))
                            }))
                        }))
                    }))
                })
            })
        }else {
            this.state = {
                options: provinceDicList.map(o => ({category:'province', value: o.id, label: o.name, isLeaf: level==1}))
            }
        }
    }

    loadData = (selectedOptions) => {
        const targetOption = selectedOptions[selectedOptions.length - 1];
        targetOption.loading = true;
        const level=this.props.level;
        const obj={
            province:{subMethod:'fetchCityDicList', subCategory:'city', subLevel:2},
            city:{subMethod:'fetchCountyDicList', subCategory:'county', subLevel:3},
            county:{subMethod:'fetchPlaceDicList', subCategory:'place', subLevel:4}
        };
        const subObj=obj[targetOption.category];
        if(subObj) {
            appAction[subObj.subMethod](targetOption.value).then(list => {
                targetOption.loading = false;
                targetOption.children = list.map(o => ({
                    category: subObj.subCategory,
                    value: o.id,
                    label: o.name,
                    isLeaf: level == subObj.subLevel //是否只选到当前级
                }));
                this.setState({
                    options: [...this.state.options],
                });
            });
        }

    };

    render(){
        const {value, onChange} = this.props;
        return <Cascader
            placeholder="请选择地区"
            value={value}
            onChange={onChange}
            options={this.state.options}
            loadData={this.loadData}
            changeOnSelect
        />
    }
}

RegionSelector=connect(state => {
    return {provinceDicList:state.app.provinceDicList};
})(RegionSelector);

export default RegionSelector
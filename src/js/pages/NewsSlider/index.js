import {connect} from 'react-redux';
import action from 'actions/news';
import Toolbar from './Toolbar';
import Table from './Table';

class NewsSlider extends React.Component{
    componentWillMount(){
        this.props.init();
    }
    render(){
        return (
            <div>
                <Toolbar onSearch={this.props.onSearch}/>
                <Table/>
            </div>
        )
    }
}

NewsSlider = connect(null,dispatch=>({
    init(){
        //加载数据
        dispatch(action.loadList())
    },
    onSearch(params){
        dispatch({type:'NEWS_SEARCH_PARAMS_CHANGED',params});
        dispatch(action.loadList());
    }
}))(NewsSlider);

module.exports = NewsSlider;

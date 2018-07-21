/**
 * Created by user on 18-7-20.
 */
import {connect} from 'react-redux';
import action from 'actions/news/school';
import Toolbar from './Toolbar';
import Table from './Table';
class NewsSchool extends React.Component{
    componentWillMount() {
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
NewsSchool = connect(null,dispatch => ({
    init(){
        //加载列表数据
        dispatch(action.loadList());
    },
    //关键字搜索
    onSearch(params){
        dispatch({type:'NEWS_SCHOOL_SEARCH_PARAMS_CHANGED',params});
        dispatch(action.loadList());
    }
}))(NewsSchool);

module.exports = NewsSchool;


import {connect} from 'react-redux';
import action from 'actions/news/notice';
import Toolbar from './Toolbar';
import Table from './Table';
class NewsNotice extends React.Component{
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
NewsNotice = connect(null,dispatch => ({
    init(){
        //加载列表数据
        dispatch(action.loadList());
    },
    //关键字搜索
    onSearch(params){
        dispatch({type:'NEWS_NOTICE_SEARCH_PARAMS_CHANGED',params});
        dispatch(action.loadList());
    }
}))(NewsNotice);

module.exports = NewsNotice;

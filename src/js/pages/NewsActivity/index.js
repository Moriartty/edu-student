/**
 * Created by user on 18-7-20.
 */
import {connect} from 'react-redux';
import action from 'actions/news/activity';
import Toolbar from './Toolbar';
import Table from './Table';

class NewsActivity extends React.Component{
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

NewsActivity = connect(null,dispatch=>({
    init(){
        //加载数据
        dispatch(action.loadList())
    },
    onSearch(params){
        dispatch({type:'NEWS_ACTIVITY_SEARCH_PARAMS_CHANGED',params});
        dispatch(action.loadList());
    }
}))(NewsActivity);

module.exports = NewsActivity;

import {connect} from 'react-redux';
import action from 'actions/news';
import Toolbar from './Toolbar';
import Table from './Table';

class News extends React.Component{
    componentWillMount(){
        this.props.init();
    }
    render(){
        return (
            <div>
                <Toolbar onRefresh={this.props.init}/>
                <Table/>
            </div>
        )
    }
}

News = connect(null,dispatch=>({
    init(){
        //加载数据
        dispatch(action.loadList())
    }
}))(News);

module.exports = News;

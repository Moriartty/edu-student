import {connect} from 'react-redux';
import action from 'actions/flow';
import { Button } from 'antd';
import SearchModal from './SearchModal';

class Toolbar extends React.Component {
    constructor(props){
        super(props);

        this.state={
            showSearch:false
        };
    }

    render(){
        const {onSearch, onRefresh} = this.props;
        return (
            <div className="toolbar">
                <SearchModal show={this.state.showSearch} onSearch={onSearch} onClose={()=>{this.setState({showSearch:false})}}/>
                <Button onClick={()=>{this.setState({showSearch:true})}} icon="search">查询</Button>
                <Button onClick={onRefresh} icon="sync">刷新</Button>
            </div>
        )
    }
}

Toolbar = connect(null, dispatch => ({
    /**
     * 查询
     * @param params
     */
    onSearch(params){
        dispatch({type:'FLOW_APPLY_SEARCH_PARAMS', params});
        dispatch(action.loadApplyList(1));
    }
}))(Toolbar);

export default Toolbar
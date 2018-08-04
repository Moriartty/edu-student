import {connect} from 'react-redux';
import action from 'actions/flow';
import Toolbar from './Toolbar';
import Table from './Table';
import DetailsDrawer from '../Flow/DetailsDrawer';

//import 'sass/device';

class FlowApply extends React.Component {
    componentWillMount(){
        this.props.init();
    }

    render() {
        return (
            <div>
                <DetailsDrawer onComplete={this.props.init}/>
                <Toolbar onRefresh={this.props.init}/>
                <Table/>
            </div>
        );
    }
}

FlowApply = connect(null, dispatch => ({
    init(){
        //加载列表数据
        dispatch(action.loadApplyList());
    }
}))(FlowApply);

module.exports = FlowApply;
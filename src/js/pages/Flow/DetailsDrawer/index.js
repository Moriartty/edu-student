import {connect} from 'react-redux';
import action from 'actions/flow';
import { Button, Divider, Popconfirm, message } from 'antd';
import ExDrawer from 'components/ExDrawer';
import ComList from './ComList';
import StepFlow from './StepFlow';
import CcList from './CcList';
import VerifyModal from './VerifyModal';
import Profile from './Profile';

import 'less/flow-details.less';

class DetailsDrawer extends React.Component {
    state={
        cancelLoading:false,
        verifyShow:false,
        verifyData:{},
    };

    verify(type){
        const {id, approvalStep:step} = this.props.data;
        this.setState({
            verifyShow:true,
            verifyData:{
                id,
                step,
                state:type, //约定：1通过，2驳回
            }
        })
    }

    complete = () => {
        const {onClose, onComplete} = this.props;
        onClose();
        onComplete&&onComplete();
    };

    render() {
        const {show, data, loading, onCancel, onClose} = this.props;
        const {verifyShow, verifyData, cancelLoading} = this.state;
        return (
            <ExDrawer
                visible={!!show}
                title={data.name}
                loading={loading}
                width={435}
                onClose={onClose}
                wrapClassName="flow-details"
                footer={[
                    <Button key="b1" type="primary" onClick={this.verify.bind(this, 1)}>通过</Button>,
                    <Button key="b2" type="danger" onClick={this.verify.bind(this, 2)} style={{marginLeft:8}}>驳回</Button>,
                    <Popconfirm key="b3" title="确定要撤销该流程吗？" onConfirm={onCancel.bind(this, data.id)}>
                        <Button style={{marginLeft:8}} loading={cancelLoading}>撤销</Button>
                    </Popconfirm>,
                ]}
            >
                <VerifyModal show={verifyShow}
                             data={verifyData}
                             onComplete={this.complete}
                             onClose={()=>{this.setState({verifyShow:false})}}/>
                <Profile data={data}/>
                <Divider/>
                <ComList componentList={data.componentList}/>
                <Divider/>
                <StepFlow current={data.approvalStep} list={data.approvalList}/>
                <Divider/>
                <CcList list={data.ccList}/>
            </ExDrawer>
        );
    }
}

DetailsDrawer = connect(state => {
    const {detailsShow:show, data, dataLoading:loading} = state['flow'];
    return {show, data, loading};
}, dispatch => ({
    onCancel(id){
        this.setState({cancelLoading:true});
        dispatch(action.cancel(id)).then(() => {
            message.success('撤销成功！');
            this.setState({cancelLoading:false});
            this.complete();
        }).catch(() => {
            this.setState({cancelLoading:false});
        });
    },
    /**
     * 关闭
     */
    onClose(){
        dispatch({type:'FLOW_DETAILS_VISIBLE'});
    }
}))(DetailsDrawer);

export default DetailsDrawer
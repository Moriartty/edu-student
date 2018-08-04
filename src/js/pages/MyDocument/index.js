/**
 * Created by user on 18-7-26.
 */
import {connect} from 'react-redux';
import BaseInfoTable from './BaseInfoTable';
import EditableTable from './EditableTable';
import OtherInfoTable from './OtherInfoTable';
import OpinionsTable from './OpinionsTable';
import openNotification from 'components/ExNotification';
import action from 'actions/school-daily/my-document';
import {Spin} from 'antd';


class MyDocument extends React.Component{
    componentWillMount(){
        this.props.init();
    }

    render(){
        const {loading} = this.props;
        return (
            <div>
                <Spin spinning={loading}>
                    <BaseInfoTable/>
                    <EditableTable/>
                    <OtherInfoTable/>
                    <OpinionsTable/>
                </Spin>
            </div>
        )
    }
}

MyDocument = connect(state=>{
    const {loading,showNotification,notification} = state['school-daily/my-document'];
    return {loading,showNotification,notification};
},dispatch => ({
    init(){
        dispatch(action.loadData());
    },
}))(MyDocument);

module.exports = MyDocument;

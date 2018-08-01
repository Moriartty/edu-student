/**
 * Created by user on 18-7-26.
 */
import {connect} from 'react-redux';
import BaseInfoTable from './BaseInfoTable';
import EditableTable from './EditableTable';
import openNotification from 'components/ExNotification';
import action from 'actions/school-daily/my-document';
import {Spin} from 'antd';


class MyDocument extends React.Component{
    componentWillMount(){
        this.props.init();
    }

    componentWillReceiveProps(nextProps) {
        // console.log(nextProps);
        if(nextProps.showNotification){
            openNotification(nextProps.notification);
            //在开启notification后立即将show置为false,放置本页面props改变时因为show=true而出现多个notification
            this.props.closeNotification();
        }
    }

    render(){
        const {loading} = this.props;
        return (
            <div>
                <Spin spinning={loading}>
                    <BaseInfoTable/>
                    <EditableTable/>
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
    closeNotification(){
        dispatch({type:"MY_DOCUMENT_SHOW_NOTIFICATION",obj:{show:false}});
    }
}))(MyDocument);

module.exports = MyDocument;

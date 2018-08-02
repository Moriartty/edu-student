/**
 * Created by user on 18-8-2.
 */
import ExModal from 'components/ExModal';
import ExFormItem from 'components/ExFormItem';
import {connect} from 'react-redux';
import action from 'actions/school-daily/my-document';
import {Form} from 'antd';

const OtherInfoForm = Form.create({
    mapPropsToFields:(props)=>
    {
        const otherInfo = props.otherInfo;
        return {
            internShips:Form.createFormField({value:otherInfo.internShips}),
            graduationThesis:Form.createFormField({value:otherInfo.graduationThesis}),
            rewards:Form.createFormField({value:otherInfo.rewards}),
            selfEvaluation:Form.createFormField({value:otherInfo.selfEvaluation}),
        }
    }
})(props=>{
    const {form} = props;
    const {getFieldDecorator} = form;
    return (
        <Form>
            <ExFormItem
                label="毕业实习单位及主要内容"
                type="textarea"
                name="internShips"
                getFieldDecorator={getFieldDecorator}
                />
            <ExFormItem
                label="毕业论文及毕业设计题目"
                type="textarea"
                name="graduationThesis"
                getFieldDecorator={getFieldDecorator}
                />
            <ExFormItem
                label="在校期间受到过何种奖励或处分"
                type="textarea"
                name="rewards"
                getFieldDecorator={getFieldDecorator}
                />
            <ExFormItem
                label="自我鉴定"
                type="textarea"
                name="selfEvaluation"
                getFieldDecorator={getFieldDecorator}
                />
        </Form>
    )
});

class OtherInfoEditModal extends React.Component{
    constructor(props){
        super(props);
        this.handleCancel = this.handleCancel.bind(this);
        this.handleOk = this.handleOk.bind(this);
    }

    handleCancel(){
        this.props.closeModal();
    }

    handleOk(){
        const form = this.form;
        form.validateFields((err,data)=>{
            if(err)
                return ;
            this.props.submit(data);
        })
    }
    saveFormRef = (form) => {
        this.form = form;
    }

    render(){
        const {otherInfoModalVisible:visible,otherInfo,otherInfoModalSubmitting:submitting} = this.props;
        return (
            <ExModal
                visible={visible}
                onCancel={this.handleCancel}
                onOk={this.handleOk}
                title="其他信息编辑"
                okText="提交"
                cancelText="取消"
                confirmLoading={submitting}
                width="800px"
                >
                <OtherInfoForm ref={this.saveFormRef} otherInfo={otherInfo}/>
            </ExModal>
        )
    }
}

OtherInfoEditModal = connect(state=>{
    const {otherInfoModalVisible,otherInfo,otherInfoModalSubmitting} = state['school-daily/my-document'];
    return {otherInfoModalVisible,otherInfo,otherInfoModalSubmitting};
},dispatch=>({
    closeModal(){
        dispatch({type:'MY_DOCUMENT_OTHERINFO_MODAL_VISIBLE',visible:false});
    },
    submit(params){
        dispatch(action.editOtherInfo(params));
    }
}))(OtherInfoEditModal);

export default OtherInfoEditModal;

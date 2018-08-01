/**
 * Created by user on 18-8-1.
 */
import ExModal from 'components/ExModal';
import ExFormItem from 'components/ExFormItem';
import {connect} from 'react-redux';
import action from 'actions/school-daily/my-document';
import {Form,Row,Col} from 'antd';

const BaseInfoForm = Form.create(
    {
        mapPropsToFields:(props)=>
        {

            const baseInfo = props.baseInfo;
            return {
                name:Form.createFormField({value:baseInfo.name}),
                birthDay:Form.createFormField({value:baseInfo.birthDay}),
                gender:Form.createFormField({value:baseInfo.gender}),
                nation:Form.createFormField({value:baseInfo.nation}),
                certificate:Form.createFormField({value:baseInfo.certificate}),
                certificateId:Form.createFormField({value:baseInfo.certificateId}),
                politicalStatus:Form.createFormField({value:baseInfo.politicalStatus}),
                studentCategory:Form.createFormField({value:baseInfo.studentCategory}),
                eduLevel:Form.createFormField({value:baseInfo.eduLevel}),
                professional:Form.createFormField({value:baseInfo.professional}),
                admissionTime:Form.createFormField({value:baseInfo.admissionTime}),
                graduationTime:Form.createFormField({value:baseInfo.graduationTime}),
                regisNum:Form.createFormField({value:baseInfo.regisNum}),
                employer:Form.createFormField({value:baseInfo.employer}),
                employerPhone:Form.createFormField({value:baseInfo.employerPhone}),
                phoneNum:Form.createFormField({value:baseInfo.phoneNum}),
                familyTel:Form.createFormField({value:baseInfo.familyTel}),
                email:Form.createFormField({value:baseInfo.email}),
            }
        }
    }
)(props=>{
    const {form} = props;
    const {getFieldDecorator} = form;
    return (
        <Form>
            <Row>
                <Col span={12}>
                    <ExFormItem label="姓名" name="name" type="input" getFieldDecorator={getFieldDecorator}/>
                </Col>
                <Col span={12}>
                    <ExFormItem label="出生日期" name="birthDay" type="input" getFieldDecorator={getFieldDecorator}/>
                </Col>
            </Row>
            <Row>
                <Col span={12}>
                    <ExFormItem label="性别" name="gender" type="input" getFieldDecorator={getFieldDecorator}/>
                </Col>
                <Col span={12}>
                    <ExFormItem label="民族" name="nation" type="input" getFieldDecorator={getFieldDecorator}/>
                </Col>
            </Row>
            <Row>
                <Col span={12}>
                    <ExFormItem label="证件类型" name="certificate" type="input" getFieldDecorator={getFieldDecorator}/>
                </Col>
                <Col span={12}>
                    <ExFormItem label="证件号" name="certificateId" type="input" getFieldDecorator={getFieldDecorator}/>
                </Col>
            </Row>
            <Row>
                <Col span={12}>
                    <ExFormItem label="政治面貌" name="politicalStatus" type="input" getFieldDecorator={getFieldDecorator}/>
                </Col>
                <Col span={12}>
                    <ExFormItem label="学生类别" name="studentCategory" type="input" getFieldDecorator={getFieldDecorator}/>
                </Col>
            </Row>
            <Row>
                <Col span={12}>
                    <ExFormItem label="学历层次" name="eduLevel" type="input" getFieldDecorator={getFieldDecorator}/>
                </Col>
                <Col span={12}>
                    <ExFormItem label="专业" name="professional" type="input" getFieldDecorator={getFieldDecorator}/>
                </Col>
            </Row>
            <Row>
                <Col span={12}>
                    <ExFormItem label="入学时间" name="admissionTime" type="input" getFieldDecorator={getFieldDecorator}/>
                </Col>
                <Col span={12}>
                    <ExFormItem label="毕业时间" name="graduationTime" type="input" getFieldDecorator={getFieldDecorator}/>
                </Col>
            </Row>
            <Row>
                <Col span={12}>
                    <ExFormItem label="电子注册号" name="regisNum" type="input" getFieldDecorator={getFieldDecorator}/>
                </Col>
                <Col span={12}>
                    <ExFormItem label="工作单位" name="employer" type="input" getFieldDecorator={getFieldDecorator}/>
                </Col>
            </Row>
            <Row>
                <Col span={12}>
                    <ExFormItem label="单位电话" name="employerPhone" type="input" getFieldDecorator={getFieldDecorator}/>
                </Col>
                <Col span={12}>
                    <ExFormItem label="电话" name="phoneNum" type="input" getFieldDecorator={getFieldDecorator}/>
                </Col>
            </Row>
            <Row>
                <Col span={12}>
                    <ExFormItem label="家庭电话" name="familyTel" type="input" getFieldDecorator={getFieldDecorator}/>
                </Col>
                <Col span={12}>
                    <ExFormItem label="邮箱" name="email" type="input" getFieldDecorator={getFieldDecorator}/>
                </Col>
            </Row>
        </Form>
    )
});


class BaseInfoEditModal extends React.Component{
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
        const {baseInfoModalVisible:visible,baseInfo} = this.props;
        return (
            <ExModal
                visible={visible}
                onCancel={this.handleCancel}
                onOk={this.handleOk}
                title="基本信息编辑"
                okText="提交"
                cancelText="取消"
                width='800px'
                >
                <BaseInfoForm ref={this.saveFormRef} baseInfo={baseInfo}/>
            </ExModal>
        )
    }
}

BaseInfoEditModal = connect(state=>{
    const {baseInfoModalVisible,baseInfo} = state['school-daily/my-document'];
    return {baseInfoModalVisible,baseInfo};
},dispatch=>({
    closeModal(){
        dispatch({type:'MY_DOCUMENT_BASEINFO_MODAL_VISIBLE',visible:false});
    },
    submit(params){
        console.log(params);
    }
}))(BaseInfoEditModal);

export default BaseInfoEditModal;
import ExFormItem from 'components/ExFormItem';
import {Button,Form,Icon,Row,Col,Spin} from 'antd';
import {connect} from 'react-redux';
import action from 'actions/school-daily/exam-registration';

const ApplicationForm = Form.create({
    mapPropsToFields:(props)=>{

    }
})(props=>{
    const {form} = props;
    const {getFieldDecorator} = form;
    return (
        <Form>
            <ExFormItem
                label="学生"
                type="input"
                name="name"
                getFieldDecorator={getFieldDecorator}
                />
            <ExFormItem
                label="学号"
                type="input"
                name="studentId"
                getFieldDecorator={getFieldDecorator}
                />
            <ExFormItem
                label="校区"
                type="select"
                name="campus"
                getFieldDecorator={getFieldDecorator}
                list={[]}
                />
            <ExFormItem
                label="年级"
                type="input"
                name="grade"
                getFieldDecorator={getFieldDecorator}
                />
            <ExFormItem
                label="班级"
                type="input"
                name="class"
                getFieldDecorator={getFieldDecorator}
                />
            <ExFormItem
                label="专业"
                type="input"
                name="subject"
                getFieldDecorator={getFieldDecorator}
                />
            <ExFormItem
                label="学期"
                type="input"
                name="semester"
                getFieldDecorator={getFieldDecorator}
                />
            <ExFormItem
                label="课程"
                type="input"
                name="course"
                getFieldDecorator={getFieldDecorator}
                />
            <ExFormItem
                label="上缴费用"
                type="Number"
                name="payment"
                getFieldDecorator={getFieldDecorator}
                />
        </Form>
    )
});


class ApplicationTable extends React.Component{
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    saveFormRef = (form)=>{
        this.form = form;
    };

    handleSubmit(){
        const form = this.form;
        form.validateFields((err,data)=>{
            if(err)
                return;
            this.props.submitApplication(data);
        })
    }

    render(){
        const {appliSubmitting} = this.props;
        return (
            <div>
                <Spin spinning={appliSubmitting}>
                    <Row>
                        <Col offset={4} span={12}>
                            <ApplicationForm ref={this.saveFormRef}/>
                            <div className="footer">
                                <Button type="primary" onClick={this.handleSubmit}><Icon type="check"/>提交</Button>
                            </div>
                        </Col>
                    </Row>
                </Spin>
            </div>
        )
    }
}

ApplicationTable = connect(state=>{
    const {appliSubmitting} = state['school-daily/exam-registration'];
    return {appliSubmitting};
},dispatch=>({
    submitApplication(params){
        dispatch(action.submitTestApplication(params));
    },
}))(ApplicationTable);

export default ApplicationTable;

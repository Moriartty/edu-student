import {Form} from 'antd';
import {connect} from 'react-redux';
import ExModal from 'components/ExModal';
import ExFormItem from 'components/ExFormItem';
import action from 'actions/school-daily/my-document';

class ExperienceForm extends React.Component{
    constructor(props){
        super(props);
        this.handleOk = this.handleOk.bind(this);
    }
    handleOk(){

        this.props.handleModalOk();
    }
    render(){
        const {form, visible,handleModalCancel} = this.props;
        const {getFieldDecorator} = form;
        return (
            <ExModal visible={visible}
                     title="添加学习经历"
                     onOk={this.handleOk}
                     onCancel={handleModalCancel}>
                <Form>
                    <div>
                        <ExFormItem
                            label='时间跨度'
                            type='textarea'
                            name='when'
                            required
                            getFieldDecorator={getFieldDecorator}
                        />
                        <ExFormItem
                            label='在何处学习'
                            type='textarea'
                            name='where'
                            required
                            getFieldDecorator={getFieldDecorator}
                        />
                    </div>
                </Form>
            </ExModal>
        )
    }
}

ExperienceForm = Form.create()(ExperienceForm);

ExperienceForm = connect(null,dispatch=>({
    postData(){
        dispatch(action.submitExperienceData());
    }
}))(ExperienceForm);

export default ExperienceForm;

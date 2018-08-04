import {connect} from 'react-redux';
import action from 'actions/flow';
import { Form, message } from 'antd';
import ExFormItem from 'components/ExFormItem';
import ExModal from 'components/ExModal';

const EditForm = Form.create()((props) => {
    const { form, data } = props;
    const { getFieldDecorator } = form;
    return (
        <Form>
            <ExFormItem label="意见"
                        type="textarea"
                        name="comment"
                        formLayout="vertical"
                        placeholder="请输入..."
                        rows={5}
                        required
                        getFieldDecorator={getFieldDecorator}/>
            <ExFormItem type="hidden"
                        name="state"
                        initialValue={data.state}
                        getFieldDecorator={getFieldDecorator}/>
            <ExFormItem type="hidden"
                        name="id"
                        initialValue={data.id}
                        getFieldDecorator={getFieldDecorator}/>
            <ExFormItem type="hidden"
                        name="step"
                        initialValue={data.step}
                        getFieldDecorator={getFieldDecorator}/>
        </Form>
    );
});

class VerifyModal extends React.Component {
    state={
        loading:false
    };

    handleSave = () => {
        const form = this.form;
        form.validateFields((err, data) => {
            if (err) {
                return;
            }
            
            this.props.onSubmit.call(this, data);
        });
    };

    saveFormRef = (form) => {
        this.form = form;
    };

    render() {
        const {show, data, onClose} = this.props;
        return (
            <ExModal
                visible={show}
                title={`【${data.state==1?'通过':'驳回'}】意见`}
                confirmLoading={this.state.loading}
                onCancel={onClose}
                onOk={this.handleSave}
            >
                <EditForm
                    ref={this.saveFormRef}
                    data={data}
                />
            </ExModal>
        );
    }
}

VerifyModal = connect(null, dispatch => ({
    /**
     * 提交保存
     * @param data
     */
    onSubmit(data){
        this.setState({loading:true});
        dispatch(action.verify(data)).then(() => {
            message.success('提交成功！');
            this.props.onClose();
            this.setState({loading:false});
            //重新加载列表
            this.props.onComplete();
        }).catch(() => {
            this.setState({loading:false});
        });
    },
}))(VerifyModal);

export default VerifyModal
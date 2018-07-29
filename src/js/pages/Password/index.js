import {connect} from 'react-redux';
import action from 'actions/profile';
import { Form, message, Button, Row, Col } from 'antd';
import ExFormItem from 'components/ExFormItem';

class Password extends React.Component {
    state={
        loading:false
    };

    validateToNextPassword = (rule, value, callback) => {
        const form = this.props.form;
        if (value) {
            form.validateFields(['confirmPwd'], { force: true });
        }
        callback();
    };

    compareToFirstPassword = (rule, value, callback) => {
        const form = this.props.form;
        if (value && value !== form.getFieldValue('newPwd')) {
            callback('两次密码输入不一致!');
        } else {
            callback();
        }
    };

    submit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, data) => {
            if (err) {
                return;
            }

            this.props.onSubmit.call(this, data);
        });
    };

    render() {
        const {form} = this.props;
        const {getFieldDecorator}=form;
        return (
            <Form onSubmit={this.submit}>
                <div style={{maxWidth:800}}>
                    <ExFormItem label="原密码"
                                type="password"
                                name="oldPwd"
                                required
                                getFieldDecorator={getFieldDecorator}/>
                    <ExFormItem label="新密码"
                                type="password"
                                name="newPwd"
                                extraRules={[{validator: this.validateToNextPassword}]}
                                required
                                getFieldDecorator={getFieldDecorator}/>
                    <ExFormItem label="确认密码"
                                type="password"
                                name="confirmPwd"
                                extraRules={[{validator: this.compareToFirstPassword}]}
                                required
                                getFieldDecorator={getFieldDecorator}/>
                </div>
                <hr/>
                <div style={{maxWidth:800,marginTop:24}}>
                    <Row>
                        <Col span={18} offset={6}>
                            <Button type="primary" htmlType="submit" icon="save" size="large" loading={this.state.loading}>保存</Button>
                        </Col>
                    </Row>
                </div>
            </Form>
        );
    }
}

Password = Form.create()(Password);

Password = connect(null, dispatch => ({
    /**
     * 提交保存
     * @param data
     */
    onSubmit(data){
        this.setState({loading:true});
        dispatch(action.updatePassword(data)).then(() => {
            message.success('密码修改成功!');
            this.setState({loading:false});
        });
    },
}))(Password);

module.exports = Password;

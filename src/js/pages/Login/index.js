import {connect} from 'react-redux';
import action from 'actions/app';
import { Form, Icon, Input, Button, Checkbox, Tabs, Alert } from 'antd';
const TabPane = Tabs.TabPane;

import 'less/login';
const FormItem = Form.Item;

class Login extends React.Component {
    state = {
        showIncorrect:false,
        loading:false
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, data) => {
            if (!err) {
                this.setState({loading:true});
                this.props.onLogin.call(this, data);
            }
        });
    };

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div className="login">
                <div className="title"><img src={APP_LOGO} style={{height:50,marginTop:-5}}/> {APP_NAME}</div>
                <Form onSubmit={this.handleSubmit} className="main">
                    <Tabs defaultActiveKey="1" animated={false}>
                        <TabPane tab="账号密码登录" key="1">
                            <FormItem>
                                {getFieldDecorator('username', {
                                    rules: [{ required: true, message: '请输入您的账号！' }],
                                })(
                                    <Input size="large"
                                           prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                           placeholder="职工编号" />
                                )}
                            </FormItem>
                            <FormItem>
                                {getFieldDecorator('password', {
                                    rules: [{ required: true, message: '请输入您的密码！' }],
                                })(
                                    <Input size="large"
                                           prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                           onChange={() => {this.state.showIncorrect&&this.setState({showIncorrect:false})}}
                                           type="password"
                                           placeholder="密码" />
                                )}
                            </FormItem>
                            {this.state.showIncorrect&&<Alert message="您输入的账号或密码不正确！" type="error" showIcon />}
                        </TabPane>
                    </Tabs>
                    <FormItem>
                        {getFieldDecorator('remember', {
                            valuePropName: 'checked',
                            initialValue: true,
                        })(
                            <Checkbox>自动登录</Checkbox>
                        )}
                    </FormItem>
                    <div>
                        <Button size="large" type="primary" htmlType="submit" icon="login" loading={this.state.loading}>登录</Button>
                    </div>
                </Form>
                <div className="login-copyright">
                    <span>版权所有 © 2018 All Rights Reserved {APP_NAME}</span>
                </div>
            </div>
        );
    }
}

Login=Form.create()(Login);

Login = connect(null, dispatch => ({
    /**
     * 登录
     * @param data
     */
    onLogin(data){
        //发送请求
        dispatch(action.login(data.username, data.password, data.remember)).then(data => {
            //跳转
            location.href='index.html';
        }).catch(msg => {
            // message.error(`登录失败(${msg})`);
            this.setState({loading:false, showIncorrect:true});
        });
    }
}))(Login);

module.exports = Login;
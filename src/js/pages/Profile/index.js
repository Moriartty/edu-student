import {connect} from 'react-redux';
import appAction from 'actions/app';
import action from 'actions/profile';
import { Form, message, Button, Icon, Row, Col, Tag } from 'antd';
import ExFormItem from 'components/ExFormItem';

import 'less/profile';

class Profile extends React.Component {
    constructor(props){
        super(props);

        this.state={
            loading:false,
        };
    }

    submit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, data) => {
            if (err) {
                return;
            }
            if(data.birthday) {
                data.birthday = data.birthday.format('YYYY-MM-DD');
            }

            this.props.onSubmit.call(this, data);
        });
    };

    render() {
        const {info, form} = this.props;
        const {loading} = this.state;
        const {getFieldDecorator}=form;
        return (
            <Form onSubmit={this.submit} style={{paddingBottom:70}}>
                <fieldset>
                    <legend><Icon type="tag-o"/> 基本信息</legend>
                    <div style={{maxWidth:800}}>
                        <ExFormItem label="姓名" type="static" initialValue={info.name}/>
                        <ExFormItem label="性别"
                                    type="radio"
                                    name="sex"
                                    initialValue={info.sex}
                                    list={[{id:'男', name:'男'}, {id:'女', name:'女'}]}
                                    getFieldDecorator={getFieldDecorator}/>
                        <ExFormItem label="生日"
                                    type="date"
                                    name="birthday"
                                    initialValue={info.birthday}
                                    getFieldDecorator={getFieldDecorator}/>
                        <ExFormItem label="籍贯"
                                    name="nativePlace"
                                    initialValue={info.nativePlace}
                                    getFieldDecorator={getFieldDecorator}/>
                        <ExFormItem label="所属组织" type="static" initialValue={info.org}/>
                        <ExFormItem label="当前角色" type="static" initialValue={info.roles&&info.roles.map((o, i) => <Tag key={i}>{o.roleCode}</Tag>)}/>
                        <ExFormItem label="上次登录时间" type="static" initialValue={info.lastLogin}/>
                        <ExFormItem label="注册时间" type="static" initialValue={info.createTime}/>
                    </div>
                </fieldset>
                <fieldset>
                    <legend><Icon type="tag-o"/> 联系方式</legend>
                    <div style={{maxWidth:800}}>
                        <ExFormItem label="邮箱"
                                    name="email"
                                    initialValue={info.email}
                                    getFieldDecorator={getFieldDecorator}/>
                        <ExFormItem label="电话"
                                    name="phone"
                                    initialValue={info.phone}
                                    getFieldDecorator={getFieldDecorator}/>
                        <ExFormItem label="座机"
                                    name="tel"
                                    initialValue={info.tel}
                                    getFieldDecorator={getFieldDecorator}/>
                        <ExFormItem label="住址"
                                    type="textarea"
                                    name="address"
                                    initialValue={info.address}
                                    getFieldDecorator={getFieldDecorator}/>
                    </div>
                </fieldset>
                <div className="profile-ft">
                    <Row style={{maxWidth:800}}>
                        <Col span={18} offset={6}>
                            <Button type="primary" htmlType="submit" icon="save" size="large" loading={loading}>保存</Button>
                        </Col>
                    </Row>
                </div>
            </Form>
        );
    }
}

Profile = Form.create()(Profile);

Profile = connect(state => {
    const {userInfo} = state.app;
    return {info:userInfo};
}, dispatch => ({
    /**
     * 提交保存
     * @param data
     */
    onSubmit(data){
        this.setState({loading:true});
        dispatch(action.update(data)).then(() => {
            message.success('保存成功!');
            this.setState({loading:false});
            dispatch(appAction.loadUserInfo());
        }).catch(() => {
            this.setState({loading:false});
        });
    },
}))(Profile);

module.exports = Profile;
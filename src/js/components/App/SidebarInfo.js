import {connect} from 'react-redux';
import {Avatar} from 'antd';
import defaultAvatar from 'img/avatar-default.png';
import appAction from 'actions/app';
import Icon from 'components/Icon';

class SidebarInfo extends React.Component {
    render(){
        const {info, onNav, onLogout} = this.props;

        return (
            <div className="sidebar-info">
                <a onClick={onNav.bind(this, 'avatar')} className="hd" title="修改头像">
                    <Avatar src={info.avatar||defaultAvatar}/>
                </a>
                <div className="bd">
                    <small>{info.no}</small>
                    <div className="text-lg margin-v-sm">{info.name}</div>
                    <ul className="unstyled">
                        <li><a title="消息通知" onClick={onNav.bind(this, 'message')}><Icon type="mail"/></a></li>
                        <li><a title="我的信息" onClick={onNav.bind(this, 'profile')}><Icon type="user"/></a></li>
                        <li><a title="修改密码" onClick={onNav.bind(this, 'password')}><Icon type="key"/></a></li>
                        <li><a title="退出登录" onClick={onLogout}><Icon ex type="car"/></a></li>
                    </ul>
                </div>
            </div>
        )
    }
}

SidebarInfo = connect(state => {
    const {userInfo} = state.app;
    return {info:userInfo};
}, dispatch => ({
    /**
     * 导航菜单页面
     * @param module
     */
    onNav(module){
        dispatch(appAction.loadTabPage(module));
    },
    /**
     * 退出
     */
    onLogout(){
        dispatch(appAction.logout()).then(() => {
            location.href='login.html';
        });
    }
}))(SidebarInfo);

export default SidebarInfo
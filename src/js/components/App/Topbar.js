import {connect} from 'react-redux';
import action from 'actions/app';
import { Layout } from 'antd';
const { Header} = Layout;
import TopbarMenu from './TopbarMenu';

class Topbar extends React.Component {
    render(){
        const {menuData, onMenuChange}=this.props;
        return (
            <Header className="topbar">
                <div className="brand"><img src={APP_LOGO} style={{height:35,marginTop:-5,marginRight:5}}/>{APP_NAME}</div>
                <TopbarMenu menuData={menuData} onChange={onMenuChange}/>
            </Header>
        )
    }
}

Topbar = connect(state => {
    const { menuData} = state.app;
    return {menuData};
}, dispatch => ({
    /**
     * 切换侧边栏菜单
     * @param item
     */
    onMenuChange(item){
        //如果是链接则直接跳转
        if(!(item.list&&item.list.length)){
            dispatch(action.loadTabPage(item.module));
        }
        dispatch({type: 'APP_SET_SIDEBAR_MENU', data: item.list || []});
    }
}))(Topbar);

export default Topbar
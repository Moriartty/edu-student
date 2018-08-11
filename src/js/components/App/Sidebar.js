import {connect} from 'react-redux';
import appAction from 'actions/app';
import { Layout, Menu, Icon } from 'antd';
const { SubMenu } = Menu;
const { Sider } = Layout;
import SidebarInfo from './SidebarInfo';
import SidebarDate from './SidebarDate';

class Sidebar extends React.Component {
    state = {
        openKeys: [],
    };

    componentWillReceiveProps(nextProps){
        if(nextProps.activeTab==='home'&&nextProps.sidebarMenuData!==this.props.sidebarMenuData){
            this.setState({openKeys:['entry']});
        }
    }

    onOpenChange = (openKeys) => {
        //假设当前侧边栏最多只有一个一级菜单
        const lastLevelIndex=openKeys.findIndex(key => key.length>=4&&key.length<6); //假设一级菜单key值格式为：>\d{1}>\d{1,2}
        if(lastLevelIndex>=0&&openKeys.length>1){
            openKeys.splice(lastLevelIndex, 1);
        }
        this.setState({ openKeys });
    };

    /**
     * 渲染子菜单
     * @param item
     * @param level
     * @returns {XML}
     */
    renderItem(item, level){
        if(item.list&&item.list.length){
            return (
                <SubMenu key={item.no} title={<span><Icon type="folder-open" /><span>{item.name}</span></span>}>
                    {
                        item.list.map((subItem, index) => {
                            subItem.index=index;
                            return this.renderItem(subItem, level+1);
                        })
                    }
                </SubMenu>
            );
        }else{
            return <Menu.Item key={item.module}><Icon type={item.icon} /><span data-key={item.module}>{item.name}</span></Menu.Item>;
        }
    }

    render(){
        const {sidebarMenuData:menu, onClick} = this.props;
        return (
            <Sider className="sidebar" width={260}>
                <SidebarInfo/>
                <div className="menu-wrapper">
                    <Menu
                        mode="inline"
                        // theme={APP_EDITION=='jianjiao'?'light':'dark'}
                        openKeys={this.state.openKeys}
                        onOpenChange={this.onOpenChange}
                        selectable={false}
                        onClick={onClick}
                    >
                        {
                            menu.map((item, index) => {
                                item.index=index;
                                return this.renderItem(item, 1);
                            })
                        }
                    </Menu>
                </div>
                <SidebarDate/>
            </Sider>
        )
    }
}

Sidebar = connect(state => {
    const {sidebarMenuData, activeTab} = state.app;
    return {sidebarMenuData, activeTab};
}, dispatch => ({
    /**
     * 点击菜单
     * @param e
     */
    onClick(e){
        dispatch(appAction.loadTabPage(e.key));
    }
}))(Sidebar);

export default Sidebar

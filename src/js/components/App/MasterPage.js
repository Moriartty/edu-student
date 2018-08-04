import {connect} from 'react-redux';
import { Layout, Tabs, Icon } from 'antd';
const TabPane = Tabs.TabPane;
import Topbar from './Topbar';
import Sidebar from './Sidebar';
import Copyright from './Copyright';
import action from 'actions/app';
import openNotification from "components/ExNotification";

class MasterPage extends React.Component {
    componentWillMount(){
        this.props.onWillMount();
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.showNotification){
            openNotification(nextProps.notification);
            //在开启notification后立即将show置为false,放置页面props改变时因为show=true而出现多个notification
            this.props.closeNotification();
            return false;
        }
    }

    onEdit = (targetKey, action) => {
        action=='remove'&&this.removeTab(targetKey);
    };

    removeTab = (targetKey) => {
        let {panes, activeTab, onTabRemove} = this.props;
        const index = panes.findIndex(o => o.key==targetKey);

        const isCurrentTab=activeTab==targetKey;
        if(isCurrentTab) {
            //是否最后一个，是则激活前一个，否则激活后一个
            if (index == panes.length - 1) {
                activeTab = panes[panes.length - 2].key;
            } else {
                activeTab = panes[index + 1].key;
            }
        }

        //删除tab
        panes.splice(index, 1);

        onTabRemove(panes.concat(), activeTab);
    };

    render() {
        const {panes, activeTab, onTabChange} = this.props;
        return (
            <Layout className="full-height">
                <Topbar/>
                <Layout>
                    <Sidebar/>
                    <Layout>
                        <Tabs
                            hideAdd
                            className="page-tabs flex-grow-1 display-flex flex-column"
                            onChange={onTabChange}
                            activeKey={activeTab}
                            type="editable-card"
                            onEdit={this.onEdit}
                        >
                            {
                                panes.map(pane => <TabPane className="page-pane"
                                                           tab={<span><Icon type={pane.icon}/>{pane.title}</span>}
                                                           key={pane.key}
                                                           closable={pane.key!='home'}>{pane.component}</TabPane>)
                            }
                        </Tabs>
                        <Copyright/>
                    </Layout>
                </Layout>
            </Layout>
        )
    }
}

MasterPage = connect(state => {
    const {panes, activeTab,showNotification,notification} = state.app;
    return {panes, activeTab,showNotification,notification};
}, dispatch => ({
    onTabChange(key){
        dispatch({type:'APP_TAB_SWITCH', key});
        key==='home'&&dispatch({type:'APP_ENTRY_MENU_SET'});
    },
    onTabRemove(panes, key){
        dispatch({type:'APP_TAB_CHANGE', panes, key});
    },
    /**
     * componentWillUnmount
     */
    onWillMount(){
        const userInfoPromise=dispatch(action.loadUserInfo());
        const menuPromise=dispatch(action.loadUserMenu());
        Promise.all([userInfoPromise,menuPromise]).then(results => {
            //所有首屏需要加载的数据已经加载完成，效果比起componentDidMount更合理

            //首屏加载完时移除
            document.body.removeChild(document.getElementById('initLoading'));

            //加载常用模块,暂时没有
            dispatch(action.loadEntryMenu());
            //加载日期信息
            dispatch(action.loadDataInfo());
        });
    },
    closeNotification(){
        dispatch({type:"APP_SHOW_NOTIFICATION",obj:{show:false}});
    }
}))(MasterPage);

export default MasterPage

import {objectAppend} from 'utils';

/**
 * 每个容器组件对应一个reducer
 * 这里可以唯一知道新旧状态的地方
 */
const defaultState={
    panes:[],
    activeTab:'',
    classroomTypeDicList:[],
    studentStatusDicList:[],
    studentTypeDicList:[],
    dateInfo:{},
    userInfo:{},
    entryMenuData:[],
    sidebarMenuData:[],
    menuData:null,
    menuObj:{},
    hasNoticeModule:false,
    unreadCount:0 //未读通知数
};
export default (state, action) => {
    let newState={};
    switch (action.type){
        case 'APP_SET_MENU':
            newState.menuData=action.data;
            newState.menuObj=action.obj;
            break;
        case 'APP_SET_SIDEBAR_MENU':
            newState.sidebarMenuData=action.data;
            break;
        case 'APP_ENTRY_MENU_LOAD':
            newState.entryMenuData=action.data;
            if(state.activeTab==='home'){
                newState.sidebarMenuData=action.data;
            }
            break;
        case 'APP_ENTRY_MENU_SET':
            newState.sidebarMenuData=state.entryMenuData;
            break;
        case 'APP_TAB_SWITCH':
            newState.activeTab=action.key;
            break;
        case 'APP_TAB_CHANGE':
            newState.activeTab=action.key;
            newState.panes=action.panes;
            break;
        case 'APP_SET_USER_INFO':
            newState.userInfo=action.info;
            //头像加上时间戮，避免图片缓存
            newState.userInfo.avatar+=`?v=${new Date().getTime()}`;
            break;
        case 'APP_UNREAD_COUNT':
            newState.unreadCount=action.count;
            break;
        case 'APP_LOGOUT':
            newState.userInfo={};
            break;
        case 'APP_DATE_INFO':
            newState.dateInfo=action.info;
            break;
        case 'APP_CLASSROOM_TYPE_DIC_LIST':
            newState.classroomTypeDicList=action.list;
            break;
        case 'APP_STUDENT_STATUS_DIC_LIST':
            newState.studentStatusDicList=action.list;
            break;
        case 'APP_STUDENT_TYPE_DIC_LIST':
            newState.studentTypeDicList=action.list;
            break;
        default:return state||defaultState;
    }
    return objectAppend(newState, state);
}
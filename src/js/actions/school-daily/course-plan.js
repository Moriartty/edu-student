import ajax from 'utils/ajax';
import menuConfig from 'config/menu';
import NProgress from "nprogress";
let action = {};

/**
 * 加载表格数据
 * */
action.loadList = (pageNo,pageSize) => (dispatch,getState)=>{
    dispatch({type:'COURSE_PLAN_LOADING',loading:true});
    const state = getState()['school-daily/course-plan'];
    const page = state.page;
    return ajax.get('/coursePlan',{
        pageNo:pageNo||page.pageNo,
        pageSize:pageSize||page.pageSize
    }).then(data => {
        dispatch({
            type:'COURSE_PLAN_LOAD',
            list:data.result,
            pageNo:data.pageNo,
            pageSize:data.pageSize,
            totalCount:data.totalCount
        });
        dispatch({type:'COURSE_PLAN_LOADING'});
    })
};
/**
 * 加载课程计划详情
 * */
action.loadCourseDetail = (semesterId) => (dispatch,getState)=>{
    const appState = getState().app;
    const module = 'school-daily/course-detail';
    const panes=appState.panes;
    const index=panes.findIndex(o => o.key==module);
    if(~index) {
        //已经存在，直接激活
        dispatch({type: 'APP_TAB_SWITCH', key: module});
    }else{
        // NProgress.done().start();
        const menu = menuConfig[module];
        console.log('menu',menu);
        menu.page(component => {
            NProgress.done();
            dispatch({type:'APP_TAB_CHANGE', panes:panes.concat([{
                    title: menu.name,
                    key: module,
                    icon:menu.icon,
                    component: React.createElement(component)
                }]), key:module});
        });
    }
    dispatch({type:'COURSE_DETAIL_LOADING',loading:true});
    return ajax.get('/coursePlan/courseDetail',{semesterId}).then(data=>{
        dispatch({type:'COURSE_DETAIL_LOAD',courseDetails:data});
        dispatch({type:'COURSE_DETAIL_LOADING'});
    })
};

export default action;

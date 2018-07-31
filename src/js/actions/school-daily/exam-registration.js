/**
 * Created by user on 18-7-30.
 */
import ajax from 'utils/ajax';
import menuConfig from 'config/menu';
import NProgress from "nprogress";
let actions = {};

/**
 * search加载数据
 * */
actions.loadData = (pageNo,pageSize) => (dispatch,getState) => {
    const state  = getState()['school-daily/exam-registration'];
    const page = state.page;
    const params = state.searchParams;
    dispatch({type:'EXAM_REGIS_LOADING',loading:true});
    ajax.get('/examRegistration',{
        pageNo:pageNo||page.pageNo,
        pageSize:pageSize||page.pageSize,
        ...params
    }).then(data=>{
        dispatch({type:'EXAM_REGIS_LOADING',loading:false});
        dispatch({
            type:'EXAM_REGIS_LOAD',
            pageNo:data.pageNo,
            pageSize:data.pageSize,
            dataCount:data.totalCount,
            list:data.list
        })
    })
};
actions.loadApplicationPage = (id) => (dispatch,getState) => {
    const appState = getState().app;
    const module = 'school-daily/exam-application';
    const panes=appState.panes;
    const index=panes.findIndex(o => o.key==module);
    if(~index) {
        //已经存在，直接激活
        dispatch({type: 'APP_TAB_SWITCH', key: module});
    }else{
        // NProgress.done().start();
        const menu = menuConfig[module];
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
    // dispatch({type:'COURSE_DETAIL_LOADING',loading:true});
    // return ajax.get('/coursePlan/courseDetail',{semesterId}).then(data=>{
    //     dispatch({type:'COURSE_DETAIL_LOAD',courseDetails:data});
    //     dispatch({type:'COURSE_DETAIL_LOADING'});
    // })
}
/**
 * 获取学期列表
 * */
actions.loadSemesterList = () => (dispatch) => {
    ajax.get('/examRegistration/getSemester').then(data=>{
        dispatch({type:'EXAM_REGIS_SEARCHINFO_LOAD',semesterList:data});
    })
};
/**
 * 获取专业列表
 * */
actions.loadSubjectList = () => (dispatch) => {
    ajax.get('/examRegistration/getSubject').then(data=>{
        dispatch({type:'EXAM_REGIS_SEARCHINFO_LOAD',subjectList:data});
    })
};
/**
 * 获取课程列表
 * */
actions.loadCourseList = () => (dispatch) => {
    ajax.get('/examRegistration/getCourse').then(data=>{
        dispatch({type:'EXAM_REGIS_SEARCHINFO_LOAD',courseList:data});
    })
};

export default actions;

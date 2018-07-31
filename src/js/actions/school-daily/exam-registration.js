/**
 * Created by user on 18-7-30.
 */
import ajax from 'utils/ajax';
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
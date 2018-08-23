/**
 * Created by user on 18-8-23.
 */
import ajax from 'utils/ajax';
let actions = {};

/**
 * 加载数据
 * */
actions.loadData = (pageNo,pageSize) => (dispatch,getState) => {
    const state = getState()['school-daily/result-inquiry'];
    const page = state.page;
    const params = state.searchParams;
    dispatch({type:'RESULT_INQUIRY_LOADING',loading:true});
    ajax.get('/resultInquiry',{
        pageNo:pageNo||page.pageNo,
        pageSize: pageSize||page.pageSize,
        ...params
    }).then(data=>{
        dispatch({type:'RESULT_INQUIRY_LOADING',loading:false});
        dispatch({
            type:'RESULT_INQUIRY_LOAD',
            pageNo:data.pageNo,
            pageSize:data.pageSize,
            dataCount:data.totalCount,
            list:data.list
        })
    })
};
/**
 * 加载学期列表
 * */
actions.loadSemester = () => (dispatch) =>{
    ajax.get('/examRegistration/getSemester',{}).then(data=>{
        dispatch({type:'RESULT_INQUIRY_SEMESTER_LOAD',list:data})
    })
};
/**
 * 加载课程列表
 * */
actions.loadCourse = () =>  (dispatch) =>{
    ajax.get('/examRegistration/getCourse',{}).then(data=>{
        dispatch({type:'RESULT_INQUIRY_COURSE_LOAD',list:data})
    })
};

/**
 * 加载专业列表
 * */
actions.loadMajor = ()=>  (dispatch) =>{
    ajax.get('/examRegistration/getSubject',{}).then(data=>{
        dispatch({type:'RESULT_INQUIRY_MAJOR_LOAD',list:data})
    })
};


export default actions;
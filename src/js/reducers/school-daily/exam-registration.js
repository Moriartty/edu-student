/**
 * Created by user on 18-7-30.
 */
import {objectAppend} from "utils";

const defaultState = {
    searchModalVisible:false,
    mainTableLoading:false,
    page:{
        pageNo:1,
        pageSize:10
    },
    searchParams:{
        semester:'',
        subject:'',
        course:'',
        startDate:'',
        endDate:''
    },
    list:[],
    semesterList:[],
    subjectList:[],
    courseList:[],
    appliSubmitting:false,//提交页面是否处于提交状态
    closeApplicationPage:false,//是否关闭提交页面
};

export default (state,action) => {
    let newState = {};
    switch(action.type){
        case 'EXAM_REGIS_SEARCHMODAL_VISIBLE':
            newState.searchModalVisible = action.visible;
            break;
        case 'EXAM_REGIS_LOAD':
            newState.list = action.list;
            newState.page = {
                pageNo:action.pageNo,
                pageSize:action.pageSize,
                dataCount:action.dataCount
            };
            break;
        case 'EXAM_REGIS_LOADING':
            newState.mainTableLoading = action.loading;
            break;
        case 'EXAM_REGIS_SEARCHINFO_LOAD':
            newState.semesterList = action.semesterList?action.semesterList:state.semesterList;
            newState.subjectList = action.subjectList?action.subjectList:state.subjectList;
            newState.courseList = action.courseList?action.courseList:state.courseList;
            break;
        case 'EXAM_REGIS_SEARCHPARAMS_CHANGE':
            newState.searchParams = {
                semester:action.semester?action.semester:state.semester,
                subject:action.subject?action.subject:state.subject,
                course:action.course?action.course:state.course,
                startDate:action.startDate?action.startDate:state.startDate,
                endDate:action.endDate?action.endDate:state.endDate
            };
            break;
        case 'EXAM_REGIS_SUBMITTING':
            newState.appliSubmitting = action.loading;
            break;
        case 'EXAM_REGIS_CLOSE_APPLICATION_PAGE':
            newState.closeApplicationPage = action.close;
            break;
        default:return state||defaultState;
    }
    return objectAppend(newState,state);
}

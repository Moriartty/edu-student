/**
 * Created by user on 18-8-23.
 */
import {objectAppend} from "utils";
const defaultState = {
    list:[],
    loading:false,
    searchParams:{
        semester:'',
        course:'',
        major:''
    },
    page:{
        pageNo:1,
        pageSize:10
    },
    reviewPageData:{},
    reviewPageVisible:false,
    reviewPageLoading:false,
    //testPageData:{},
    //testPageVisible:false,
    //testPageLoading:false,
    // homeworkDetail:[],
    // subPageVisible:false,
    // subPageLoading:false,
    semesterList:[],
    majorList:[],
    courseList:[]
};
export default (state,action) => {
    let newState = {};
    switch(action.type){
        case 'RESULT_INQUIRY_LOADING':
            newState.loading = action.loading;
            break;
        case 'RESULT_INQUIRY_LOAD':
            newState.list = action.list;
            newState.page = {
                pageNo:action.pageNo,
                pageSize:action.pageSize,
                dataCount:action.dataCount
            };
            break;
        case 'RESULT_INQUIRY_SEARCHPARAMS_CHANGE':
            newState.searchParams = {
                semester:action.semester||state.searchParams.semester,
                course:action.course||state.searchParams.course,
                major:action.major||state.searchParams.major
            };
            break;
        case 'RESULT_INQUIRY_TOGGLE_REVIEWPAGE_VISIBLE':
            newState.reviewPageVisible = action.visible;
            break;
        case 'RESULT_INQUIRY_REVIEWPAGE_LOADING':
            newState.reviewPageLoading = action.loading;
            break;
        case 'RESULT_INQUIRY_REVIEWPAGE_LOAD':
            newState.reviewPageData = action.data;
            break;
        case 'RESULT_INQUIRY_SEMESTER_LOAD':
            newState.semesterList = action.list;
            break;
        case 'RESULT_INQUIRY_COURSE_LOAD':
            newState.couseList = action.list;
            break;
        case 'RESULT_INQUIRY_MAJOR_LOAD':
            newState.majorList = action.list;
            break;
        default:return state||defaultState;
    }
return objectAppend(newState,state)
}

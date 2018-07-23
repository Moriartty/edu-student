import {objectAppend} from "utils";

const defaultState = {
    loading:false,
    page:{
        pageNo:1,
        pageSize:10
    },
    list:[],
    courseTableLoading:false,
    courseDetails:[]
};

export default (state,action) => {
    let newState = {};
    switch(action.type){
        case 'COURSE_PLAN_LOADING':
            newState.loading = action.loading;
            break;
        case 'COURSE_PLAN_LOAD':
            newState.list = action.list;
            newState.page = {
                pageNo:action.pageNo,
                pageSize:action.pageSize,
                dataCount:action.totalCount
            };
            break;
        case 'COURSE_DETAIL_LOADING':
            newState.courseTableLoading = action.loading;
            break;
        case 'COURSE_DETAIL_LOAD':
            newState.courseDetails = action.courseDetails;
            break;
        default:return state||defaultState;
    }
    return objectAppend(newState,state);
}

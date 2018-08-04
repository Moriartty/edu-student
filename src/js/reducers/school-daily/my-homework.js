import {objectAppend} from "utils";
const defaultState = {
    list:[],
    loading:false,
    searchParams:{
        homeworkName:'',
        course:'',
        creator:''
    },
    page:{
        pageNo:1,
        pageSize:10
    },
    homeworkDetail:[],
    subPageVisible:false,
    subPageLoading:false,
};
export default (state,action) => {
    let newState = {};
    switch(action.type){
        case 'MY_HOMEWORK_LOADING':
            newState.loading = action.loading;
            break;
        case 'MY_HOMEWORK_LOAD':
            newState.list = action.list;
            newState.page = {
                pageNo:action.pageNo,
                pageSize:action.pageSize,
                dataCount:action.dataCount
            };
            break;
        case 'MY_HOMEWORK_SEARCHPARAMS_CHANGE':
            newState.searchParams = {...action.params};
            break;
        case 'MY_HOMEWORK_TOGGLE_SUBPAGE_VISIBLE':
            newState.subPageVisible = action.visible;
            break;
        case 'MY_HOMEWORK_SUBPAGE_LOADING':
            newState.subPageLoading = action.loading;
            break;
        case 'MY_HOMEWORK_SUBPAGE_LOAD':
            newState.homeworkDetail = action.list;
            break;
        default:return state||defaultState;
    }
    return objectAppend(newState,state)
}

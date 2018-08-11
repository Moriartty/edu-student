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
    reviewPageData:{},
    reviewPageVisible:false,
    reviewPageLoading:false,
    testPageData:{},
    testPageVisible:false,
    testPageLoading:false,
    // homeworkDetail:[],
    // subPageVisible:false,
    // subPageLoading:false,
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
        case 'MY_HOMEWORK_TOGGLE_REVIEWPAGE_VISIBLE':
            newState.reviewPageVisible = action.visible;
            break;
        case 'MY_HOMEWORK_REVIEWPAGE_LOADING':
            newState.reviewPageLoading = action.loading;
            break;
        case 'MY_HOMEWORK_REVIEWPAGE_LOAD':
            newState.reviewPageData = action.data;
            break;
        case 'MY_HOMEWORK_TOGGLE_TESTPAGE_VISIBLE':
            newState.testPageVisible = action.visible;
            break;
        case 'MY_HOMEWORK_TESTPAGE_LOADING':
            newState.testPageLoading = action.loading;
            break;
        case 'MY_HOMEWORK_TESTPAGE_LOAD':
            newState.testPageData = action.data;
            break;
        default:return state||defaultState;
    }
    return objectAppend(newState,state)
}

import {objectAppend} from 'utils'

const defaultState = {
    page:{
        pageNo:1,
        pageSize:10
    },
    list:[],
    loading:false,
    searchParam:{}
};

export default (state,action) => {
    let newState = {};
    switch(action.type){
        case 'NEWS_SCHOOL_LOADING':
            newState.loading = action.loading;
            break;
        case 'NEWS_SCHOOL_LOAD':
            newState.page = {
                pageNo:action.pageNo,
                pageSize:action.pageSize,
                dataCount:action.totalCount
            };
            newState.list = action.list;
            break;
        default:return state||defaultState;
    }
    return objectAppend(newState,state);
}

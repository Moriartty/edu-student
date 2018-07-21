import {objectAppend} from "utils";

const defaultState = {
    loading:false,
    page:{
        pageNo:1,
        pageSize:10
    },
    list:[]
};

export default (state,action) => {
    let newState = {};
    switch(action.type){
        case 'COURSEPLAN_LOADING':
            newState.loading = action.loading;
            break;
        case 'COURSEPLAN_LOAD':
            newState.list = action.list;
            newState.page = {
                pageNo:action.pageNo,
                pageSize:action.pageSize,
                totalCount:action.totalCount
            };
            break;
        default:return state||defaultState;
    }
    return objectAppend(newState,state);
}

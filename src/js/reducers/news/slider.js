/**
 * Created by user on 18-7-19.
 */
import {objectAppend} from 'utils';

const defaultState = {
    loading:false,
    list:[],
    page:{
        pageNo:1,
        pageSize:10
    },
    searchParams:{}
};

export default (state,action) => {
    let newState = {};
    switch(action.type){
        //控制加载进度条状态
        case 'NEWS_SLIDER_LOADING':
            newState.loading = action.loading;
            break;
        //装载数据
        case 'NEWS_SLIDER_LOAD':
            newState.list = action.list;
            newState.page = {
                pageNo:action.pageNo,
                pageSize:action.pageSize,
                dataCount:action.totalCount
            };
            break;
        //搜索参数改变
        case 'NEWS_SLIDER_SEARCH_PARAMS_CHANGED':
            newState.searchParams = action.params;
            break;
        default: return state||defaultState;
    }
    // console.log('newState',objectAppend(newState,state));
    return objectAppend(newState,state);
}

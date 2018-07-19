/**
 * Created by user on 18-7-19.
 */
import {objectAppend} from 'utils';

const defaultState = {
    loading:false,
    list:[]
};

export default (state,action) => {
    let newState = {};
    switch(action.type){
        //控制加载进度条状态
        case 'NEWS_LOADING':
            newState.loading = action.loading;
            break;
        //装载数据
        case 'NEWS_LOAD':
            newState.list = action.list;
            break;
        default: return state||defaultState;
    }
    return objectAppend(newState,state);
}

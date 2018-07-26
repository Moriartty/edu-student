/**
 * Created by user on 18-7-26.
 */
import {objectAppend} from 'utils';

const defaultState = {
    loading:false,
    baseInfo:{}
};

export default (state,action) => {
    let newState = {};
    switch(action.type){
        case 'MY_DOCUMENT_LOADING':
            newState.loading = action.loading;
            break;
        case 'MY_DOCUMENT_LOAD':
            newState.baseInfo = action.data;
            break;
        default: return state||defaultState;
    }
    return objectAppend(newState,state);
}
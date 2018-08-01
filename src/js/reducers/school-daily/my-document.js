/**
 * Created by user on 18-7-26.
 */
import {objectAppend} from 'utils';

const defaultState = {
    loading:false,
    baseInfo:{},
    eduExperience:[],
    baseInfoModalVisible:false
};

export default (state,action) => {
    let newState = {};
    switch(action.type){
        case 'MY_DOCUMENT_LOADING':
            newState.loading = action.loading;
            break;
        case 'MY_DOCUMENT_LOAD':
            newState.baseInfo = action.data.baseInfo?action.data.baseInfo:state.baseInfo;
            newState.eduExperience = action.data.experience?action.data.experience:state.expeience;
            break;
        case 'MY_DOCUMENT_BASEINFO_MODAL_VISIBLE':
            newState.baseInfoModalVisible = action.visible;
            break;
        default: return state||defaultState;
    }
    return objectAppend(newState,state);
}

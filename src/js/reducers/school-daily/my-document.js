/**
 * Created by user on 18-7-26.
 */
import {objectAppend} from 'utils';

const defaultState = {
    loading:false,
    baseInfo:{},
    eduExperience:[],
    otherInfo:{},
    opinions:[],
    baseInfoModalVisible:false,
    baseInfoModalSubmitting:false,
    otherInfoModalVisible:false,
    otherInfoModalSubmitting:false,
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
            newState.otherInfo = action.data.otherInfo?action.data.otherInfo:state.otherInfo;
            newState.opinions = action.data.opinions?action.data.opinions:state.opinions;
            break;
        case 'MY_DOCUMENT_BASEINFO_MODAL_VISIBLE':
            newState.baseInfoModalVisible = action.visible;
            break;
        case "MY_DOCUMENT_BASEINFO_MODAL_SUBMITTING":
            newState.baseInfoModalSubmitting = action.submitting;
            break;
        case 'MY_DOCUMENT_OTHERINFO_MODAL_VISIBLE':
            newState.otherInfoModalVisible = action.visible;
            break;
        case "MY_DOCUMENT_OTHERINFO_MODAL_SUBMITTING":
            newState.otherInfoModalSubmitting = action.submitting;
            break;
        default: return state||defaultState;
    }
    return objectAppend(newState,state);
}

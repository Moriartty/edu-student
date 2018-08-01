/**
 * Created by user on 18-7-26.
 */
import {objectAppend} from 'utils';

const defaultState = {
    loading:false,
    baseInfo:{},
    eduExperience:[],
    baseInfoModalVisible:false,
    baseInfoModalSubmitting:false,
    showNotification:false,
    notification:{
        type:'',
        msg:'',
        desc:'',
        duration:2
    }
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
        case "MY_DOCUMENT_BASEINFO_MODAL_SUBMITTING":
            newState.baseInfoModalSubmitting = action.submitting;
            break;
        case "MY_DOCUMENT_SHOW_NOTIFICATION":
            newState.showNotification = action.obj.show;
            newState.notification = {
                type:action.obj.type?action.obj.type:state.notification.type,
                msg:action.obj.msg?action.obj.msg:state.notification.msg,
                desc:action.obj.desc?action.obj.desc:state.notification.desc,
                duration:action.obj.duration?action.obj.duration:state.notification.duration,
            };
            break;
        default: return state||defaultState;
    }
    return objectAppend(newState,state);
}

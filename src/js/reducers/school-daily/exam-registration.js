/**
 * Created by user on 18-7-30.
 */
import {objectAppend} from "utils";

const defaultState = {
    searchModalVisible:false
}

export default (state,action) => {
    let newState = {};
    switch(action.type){
        case 'EXAM_REGIS_SEARCHMODAL_VISIBLE':
            newState.searchModalVisible = action.visible;
            break;
        default:return state||defaultState;
    }
    return objectAppend(newState,state);
}

/**
 * Created by user on 18-7-25.
 */
import {objectAppend} from "utils";

const defaultState = {
    headerData : {}
};

export default (state,action)=>{
    let newState = {};
    switch(action.type){
        case 'PROFESSIONAL_RULES_LOAD':
            newState.headerData = action.headerData;
            break;
        default: return state|| defaultState;
    }
    return objectAppend(newState,state);
}

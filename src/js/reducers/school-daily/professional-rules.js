/**
 * Created by user on 18-7-25.
 */
import {objectAppend} from "utils";

const defaultState = {};

export default (state,action)=>{
    let newState = {};
    switch(action.type){
        default: return state|| defaultState;
    }
    return objectAppend(newState,state);
}
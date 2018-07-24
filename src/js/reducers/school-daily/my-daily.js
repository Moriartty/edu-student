import {objectAppend} from "utils";

const defaultState = {};

export default (state,action) => {
    let newState = {};
    switch(action.type){
        default:return state||defaultState;
    }
    return objectAppend(newState,state);
}
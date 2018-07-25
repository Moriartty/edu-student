import {objectAppend} from "utils";
import moment from 'moment';

const defaultState = {
    list:[],
    searchParams:{
        mode:'month',
        year:moment().year(),
        month:moment().month()+1,
    },
    targetDate:moment().date()
};

export default (state,action) => {
    let newState = {};
    switch(action.type){
        case 'MY_DAILY_SEARCHPARAMS_CHANGED':
            newState.searchParams = {
                year:action.year,
                month:action.month,
                mode:action.mode
            };
        case 'MY_DAILY_LOAD':
            newState.list = action.list;
            break;
        default:return state||defaultState;
    }
    return objectAppend(newState,state);
}

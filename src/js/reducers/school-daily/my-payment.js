import {objectAppend} from "utils";

const defaultState = {
    loading:false,
    curTableData:[],
    hisTableData:[],
    othersTableData:[]
};

export default (state,action)=>{
    let newState = {};
    switch (action.type){
        case 'MY_PAYMENT_TABLES_LOADING':
            newState.loading = action.loading;
            break;
        case 'MY_PAYMENT_TABLES_LOAD':
            newState.curTableData = action.curTableData;
            newState.hisTableData = action.hisTableData;
            newState.othersTableData = action.othersTableData;
            break;
        default:return state||defaultState;
    }
    return objectAppend(newState,state);
}

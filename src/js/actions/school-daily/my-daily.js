import ajax from 'utils/ajax';
let actions = {};

actions.loadData =  () => (dispatch,getState) => {
    const state = getState()['school-daily/my-daily'];
    const param = state.searchParams;
    //后端区分按月和按年查询
    dispatch({type:'MY_DAILY_LOADING',loading:true});
    return ajax.get('/myDaily',param).then(data=>{
        dispatch({type:'MY_DAILY_LOAD',list:data});
        dispatch({type:'MY_DAILY_LOADING',loading:false});
    });
};

export default actions;

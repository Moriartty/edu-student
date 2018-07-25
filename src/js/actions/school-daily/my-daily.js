import ajax from 'utils/ajax';
let actions = {};

actions.loadData =  () => (dispatch,getState) => {
    const state = getState()['school-daily/my-daily'];
    const param = state.searchParams;
    //后端区分按月和按年查询
    console.log(param)
    return ajax.get('/myDaily',param).then(data=>{
        dispatch({type:'MY_DAILY_LOAD',list:data});
    });
};

export default actions;

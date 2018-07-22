import ajax from 'utils/ajax';
let action = {};

/**
 * 加载表格数据
 * */
action.loadList = (pageNo,pageSize) => (dispatch,getState)=>{
    dispatch({type:'COURSEPLAN_LOADING',loading:true});
    const state = getState()['school-daily/course-plan'];
    const page = state.page;
    return ajax.get('/coursePlan',{
        pageNo:pageNo||page.pageNo,
        pageSize:pageSize||page.pageSize
    }).then(data => {
        dispatch({
            type:'COURSEPLAN_LOAD',
            list:data.result,
            pageNo:data.pageNo,
            pageSize:data.pageSize,
            totalCount:data.totalCount
        });
        dispatch({type:'COURSEPLAN_LOADING'});
    })
};

export default action;

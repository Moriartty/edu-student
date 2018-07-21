import ajax from 'utils/ajax';
let action = {};

/**
 * 加载列表
 * */
action.loadList = (pageNo, pageSize) => (dispatch,getState) => {
    dispatch({type:'NEWS_ACTIVITY_LOADING',loading:true});
    const state = getState()['news/activity'];
    const page = state.page;
    const params = state.searchParam;
    return ajax.get('/news',{
        pageNo:pageNo||page.pageNo,
        pageSize:pageSize||page.pageSize,
        categoryId:3,
        title:params.title
    }).then(data=>{
        dispatch({
            type:'NEWS_ACTIVITY_LOAD',
            pageNo:data.pageNo,
            pageSize:data.pageSize,
            totalCount:data.totalCount,
            list:data.result
        });
        dispatch({type:'NEWS_ACTIVITY_LOADING'})
    })
};

export default action;

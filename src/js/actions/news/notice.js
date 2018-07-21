import ajax from 'utils/ajax';
let action = {};

/**
 * 加载列表
 * */
action.loadList = (pageNo, pageSize) => (dispatch,getState) => {
    dispatch({type:'NEWS_NOTICE_LOADING',loading:true});
    const state = getState()['news/notice'];
    const page = state.page;
    const params = state.searchParam;
    return ajax.get('/news',{
        pageNo:pageNo||page.pageNo,
        pageSize:pageSize||page.pageSize,
        categoryId:1,
        title:params.title
    }).then(data=>{
        dispatch({
            type:'NEWS_NOTICE_LOAD',
            pageNo:data.pageNo,
            pageSize:data.pageSize,
            totalCount:data.totalCount,
            list:data.result
        });
        dispatch({type:'NEWS_NOTICE_LOADING'})
    })
};

export default action;

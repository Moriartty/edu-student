/**
 * Created by user on 18-7-19.
 */
import ajax from 'utils/ajax';
let action = {};

/**
 * 加载数据
 * */
action.loadList = (pageNo,pageSize) => (dispatch,getState) => {
    dispatch({type:'NEWS_LOADING',loading:true});
    const state = getState()['news'];
    const page = state.page;
    const params = state.searchParams;
    return ajax.get('/slider-news-student',{
        pageNo:pageNo||page.pageNo,
        pageSize:pageSize||page.pageSize,
        title:params.title
    }).then(data=>{
        dispatch({
            type:'NEWS_LOAD',
            pageNo:data.pageNo,
            pageSize:data.pageSize,
            totalCount:data.totalCount,
            list:data.result
        });
        dispatch({type:'NEWS_LOADING'});
    })
};

export default action;

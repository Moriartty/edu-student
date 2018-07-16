import ajax from 'utils/ajax';
let action={};

/**
 * 获取滚动新闻列表
 * @returns {Function}
 */
action.loadSliderNews = () => dispatch => ajax.get('/home/slider-news').then(list => {
    dispatch({
        type: 'HOME_SLIDER_NEWS',
        list
    });
});

/**
 * 根据分类获取新闻列表
 * @returns {Function}
 */
action.loadNewsList = (categoryId) => dispatch => {
    dispatch({type:'HOME_NEWS_LOADING', categoryId, loading:true});
    return ajax.get('/home/news-list', {limit:7, categoryId}).then(list => {
        dispatch({
            type: 'HOME_NEWS_LOAD',
            categoryId,
            list
        });
        dispatch({type:'HOME_NEWS_LOADING', categoryId});
    })
};

export default action;
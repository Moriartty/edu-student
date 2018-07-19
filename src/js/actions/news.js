/**
 * Created by user on 18-7-19.
 */
import ajax from 'utils/ajax';
let action = {};

/**
 * 加载数据
 * */
action.loadList = () => (dispatch) => {
    dispatch({type:'NEWS_LOADING',loading:true});
    return ajax.get('/slider-news').then(list=>{
        dispatch({
            type:'NEWS_LOAD',
            list
        });
        dispatch({type:'NEWS_LOADING'});
    })
};

export default action;
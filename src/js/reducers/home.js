import {objectAppend} from 'utils';
/**
 * 每个容器组件对应一个reducer
 * 这里可以唯一知道新旧状态的地方
 */
const defaultState={
    //滚动新闻
    sliderList:[],
    //新闻列表
    news:{
        //公告通知
        1:{
            loading:false,
            list:[]
        },
        //学校新闻
        2:{
            loading:false,
            list:[]
        },
        //校园文化活动
        3:{
            loading:false,
            list:[]
        }
    },
};

export default (state, action) => {
    let newState={};
    switch (action.type){
        case 'HOME_SLIDER_NEWS':
            newState.sliderList=action.list;
            break;
        case 'HOME_NEWS_LOADING':
            newState.news=objectAppend({[action.categoryId]:{
                loading:action.loading,
                list:state.news[action.categoryId].list
            }}, state.news);
            break;
        case 'HOME_NEWS_LOAD':
            newState.news=objectAppend({[action.categoryId]:{
                list:action.list,
                loading:state.news[action.categoryId].loading
            }}, state.news);
            break;
        default:return state||defaultState;
    }
    return objectAppend(newState, state);
}
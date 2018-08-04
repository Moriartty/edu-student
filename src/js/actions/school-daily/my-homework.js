import ajax from 'utils/ajax';
let actions = {};

/**
 * 加载数据
 * */
actions.loadData = (pageNo,pageSize) => (dispatch,getState) => {
    const state = getState()['school-daily/my-homework'];
    const page = state.page;
    const params = state.searchParams;
    dispatch({type:'MY_HOMEWORK_LOADING',loading:true});
    ajax.get('/myHomework',{
        pageNo:pageNo||page.pageNo,
        pageSize: pageSize||page.pageSize,
        ...params
    }).then(data=>{
        dispatch({type:'MY_HOMEWORK_LOADING',loading:false});
        dispatch({
            type:'MY_HOMEWORK_LOAD',
            pageNo:data.pageNo,
            pageSize:data.pageSize,
            dataCount:data.totalCount,
            list:data.list
        })
    })
};
/**
 * 加载作业详情
 * */
actions.loadDetail = (id) => (dispatch) => {
    dispatch({type:'MY_HOMEWORK_SUBPAGE_LOADING',loading:true});
    ajax.get('/myHomework/detail',id).then(data=>{
        dispatch({type:'MY_HOMEWORK_SUBPAGE_LOADING',loading:false});
    })
};

export default actions;

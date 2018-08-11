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
 * 加载已提交作业详情
 * */
actions.loadReviewData = (id) => (dispatch) => {
    dispatch({type:'MY_HOMEWORK_REVIEWPAGE_LOADING',loading:true});
    ajax.get('/myHomework/detail',id).then(data=>{
        dispatch({type:'MY_HOMEWORK_REVIEWPAGE_LOAD',data:data});
        dispatch({type:'MY_HOMEWORK_REVIEWPAGE_LOADING',loading:false});
    })
};
/**
 * 加载未提交作业数据
 * */
actions.loadTestData = (id) => (dispatch) => {
    dispatch({type:'MY_HOMEWORK_TESTPAGE_LOADING',loading:true});
    ajax.get('/myHomework/data',id).then(data=>{
        dispatch({type:'MY_HOMEWORK_TESTPAGE_LOAD',data:data});
        dispatch({type:'MY_HOMEWORK_TESTPAGE_LOADING',loading:false});
    })
};

export default actions;

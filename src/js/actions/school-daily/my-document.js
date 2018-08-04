/**
 * Created by user on 18-7-26.
 */
import ajax from 'utils/ajax';
let actions = {};

/**
 * 加载个人档案数据
 * */
actions.loadData = () => (dispatch) => {
    dispatch({type:'MY_DOCUMENT_LOADING',loading:true});
    return ajax.get('/myDocument').then(data=>{
        dispatch({type:'MY_DOCUMENT_LOAD',data:data});
        dispatch({type:'MY_DOCUMENT_LOADING',loading:false});
    })
};
/**
 * 编辑个人基本信息
 * */
actions.editBaseInfo = (params) => (dispatch) => {
    dispatch({type:"MY_DOCUMENT_BASEINFO_MODAL_SUBMITTING",submitting:true});
    ajax.post('/myDocument/baseInfo/edit',params).then(data=>{
        const obj = {
            type:'success',
            msg:'提交成功',
            show:true
        };
        dispatch({type:"APP_SHOW_NOTIFICATION",obj});
        dispatch({type:"MY_DOCUMENT_BASEINFO_MODAL_SUBMITTING",submitting:false});
        dispatch({type:"MY_DOCUMENT_BASEINFO_MODAL_VISIBLE",visible:false});
        //提交成功后重新获取baseInfo,这里考虑是否需要重新加载还是用post返回的数据
        // dispatch(actions.loadData());
    })
};
/**
 * 编辑一条个人学习经历数据
 * */
actions.editExperience = (key,params) => (dispatch) => {
    dispatch({type:'MY_DOCUMENT_LOADING',loading:true});
    let url = '',param = {};
    if(key===99999){
        //新增一条记录
        url = '/myDocument/experience/add';
        param = params;
    }else{
        //编辑一条记录
        url = '/myDocument/experience/update';
        param = {key,...params};
    }
    ajax.post(url,param).then(data=>{
        dispatch({type:'MY_DOCUMENT_LOAD',data:data});
        dispatch({type:'MY_DOCUMENT_LOADING',loading:false});
    })
};
/**
 * 删除一条个人学习经历数据
 * */
actions.deleteExperience = (key) => (dispatch) => {
    dispatch({type:'MY_DOCUMENT_LOADING',loading:true});
    ajax.post('/myDocument/experience/delete',{key}).then(data=>{
        dispatch({type:'MY_DOCUMENT_LOAD',data:data});
        dispatch({type:'MY_DOCUMENT_LOADING',loading:false});
    })
};
/**
 * 编辑other信息
 * */
actions.editOtherInfo = (params) => (dispatch) => {
    dispatch({type:"MY_DOCUMENT_OTHERINFO_MODAL_SUBMITTING",submitting:true});
    ajax.post('/myDocument/otherInfo/edit',params).then(data=>{
        const obj = {type:'success', msg:'提交成功', show:true};
        dispatch({type:"APP_SHOW_NOTIFICATION",obj});
        dispatch({type:"MY_DOCUMENT_OTHERINFO_MODAL_SUBMITTING",submitting:false});
        dispatch({type:"MY_DOCUMENT_OTHERINFO_MODAL_VISIBLE",visible:false});
        //提交成功后重新获取baseInfo,这里考虑是否需要重新加载还是用post返回的数据
        // dispatch(actions.loadData());
    })
}

export default actions;

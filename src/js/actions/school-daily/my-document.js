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
 * 编辑一条个人学习经历数据
 * */
actions.editExperience = (key,params) => (dispatch) => {
    dispatch({type:'MY_DOCUMENT_LOADING',loading:true});
    let url = '',param = {};
    if(key===99999){
        //新增一条记录
        url = '/myDocument/add';
        param = params;
    }else{
        //编辑一条记录
        url = '/myDocument/update';
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
    ajax.post('/myDocument/delete',{key}).then(data=>{
        dispatch({type:'MY_DOCUMENT_LOAD',data:data});
        dispatch({type:'MY_DOCUMENT_LOADING',loading:false});
    })
};

export default actions;

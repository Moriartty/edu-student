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
        console.log(data);
        dispatch({type:'MY_DOCUMENT_LOAD',data:data});
        dispatch({type:'MY_DOCUMENT_LOADING',loading:false});
    })
};

export default actions;
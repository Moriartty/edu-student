/**
 * Created by user on 18-7-25.
 */
import ajax from 'utils/ajax';
let actions = {};

/**
 * 加载数据
 * */
actions.loadData = () => (dispatch) =>{
    ajax.get('/professionalRules').then(data=>{
        dispatch({type:'PROFESSIONAL_RULES_LOAD',headerData:data});
    })
};
export default actions;

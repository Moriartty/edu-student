/**
 * Created by user on 18-7-25.
 */
import ajax from 'utils/ajax';
let actions = {};

/**
 * 加载数据
 * */
actions.loadData = () => (dispatch) =>{
    dispatch({type:'PROFESSIONAL_RULES_LOADING',loading:true});
    dispatch({type:'PROFESSIONAL_RULES_HEADER_LOADING',loading:true});
    ajax.get('/professionalRules').then(data=>{
        dispatch({type:'PROFESSIONAL_RULES_LOAD',
                headerData:data.headerData,
                moduleData:data.modules
        });
        dispatch({type:'PROFESSIONAL_RULES_LOADING'});
        dispatch({type:'PROFESSIONAL_RULES_HEADER_LOADING',loading:false});
    })
};
/**
 * 加载补修课程数据
 * */
actions.loadRepairCourses = () => (dispatch) => {
    dispatch({type:'PROFESSIONAL_RULES_REPAIR_LOADING',loading:true});
    ajax.get('/professionalRules/repairCourses').then(data=>{
        console.log('data',data);
        dispatch({type:'PROFESSIONAL_RULES_REPAIR_LOAD',data:data});
        dispatch({type:'PROFESSIONAL_RULES_REPAIR_LOADING'});
    })
};
export default actions;

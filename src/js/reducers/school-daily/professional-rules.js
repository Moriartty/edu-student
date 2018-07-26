/**
 * Created by user on 18-7-25.
 */
import {objectAppend} from "utils";

const defaultState = {
    headerData : {},
    moduleData:[],
    repairCourses:[],
    headerLoading:false,
    loading:false,
    repairCoursesLoading:false
};

export default (state,action)=>{
    let newState = {};
    switch(action.type){
        //加载专业规则表格
        case 'PROFESSIONAL_RULES_LOAD':
            newState.headerData = action.headerData;
            newState.moduleData = action.moduleData;
            break;
        //控制专业规则表格进度条
        case 'PROFESSIONAL_RULES_LOADING':
            newState.loading = action.loading;
            break;
        //控制headerDataLoading
        case 'PROFESSIONAL_RULES_HEADER_LOADING':
            newState.headerLoading = action.loading;
            break;
        //加载补修课程表格
        case 'PROFESSIONAL_RULES_REPAIR_LOAD':
            newState.repairCourses = action.data;
            break;
        case 'PROFESSIONAL_RULES_REPAIR_LOADING':
            newState.repairCoursesLoading = action.loading;
            break;
        default: return state|| defaultState;
    }
    return objectAppend(newState,state);
}

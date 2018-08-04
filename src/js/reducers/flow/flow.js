import {objectAppend} from 'utils';
/**
 * 每个容器组件对应一个reducer
 * 这里可以唯一知道新旧状态的地方
 */
const defaultState={
    loading:false,
    list:[],
    initiateShow:false,
    tplDataLoading:false,
    tplData:{},

    detailsShow:false,
    dataLoading:false,
    data:{},

    //我的申请
    applyLoading:false,
    applySearchParams:{},//当前查询参数
    applyList:[],
    applyPage:{
        pageNo:1,
        pageSize:10
    },
    //我的审批
    approveLoading:false,
    approveSearchParams:{},//当前查询参数
    approveList:[],
    approvePage:{
        pageNo:1,
        pageSize:10
    },
    //抄送我的
    ccLoading:false,
    ccSearchParams:{},//当前查询参数
    ccList:[],
    ccPage:{
        pageNo:1,
        pageSize:10
    },
};

export default (state, action) => {
    let newState={};
    switch (action.type){
        case 'FLOW_LOADING':
            newState.loading=action.loading;
            break;
        case 'FLOW_LOAD':
            newState.list=action.list;
            break;
        case 'FLOW_INITIATE_VISIBLE':
            newState.initiateShow=action.show;
            break;
        case 'FLOW_TPL_DATA_LOADING':
            newState.tplDataLoading=action.loading;
            break;
        case 'FLOW_TPL_DATA':
            newState.tplData=action.data;
            break;
        case 'FLOW_TPL_DATA_CHANGE':
            newState.tplData=objectAppend(action.data, state.data);
            break;
        case 'FLOW_DETAILS_VISIBLE':
            newState.detailsShow=action.show;
            break;
        case 'FLOW_DATA_LOADING':
            newState.dataLoading=action.loading;
            break;
        case 'FLOW_DATA':
            newState.data=action.data;
            break;
        case 'FLOW_APPLY_LOADING':
            newState.applyLoading=action.loading;
            break;
        case 'FLOW_APPLY_SEARCH_PARAMS':
            newState.applySearchParams=action.params;
            break;
        case 'FLOW_APPLY_LOAD':
            newState.applyPage={
                pageNo:action.no,
                pageSize:action.size,
                dataCount:action.count
            };
            newState.applyList=action.list;
            break;
        case 'FLOW_APPROVE_LOADING':
            newState.approveLoading=action.loading;
            break;
        case 'FLOW_APPROVE_SEARCH_PARAMS':
            newState.approveSearchParams=action.params;
            break;
        case 'FLOW_APPROVE_LOAD':
            newState.approvePage={
                pageNo:action.no,
                pageSize:action.size,
                dataCount:action.count
            };
            newState.approveList=action.list;
            break;
        case 'FLOW_CC_LOADING':
            newState.ccLoading=action.loading;
            break;
        case 'FLOW_CC_SEARCH_PARAMS':
            newState.ccSearchParams=action.params;
            break;
        case 'FLOW_CC_LOAD':
            newState.ccPage={
                pageNo:action.no,
                pageSize:action.size,
                dataCount:action.count
            };
            newState.ccList=action.list;
            break;
        default:return state||defaultState;
    }
    return objectAppend(newState, state);
}
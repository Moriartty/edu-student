import ajax from 'utils/ajax';
let action={};

/**
 * 获取教师可申请的流程列表
 * @returns {Function}
 */
action.loadList = () => (dispatch) => {
    dispatch({type:'FLOW_LOADING', loading:true});
    return ajax.get('/flow').then(list => {
        const treeData=[];
        let tmpObj={};
        list.forEach(o => {
            //分类
            if(!tmpObj[o.type]){
                tmpObj[o.type]=[];
            }
            tmpObj[o.type].push(o);
        });
        for(let type in tmpObj){
            treeData.push({
                name:type,
                list:tmpObj[type],
            });
        }
        dispatch({
            type:'FLOW_LOAD',
            list:treeData
        });
        dispatch({type:'FLOW_LOADING'});
    })
};

/**
 * 加载模板详细数据
 * @param id
 */
action.loadTplData = (id) => dispatch => {
    dispatch({type:'FLOW_TPL_DATA_LOADING', loading:true});
    return ajax.get('/flow/tpl-data', {id}).then(data => {
        data.componentList=data.formData?JSON.parse(data.formData):[];
        dispatch({
            type:'FLOW_TPL_DATA',
            data
        });
        dispatch({type:'FLOW_TPL_DATA_LOADING'});
    })
};

/**
 * 发起申请
 * @param data
 * @returns {Function}
 */
action.initiate = data => dispatch => ajax.post('/flow/initiate', data);

/**
 * 获取我的申请列表
 * @param pageNo
 * @param pageSize
 * @param filters
 * @returns {Function}
 */
action.loadApplyList = (pageNo, pageSize, filters={}) => (dispatch, getState) => {
    dispatch({type:'FLOW_APPLY_LOADING', loading:true});
    const state = getState().flow;
    const page = state.applyPage;
    const params = state.applySearchParams;
    return ajax.get('/flow/apply-list', {
        pageNo: pageNo || page.pageNo,
        pageSize: pageSize || page.pageSize,
        name: params.name,
        state: filters.state,
    }).then(data => {
        dispatch({
            type: 'FLOW_APPLY_LOAD',
            no: data.pageNo,
            size: data.pageSize,
            count:data.totalCount,
            list: data.result || []
        });
        dispatch({type:'FLOW_APPLY_LOADING'});
    })
};

/**
 * 获取我的审批列表
 * @param pageNo
 * @param pageSize
 * @param filters
 * @returns {Function}
 */
action.loadApproveList = (pageNo, pageSize, filters={}) => (dispatch, getState) => {
    dispatch({type:'FLOW_APPROVE_LOADING', loading:true});
    const state = getState().flow;
    const page = state.approvePage;
    const params = state.approveSearchParams;
    return ajax.get('/flow/approve-list', {
        pageNo: pageNo || page.pageNo,
        pageSize: pageSize || page.pageSize,
        name: params.name,
        state: filters.state,
    }).then(data => {
        dispatch({
            type: 'FLOW_APPROVE_LOAD',
            no: data.pageNo,
            size: data.pageSize,
            count:data.totalCount,
            list: data.result || []
        });
        dispatch({type:'FLOW_APPROVE_LOADING'});
    })
};

/**
 * 获取抄送我的列表
 * @param pageNo
 * @param pageSize
 * @param filters
 * @returns {Function}
 */
action.loadCcList = (pageNo, pageSize, filters={}) => (dispatch, getState) => {
    dispatch({type:'FLOW_CC_LOADING', loading:true});
    const state = getState().flow;
    const page = state.ccPage;
    const params = state.ccSearchParams;
    return ajax.get('/flow/cc-list', {
        pageNo: pageNo || page.pageNo,
        pageSize: pageSize || page.pageSize,
        name: params.name,
        state: filters.state,
    }).then(data => {
        dispatch({
            type: 'FLOW_CC_LOAD',
            no: data.pageNo,
            size: data.pageSize,
            count:data.totalCount,
            list: data.result || []
        });
        dispatch({type:'FLOW_CC_LOADING'});
    })
};

/**
 * 获取审批流程详情
 * @param id
 */
action.loadDetails = (id) => dispatch => {
    dispatch({type:'FLOW_DATA_LOADING', loading:true});
    return ajax.get('/flow/details', {id}).then(data => {
        data.componentList=data.formData?JSON.parse(data.formData):[];
        dispatch({
            type:'FLOW_DATA',
            data
        });
        dispatch({type:'FLOW_DATA_LOADING'});
    })
};

/**
 * 审核（通过/驳回）操作
 * @param data
 * @returns {Function}
 */
action.verify = data => dispatch => ajax.post('/flow/verify', data);

/**
 * 流程撤销
 * @param id
 * @returns {Function}
 */
action.cancel = (id) => dispatch => ajax.post('/flow/cancel', {id});

export default action
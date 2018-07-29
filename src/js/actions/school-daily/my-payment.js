import ajax from 'utils/ajax';
import moment from 'moment';
let actions = {};

/**
 * 按时间范围搜索
 * */
actions.loadData = (params) => (dispatch) => {
    dispatch({type:'MY_PAYMENT_TABLES_LOADING',loading:true})
    const param = params?{
        startDate:moment(params[0]).format('YYYY-MM-DD'),
        endDate:moment(params[1]).format('YYYY-MM-DD')
    }:{};
    return ajax.get('/myPayment',param).then(data=>{
        dispatch({
            type:'MY_PAYMENT_TABLES_LOAD',
            curTableData:data.curSemester?data.curSemester:[],
            hisTableData:data.history?data.history:[],
            othersTableData:data.others?data.others:[]
        });
        dispatch({type:'MY_PAYMENT_TABLES_LOADING',loading:false});
    })
};

export default actions;

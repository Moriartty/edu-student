import {connect} from 'react-redux';
import action from 'actions/flow';
import config from 'config/workflow';
import ExTable from 'components/ExTable';
import {Tag} from 'antd';

class Table extends React.Component {
    constructor(props){
        super(props);

        const stateObj=config.stateList.reduce((a, b) => {
            a[b.value]=<Tag color={b.color}>{b.text}</Tag>;
            return a;
        }, {});

        const {onDetails} = this.props;

        this.columns = [
            { title: '流程编号', dataIndex: 'id'},
            { title: '流程名称', dataIndex: 'name'},
            { title: '申请人', dataIndex: 'apply'},
            { title: '状态', dataIndex: 'state', render:(value) => stateObj[value], filters:config.stateList},
            { title: '创建时间', dataIndex: 'createTime'},
            { title:'操作', render:(data) => <a onClick={onDetails.bind(this, data.id)}>详情</a>}
        ];
    }

    render(){
        const {loading, list, page, onChange} = this.props;
        return (
            <ExTable {...page}
                loading={loading}
                columns={this.columns}
                onChange={onChange}
                dataSource={list}/>
        )
    }
}

Table = connect(state => {
    const {applyList:list, applyPage:page, applyLoading:loading} = state.flow;
    return {list, page, loading};
}, dispatch => ({
    onChange(pagination, filters, sorter){
        dispatch(action.loadApplyList(pagination.current, pagination.pageSize, filters));
    },
    /**
     * 审批详情
     * @param id
     */
    onDetails(id){
        dispatch({type:'FLOW_DETAILS_VISIBLE', show:true});
        dispatch(action.loadDetails(id));
    },
}))(Table);

export default Table
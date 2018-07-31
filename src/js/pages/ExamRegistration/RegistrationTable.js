/**
 * Created by user on 18-7-31.
 */
import ExTable from 'components/ExTable';
import {connect} from 'react-redux';
import action from 'actions/school-daily/exam-registration';

class RegistrationTable extends React.Component{
    constructor(props){
        super(props);
        this.columns = [
            {title:'序号',dataIndex:'id'},
            {title:'学期',dataIndex:'semester'},
            {title:'专业',dataIndex:'subject'},
            {title:'课程',dataIndex:'course'},
            {title:'试卷',dataIndex:'testPaper.name'},
            {title:'试卷号',dataIndex:'testPaper.no'},
            {title:'是否开卷',dataIndex:'isOpenTest'},
            {title:'考试方式',dataIndex:'testType'},
            {title:'考试时间',dataIndex:'duration',render:(val,data)=>{<div>{val.start}-{val.end}</div>}},
            {title:'考试费用',dataIndex:'examFee'},
            {title:'历史最高成绩',dataIndex:'highestScore'},
            {title:'报名状态',dataIndex:'regisStatus',},
            {title:'剩余可报人数',dataIndex:'restNum'},
        ]
    }
    render(){
        const {list,mainTableLoading:loading,page,onChange} = this.props;
        return (
            <ExTable
                loading={loading}
                columns={this.columns}
                dataSource={list}
                pageNo={page.pageNo}
                pageSize={page.pageSize}
                dataCount={page.dataCount}
                onChange={onChange}
                />
        )
    }
}

RegistrationTable = connect(state=>{
    const {list,mainTableLoading,page} = state['school-daily/exam-registration'];
    return {list,mainTableLoading,page};
},dispatch=>({
    onChange(pagination, filters, sorter){
        dispatch(action.loadData(pagination.current, pagination.pageSize));
    }
}))(RegistrationTable);

export default RegistrationTable;
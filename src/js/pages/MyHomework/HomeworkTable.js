import ExTable from 'components/ExTable';
import {connect} from 'react-redux';
import action from 'actions/school-daily/my-homework';

class HomeworkTable extends React.Component{
    constructor(props){
        super(props);
        this.columns = [
            {title:'序号',dataIndex:'id'},
            {title:'课程',dataIndex:'course'},
            {title:'作业名',dataIndex:'homeworkName'},
            {title:'创建者',dataIndex:'creator'},
            {title:'截止日期',dataIndex:'endDate'},
            {title:'完成进度',dataIndex:'progress',render:(val,data)=><div>{val.completeNum}/{val.totalNum}</div>},
            {title:'完成情况',dataIndex:'results',render:(val,data)=>{
                return (
                    <div>
                        <p>正确：{val.correct}</p><p>错误：{val.error}</p><p>主观题：{val.subjective}</p>
                    </div>
                    )
            }}
        ];
        this.onClick = this.onClick.bind(this);
    }
    onClick(record){
        this.props.openSubPage();
        this.props.onClick(record)
    }
    render(){
        const {list,loading,page,onChange} = this.props;
        return (
            <ExTable
                loading={loading}
                columns={this.columns}
                dataSource={list}
                border={true}
                pageNo={page.pageNo}
                pageSize={page.pageSize}
                dataCount={page.dataCount}
                onRow={(recode)=>{
                    return {onClick:()=>{this.onClick(recode)}}
                }}
                onChange={onChange}
            />
        )
    }
}

HomeworkTable = connect(state=>{
    const {list,loading,page} = state['school-daily/my-homework'];
    return {list,loading,page};
},dispatch=>({
    onClick(record){
        dispatch(action.loadDetail(record.id));
    },
    onChange(pagination, filters, sorter){
        dispatch(action.loadData(pagination.current, pagination.pageSize));
    }
}))(HomeworkTable);

export default HomeworkTable;

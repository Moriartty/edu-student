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
            {title:'提交状态',dataIndex:'hasSubmit',render:(val)=><div>{val===0?<span className='text-danger'>未提交</span>:<span className='text-green'>已提交</span>}</div>},
            {title:'完成情况',dataIndex:'results',render:(val,data)=>{
                return (
                    <div>
                        <p>正确：{val.correct}</p><p>错误：{val.error}</p><p>主观题：{val.subjective}</p>
                    </div>
                    )
            }}
        ];
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
                    return {onClick:()=>{this.props.onClick(recode)}}
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
        //根据试卷的提交状态进入答题或详情显示页面
        switch(record.hasSubmit){
            case 0:
                dispatch({type:'MY_HOMEWORK_TOGGLE_TESTPAGE_VISIBLE',visible:true});
                dispatch(action.loadTestData(record.id));
                break;
            case 1:
                dispatch({type:'MY_HOMEWORK_TOGGLE_REVIEWPAGE_VISIBLE',visible:true});
                dispatch(action.loadReviewData(record.id));
                break;
        }
    },
    onChange(pagination, filters, sorter){
        dispatch(action.loadData(pagination.current, pagination.pageSize));
    }
}))(HomeworkTable);

export default HomeworkTable;

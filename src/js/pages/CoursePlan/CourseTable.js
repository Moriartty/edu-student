import {connect} from "react-redux";
import ExTable from 'components/ExTable';
//import 'less/course-plan';
class CourseTable extends React.Component{
    constructor(props){
        super(props);
        this.columns = [
            {title:'序号',dataIndex:'id',width:'6%'},
            {title:'年级',dataIndex:'grade',width:'4%'},
            {title:'学期',dataIndex:'semester',width:'6%'},
            {title:'专业',dataIndex:'subject',width:'15%',render:(value)=>{return (<div><p>专业名：{value.name}</p><p>专业规则号：{value.no}</p></div>)}},
            {title:'层次',dataIndex:'level',width:'7%'},
            {title:'课程',dataIndex:'course',width:'16%',render:(value)=>{return (<div><p>课程名：{value.name}</p><p>课程编号：{value.no}</p></div>)}},
            {title:'课程性质',dataIndex:'courseNature',width:'7%'},
            {title:'学分',dataIndex:'credit',width:'4%'},
            {title:'学时',dataIndex:'period',width:'4%'},
            {title:'是否调整学期',dataIndex:'isAdjustSemester',width:'7%'},
            {title:'说明',dataIndex:'comment',width:'7%'},
            {title:'任课教师',dataIndex:'teacher',width:'12%',render:(value)=>{return (<div><p>{value.name}</p><p>{value.phone}</p></div>)}},
            {title:'人数',dataIndex:'peopleNum',width:'6%'},
        ];
    }

    render(){
        const {courseTableLoading, courseDetails} = this.props;
        return (
            <div>
                <ExTable
                    loading={courseTableLoading}
                    columns={this.columns}
                    dataSource={courseDetails}
                    scroll={{ y:$('.ant-tabs-tabpane-active').height()-70}}
                />
            </div>
        )
    }
}

CourseTable = connect(state=>{
    const {courseTableLoading,courseDetails} = state['school-daily/course-plan'];
    return {courseTableLoading,courseDetails};
},null)(CourseTable);

module.exports = CourseTable;

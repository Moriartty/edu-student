import {connect} from "react-redux";
import ExTable from 'components/ExTable';
//import 'less/course-plan';
class CourseTable extends React.Component{
    constructor(props){
        super(props);
        this.columns = [
            //{title:'序号',dataIndex:'id'},
            //{title:'年级',dataIndex:'grade'},
            //{title:'学期',dataIndex:'semester'},
            //{title:'专业',dataIndex:'subject'},
            //{title:'层次',dataIndex:'level'},
            //{title:'课程',dataIndex:'course',render:(value)=>{return (<div><p>{value.name}</p><p>{value.no}</p></div>)}},
            //{title:'课程性质',dataIndex:'courseNature'},
            //{title:'学分',dataIndex:'credit'},
            //{title:'学时',dataIndex:'period'},
            //{title:'是否调整学期',dataIndex:'isAdjustSemester'},
            //{title:'说明',dataIndex:'comment'},
            //{title:'任课教师',dataIndex:'teacher',render:(value)=>{return (<div><p>{value.name}</p><p>{value.phone}</p></div>)}},
            //{title:'人数',dataIndex:'peopleNum'},
            {title:'序号',dataIndex:'id',width:'5%'},
            {title:'年级',dataIndex:'grade',width:'9%'},
            {title:'学期',dataIndex:'semester',width:'10%'},
            {title:'专业',dataIndex:'subject',width:'12%'},
            {title:'层次',dataIndex:'level',width:'7%'},
            {title:'课程',dataIndex:'course',width:'7%',render:(value)=>{return (<div><p>{value.name}</p><p>{value.no}</p></div>)}},
            {title:'课程性质',dataIndex:'courseNature',width:'7%'},
            {title:'学分',dataIndex:'credit',width:'5%'},
            {title:'学时',dataIndex:'period',width:'5%'},
            {title:'是否调整学期',dataIndex:'isAdjustSemester',width:'7%'},
            {title:'说明',dataIndex:'comment',width:'7%'},
            {title:'任课教师',dataIndex:'teacher',width:'12%',render:(value)=>{return (<div><p>{value.name}</p><p>{value.phone}</p></div>)}},
            {title:'人数',dataIndex:'peopleNum',width:'7%'},
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

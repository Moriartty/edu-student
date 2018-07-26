/**
 * Created by user on 18-7-26.
 */
import {connect} from 'react-redux';
import ExTable from 'components/ExTable';

class RepairModules extends React.Component{
    constructor(props){
        super(props);
        this.columns = [
            {title:'序号',dataIndex:'id'},
            {title:'模块名',dataIndex:'moduleName'},
            {title:'课程名称',dataIndex:'courseName'},
            {title:'学分',dataIndex:'credits'},
            {title:'开设学期',dataIndex:'openSemester'},
            {title:'考试单位',dataIndex:'examUnit'},
            {title:'备注',dataIndex:'tips'},
            {title:'考试成绩',dataIndex:'score'},
            {title:'是否已注册',dataIndex:'isRegister'},
            {title:'是否获得学分',dataIndex:'hasCredits'},

        ]
    }
    render(){
        const {repairCourses,repairCoursesLoading:loading} = this.props;
        console.log(repairCourses);
        return (
            <div>
                <ExTable
                    loading={loading}
                    columns={this.columns}
                    dataSource={repairCourses}
                    bordered={true}
                    title={()=>'补修课程'}
                    />
            </div>
        )
    }
}

RepairModules = connect(state=>{
    const {repairCourses,repairCoursesLoading} = state['school-daily/professional-rules'];
    return {repairCourses,repairCoursesLoading}
},null)(RepairModules);

export default RepairModules;

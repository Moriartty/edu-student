import {connect} from "react-redux";
import ExTable from 'components/ExTable';
class CourseTable extends React.Component{
    constructor(props){
        super(props);
        this.columns = [];
    }

    render(){
        const {courseTableLoading, courseDetails} = this.props;
        console.log('details',courseDetails);
        return (
            <div>
                <ExTable
                    loading={courseTableLoading}
                    columns={this.columns}
                    // onChange={onChange}
                    dataSource={courseDetails}
                    // onRow={(recode)=>{
                    //     return {onClick:()=>{onClick(recode)}}
                    // }}
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

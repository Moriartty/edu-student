/**
 * Created by user on 18-7-30.
 */
import Toolbar from './Toolbar';
import SearchModal from './SearchModal';
import {connect} from 'react-redux';
import action from 'actions/school-daily/exam-registration';
import RegistrationTable from './RegistrationTable';
import 'less/exam-registration.less';

class ExamRegistration extends React.Component{
    componentWillMount(){
        this.props.init();
    }

    render(){
        return (
            <div>
                <SearchModal/>
                <Toolbar/>
                <RegistrationTable/>
            </div>
        )
    }
}

ExamRegistration = connect(null,dispatch=>({
    init(){
        dispatch(action.loadSemesterList());
        dispatch(action.loadSubjectList());
        dispatch(action.loadCourseList());
        dispatch(action.loadData());
    }
}))(ExamRegistration);

module.exports = ExamRegistration;

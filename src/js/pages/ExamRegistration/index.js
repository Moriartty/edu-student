/**
 * Created by user on 18-7-30.
 */
import Toolbar from './Toolbar';
import SearchModal from './SearchModal';
import {connect} from 'react-redux';
import action from 'actions/school-daily/exam-registration';
import RegistrationTable from './RegistrationTable';
import 'less/exam-registration.less';
import SubPage from "components/App/SubPage";
import ApplicationTable from './ApplicationTable';

class ExamRegistration extends React.Component{
    constructor(props){
        super(props);
        this.openSubPage = this.openSubPage.bind(this);
        this.closeSubPage = this.closeSubPage.bind(this);
    }

    componentWillMount(){
        this.props.init();
    }

    openSubPage(){
        this.props.handleSubPageVisible(true);
    }
    closeSubPage(){
        this.props.handleSubPageVisible(false);
    }

    render(){
        const {subPageVisible} = this.props;
        return (
            <div>
                {
                    subPageVisible?
                        <SubPage
                            show={subPageVisible}
                            onClose={this.closeSubPage}
                        >
                            <ApplicationTable/>
                        </SubPage>:
                        <div>
                            <SearchModal/>
                            <Toolbar/>
                            <RegistrationTable
                                onRegis={this.openSubPage}
                            />
                        </div>
                }
            </div>
        )
    }
}

ExamRegistration = connect(state=>{
    const {subPageVisible} = state['school-daily/exam-registration'];
    return {subPageVisible};
},dispatch=>({
    init(){
        dispatch(action.loadSemesterList());
        dispatch(action.loadSubjectList());
        dispatch(action.loadCourseList());
        dispatch(action.loadData());
    },
    handleSubPageVisible(visible){
        dispatch({type:'EXAM_REGIS_TOGGLE_SUBPAGE_VISIBLE',subPageVisible:visible});
    }
}))(ExamRegistration);

module.exports = ExamRegistration;

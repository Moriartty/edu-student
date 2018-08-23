/**
 * Created by user on 18-8-23.
 */
import Toolbar from './Toolbar';
import Table from './Table';
import {connect} from 'react-redux';
import action from 'actions/school-daily/result-inquiry';
import PaperReview from "./PaperReview";

class ResultInquiry extends React.Component{
    constructor(props){
        super(props);
    }

    componentWillMount() {
        this.props.init();
    }

    render(){
        return (
            <div>
                <Toolbar/>
                <Table/>
                <PaperReview/>
            </div>
        )
    }
}

ResultInquiry = connect(null,dispatch=>({
    init(){
        dispatch(action.loadSemester());
        dispatch(action.loadMajor());
        dispatch(action.loadCourse());
        dispatch(action.loadData());
    }
}))(ResultInquiry);

module.exports = ResultInquiry;

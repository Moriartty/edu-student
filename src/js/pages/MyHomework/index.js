import Toolbar from './Toolbar';
import HomeworkTable from './HomeworkTable';
import {connect} from 'react-redux';
import action from 'actions/school-daily/my-homework';
import 'less/my-homework.less';
import PaperReview from "pages/MyHomework/PaperReview";
import PaperTest from "pages/MyHomework/PaperTest";

class MyHomework extends React.Component{
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
                <HomeworkTable/>
                <PaperReview/>
                <PaperTest/>
            </div>
        )
    }
}

MyHomework = connect(null,dispatch=>({
    init(){
        dispatch(action.loadData());
    }
}))(MyHomework);

module.exports = MyHomework;

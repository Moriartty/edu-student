import Toolbar from './Toolbar';
import HomeworkTable from './HomeworkTable';
import HomeworkDetail from './HomeworkDetail';
import {connect} from 'react-redux';
import action from 'actions/school-daily/my-homework';
import SubPage from 'components/App/SubPage';
import 'less/my-homework.less';

class MyHomework extends React.Component{
    constructor(props){
        super(props);
        this.onClose = this.onClose.bind(this);
        this.onOpen = this.onOpen.bind(this);
    }

    componentWillMount() {
        this.props.init();
    }

    onClose(){
        this.props.handleSubPageVisible(false);
    }

    onOpen(){
        this.props.handleSubPageVisible(true);
    }

    render(){
        const {subPageVisible} = this.props;
        return (
            <div>
                {
                    subPageVisible?
                        <SubPage show={subPageVisible} onClose={this.onClose}>
                            <HomeworkDetail/>
                        </SubPage>:
                        <div>
                            <Toolbar/>
                            <HomeworkTable openSubPage={this.onOpen}/>
                        </div>
                }
            </div>
        )
    }
}

MyHomework = connect(state=>{
    const {subPageVisible} = state['school-daily/my-homework'];
    return {subPageVisible};
},dispatch=>({
    init(){
        dispatch(action.loadData());
    },
    handleSubPageVisible(visible){
        dispatch({type:'MY_HOMEWORK_TOGGLE_SUBPAGE_VISIBLE',visible:visible});
    }
}))(MyHomework);

module.exports = MyHomework;

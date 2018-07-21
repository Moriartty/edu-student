import {connect} from 'react-redux';
import Table from './Table'

class CoursePlan extends React.Component{
    componentWillMount() {
        this.props.init();
    }
    render(){
        return (
            <div>
                <Table/>
            </div>
        )
    }
}

CoursePlan = connect(null,dispatch => ({
    //加载表格
    init(){
        dispatch(action.loadList());
    }
}))(CoursePlan);

module.exports = CoursePlan;

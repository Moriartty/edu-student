import ExTable from 'components/ExTable';
import {connect} from 'react-redux';
class HomeworkDetail extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <ExTable
                size='small'
            />
        )
    }
}

HomeworkDetail = connect(state=>{
    const {homeworkDetail} = state['school-daily/my-homework'];
    return {homeworkDetail};
},dispatch=>({

}))(HomeworkDetail);

export default HomeworkDetail;

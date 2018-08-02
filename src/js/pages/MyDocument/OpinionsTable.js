/**
 * Created by user on 18-8-2.
 */
import {connect} from 'react-redux';
import ExTable from 'components/ExTable';
import 'less/my-document.less';

class OpinionsTable extends React.Component{
    constructor(props){
        super(props);

    }
    render(){
        return (
            <div>
                <ExTable/>
            </div>
        )
    }
}

OpinionsTable = connect(state=>{
    const {opinions} = state['school-daily/my-document'];
    return {opinions};
},null)(OpinionsTable);

export default OpinionsTable;
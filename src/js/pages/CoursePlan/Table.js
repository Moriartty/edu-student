import {connect} from 'react-redux';
import action from 'actions/school-daily/course-plan';
import ExTable from 'components/ExTable';
import {Icon} from 'antd';

class Table extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div></div>
        )
    }
}

Table = connect(null,null)(Table);

export default Table;

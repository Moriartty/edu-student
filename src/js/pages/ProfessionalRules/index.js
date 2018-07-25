/**
 * Created by user on 18-7-25.
 */
import {connect} from 'react-redux';
import TableHeader from './TableHeader';
import ModuleTable from './ModuleTable';
import action from 'actions/school-daily/professional-rules';
class ProfessionalRules extends React.Component{
    constructor(props){
        super(props);
    }

    componentWillMount() {
        this.props.init();
    }
    render(){
        return (
            <div>
                <TableHeader/>
                <ModuleTable/>
            </div>
        );
    }
}

ProfessionalRules = connect(null,dispatch=>({
    init(){
        dispatch(action.loadData());
    }
}))(ProfessionalRules);

module.exports = ProfessionalRules;

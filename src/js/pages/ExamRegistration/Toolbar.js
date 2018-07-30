/**
 * Created by user on 18-7-30.
 */
import {connect} from 'react-redux';

class Toolbar extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div></div>
        )
    }
}

Toolbar = connect(null,dispatch=>({
    openSearchModal(){
        dispatch({type:'EXAM_REGIS_SEARCHMODAL_VISIBLE',visible:true});
    }
}))(Toolbar);

export default Toolbar;

/**
 * Created by user on 18-7-30.
 */
import {Modal} from 'antd';
import {connect} from 'react-redux';
class SearchModal extends React.component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <Modal visible={}>
            </Modal>
        )
    }
}

SearchModal = connect(state=>{
    const {visible} = state['school-daily/exam-registration'];
    return {visible};
},dispatch=>({

}))(SearchModal);

export default SearchModal;
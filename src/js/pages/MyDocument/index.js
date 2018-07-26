/**
 * Created by user on 18-7-26.
 */
import {connect} from 'react-redux';
import BaseInfoTable from './BaseInfoTable';
import EditableTable from './EditableTable';
import action from 'actions/school-daily/my-document';
import {Spin} from 'antd';

// "react": "15.6.2",
//     "react-dom": "15.6.2",

class MyDocument extends React.Component{
    componentWillMount(){
        this.props.init();
    }
    render(){
        const {loading} = this.props;
        return (
            <div>
                <Spin spinning={loading}>
                    <BaseInfoTable/>
                    <EditableTable/>
                </Spin>
            </div>
        )
    }
}

MyDocument = connect(state=>{
    const {loading} = state['school-daily/my-document'];
    return {loading};
},dispatch => ({
    init(){
        dispatch(action.loadData());
    }
}))(MyDocument);

module.exports = MyDocument;

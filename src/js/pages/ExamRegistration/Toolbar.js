/**
 * Created by user on 18-7-30.
 */
import {connect} from 'react-redux';
import {Button,Icon} from 'antd';

class Toolbar extends React.Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.props.openSearchModal();
    }

    render(){
        return (
            <div style={{margin:'10px 0'}}>
                <Button type="primary" onClick={this.handleClick}><Icon type="search" />查询</Button>
            </div>
        )
    }
}

Toolbar = connect(null,dispatch=>({
    openSearchModal(){
        dispatch({type:'EXAM_REGIS_SEARCHMODAL_VISIBLE',visible:true});
    }
}))(Toolbar);

export default Toolbar;

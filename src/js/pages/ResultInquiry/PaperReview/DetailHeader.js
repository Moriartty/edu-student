import {connect} from 'react-redux';
import {Row,Col,Form,Button,Icon} from 'antd';
import ExFormItem from "components/ExFormItem";

const typeList = [{id:0,name:'全部'},{id:1,name:'答错的题'},{id:2,name:'答对的题'},{id:3,name:'待评价的'},]

const SearchForm = Form.create()(props=>{
    const {form} = props;
    const {getFieldDecorator} = form;
    return (
        <Form onSubmit={props.submit}>
            <ExFormItem
                label="类型显示"
                name="type"
                type='select'
                list={typeList}
                getFieldDecorator={getFieldDecorator}
            />
        </Form>
    )
});

class DetailHeader extends React.Component{
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div>
                <Row className='detail-header-row'>
                    <Col offset={12} span={12}>
                        <SearchForm submit={this.props.onSearch}/>
                    </Col>
                </Row>
            </div>
        )
    }
}

DetailHeader = connect(state=>{
    return state;
},dispatch=>({
    onSearch(param){
        console.log(param);
    }
}))(DetailHeader);

export default DetailHeader;

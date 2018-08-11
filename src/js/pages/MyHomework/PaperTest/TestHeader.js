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

class TestHeader extends React.Component{
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div>
                <Row className='detail-header-row'>
                    <Col offset={18} span={6}>
                        <Button>保存</Button>
                        <Button type='primary'><Icon type="check" />提交</Button>
                    </Col>
                </Row>
            </div>
        )
    }
}

TestHeader = connect(state=>{
    return state;
},dispatch=>({
    onSearch(param){
        console.log(param);
    }
}))(TestHeader);

export default TestHeader;

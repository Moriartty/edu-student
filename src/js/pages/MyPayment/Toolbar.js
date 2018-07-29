import {Form,Button} from 'antd';
import {connect} from 'react-redux';
import ExFormItem from 'components/ExFormItem';
import action from 'actions/school-daily/my-payment';
const FormItem = Form.Item;

class Toolbar extends React.Component{
    constructor(props){
        super(props);
        this.submit = this.submit.bind(this);
    }
    submit(e){
        e.preventDefault();
        this.props.form.validateFields((err, data) => {
            if (err) {
                return;
            }
            this.props.onSearch.call(this, data);
        });
    }
    render(){
        const {form} = this.props;
        const {getFieldDecorator} = form;
        return (
                <Form onSubmit={this.submit} layout='inline'>
                    <div className='searchInfoItem'>
                        <ExFormItem
                            label='开始时间'
                            type='date-range'
                            name='time'
                            getFieldDecorator = {getFieldDecorator}
                        />
                        <FormItem>
                            <Button
                                type='primary'
                                htmlType='submit'
                            >
                                查询
                            </Button>
                        </FormItem>
                    </div>
                </Form>
        )
    }
}

Toolbar = Form.create()(Toolbar);

Toolbar = connect(null,dispatch=>({
    onSearch(data){
        dispatch(action.loadData(data));
    }
}))(Toolbar);

export default Toolbar;

import {connect} from 'react-redux';
import ExFormItem from 'components/ExFormItem';
import {Form,Button} from 'antd';
import action from 'actions/school-daily/my-homework';
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
            <div>
                <Form layout="inline" onSubmit={this.submit}>
                    <ExFormItem
                        label="习题名称"
                        type='input'
                        name="homeworkName"
                        getFieldDecorator = {getFieldDecorator}
                    />
                    <ExFormItem
                        label="课程"
                        type='input'
                        name="course"
                        getFieldDecorator = {getFieldDecorator}
                    />
                    <ExFormItem
                        label="创建人"
                        type='input'
                        name='creator'
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
                </Form>
            </div>
        )
    }
}
Toolbar = Form.create({
    mapPropsToFields:(props)=>{
        const params = props.searchParams;
        return {
            homeworkName:Form.createFormField({value:params.homeworkName}),
            course:Form.createFormField({value:params.course}),
            creator:Form.createFormField({value:params.creator})
        }
    }
})(Toolbar);

Toolbar = connect(state=>{
    const {searchParams} = state['school-daily/my-homework'];
    return {searchParams};
},dispatch=>({
    onSearch(params){
        dispatch({type:'MY_HOMEWORK_SEARCHPARAMS_CHANGE',params:params});
        //改变搜索条件，获取的结果从第一页开始
        dispatch(action.loadData(1));
    }
}))(Toolbar);

export default Toolbar;

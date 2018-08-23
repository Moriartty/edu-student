/**
 * Created by user on 18-8-23.
 */
import {connect} from 'react-redux';
import ExFormItem from 'components/ExFormItem';
import {Form,Button} from 'antd';
import action from 'actions/school-daily/result-inquiry';
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
        const {form,semesterList,majorList,courseList} = this.props;
        //console.log(this.props);
        const {getFieldDecorator} = form;
        return (
            <div>
                <Form layout="inline" onSubmit={this.submit}>
                    <ExFormItem
                        label="学期"
                        type='select'
                        name="semester"
                        list={semesterList}
                        width='100px'
                        getFieldDecorator = {getFieldDecorator}
                        />
                    <ExFormItem
                        label="专业"
                        type='select'
                        name="major"
                        list={majorList}
                        getFieldDecorator = {getFieldDecorator}
                        />
                    <ExFormItem
                        label="课程"
                        type='select'
                        name='course'
                        list={courseList}
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
            semester:Form.createFormField({value:params.semester}),
            major:Form.createFormField({value:params.major}),
            course:Form.createFormField({value:params.course})
        }
    }
})(Toolbar);

Toolbar = connect(state=>{
    const {searchParams,semesterList,majorList,courseList} = state['school-daily/result-inquiry'];
    return {searchParams,semesterList,majorList,courseList};
},dispatch=>({
    onSearch(params){
        dispatch({type:'RESULT_INQUIRY_SEARCHPARAMS_CHANGE',params:params});
        //改变搜索条件，获取的结果从第一页开始
        dispatch(action.loadData(1));
    }
}))(Toolbar);

export default Toolbar;

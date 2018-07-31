/**
 * Created by user on 18-7-30.
 */
import {Butotn,Form} from 'antd';
import {connect} from 'react-redux';
import ExFormItem from 'components/ExFormItem';
import ExModal from 'components/ExModal';
import action from 'actions/school-daily/exam-registration';
import moment from 'moment';

const FormItem = Form.Item;

const SearchForm = Form.create(
    {
        mapPropsToFields:(props)=>
        {
            const startDate = props.parentProps.searchParams.startDate||'';
            const endDate = props.parentProps.searchParams.endDate||'';
            let date = [];
            if(startDate&&endDate)
                date = [moment(startDate),moment(endDate)];
            return {
                semester:Form.createFormField({value:props.parentProps.searchParams.semester}),
                subject:Form.createFormField({value:props.parentProps.searchParams.subject}),
                course:Form.createFormField({value:props.parentProps.searchParams.course}),
                date:Form.createFormField({value:date}),
            }
        }
    })(props=>{
    const {form} = props;
    const {getFieldDecorator} = form;
    const {semesterList,subjectList,courseList} = props.parentProps;
    return (
        <Form>
            <ExFormItem
                type='select'
                label='学期'
                name='semester'
                getFieldDecorator={getFieldDecorator}
                list={semesterList}
                />
            <ExFormItem
                type='select'
                label='专业'
                name='subject'
                getFieldDecorator={getFieldDecorator}
                list={subjectList}
                />
            <ExFormItem
                type='select'
                label='课程'
                name='course'
                getFieldDecorator={getFieldDecorator}
                list={courseList}
                />
            <ExFormItem
                type='date-range'
                label='起止时间'
                name='date'
                getFieldDecorator={getFieldDecorator}
                />
        </Form>
    )
});

class SearchModal extends React.Component{
    constructor(props){
        super(props);
        this.handleOk = this.handleOk.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
    }

    handleOk(){
        this.setState({loading:true});

        const form = this.form;
        form.validateFields((err, data) => {
            if (err) {
                return;
            }

            this.props.search(data);
            this.props.closeSearchModal();
        });
    }

    handleCancel(){
        this.props.closeSearchModal();
    }
    saveFormRef = (form) => {
        this.form = form;
    };

    render(){
       const {searchModalVisible:visible} = this.props;
        return (
            <ExModal
                visible={visible}
                onCancel={this.handleCancel}
                onOk={this.handleOk}
                title="搜索条件"
                okText="搜索"
                cancelText="取消"
            >
                <SearchForm parentProps={this.props} ref={this.saveFormRef}/>
            </ExModal>
        )
    }
}

SearchModal = connect(state=>{
    return state['school-daily/exam-registration'];
},dispatch=>({
    search(data){
        let params = {};
       for(let i in data){
           if(data[i]!==undefined){
               if(i==='date'){
                   params['startDate'] = moment(data[i][0]).format('YYYY-MM-DD');
                   params['endDate'] = moment(data[i][1]).format('YYYY-MM-DD');
               }
               else
                   params[i] = data[i];
           }
       }
        dispatch({type:'EXAM_REGIS_SEARCHPARAMS_CHANGE',...params});
        //获取新数据的第一页
       dispatch(action.loadData(1));
    },
    closeSearchModal(){
        dispatch({type:'EXAM_REGIS_SEARCHMODAL_VISIBLE',visible:false});
    }
}))(SearchModal);

export default SearchModal;
import ExFormItem from 'components/ExFormItem';
import {Button,Form,Icon,Row,Col,Spin,notification} from 'antd';
import {connect} from 'react-redux';
import action from 'actions/school-daily/exam-registration';

const ApplicationForm = Form.create()(props=>{
    const {form} = props;
    const {getFieldDecorator} = form;
    return (
        <Form>
            <ExFormItem
                label="学生"
                type="input"
                name="name"
                getFieldDecorator={getFieldDecorator}
                />
            <ExFormItem
                label="学号"
                type="input"
                name="studentId"
                getFieldDecorator={getFieldDecorator}
                />
            <ExFormItem
                label="校区"
                type="select"
                name="campus"
                getFieldDecorator={getFieldDecorator}
                list={[]}
                />
            <ExFormItem
                label="年级"
                type="input"
                name="grade"
                getFieldDecorator={getFieldDecorator}
                />
            <ExFormItem
                label="班级"
                type="input"
                name="class"
                getFieldDecorator={getFieldDecorator}
                />
            <ExFormItem
                label="专业"
                type="input"
                name="subject"
                getFieldDecorator={getFieldDecorator}
                />
            <ExFormItem
                label="学期"
                type="input"
                name="semester"
                getFieldDecorator={getFieldDecorator}
                />
            <ExFormItem
                label="课程"
                type="input"
                name="course"
                getFieldDecorator={getFieldDecorator}
                />
            <ExFormItem
                label="上缴费用"
                type="Number"
                name="payment"
                getFieldDecorator={getFieldDecorator}
                />
        </Form>
    )
});

const openNotificationWithIcon = (type) => {
    notification[type]({
        message: '提交成功',
        duration:2
    });
};

class ApplicationTable extends React.Component{
    constructor(props){
        super(props);
        this.moduleKey = this.props.activeTab;
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.closeApplicationPage){
            this.props.reloadData();
            this.removeTab(this.moduleKey);
            openNotificationWithIcon('success');
        }
    }

    saveFormRef = (form)=>{
        this.form = form;
    };

    handleSubmit(){
        const form = this.form;
        form.validateFields((err,data)=>{
            if(err)
                return;
            this.props.submitApplication(data);
        })
    }

    removeTab = (targetKey) => {
        let {panes, activeTab, onTabRemove} = this.props;
        const index = panes.findIndex(o => o.key==targetKey);

        const isCurrentTab=activeTab==targetKey;
        if(isCurrentTab) {
            //是否最后一个，是则激活前一个，否则激活后一个
            if (index == panes.length - 1) {
                activeTab = panes[panes.length - 2].key;
            } else {
                activeTab = panes[index + 1].key;
            }
        }
        //删除tab
        panes.splice(index, 1);
        onTabRemove(panes.concat(), activeTab);
    };

    render(){
        const {appliSubmitting} = this.props;
        return (
            <div>
                <Spin spinning={appliSubmitting}>
                    <Row>
                        <Col span={12}>
                            <ApplicationForm ref={this.saveFormRef}/>
                            <div className="footer">
                                <Button type="primary" onClick={this.handleSubmit}><Icon type="check"/>提交</Button>
                                <Button type="default">保存</Button>
                            </div>
                        </Col>
                    </Row>
                </Spin>
            </div>
        )
    }
}

ApplicationTable = connect(state=>{
    const {panes, activeTab} = state.app;
    const {appliSubmitting,closeApplicationPage} = state['school-daily/exam-registration'];
    return {panes, activeTab,appliSubmitting,closeApplicationPage};
},dispatch=>({
    submitApplication(params){
        dispatch(action.submitTestApplication(params));
    },
    onTabRemove(panes, key){
        dispatch({type:'APP_TAB_CHANGE', panes, key});
    },
    reloadData(){
        dispatch(action.loadData());
    }
}))(ApplicationTable);

module.exports = ApplicationTable;

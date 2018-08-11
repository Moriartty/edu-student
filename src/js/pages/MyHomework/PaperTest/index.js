import SubPage from "components/App/SubPage";
import {connect} from 'react-redux';
import ExTable from "components/ExTable";
import TestHeader from "pages/MyHomework/PaperTest/TestHeader";
import {Spin, Row, Col, Tabs, Divider,Form} from 'antd';
import {fixUrl} from 'utils';
import AnswerSingle from './AnswerSingle';
import AnswerMultiple from './AnswerMultiple';
import AnswerJudge from './AnswerJudge';
import AnswerFill from './AnswerFill';
import AnswerSubjective from './AnswerSubjective';
import AnswerOperate from './AnswerOperate';

const PaperForm = Form.create()(props=>{
    const {form,data} = props;
    const {getFieldDecorator} = form;
    return (
        <Form>
            <div className="content">
                {
                    data.categoryList&&(
                        <Tabs type="card" defaultActiveKey="0">
                            {
                                data.categoryList.map((item, index) => (
                                    <Tabs.TabPane tab={item.name} key={index}>
                                        {
                                            item.questionList.map((o, i) => (
                                                <div key={i} className="margin-bottom-xl">
                                                    <h3>{i+1}、{item.type==4?<AnswerFill topic={o.topic}/>:o.topic}</h3>
                                                    <div style={{marginLeft:27}}>
                                                        {
                                                            item.type!=8&&(
                                                                <div className="margin-bottom-xl">
                                                                    {
                                                                        o.topicSrc&&o.topicSrc.map((src, i) => (
                                                                            <a key={i} href={fixUrl(src)} target="_blank">
                                                                                <Img src={src} style={{height:100,marginRight:16}}/>
                                                                            </a>
                                                                        ))
                                                                    }
                                                                </div>
                                                            )
                                                        }
                                                        {item.type==1&&<AnswerSingle type={o.optionType} list={o.choiceList}/>}
                                                        {item.type==2&&<AnswerMultiple type={o.optionType} list={o.choiceList}/>}
                                                        {item.type==3&&<AnswerJudge/>}
                                                        {[5,6,7].include(+item.type)&&<AnswerSubjective/>}
                                                        {item.type==8&&<AnswerOperate srcList={o.topicSrc}/>}
                                                    </div>
                                                    <Divider/>
                                                </div>
                                            ))
                                        }
                                    </Tabs.TabPane>
                                ))
                            }
                        </Tabs>
                    )
                }
            </div>
        </Form>
    )
})

class PaperTest extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        const {visible,data,loading} = this.props;
        console.log(data);
        return (
            <SubPage
                show={visible}
                onClose={this.props.onClose}
                title={data.name}
                header={<TestHeader/>}
                loading={loading}>
                <article className="article">
                    <Row>
                        <Col span={6}>课程名称：{data.course}</Col>
                        <Col span={6}>课程编号：{data.courseNo}</Col>
                        <Col span={6}>作业名称：{data.name}</Col>
                    </Row>
                    <Row>
                        <Col span={6}>题目总数：{data.total}</Col>
                        <Col span={6}>完成度：{data.finish}</Col>
                    </Row>
                    <hr/>
                    <PaperForm data={data}/>
                </article>
            </SubPage>
        )
    }
}
PaperTest = connect(state=>{
    const {testPageVisible:visible,testPageData:data,testPageLoading:loading} = state['school-daily/my-homework'];
    return {visible,data,loading};
},dispatch=>({
    onClose(){
        dispatch({type:'MY_HOMEWORK_TOGGLE_TESTPAGE_VISIBLE',visible:false});
    }
}))(PaperTest);
export default PaperTest;

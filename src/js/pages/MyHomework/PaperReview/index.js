import ExTable from 'components/ExTable';
import {connect} from 'react-redux';
import SubPage from "components/App/SubPage";
import DetailHeader from './DetailHeader';
import {Row,Col,Tabs,Divider} from 'antd';
import AnswerOperate from './AnswerOperate';
import AnswerSingle from './AnswerSingle';
import Result from './Result';
import {fixUrl} from 'utils';
class PaperReview extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        const {data, visible,loading} = this.props;
        return (
            <SubPage
                show={visible}
                onClose={this.props.onClose}
                title={data.name}
                header={<DetailHeader/>}
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
                        <Col span={6}>正确题数：{data.correct}</Col>
                        <Col span={6}>错误题数：{data.wrong}</Col>
                    </Row>
                    <hr/>
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
                                                            <h3>{i+1}、{o.topic}</h3>
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
                                                                {(item.type==1||item.type==2)&&<AnswerSingle type={o.optionType} list={o.choiceList}/>}
                                                                {item.type==8&&<AnswerOperate srcList={o.topicSrc}/>}
                                                                <Result type={item.type} data={o}/>
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
                </article>
            </SubPage>
        )
    }
}

PaperReview = connect(state=>{
    const {reviewPageData:data,reviewPageVisible:visible,reviewPageLoading:loading} = state['school-daily/my-homework'];
    return {data,visible,loading};
},dispatch=>({
    onClose(){
        dispatch({type:'MY_HOMEWORK_TOGGLE_REVIEWPAGE_VISIBLE',visible:false});
    }
}))(PaperReview);

export default PaperReview;

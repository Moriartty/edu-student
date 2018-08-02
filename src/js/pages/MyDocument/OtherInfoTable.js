/**
 * Created by user on 18-8-2.
 */
import {connect} from 'react-redux';
import {Row,Col,Avatar,Button,Icon} from 'antd';
import 'less/my-document.less';
import OtherInfoEditModal from './OtherInfoEditModal';
const titleSpan = 8,contentSpan = 16;
class OtherInfoTable extends React.Component{
    constructor(props){
        super(props);
        this.editOtherInfo = this.editOtherInfo.bind(this);
    }
    editOtherInfo(){
        this.props.openModal();
    }
    render(){
        const {otherInfo:data} = this.props;
        return (
            <div>
                <OtherInfoEditModal/>
                <Row gutter={0}>
                    <Col span={24}>
                        <div className="otherInfo-header">
                            <span className="otherInfo-header-title">其他信息</span>
                            <Button type="primary" onClick={this.editOtherInfo} size="small"><Icon type="edit" />编辑</Button>
                        </div>
                    </Col>
                </Row>
                <Row gutter={0} className="otherInfo-item">
                    <Col className="document-other-item-title" span={titleSpan}>毕业实习单位及主要内容</Col>
                    <Col className="document-other-item-content" span={contentSpan}>{data.internShips}</Col>
                </Row>
                <Row gutter={0}>
                    <Col className="document-other-item-title" span={titleSpan}>毕业论文及毕业设计题目</Col>
                    <Col className="document-other-item-content" span={contentSpan}>{data.graduationThesis}</Col>
                </Row>
                <Row gutter={0}>
                    <Col className="document-other-item-title" span={titleSpan}>在校期间受到过何种奖励或处分</Col>
                    <Col className="document-other-item-content" span={contentSpan}>{data.rewards}</Col>
                </Row>
                <Row gutter={0}>
                    <Col className="document-other-item-title" span={titleSpan}>自我鉴定</Col>
                    <Col className="document-other-item-content" span={contentSpan}>{data.selfEvaluation}</Col>
                </Row>
            </div>
        )
    }
}

OtherInfoTable = connect(state=>{
    const {otherInfo} = state['school-daily/my-document'];
    return {otherInfo};
},dispatch=>({
    openModal(){
        dispatch({type:'MY_DOCUMENT_OTHERINFO_MODAL_VISIBLE',visible:true});
    }
}))(OtherInfoTable);

export default OtherInfoTable;
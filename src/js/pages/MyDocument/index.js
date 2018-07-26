/**
 * Created by user on 18-7-26.
 */
import {connect} from 'react-redux';
import {Row,Col,Spin,Avatar} from 'antd';
import action from 'actions/school-daily/my-document';
import 'less/my-document.less';
import defaultAvatar from 'img/avatar-default.png';

const titleSpan = 4,contentSpan=8;

class MyDocument extends React.Component{
    componentWillMount(){
        this.props.init();
    }
    render(){
        const {loading,baseInfo:data} = this.props;
        return (
            <div>
                <Spin spinning={loading}>
                    <Row className="document-header" gutter={0}>
                        <Col span={4} className="avatar-container">
                            <a className="hd" title="修改头像">
                                <Avatar src={defaultAvatar}/>
                            </a>
                        </Col>
                        <Col span={20}>
                            <Row gutter={0}>
                                <Col className="document-header-item-title" span={titleSpan}>姓名</Col>
                                <Col className="document-header-item-content" span={contentSpan}>{data.name}</Col>
                                <Col className="document-header-item-title" span={titleSpan}>出生日期</Col>
                                <Col className="document-header-item-content" span={contentSpan}>{data.birthDay}</Col>
                            </Row>
                            <Row gutter={0}>
                                <Col className="document-header-item-title" span={titleSpan}>性别</Col>
                                <Col className="document-header-item-content" span={contentSpan}>{data.gender}</Col>
                                <Col className="document-header-item-title" span={titleSpan}>民族</Col>
                                <Col className="document-header-item-content" span={contentSpan}>{data.nation}</Col>
                            </Row>
                            <Row gutter={0}>
                                <Col className="document-header-item-title" span={titleSpan}>证件类型</Col>
                                <Col className="document-header-item-content" span={contentSpan}>{data.certificate}</Col>
                                <Col className="document-header-item-title" span={titleSpan}>证件号</Col>
                                <Col className="document-header-item-content" span={contentSpan}>{data.certificateId}</Col>
                            </Row>
                            <Row gutter={0}>
                                <Col className="document-header-item-title" span={titleSpan}>政治面貌</Col>
                                <Col className="document-header-item-content" span={contentSpan}>{data.politicalStatus}</Col>
                                <Col className="document-header-item-title" span={titleSpan}>学生类别</Col>
                                <Col className="document-header-item-content" span={contentSpan}>{data.studentCategory}</Col>
                            </Row>
                            <Row gutter={0}>
                                <Col className="document-header-item-title" span={titleSpan}>学历层次</Col>
                                <Col className="document-header-item-content" span={contentSpan}>{data.eduLevel}</Col>
                                <Col className="document-header-item-title" span={titleSpan}>专业</Col>
                                <Col className="document-header-item-content" span={contentSpan}>{data.professional}</Col>
                            </Row>
                            <Row gutter={0}>
                                <Col className="document-header-item-title" span={titleSpan}>入学时间</Col>
                                <Col className="document-header-item-content" span={contentSpan}>{data.admissionTime}</Col>
                                <Col className="document-header-item-title" span={titleSpan}>毕业时间</Col>
                                <Col className="document-header-item-content" span={contentSpan}>{data.graduationTime}</Col>
                            </Row>
                            <Row gutter={0}>
                                <Col className="document-header-item-title" span={titleSpan}>电子注册号</Col>
                                <Col className="document-header-item-content" span={contentSpan}>{data.regisNum}</Col>
                                <Col className="document-header-item-title" span={titleSpan}>工作单位</Col>
                                <Col className="document-header-item-content" span={contentSpan}>{data.employer}</Col>
                            </Row>
                            <Row gutter={0}>
                                <Col className="document-header-item-title" span={titleSpan}>工作单位联系电话</Col>
                                <Col className="document-header-item-content" span={contentSpan}>{data.employerPhone}</Col>
                                <Col className="document-header-item-title" span={titleSpan}>电话</Col>
                                <Col className="document-header-item-content" span={contentSpan}>{data.phoneNum}</Col>
                            </Row>
                            <Row gutter={0}>
                                <Col className="document-header-item-title-end" span={titleSpan}>家庭电话</Col>
                                <Col className="document-header-item-content-end" span={contentSpan}>{data.familyTel}</Col>
                                <Col className="document-header-item-title-end" span={titleSpan}>邮箱</Col>
                                <Col className="document-header-item-content-end" span={contentSpan}>{data.email}</Col>
                            </Row>
                        </Col>

                    </Row>
                </Spin>
            </div>
        )
    }
}

MyDocument = connect(state=>{
    const {loading,baseInfo} = state['school-daily/my-document'];
    return {loading,baseInfo};
},dispatch => ({
    init(){
        dispatch(action.loadData());
    }
}))(MyDocument);

module.exports = MyDocument;
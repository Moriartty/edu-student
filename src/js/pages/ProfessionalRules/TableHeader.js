import {Row,Col,Spin} from 'antd';
import {connect} from 'react-redux';
import 'less/professional-rules.less';

class TableHeader extends React.Component{
    render(){
        const {headerData,headerLoading:loading} = this.props;
        console.log('loading',loading);
        return (
            <div>
                <Spin spinning={loading}>
                    <Row gutter={0} className='headerRow'>
                        <Col span={6} className='headerCol headerColTitle'>规则名称</Col>
                        <Col span={18} className='headerCol headerColVal'>{headerData.ruleName}</Col>
                    </Row>
                    <Row gutter={0} className='headerRow'>
                        <Col span={3} className='headerCol headerColTitle'>年级</Col>
                        <Col span={5} className='headerCol headerColVal'>{headerData.grade}</Col>
                        <Col span={3} className='headerCol headerColTitle'>专业名称</Col>
                        <Col span={5} className='headerCol headerColVal'>{headerData.professionalName}</Col>
                        <Col span={3} className='headerCol headerColTitle'>规则号</Col>
                        <Col span={5} className='headerCol headerColVal'>{headerData.ruleNo}</Col>
                    </Row>
                    <Row gutter={0} className='headerRow'>
                        <Col span={4} className='headerCol headerColTitle'>毕业学分</Col>
                        <Col span={8} className='headerCol headerColVal'>{headerData.graduationCredits}</Col>
                        <Col span={4} className='headerCol headerColTitle'>中央电大考试学分</Col>
                        <Col span={8} className='headerCol headerColVal'>{headerData.centralCredits}</Col>
                    </Row>
                </Spin>
            </div>
        )
    }
}

TableHeader = connect(state=>{
    const {headerData,headerLoading} = state['school-daily/professional-rules'];
    return {headerData,headerLoading};
},null)(TableHeader);

export default TableHeader;

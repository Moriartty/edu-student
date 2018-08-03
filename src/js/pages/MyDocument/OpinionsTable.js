/**
 * Created by user on 18-8-2.
 */
import {connect} from 'react-redux';
import ExTable from 'components/ExTable';
import {Row,Col} from 'antd';
import 'less/my-document.less';

const deptList = ["学习中心（教学点）鉴定","分部（省级电大）意见","国开总部意见"];

const OpinionItem = (item,dept) => {
        return (
            <Row gutter={0} className='opinion-item'>
                <Col span={6} className='opinion-header'>{dept}</Col>
                <Col span={18} className='opinion-content'>
                    <Row gutter={0} className='opinion-content-topRow'>
                        <Col span={24} className='opinion-content-topRow-itemC'>{item.opinion}</Col>
                    </Row>
                    <Row gutter={0} className='opinion-content-bottomRow'>
                        <Col span={6} className='opinion-content-bottomRow-itemH'>审核人</Col>
                        <Col span={6} className='opinion-content-bottomRow-itemC'>{item.reviewer}</Col>
                        <Col span={6} className='opinion-content-bottomRow-itemH'>审核时间</Col>
                        <Col span={6} className='opinion-content-bottomRow-itemC'>{item.timeStamp}</Col>
                    </Row>
                </Col>
            </Row>
        )
};

class OpinionsTable extends React.Component{
    constructor(props){
        super(props);

    }
    render(){
        const {opinions} = this.props;
        console.log(opinions);
        return (
            <div>
                <Row gutter={0}>
                    <Col span={24} className='module-title'>鉴定结果</Col>
                </Row>
                {
                    opinions.length?opinions.map((o,i)=>{
                        return OpinionItem(o,deptList[i]);
                    }):''
                }
            </div>
        )
    }
}

OpinionsTable = connect(state=>{
    const {opinions} = state['school-daily/my-document'];
    return {opinions};
},null)(OpinionsTable);

export default OpinionsTable;

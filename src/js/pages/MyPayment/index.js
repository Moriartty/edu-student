import {Menu,Icon,Spin} from 'antd';
import Toolbar from './Toolbar';
import {connect} from 'react-redux';
import action from 'actions/school-daily/my-payment';
import CurrentDataTable from "./CurrentDataTable";
import HistoryDataTable from './HistoryDataTable';
import OthersDataTable from './OthersDataTable';
import 'less/my-payment.less';

class MyPayment extends React.Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    state = {
        current:'current'
    }

    componentWillMount() {
        this.props.init();
    }

    handleClick(e){
        this.setState({
            current: e.key,
        });

    }
    render(){
        const {loading} = this.props;
        return (
            <div>
                <Spin spinning={loading}>
                    <Toolbar/>
                    <Menu
                        onClick={this.handleClick}
                        selectedKeys={[this.state.current]}
                        mode='horizontal'
                    >
                        <Menu.Item key='tips'>
                            <div style={{color:'#cf1322'}}>
                                <Icon type="exclamation-circle-o" />注意事项
                            </div>
                        </Menu.Item>
                        <Menu.Item key='current'>
                            <Icon type='bars'/>本学期缴费通知书
                        </Menu.Item>
                        <Menu.Item key='history'>
                            <Icon type='bars'/>历史缴费通知书
                        </Menu.Item>
                        <Menu.Item key='others'>
                            <Icon type='bars'/>其他缴费
                        </Menu.Item>
                    </Menu>
                    <div className='payment-content'>
                        {
                            this.state.current==='current'?
                                <CurrentDataTable/>: (this.state.current==='history'?
                                <HistoryDataTable/>:(this.state.current==='others'?<OthersDataTable/>:Tips()))
                        }
                    </div>
                    <div className='payment-tips'>

                    </div>
                </Spin>
            </div>
        )
    }
}

function Tips(){
    return (
        <div className='payment-tips-content'>
            <p>注意:</p>
            <ol>
                <li>不支持ATM机转账，不支持手机银行转账缴费</li>
                <li>不成功生成通知书后，请务必逐条阅读通知书上的缴费注意事项，可在线支付，目前支持【建设银行】、【平安银行】、【工商银行】3家在线支付！</li>
                <li>缴费状态信息并不是实时的，如果你确定已缴费，请点击上面的刷新按键！</li>
                <li>请务必在2018/03/25日前完成缴费，否则通知书自动作废，将无法参加期末考试！</li>
                <li>如果有重复缴费异常情况，请不用着急，学校在第9周后统一处理！</li>
            </ol>
        </div>
    )
}

MyPayment = connect(state=>{
    const {loading} = state['school-daily/my-payment'];
    return {loading};
},dispatch=>({
    init(){
        dispatch(action.loadData());
    }
}))(MyPayment);

module.exports = MyPayment;

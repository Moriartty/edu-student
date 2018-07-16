import ExModal from 'components/ExModal';
import {Icon, Button} from 'antd';

class Err50x extends React.PureComponent {
    render(){
        return (
            <ExModal footer={null}
                     visible
                     closable={false}
                     style={{height:'50hv',textAlign:'center',top:0,paddingBottom:0}}
                     width="100%">
                <div style={{height:window.innerHeight-48,paddingTop:100}}>
                    <Icon type="disconnect" style={{fontSize:180}}/>
                    <h1 style={{margin:10}}>O~ooh! 服务器断线了！</h1>
                    <p style={{color:'#999'}}>请稍后再刷新页面</p>
                    <Button type="primary" icon="sync" onClick={()=>{window.location.reload();}}>刷新</Button>
                </div>
            </ExModal>
        )
    }
}

module.exports = Err50x;
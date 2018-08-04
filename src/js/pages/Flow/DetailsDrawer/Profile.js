import {Avatar, Tag} from 'antd';
import config from 'config/workflow';
import imgResolve from 'img/wf_resolve.png';
import imgReject from 'img/wf_reject.png';
import imgCancel from 'img/wf_cancel.png';

const stateObj=config.stateList.reduce((a, b) => {
    a[b.value]=<Tag color={b.color}>{b.text}</Tag>;
    return a;
}, {});

class Profile extends React.PureComponent {
    componentDidMount(){
        //添加盖章效果
        const seal=this.refs.seal;
        if(seal){
            setTimeout(function(){
                seal.className = 'seal';
            }, 400);
        }
    }

    render(){
        const {data} = this.props;
        let statePicture;
        switch (data.state){
            case 2: //同意
                //设置状态图片
                statePicture=<img ref="seal" className="seal hide" src={imgResolve}/>;
                break;
            case 3: //拒绝
                statePicture=<img ref="seal" className="seal hide" src={imgReject}/>;
                break;
            case 4: //撤回
                statePicture=<img ref="seal" className="seal hide" src={imgCancel}/>;
                break;
        }
        return (
            <div className="flow-profile">
                {statePicture}
                <Avatar shape="square" icon="user"/>
                <div className="bd">
                    <h3>{data.apply}</h3>
                    {stateObj[data.state]}
                </div>
            </div>
        )
    }
}

export default Profile;
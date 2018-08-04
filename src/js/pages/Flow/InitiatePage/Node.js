import {Avatar, Icon} from 'antd';

const colors={
    'USER':'#108ee9',
    'ROLE':'#905bdb',
    'SELF':'#f50',
};

class Node extends React.PureComponent {
    render(){
        const {step, data, arrow, onRemove, onEdit} = this.props;
        if(!data.type){
            data.type='USER';
        }
        const name=data.type==='SELF'?'发起人自己':data.name;
        let avatar=null;
        if(step){
            avatar=<Avatar style={{backgroundColor:colors[data.type]}}>{step}</Avatar>;
        }else {
            if (data.type === 'ROLE') {
                avatar = <Avatar icon="team" style={{backgroundColor: colors[data.type]}}/>;
            } else if (data.type === 'SELF') {
                avatar = <Avatar icon="user" style={{backgroundColor: colors[data.type]}}/>;
            } else {
                avatar = <Avatar style={{backgroundColor: colors[data.type]}}>{data.name}</Avatar>;
            }
        }
        return (
            <div className="node">
                <div className="item">
                    {avatar}
                    <span className="margin-left-sm">{data.title}<small className="text-gray padding-left">{name}</small></span>
                    {data.rejectStep>0&&<div className="reject-text">驳回后跳到节点 {data.rejectStep}</div>}
                    {
                        onRemove&&<a onClick={onRemove} className="close"><Icon type="close"/></a>
                    }
                    {
                        onEdit&&<a onClick={onEdit} className="edit"><Icon type="edit"/></a>
                    }
                </div>
                {
                    arrow&&<Icon type="arrow-right"/>
                }
            </div>
        )
    }
}

export default Node
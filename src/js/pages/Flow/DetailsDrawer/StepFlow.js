import {Steps, Icon} from 'antd';
const Step = Steps.Step;

class StepFlow extends React.PureComponent {
    render(){
        const {list, current} = this.props;
        return (
            <Steps direction="vertical" size="small" current={current}>
                {
                    list.map((o, i) => <Step key={i} title={<div>{o.title}<small>（{o.name}）</small></div>}
                                             description={o.createTime?<div>{o.comment}<div className="text-right"><small><Icon type="clock-circle-o"/> {o.createTime}</small></div></div>:o.comment}
                                             status={o.state==1?'finish':(o.state==2?'error':undefined)}/>)
                }
            </Steps>
        )
    }
}

export default StepFlow
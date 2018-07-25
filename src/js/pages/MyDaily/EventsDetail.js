/**
 * Created by user on 18-7-25.
 */
import {Alert,Col,Row} from 'antd';
import 'less/my-daily.less';

class EventsDetail extends React.Component{
    constructor(props){
        super(props);
        this.renderEventList = this.renderEventList.bind(this);
        this.eventDispatch = this.eventDispatch.bind(this);
    }
    renderEventList(list){
        return (
            <ul>
                {
                    list.map(item => (
                        <li key={item.autoId}>
                            <span>{item.content}</span>
                        </li>
                    ))
                }
            </ul>
        )
    }
    eventDispatch(selectedValue){
        let result = {normal:[],warn:[],important:[]};
        selectedValue?selectedValue.forEach(o=>{
            switch(o.type){
                case 'success':result.normal.push(o);break;
                case 'warning':result.warn.push(o);break;
                case 'error':result.important.push(o);break;
            }
        }):null;
        return result;
    }
    render(){
        const {list:selectedValue} = this.props;
        const result = this.eventDispatch(selectedValue);
        return (
            <div className='topEventDetail' >
                <Col span={7} offset={1} className='event-item normal-event-item'>{this.renderEventList(result.normal)}</Col>
                <Col span={7} offset={1} className='event-item warning-event-item'>{this.renderEventList(result.warn)}</Col>
                <Col span={7} offset={1} className='event-item important-event-item'>{this.renderEventList(result.important)}</Col>
            </div>
        )
    }
}

export default EventsDetail;

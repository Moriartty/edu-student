import { Calendar, Badge,Alert } from 'antd';
import {connect} from 'react-redux';
import action from 'actions/school-daily/my-daily'
import moment from 'moment';
import EventDetail from './EventsDetail';
import 'less/my-daily.less';
class MyDaily extends React.Component{
    constructor(props){
        super(props);
        this.dateCellRender = this.dateCellRender.bind(this);
        this.dateSelected = this.dateSelected.bind(this);
    }
    state = {
        selectedDate:moment().date()
    }
    componentWillMount(){
        this.props.init();
    }
    dateCellRender(value){
        if(value.month()+1!==this.props.searchParams.month){
            return '';
        }else{
            //console.log(this.props.list);
            const listData = this.props.list?this.props.list[value.date()-1]:undefined;
            return listData?(
                <ul className="events">
                    {
                        listData.map(item => (
                            <li key={item.content}>
                                <Badge status={item.type} text={item.content} />
                            </li>
                        ))
                    }
                </ul>
            ):'';
        }
    }
    dateSelected(value){
        this.setState({
            selectedDate:value.date()
        })
    }
    render(){
        const {onPanelChange,onSelect} = this.props;
        const {selectedDate} = this.state;
        const selectedValue = this.props.list.length>0?this.props.list[selectedDate-1]:[];
        return (
            <div>
                <EventDetail list={selectedValue}/>
                <Calendar dateCellRender={this.dateCellRender} monthCellRender={monthCellRender}  onPanelChange={onPanelChange} onSelect={this.dateSelected}/>
            </div>
        );
    }
}

function getMonthData(value) {
    if (value.month() === 8) {
        return 1394;
    }
}

function monthCellRender(value) {
    const num = getMonthData(value);
    return num ? (
        <div className="notes-month">
            <section>{num}</section>
            <span>Backlog number</span>
        </div>
    ) : null;
}

MyDaily = connect(state=>{
    return state['school-daily/my-daily'];
},dispatch=>({
    init(){
        dispatch(action.loadData());
    },
    onPanelChange(value,mode){
        dispatch({type:'MY_DAILY_SEARCHPARAMS_CHANGED',year:value.year(),month:value.month()+1,mode:mode});
        dispatch(action.loadData());
    }
}))(MyDaily);

module.exports = MyDaily;

import {connect} from 'react-redux';

class SidebarDate extends React.Component {
    render(){
        const {info} = this.props;

        if(!info.year){
            return null;
        }

        return (
            <div className="sidebar-date">
                {info.year}年{info.month}月{info.day}日<br/>
                {info.term}学期 第{info.week}周
            </div>
        )
    }
}

SidebarDate = connect(state => {
    const {dateInfo:info} = state.app;
    return {info};
})(SidebarDate);

export default SidebarDate
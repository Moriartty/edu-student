/**
 * Created by user on 18-8-23.
 */
import ExTable from 'components/ExTable';
import {connect} from 'react-redux';
import action from 'actions/school-daily/result-inquiry';
import {Divider} from 'antd';

class Table extends React.Component{
    constructor(props){
        super(props);
        const {onClick,onAppeal} = this.props;
        this.columns = [
            {title:'学期',dataIndex:'semester'},
            {title:'专业',dataIndex:'major'},
            {title:'课程',dataIndex:'course'},
            {title:'考试名称',dataIndex:'testName'},
            {title:'是否开卷',dataIndex:'isOpenTest'},
            {title:'考试方式',dataIndex:'testType'},
            {title:'成绩',dataIndex:'score'},
            {title:'作业综合成绩',dataIndex:'zuoyeScore'},
            {title:'操作',render:(data,val)=>{
                return (
                    <div>
                        <a href="javascript:;" className="" onClick={onClick(data)}>申诉</a>
                        <Divider type="vertical"/>
                        <a href="javascript:;" className="" onClick={onAppeal(data)}>查看</a>
                    </div>
                )
            }},
        ];
    }
    render(){
        const {list,loading,page,onChange} = this.props;
        return (
            <ExTable
                loading={loading}
                columns={this.columns}
                dataSource={list}
                border={true}
                pageNo={page.pageNo}
                pageSize={page.pageSize}
                dataCount={page.dataCount}
                onRow={(recode)=>{
                    return {onClick:()=>{this.props.onClick(recode)}}
                }}
                onChange={onChange}
                />
        )
    }
}

Table = connect(state=>{
    const {list,loading,page} = state['school-daily/result-inquiry'];
    return {list,loading,page};
},dispatch=>({
    onClick(data){
        console.log(data);
    },
    onAppeal(data){
        console.log(data);
    },
    onChange(pagination, filters, sorter){
        dispatch(action.loadData(pagination.current, pagination.pageSize));
    }
}))(Table);

export default Table;
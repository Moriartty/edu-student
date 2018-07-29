import ExTable from 'components/ExTable';
import {connect} from 'react-redux';

class CurrentDataTable extends React.Component{
    constructor(props){
        super(props);
        this.columns = [
            {title:'序号',dataIndex:'id'},
            {title:'学期',dataIndex:'semester'},
            {title:'通知书号码',dataIndex:'docId'},
            {title:'单位编码',dataIndex:'unitCode'},
            {title:'缴费状态',dataIndex:'payStatus'},
            {title:'缴费项目',dataIndex:'payItems',render:(val,data)=>{
                return val.map(o=>{
                    return <p key={o.id} className='payItem'>{o.itemName}:{o.itemPay}元</p>;
                });
            }},
            {title:'总金额',dataIndex:'total'},
            {title:'操作',dataIndex:'operator',render:(value)=>{<div><a>打印</a></div>}}
        ];
    }
    render(){
        const {curTableData:list} = this.props;
        return (
            <ExTable
                columns={this.columns}
                dataSource={list}
                size='small'
            />
        )
    }
}

CurrentDataTable = connect(state=>{
    const {curTableData} = state['school-daily/my-payment'];
    return {curTableData};
},null)(CurrentDataTable);

export default CurrentDataTable;

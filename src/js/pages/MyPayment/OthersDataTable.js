import ExTable from 'components/ExTable';
import {connect} from 'react-redux';

class OthersDataTable extends React.Component{
    constructor(props){
        super(props);
        this.columns = [
            {title:'序号',dataIndex:'id'},
            {title:'缴费类型',dataIndex:'payType'},
            {title:'缴费金额',dataIndex:'total'},
            {title:'时间',dataIndex:'timeStamp'},
            {title:'缴费证明',render:(val)=>'查看'},
            {title:'相关申请',render:(val)=>'查看'},
        ];
    }
    render(){
        const {othersTableData:list} = this.props;
        return (
            <ExTable
                columns={this.columns}
                dataSource={list}
                size='small'
            />
        )
    }
}

OthersDataTable = connect(state=>{
    const {othersTableData} = state['school-daily/my-payment'];
    return {othersTableData};
},null)(OthersDataTable);

export default OthersDataTable;

import {connect} from 'react-redux';
import action from 'actions/school-daily/course-plan';
import ExTable from 'components/ExTable';
import {Icon} from 'antd';

class Table extends React.Component{
    constructor(props){
        super(props);

        this.columns = [
            { title: '序号', dataIndex: 'id'},
            { title: '校区', dataIndex: 'campus'},
            { title: '学年', dataIndex: 'schoolYear'},
            { title: '名称', dataIndex: 'courseName'}
        ];
    }
    render(){
        const {loading, list, page, onChange,onClick} = this.props;
        const ids = list.map((o,i)=>{
            return o.id;
        });
        console.log('props',this.props);
        return (
            <div>
                <ExTable
                    pageNo={page.pageNo}
                    pageSize={page.pageSize}
                    dataCount={page.dataCount}
                    loading={loading}
                    columns={this.columns}
                    onChange={onChange}
                    dataSource={list}
                    onRow={(recode,index)=>{
                        console.log(recode);
                        return {onClick}
                    }}
                />
            </div>
        )
    }
}

Table = connect(state => {
    const {loading,list,page} = state['school-daily/course-plan'];
    return {loading,list,page};
},dispatch => ({
    onClick(recode,index){
        console.log('recode',recode);
        console.log('index',index);
    },
    onChange(pagination, filters, sorter){
        dispatch(action.loadList(pagination.current, pagination.pageSize, filters));
    },
}))(Table);

export default Table;

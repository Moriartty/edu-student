import {connect} from 'react-redux';
import action from 'actions/news/notice';
import ExTable from 'components/ExTable';
import {Icon} from 'antd';

class Table extends React.Component{
    constructor(props){
        super(props);

        this.columns = [
            { title: '标题', dataIndex: 'title', render:(value, data) => <a href={`news-viewer.html?cid=1&id=${data.id}`} target="_blank" className={data.highlight==1?'text-danger':''}><Icon type="right-circle"/> {value}</a>},
            { title: '作者', dataIndex: 'author'},
            { title: '时间', dataIndex: 'updateTime', render:(value, data) => value||data.createTime},
        ];

    }
    render(){
        const {loading, list, page, onChange} = this.props;
        return (
            <div>
                <ExTable tableSize='small'
                         pageNo={page.pageNo}
                         pageSize={page.pageSize}
                         dataCount={page.dataCount}
                         loading={loading}
                         columns={this.columns}
                         onChange={onChange}
                         dataSource={list}/>
            </div>
        )
    }
}
Table = connect(state => {
    const {loading, list, page} = state['news/notice'];
    return {loading, list, page};
}, dispatch => ({
    onChange(pagination, filters, sorter){
        dispatch(action.loadList(pagination.current, pagination.pageSize, filters));
    }
}))(Table);

module.exports = Table;

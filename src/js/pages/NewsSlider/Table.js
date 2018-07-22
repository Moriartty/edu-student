/**
 * Created by user on 18-7-19.
 */
import {connect} from 'react-redux';
import ExTable from 'components/ExTable';
import action from 'actions/news/slider';
import {Icon} from 'antd';


class Table extends React.Component{
    constructor(props){
        super(props);

        this.columns = [
            { title: '图片', dataIndex: 'picture', render:(value) => <Img src={value} style={{height:100}}/>},
            { title: '标题', dataIndex: 'title',
                render:(value, data) =>
                    <div>
                        <a href={`news-viewer.html?cid=1&id=${data.newsId}`} target="_blank">
                            <Icon type="right-circle"/> {value}
                        </a>
                        {/*<p>{data.author}</p>*/}
                    </div>
            },
            { title: '作者', dataIndex: 'author'},
            { title: '时间', dataIndex: 'updateTime', render:(value, data) => value||data.createTime},
        ]
    }
    render(){
        const {loading, list, page, onChange} = this.props;
        return (
            <ExTable loading={loading}
                     columns={this.columns}
                     dataSource={list}
                     pageNo={page.pageNo}
                     pageSize={page.pageSize}
                     dataCount={page.dataCount}
                     onChange={onChange}
            />
        )
    }
}

Table = connect(state => {
    const {loading, list, page} = state['news/slider'];
    return {loading, list, page};
}, dispatch => ({
    onChange(pagination, filters, sorter){
        //console.log('pagination',pagination);
        dispatch(action.loadList(pagination.current, pagination.pageSize, filters));
    },
}))(Table);

export default Table;

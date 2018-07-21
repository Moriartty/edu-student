import {connect} from 'react-redux';
import appAction from 'actions/app';
import action from 'actions/home';
import { Card, List, Icon } from 'antd';

class NewsListCard extends React.Component{
    componentWillMount(){
        this.props.onLoad(this.props.category);
    }

    render(){
        const {category, title, news, onLoad, onMoreClick} = this.props;
        const {loading, list} = news[category];
        return (
            <Card title={<span><Icon type="bars"/> {title}</span>}
                  className="home-card"
                  extra={[
                      <a key="b1" onClick={onMoreClick.bind(this, ['notice','school','activity'][category-1])} className="margin-right"><Icon type="ellipsis"/> 更多</a>,
                      <a key="b2" onClick={onLoad.bind(this, category)}><Icon type="sync" spin={loading}/> 刷新</a>
                  ]}>
                <List
                    loading={loading}
                    dataSource={list}
                    size="small"
                    renderItem={o => (
                        <List.Item key={o.id}>
                            <List.Item.Meta title={<a href={`news-viewer.html?cid=${category}&id=${o.id}`} target="_blank" className={o.highlight==1?'text-danger':''} title={o.title}><Icon type="right-circle"/> {o.title}</a>}/>
                            <span>{o.createTime}</span>
                        </List.Item>
                    )}
                >
                </List>
            </Card>
        )
    }
}

NewsListCard = connect(state => {
    const {news} = state.home;
    return {news};
}, dispatch => ({
    onLoad(category){
        dispatch(action.loadNewsList(category));
    },
    onMoreClick(module){
        dispatch(appAction.loadTabPage('news/'+module));
    }
}))(NewsListCard);

export default NewsListCard

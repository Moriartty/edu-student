import {connect} from 'react-redux';
import action from 'actions/flow';
import {Tabs, Spin, List, Avatar} from 'antd';
import InitiatePage from './InitiatePage';

import 'less/flow.less';

class Flow extends React.Component {
    componentWillMount(){
        this.props.init();
    }

    render() {
        const {loading, treeData, onInitiate} = this.props;
        return (
            <div className="flow">
                <InitiatePage/>
                <Spin spinning={!!loading} style={{minHeight:300}}>
                    <Tabs defaultActiveKey="0">
                        {
                            treeData.map((t, i) => (
                                <Tabs.TabPane tab={t.name} key={i}>
                                    <ul className="unstyled">
                                        {
                                            t.list.map((o, j) => (
                                                <li key={j} className="list-item">
                                                    <a onClick={onInitiate.bind(this, o.id)} className="link" title={o.desc}>
                                                        <List.Item.Meta
                                                            avatar={<Avatar size="large" icon="exception"/>}
                                                            title={o.name}
                                                            description={<div className="text-truncate">{o.desc}</div>}
                                                        />
                                                    </a>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </Tabs.TabPane>
                            ))
                        }
                    </Tabs>
                </Spin>
            </div>
        );
    }
}

Flow = connect(state => {
    const {loading, list:treeData} = state.flow;
    return {loading, treeData};
}, dispatch => ({
    init(){
        //加载列表数据
        dispatch(action.loadList());
    },
    /**
     * 发起申请
     * @param id
     */
    onInitiate(id){
        dispatch({type:'FLOW_INITIATE_VISIBLE', show:true});
        dispatch(action.loadTplData(id));
    },
}))(Flow);

module.exports = Flow;
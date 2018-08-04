import {connect} from 'react-redux';
import action from 'actions/flow';
import { message, Row, Col, Button, Form } from 'antd';
import SubPage from 'components/App/SubPage';
import TplComponent from './TplComponent';
import Node from './Node';

class InitiatePage extends React.Component {
    state={
        loading:false,
    };

    save = () => {
        const {form, data, onSubmit} = this.props;
        form.validateFieldsAndScroll((err, formData) => {
            if (err) {
                return;
            }

            const dateFormat = (value, type) => value.format('YYYY-MM-DD'+(type==2?' HH:mm:ss':''));

            data.componentList.forEach(com => {
                const value=formData[com.id]; //所有默认值为''，而非undefined
                switch (com.type){
                    case 'DATE':
                        com.value=value&&dateFormat(value, com.dateType);
                        break;
                    case 'DATE_RANGE':
                        com.value=value&&[dateFormat(value[0], com.dateType), dateFormat(value[1], com.dateType)];
                        break;
                    // case 'DETAIL':
                    //     com.components=[];
                    //     com.groups.forEach(function(coms){
                    //         com.components=com.components.concat(coms);
                    //         com.components.push({type:'BLANK'});
                    //     });
                    //     delete com.groups;
                    //     break;
                    default:
                        com.value=value;
                        break;
                }
            });

            onSubmit.call(this, {
                id:data.id,
                formData:JSON.stringify(data.componentList),
            });
        });
    };

    render() {
        const {show, data, loading, form, onClose} = this.props;
        return (
            <SubPage
                show={show}
                title={data.name}
                loading={loading}
                onClose={onClose}
            >
                {
                    show&&data.id>0&&(
                        <div className="flow-initiate">
                            <Form style={{paddingBottom:70,width:900}}>
                                {
                                    data.componentList.map((com, i) => {
                                        // if(com.type==='DETAIL'){
                                        //     //明细组细额外处理
                                        //     return <TempDetailComponent key={i} data={com} onChange={this.handleDetailChange.bind(this)}/>
                                        // }
                                        return <TplComponent key={i} data={com} form={form}/>
                                    })
                                }
                                <Row style={{marginBottom:24}}>
                                    <Col span={6}>
                                        <div className="node-label">审批人 :</div>
                                    </Col>
                                    <Col span={18}>
                                        {
                                            data.defaultFlowList.map((o, i, list) => <Node key={i} data={o} arrow={i<(list.length-1)}/>)
                                        }
                                    </Col>
                                </Row>
                                {
                                    data.defaultCcList.length>0&&(
                                        <Row style={{marginBottom:24}}>
                                            <Col span={6}>
                                                <div className="node-label">抄送人 :</div>
                                            </Col>
                                            <Col span={18}>
                                                {
                                                    data.defaultCcList.map((o, i) => <Node key={i} data={o}/>)
                                                }
                                            </Col>
                                        </Row>
                                    )
                                }
                                <Row>
                                    <Col span={18} offset={6}>
                                        <Button type="primary" onClick={this.save} icon="save" loading={this.state.loading}>提交</Button>
                                    </Col>
                                </Row>
                            </Form>
                        </div>
                    )
                }
            </SubPage>
        );
    }
}

InitiatePage = Form.create()(InitiatePage);

InitiatePage = connect(state => {
    const {initiateShow:show, tplData:data, tplDataLoading:loading} = state['flow'];
    return {show, data, loading};
}, dispatch => ({
    /**
     * 模板数据变化
     * @param data
     */
    onChange(data){
        dispatch({type:'FLOW_TPL_DATA_CHANGE', data});
    },
    /**
     * 提交保存
     * @param data
     */
    onSubmit(data){
        this.setState({loading:true});
        dispatch(action.initiate(data)).then(() => {
            message.success('发起成功！');
            this.props.onClose();
            this.setState({loading:false});
        }).catch(() => {
            this.setState({loading:false});
        });
    },
    /**
     * 关闭
     */
    onClose(){
        dispatch({type:'FLOW_INITIATE_VISIBLE'});
    }
}))(InitiatePage);

export default InitiatePage
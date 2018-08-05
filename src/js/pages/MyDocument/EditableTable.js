import { Table, Input, InputNumber, Popconfirm, Form,Button ,Divider,notification} from 'antd';
import {connect} from 'react-redux';
import 'less/my-document.less';
import action from 'actions/school-daily/my-document';

const FormItem = Form.Item;
const EditableContext = React.createContext();

const EditableRow = ({ form, index, ...props }) => (
    <EditableContext.Provider value={form}>
        <tr {...props} />
    </EditableContext.Provider>
);

const EditableFormRow = Form.create()(EditableRow);

class EditableCell extends React.Component {
    getInput = () => {
        if (this.props.inputType === 'number') {
            return <InputNumber />;
        }
        return <Input />;
    };

    render() {
        const {
            editing,
            dataIndex,
            title,
            inputType,
            record,
            index,
            ...restProps
        } = this.props;

        return (
            <EditableContext.Consumer>
                {(form) => {
                    const { getFieldDecorator } = form;
                    return (
                        <td >
                            {editing ? (
                                <FormItem style={{ margin: 0 }}>
                                    {getFieldDecorator(dataIndex, {
                                        rules: [{
                                            required: true,
                                            message: `Please Input ${title}!`,
                                        }],
                                        initialValue: record[dataIndex],
                                    })(this.getInput())}
                                </FormItem>
                            ) : restProps.children}
                        </td>
                    );
                }}
            </EditableContext.Consumer>
        );
    }
}

class EditableTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = { list:[], editingKey: '' };
        this.handleAdd = this.handleAdd.bind(this);
        this.delete = this.delete.bind(this);
        this.columns = [
            {
                title: '自何年何月起至何年何月止',
                dataIndex: 'when',
                width: '42%',
                editable: true
            },
            {
                title: '在何地、何校学习',
                dataIndex: 'where',
                width: '42%',
                editable: true
            },
            {
                title: 'operation',
                dataIndex: 'operation',
                render: (text, record) => {
                    const editable = this.isEditing(record);
                    return (
                        <div>
                            {editable ? (
                                <span>
                                      <EditableContext.Consumer>
                                            {form => (
                                                <a
                                                    href="javascript:;"
                                                    onClick={() => this.save(form, record.key)}
                                                    style={{ marginRight: 8 }}
                                                >
                                                    保存
                                                </a>
                                            )}
                                      </EditableContext.Consumer>
                                      <Popconfirm
                                          title="确定取消?"
                                          onConfirm={() => this.cancel(record.key)}
                                      >
                                        <a>取消</a>
                                      </Popconfirm>
                                </span>
                            ) : (
                                <div>
                                    <a onClick={() => this.edit(record.key)} className="item-edit">Edit</a>
                                    <Divider type="vertical"/>
                                    <Popconfirm
                                        title="确认删除"
                                        onConfirm={()=>this.delete(record.key)}
                                    >
                                        <a className="item-delete">删除</a>
                                    </Popconfirm>
                                </div>

                            )}
                        </div>
                    );
                },
            },
        ];
    }

    componentWillReceiveProps(nextProps){
        this.setState({list:nextProps.eduExperience});
    }

    isEditing = (record) => {
        return record.key === this.state.editingKey;
    };

    edit(key) {
        this.setState({ editingKey: key });
    }
    /**
     * 删除一项学习经历
     * */
    delete(key) {
        if(key===99999){
            var newData = this.state.list.filter(item=>{
                return item.key!==99999;
            });
            this.setState({list:newData});
        }else
            this.props.deleteExperience(key);
    }


    save(form, key) {
        form.validateFields((error, row) => {
            if (error) {
                return;
            }
            this.props.editExperience(key,row);
        });
    }

    handleAdd(){
        const { list } = this.state;
        //只允许存在一个待编辑内容,99999z作为待编辑未保存内容的rowKey
        if(list.findIndex(item=>item.key===99999)>-1)
            this.props.showNotification({show:true,type:'error',msg:'警告',desc:"有内容待编辑，请完成编辑保存后再继续添加！"});
        else{
            const newData = {
                key: 99999,
            };
            this.setState({
                list: [...list, newData],
                editingKey:99999
            });
        }
    }

    cancel = () => {
        this.setState({ editingKey: '' });
    };

    render() {
        const components = {
            body: {
                row: EditableFormRow,
                cell: EditableCell,
            },
        };

        const columns = this.columns.map((col) => {
            if (!col.editable) {
                return col;
            }
            return {
                ...col,
                onCell: record => ({
                    record,
                    inputType:'text',
                    dataIndex: col.dataIndex,
                    title: col.title,
                    editing: this.isEditing(record),
                }),
            };
        });

        return (
            <div>
                <Table
                    components={components}
                    bordered
                    dataSource={this.state.list}
                    columns={columns}
                    rowClassName="editable-row"
                    pagination={false}
                    title={()=>{return (
                        <div>
                            主要学习经历
                            <Button icon="plus" type='primary' className="table-header-button" onClick={this.handleAdd} size='small'>添加</Button>
                        </div>
                    )}}
                    size="small"
                />
            </div>
        );
    }
}


EditableTable = connect(state=>{
    const {eduExperience} = state['school-daily/my-document'];
    return {eduExperience};
},dispatch=>({
    editExperience(key,params){
        dispatch(action.editExperience(key,params));
    },
    deleteExperience(key){
        dispatch(action.deleteExperience(key));
    },
    showNotification(obj){
        dispatch({type:"APP_SHOW_NOTIFICATION",obj});
    }
}))(EditableTable);

export default EditableTable;

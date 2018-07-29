import { Table, Input, InputNumber, Popconfirm, Form,Button ,Divider} from 'antd';
import {connect} from 'react-redux';
import ExperienceForm from './ExperienceForm';
import 'less/my-document.less';

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
                        <td {...restProps}>
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
        this.state = {  editingKey: '' ,visible:false};
        this.showModal = this.showModal.bind(this);
        this.columns = [
            {
                title: '自何年何月起至何年何月止',
                dataIndex: 'when',
                width: '42%',
                editable: true,
            },
            {
                title: '在何地、何校学习',
                dataIndex: 'where',
                width: '42%',
                editable: true,
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
                                                    Save
                                                </a>
                                            )}
                                      </EditableContext.Consumer>
                                      <Popconfirm
                                          title="确定取消?"
                                          onConfirm={() => this.cancel(record.key)}
                                      >
                                        <a>Cancel</a>
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
                                        <a className="item-delete">Delete</a>
                                    </Popconfirm>
                                </div>

                            )}
                        </div>
                    );
                },
            },
        ];
    }

    showModal(){
        this.setState({visible:true});
    }

    handleModalOk = (e) => {
        this.setState({
            visible: false,
        });
    }

    handleModalCancel = (e) => {
        console.log(e);
        this.setState({
            visible: false,
        });
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
        console.log(key);
    }


    save(form, key) {
        form.validateFields((error, row) => {
            if (error) {
                return;
            }
            const newData = [...this.state.data];
            const index = newData.findIndex(item => key === item.key);
            if (index > -1) {
                const item = newData[index];
                newData.splice(index, 1, {
                    ...item,
                    ...row,
                });
                this.setState({ data: newData, editingKey: '' });
            } else {
                newData.push(row);
                this.setState({ data: newData, editingKey: '' });
            }
        });
    }

    cancel = () => {
        this.setState({ editingKey: '' });
    };

    render() {
        const {eduExperience} =this.props;
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
                <ExperienceForm visible={this.state.visible} handleModalOk={this.handleModalOk} handleModalCancel={this.handleModalCancel}/>
                <Table
                    components={components}
                    bordered
                    dataSource={eduExperience}
                    columns={columns}
                    rowClassName="editable-row"
                    pagination={false}
                    title={()=>{return (
                        <div>
                            主要学习经历
                            <Button icon="plus" type='primary' className="table-header-button" onClick={this.showModal}>添加</Button>
                        </div>
                    )}}
                />
            </div>
        );
    }
}


EditableTable = connect(state=>{
    const {eduExperience,experienceEditModalVisible} = state['school-daily/my-document'];
    return {eduExperience,experienceEditModalVisible};
},null)(EditableTable);

export default EditableTable;

import ExFormItem from 'components/ExFormItem';
import api from 'config/api';
import {Upload, Button} from 'antd';

class TplComponent extends React.PureComponent {
    render() {
        const {data:com, form}=this.props;
        const required=com.required;
        const getFieldDecorator=form.getFieldDecorator;
        switch (com.type){
            case 'SINGLE':
                return (
                    <ExFormItem label={com.label}
                                name={String(com.id)}
                                placeholder={com.placeholder}
                                required={required}
                                getFieldDecorator={getFieldDecorator}/>
                );
            case 'MULTIPLE':
                return (
                    <ExFormItem label={com.label}
                                type="textarea"
                                name={String(com.id)}
                                placeholder={com.placeholder}
                                required={required}
                                getFieldDecorator={getFieldDecorator}/>
                );
            case 'NUMBER':
                return (
                    <ExFormItem label={com.label}
                                type="number"
                                name={String(com.id)}
                                placeholder={com.placeholder}
                                addonAfter={com.unit}
                                required={required}
                                getFieldDecorator={getFieldDecorator}/>
                );
            case 'MONEY':
                return (
                    <ExFormItem label={com.label}
                                type="number"
                                name={String(com.id)}
                                placeholder={com.placeholder}
                                min={0}
                                required={required}
                                getFieldDecorator={getFieldDecorator}/>
                );
            case 'RADIO':
                return (
                    <ExFormItem label={com.label}
                                type="select"
                                name={String(com.id)}
                                list={com.list.map(o => ({id:o.name,name:o.name}))}
                                required={required}
                                getFieldDecorator={getFieldDecorator}/>
                );
            case 'CHECKBOX':
                return (
                    <ExFormItem label={com.label}
                                type="select"
                                mode="multiple"
                                name={String(com.id)}
                                list={com.list.map(o => ({id:o.name,name:o.name}))}
                                required={required}
                                getFieldDecorator={getFieldDecorator}/>
                );
            case 'DATE':
                return (
                    <ExFormItem label={com.label}
                                type="date"
                                name={String(com.id)}
                                placeholder="请选择"
                                showTime={com.dateType==2}
                                required={required}
                                getFieldDecorator={getFieldDecorator}/>
                );
            case 'DATE_RANGE':
                return (
                    <ExFormItem label="时间范围"
                                type="date-range"
                                name={String(com.id)}
                                placeholder={[com.beginLabel, com.endLabel]}
                                showTime={com.dateType==2}
                                required={required}
                                getFieldDecorator={getFieldDecorator}/>
                );
            case 'COMMENT':
                return com.display?(
                    <ExFormItem label=" " colon={false} type="custom">
                        {
                            com.url?(
                                <a href={com.url} target="_blank">{com.comment}</a>
                            ):com.comment
                        }
                    </ExFormItem>
                ):null;
            case 'PICTURE':
                return (
                    <ExFormItem label={com.label} type="custom">
                        {getFieldDecorator(String(com.id), {
                            valuePropName: 'fileList',
                            getValueFromEvent: e => e&&e.fileList,
                        })(
                            <Upload name="file" action="/flow/upload" listType="picture">
                                <Button icon="picture">添加图片</Button>
                            </Upload>
                        )}
                    </ExFormItem>
                );
            case 'ATTACHMENT':
                return (
                    <ExFormItem label={com.label} type="custom">
                        {getFieldDecorator(String(com.id), {
                            valuePropName: 'fileList',
                            getValueFromEvent: e => e&&e.fileList,
                        })(
                            <Upload name="file" action="/flow/upload">
                                <Button icon="paper-clip">添加附件</Button>
                            </Upload>
                        )}
                    </ExFormItem>
                );
        }
        return null;
    }
}

export default TplComponent;
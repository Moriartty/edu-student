import { Form, Input, Select, Radio, Switch, DatePicker, Icon } from 'antd';
const FormItem = Form.Item;
const RadioGroup = Radio.Group;
import RegionSelector from 'components/RegionSelector';
import moment from 'moment';

const formItemLayout = {
    labelCol: {span:8},
    wrapperCol: {span:16}
};

class InputFile extends React.PureComponent {
    change = e => {
        const {multiple, onChange}=this.props;
        onChange(multiple?Array.prototype.slice.call(e.target.files):e.target.files[0]);
    };

    render(){
        const {value, text, accept, multiple}=this.props;
        return (
            <label className="ant-btn" style={{paddingTop:4, paddingBottom:5, height:'auto', textAlign:'left'}}>
                <div>
                    {
                        value?(multiple?value.map((file, i) => <div key={i}><Icon type="paper-clip"/> {file.name}</div>):<div><Icon type="paper-clip"/> {value.name}</div>)
                            :<div><Icon type="paper-clip"/> {text||'选择文件'}{multiple?'（可多选）':''}</div>
                    }
                    <input type="file" accept={accept} multiple={multiple} onChange={this.change} style={{display:'none'}}/>
                </div>
            </label>
        )
    }
}

export default function ExFormItem(props){
    let {getFieldDecorator, type, label, help, name, style, initialValue, required, placeholder, extraRules, list, onChange} = props;
    let component;
    let rules=[{ required, message:`${label}必填！` }];
    if(extraRules){
        rules=rules.concat(extraRules);
    }
    let valuePropName='value';
    let trigger='onChange';
    switch (type){
        case 'select':
            component=(
                <Select placeholder={placeholder||'请选择'}
                        mode={props.mode}
                        showSearch={props.showSearch}
                        onChange={onChange}
                        allowClear={!props.noClear}
                        optionFilterProp="children">
                    {
                        list.map((o, i) => {
                            return <Select.Option disabled={o.disabled} key={i} value={o.id} title={o.name}>{props.renderName?props.renderName(o):o.name}</Select.Option>;
                        })
                    }
                </Select>
            );
            break;
        case 'radio':
            const RadioOption=props.button?Radio.Button:Radio;
            component=(
                <RadioGroup onChange={onChange}>
                    {
                        list.map((o, i) => {
                            return <RadioOption key={i} value={o.id}>{o.name}</RadioOption>;
                        })
                    }
                </RadioGroup>
            );
            break;
        case 'textarea':
            component=<Input.TextArea type={type} placeholder={placeholder}/>;
            break;
        case 'switch':
            const {onText, offText}=props;
            component=<Switch checkedChildren={onText} unCheckedChildren={offText}/>;
            valuePropName='checked';
            break;
        case 'date':
            if(initialValue){
                initialValue=moment(initialValue, 'YYYY-MM-DD');
            }
            component=<DatePicker showTime={props.showTime} format={props.showTime?'YYYY-MM-DD HH:mm:ss':'YYYY-MM-DD'} disabledDate={props.disabledDate}/>;
            break;
        case 'date-range':
            let format='YYYY-MM-DD';
            let mode='date';
            if(props.mode=='month'){
                trigger='onPanelChange';
                format='YYYY-MM';
                mode='month';
            }
            //如果传字符串则需要格式化
            if(initialValue&&initialValue[0]&&typeof initialValue[0] === 'string'){
                initialValue=initialValue.map(strValue => moment(strValue, format));
            }
            component=<DatePicker.RangePicker mode={[mode, mode]} format={format}/>;
            break;
        case 'hidden':
            return getFieldDecorator(name, {
                initialValue
            })(
                <Input type="hidden"/>
            );
        case 'static':
            //不作处理，跳过
            break;
        case 'region':
            component=<RegionSelector level={props.level}/>;
            if(required){
                rules.push({
                    type:'array',
                    min:props.min||3,
                    message:'区域须填完整！'
                });
            }
            break;
        case 'file':
            component=<InputFile text={props.text} accept={props.accept} multiple={props.multiple}/>;
            break;
        case 'custom':
            return <FormItem {...formItemLayout} label={label} style={style}>{props.children}</FormItem>;
        default:
            component=<Input type={type}
                             placeholder={placeholder}
                             min={props.min}
                             max={props.max}
                             step={props.step}
                             onChange={onChange}
                             onWheel={e => {e.preventDefault();}}
                             addonAfter={props.addonAfter}/>;
            break;
    }
    return (
        <FormItem {...formItemLayout} label={label} help={help} style={style}>
            {
                type=='static'?<span>{initialValue}</span>:getFieldDecorator(name, {
                    initialValue,
                    trigger,
                    valuePropName,
                    rules
                })(component)
            }
        </FormItem>
    )
}
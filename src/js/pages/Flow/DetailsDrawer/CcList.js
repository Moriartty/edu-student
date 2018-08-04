import {Icon, Tag} from 'antd';

class CcList extends React.PureComponent {
    render(){
        const {list} = this.props;
        return (
            <div>
                <h3>抄送人<small className="text-gray">(审批人全部同意后,将抄送给以下人员)</small></h3>
                <div>
                    {
                        list.map((o, i) => <Tag key={i} style={{marginBottom:8}}><Icon type="user"/> {o.name}</Tag>)
                    }
                </div>
            </div>
        )
    }
}

export default CcList;
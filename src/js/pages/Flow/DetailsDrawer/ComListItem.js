import Nl2br from 'components/Nl2br';
import {Icon} from 'antd';

class ComListItem extends React.PureComponent {
    render(){
        const com=this.props.data;
        let label=com.label;
        let value=com.value||'';

        switch (com.type){
            case 'COMMENT': //说明文字不显示
                if(com.display){
                    if(typeof com.url === 'string') {
                        //{"comment":"来自test2的文档上传\n上传目录：toffytest/aaa/\n请您审核","url":"","display":true,"type":"COMMENT"}
                        return (
                            <div>
                                {com.url?<a href={com.url}><i className="am-icon-link"/> <Nl2br content={com.comment}/></a>:<Nl2br>{com.comment}</Nl2br>}
                            </div>
                        )
                    }else{
                        //否则假定是一个对象来特殊处理
                        //其他模板的链接
                        // return <a href="javascript:;" onClick={this.props.onLinkTrigger.bind(this, com.url)} title={com.url.title}><i className="am-icon-link"/> {com.comment}</a>
                    }
                }
                return null;
            case 'CHECKBOX':
                value=value&&value.join('，');
                break;
            case 'DATE_RANGE':
                label='时间范围';
                value=value&&(value[0]+'~'+value[1]);
                break;
            case 'PICTURE':
                value=value&&value.map(function(file, j){
                    return (
                        <a key={j} href={file.url} target="_blank">
                            <Img src={file.url} title={file.name}/>
                        </a>
                    )
                });
                break;
            case 'ATTACHMENT':
                return (
                    <div className="margin-bottom">
                        <label style={{fontWeight:'bold'}}>{label}:</label>
                        <ul className="unstyled" style={{marginBottom:0,paddingLeft:40}}>
                            {
                                value&&value.map(function(file, j){
                                    return (
                                        <li key={j}>
                                            <a href={file.url} target="_blank">
                                                <Icon type="file-text"/> {file.name}
                                            </a>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                );
        }
        return (
            <div className="margin-bottom"><label style={{fontWeight:'bold'}}>{label}:</label> <span>{value} {com.unit}</span></div>
        )
    }
}

export default ComListItem;
require('./ueditor.config');
require('./ueditor.all');
import config from 'config/api';

let editor;

class ExEditor extends React.PureComponent {
    componentWillMount(){
        if(this.props.initValue){
            this.setContent(this.props.initValue);
        }
    }

    componentDidMount(){
        editor=UE.getEditor('editor', {
            imageFieldName:'file',
            imageUrl:config.baseMallUrl+'/upload/uploadimg/dydz/user',
            imageUrlPrefix:config.ftpBaseUrl+'/shop',
            imageResponseFormat:function (json) {
                const name=json.result.slice(json.result.lastIndexOf('/')+1);
                return {
                    name,
                    original:name,
                    size:'10000',
                    state:"SUCCESS",
                    type:name.slice(name.lastIndexOf('.')),
                    url:'/'+json.result
                }
            }
        });
    }

    componentWillUnmount(){
        editor.destroy();
        var dom = document.getElementById('editor');
        if (dom) {
            dom.parentNode.removeChild(dom);
        }
    }

    /**
     * 获取内容
     * @returns {*}
     */
    getContent(){
        return editor.getContent();
    }

    /**
     * 设置内容
     * @param content
     */
    setContent(content){
        //当即时setContent时有可能editor.body还没设到值，因此轮循判断
        var handler=setInterval(function(){
            if(editor.body){
                clearInterval(handler);
                editor.setContent(content);
            }
        }, 200);
    }

    render(){
        return (
            <div>
                <script id="editor" type="text/plain" style={{height:400}}></script>
            </div>
        )
    }
}

export default ExEditor
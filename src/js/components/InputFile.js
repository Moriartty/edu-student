import {Icon} from 'antd';
import {getFileUrl, fixUrl} from "utils";

class InputFile extends React.PureComponent {
    state = {};
    fileList=[];

    componentWillMount(){
        if(this.props.initialUrl) {
            this.setState({fileUrl: this.props.initialUrl});
        }
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.initialUrl!==this.props.initialUrl&&(typeof nextProps.initialUrl==='string'||Array.isArray(nextProps.initialUrl))){
            this.setState({fileUrl:nextProps.initialUrl});
        }
    }

    change = (e) => {
        const {multiple, onChange} = this.props;
        const newFiles=Array.prototype.slice.call(e.target.files);
        if(multiple){
            this.fileList=this.fileList.concat(newFiles); //其他地方change用
            onChange({
                urlList:this.state.fileUrl||[],
                fileList:this.fileList
            });
            Promise.all(this.fileList.map(file => getFileUrl(file))).then(localFile => {
                this.setState({localFile});
            });
        }else{
            onChange(newFiles[0]);
            getFileUrl(newFiles[0]).then(url => {
                this.setState({fileUrl:url});
            });
        }
    };

    /**
     * （多选）移除
     * @param index
     * @param type  1为URL类型，2为File类型
     */
    remove = (index, type) => {
        const urlList=this.state.fileUrl.concat();
        const fileList=this.fileList.concat();
        if(type==2){
            const localFile=this.state.localFile.concat();
            localFile.splice(index, 1);
            fileList.splice(index, 1); //文件列表同步删除
            this.setState({localFile});
        }else{
            urlList.splice(index, 1);
            this.setState({fileUrl:urlList});
        }
        this.props.onChange({
            urlList,
            fileList
        });
    };

    render() {
        const {accept, multiple} = this.props;
        const src=this.state.fileUrl;
        return multiple?(
            <div className="clearfix">
                {
                    src&&src.length>0&&src.map((url, i) => (
                        <div key={i} className="input-file">
                            <label className="inner">
                                <a href={fixUrl(url)} target="_blank"><Icon type="file-text" style={{fontSize:40}}/></a>
                            </label>
                            <a className="close" onClick={this.remove.bind(this, i, 1)}><Icon type="close"/></a>
                        </div>
                    ))
                }
                {
                    this.state.localFile&&this.state.localFile.map((url, i) => (
                        <div key={i} className="input-file">
                            <label className="inner">
                                <a href={fixUrl(url)} target="_blank"><Icon type="file-text" style={{fontSize:40,color:'#57c322'}}/></a>
                            </label>
                            <a className="close" onClick={this.remove.bind(this, i, 2)}><Icon type="close"/></a>
                        </div>
                    ))
                }
                <div className="input-file">
                    <label className="inner">
                        <input type="file" multiple accept={accept} onChange={this.change} style={{display:'none'}}/>
                        <div key="btn">
                            <Icon type="plus" />
                            <div className="ant-upload-text">上传</div>
                        </div>
                    </label>
                </div>
            </div>
        ):(
            <div className="clearfix">
                {
                    src&&(
                        <div className="input-file">
                            <label className="inner">
                                <a href={fixUrl(src)} target="_blank"><Icon type="file-text" style={{fontSize:40}}/></a>
                            </label>
                            <a className="close" onClick={()=>{this.setState({fileUrl:''});this.props.onChange('')}}><Icon type="close"/></a>
                        </div>
                    )
                }
                <div className="input-file">
                    <label className="inner">
                        <input type="file" multiple accept={accept} onChange={this.change} style={{display:'none'}}/>
                        {
                            src?(
                                <div key="btn">
                                    <Icon type="edit" />
                                    <div className="ant-upload-text">修改</div>
                                </div>
                            ):(
                                <div key="btn">
                                    <Icon type="plus" />
                                    <div className="ant-upload-text">上传</div>
                                </div>
                            )
                        }
                    </label>
                </div>
            </div>
        );
    }
}

class InputFile1 extends React.PureComponent {
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

export default InputFile
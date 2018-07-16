import { Upload, Icon } from 'antd';
import config from 'config/api';
require('../mock')('/common/upload-img');

class UploadPicture extends React.PureComponent {
    state = {
        imageUrl: '',
    };

    // componentWillMount(){
    //     this.setState({imageUrl:this.props.value});
    // }

    handleChange = (info) => {
        const file=info.file;
        if(file.status=='done'&&file.response.code==0){
            const imageUrl=file.response?file.response.data:file.relativeUrl;
            this.setState({imageUrl});
            this.props.onChange(imageUrl);
        }
    };

    render() {
        const {value, style} = this.props;
        const uploadButton = (
            <div>
                <Icon type="plus" />
                <div className="ant-upload-text">上传</div>
            </div>
        );
        return (
            <div className="clearfix">
                <Upload
                    action={config.baseUrl+'/common/upload-img'}
                    listType="picture-card"
                    showUploadList={false}
                    onChange={this.handleChange}
                >
                    {(this.state.imageUrl||value)?<Img style={style||{width:300}} src={value}/> : uploadButton}
                </Upload>
            </div>
        );
    }
}

export default UploadPicture
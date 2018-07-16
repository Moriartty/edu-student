import { Button, Upload, message } from 'antd';

class UploadButton extends React.PureComponent {
    state = {
        uploading:false
    };

    handleUpload = (info) => {
        this.setState({uploading:info.file.status=='uploading'});

        if (info.file.status === 'done') {
            message.success(`${info.file.name} 上传成功！`);
            this.props.onSuccess();
        } else if (info.file.status === 'error') {
            message.error(`${info.file.name} 上传失败！`);
        }
    };
    
    render(){
        const {action, name, children} = this.props;
        return (
            <Upload action={action} name={name} onChange={this.handleUpload} showUploadList={false}>
                <Button icon="upload" loading={this.state.uploading}>{children}</Button>
            </Upload>
        )
    }
}

export default UploadButton
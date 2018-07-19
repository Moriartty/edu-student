import {connect} from 'react-redux';
import appAction from 'actions/app';
import action from 'actions/profile';
import { message, Button, Icon } from 'antd';
import Cropper from 'cropperjs';

class Avatar extends React.Component {
    state={
        enable:false,
        loading:false
    };

    componentWillUnmount(){
        if(this.cropper){
            this.cropper.destroy();
            this.cropper=null;
        }
    }

    change = (e) => {
        const files = e.target.files;
        const image=this.refs.image;
        const done = (url) => {
            e.target.value = '';
            if(this.cropper){
                this.cropper.replace(url);
            }else {
                image.src = url;
                this.cropper = new Cropper(image, {
                    aspectRatio: 1,
                    viewMode: 2,
                    toggleDragModeOnDblclick:false,
                    dragMode: 'move',
                    preview: '.preview'
                });
            }
        };

        if (files && files.length > 0) {
            this.setState({enable:true});
            const file = files[0];
            if (URL) {
                done(URL.createObjectURL(file));
            } else if (FileReader) {
                const reader = new FileReader();
                reader.onload = function (e) {
                    done(reader.result);
                };
                reader.readAsDataURL(file);
            }
        }
    };

    save = () => {
        if(this.cropper){
            const canvas = this.cropper.getCroppedCanvas({
                height:100,
                width:100
            });
            canvas.toBlob(blob => {
                // const data=this.cropper.getData();
                // console.log(data, blob);
                this.props.onSave.call(this, {img:blob});
            });
        }
    };

    render() {
        return (
            <div className="text-center">
                <div>
                    <div style={{position:'relative',display:'inline-block',width:800,height:450,background:'#ccc'}}>
                        <img ref="image"/>
                        <div style={{position:'absolute',right:-110,top:0}}>
                            <div className="preview" style={{width:100,height:100,overflow:'hidden',background:'#ccc'}}/>
                            <div className="preview margin-top" style={{width:80,height:80,overflow:'hidden',background:'#ccc',borderRadius:4}}/>
                            <div className="preview margin-top" style={{width:60,height:60,overflow:'hidden',background:'#ccc',borderRadius:'50%'}}/>
                            <div className="preview margin-top" style={{width:32,height:32,overflow:'hidden',background:'#ccc',borderRadius:'50%'}}/>
                        </div>
                    </div>
                </div>
                <div className="margin-top">
                    <label className="ant-btn margin-right" style={{paddingTop:4}}>
                        <Icon type="picture"/> 选择图片
                        <input type="file" onChange={this.change} accept="image/*" style={{display:'none'}}/>
                    </label>
                    <Button type="primary" icon="save" onClick={this.save} loading={this.state.loading} disabled={!this.state.enable}>保存</Button>
                </div>
            </div>
        );
    }
}


Avatar = connect(null, dispatch => ({
    /**
     * 提交保存
     * @param data
     */
    onSave(data){
        this.setState({loading:true});
        dispatch(action.updateAvatar(data)).then(() => {
            message.success('保存成功!');
            this.setState({loading:false});
            this.cropper.destroy();
            this.refs.image.src='';
            dispatch(appAction.loadUserInfo());
        }).catch(() => {
            this.setState({loading:false});
        });
    },
}))(Avatar);

module.exports = Avatar;
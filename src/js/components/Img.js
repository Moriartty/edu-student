/**
 * 具有延迟加载图片的<img>标签
 * 动机是当<img>和CSS的url这两种方式同时加载图片时，url方式会等所有<img>都加载完时才会接着加载
 * 这会造成体验不佳，因此此组件用于解决此类问题，即让<img>延迟（异步）加载
 */
import api from 'config/api';
import px from 'img/1px.gif';

class Img extends React.Component {
    constructor(props){
        super(props);

        this.hasLoaded=false;
    }

    componentDidMount(){
        //延时加载
        if(this.props.defer) {
            setTimeout(() => {
                this.refs.img.src = Img.getImgSrc(this.props.src);
                this.hasLoaded=true;
            }, 500);
        }
    }

    static getImgSrc(src){
        if(src) {
            if(src.indexOf('http')!==0){
                //头部补上“/”
                if (src[0] != '/') {
                    src = '/' + src;
                }
                src=api.ftpBaseUrl+src;
            }
        }else{
            src=px;
        }
        return src;
    }

    handleError(e){
        //加载失败也要显示为默认图片，避免x图
        e.target.src=this.props.defaultImg||px;
    }

    render(){
        const {defer, className, style} = this.props;
        let src;
        if(!defer||this.hasLoaded) {
            src = Img.getImgSrc(this.props.src);
        }

        return (
            <img ref="img" src={src} onError={this.handleError.bind(this)} className={className} style={style}/>
        )
    }
}

module.exports = Img;
import {Tooltip} from 'antd';

import 'less/components/imageHover';

function ImageHover(props) {
    //需要指定高宽，否则在首次加载时因还没获取图片高宽而导致tooltip定位不准
    const {src, width, height, children} = props;
    return (
        <Tooltip overlayClassName="imageHover" placement="left" title={<img src={src} style={{width, height}}/>}>
            {children}
        </Tooltip>
    )
}

export default ImageHover;
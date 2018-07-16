import goTop from 'tf-utils/dom/goTop';
import {Icon} from 'antd';

class Copyright extends React.PureComponent {
    render() {
        return (
            <div className="copyright">
                <span>版权所有 © 2018 All Rights Reserved {APP_NAME}</span>
                <a href="javascript:;"
                   onClick={()=>{goTop(document.querySelector('.ant-tabs-tabpane-active.page-pane'))}}
                   title="返回顶部"
                   className="btn goTop">
                    <Icon type="up"/>
                </a>
            </div>
        )
    }
}

export default Copyright
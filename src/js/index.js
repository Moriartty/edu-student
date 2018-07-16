const ReactDOM=require('react-dom');
import {Provider} from 'react-redux';

import { LocaleProvider} from 'antd';
// 由于 antd 组件的默认文案是英文，所以需要修改为中文
import zhCN from 'antd/lib/locale-provider/zh_CN';

import store from 'appStore';
import App from 'components/App';
import MasterPage from 'components/App/MasterPage';

//加载全局样式
import 'less/app.less';

import 'utils/polyfill';
//SVG字体
import 'utils/iconfont';

/**
 * @param {String}  msg    错误信息
 * @param {String}  url    出错文件
 * @param {Number}  row    行号
 * @param {Number}  col    列号
 * @param {Object}  error  错误详细信息
 */
//window.onerror = function (msg, url, row, col, error) {
//    console.error('onerror 错误信息 ↙');
//    console.log({
//        msg,  url,  row, col, error
//    });
//};

ReactDOM.render(
    <LocaleProvider locale={zhCN}>
        <Provider store={store}>
            <App>
                <MasterPage/>
            </App>
        </Provider>
    </LocaleProvider>
    ,
    document.getElementById('container')
);
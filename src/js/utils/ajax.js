const ReactDOM=require('react-dom');
import config from 'config/api';
import $ajax from 'tf-utils/lib/ajax';
import {message} from 'antd';
const Err50x=(cb)=>{require.ensure([], require=>{cb(require('pages/Error/50x'));});};

function ajax(method, url, data={}, isRaw, isFormData){
    //虚拟接口服务
    require('../mock')(url, data);
    data = '';
    method = 'GET';

    //空字符串字段不传出去
    for(let key in data){
        if(data[key]===''){
            delete data[key];
        }
    }

    return new Promise((resolve, reject) => {
        $ajax({
            type: method,
            url: config.baseUrl+url,
            data: data,
            dataType:'json',
            processData: !isFormData,
            contentType: isFormData?false:undefined
        }).done(json => {
            if(isRaw){
                resolve(json);
            }else if(json.code==0) {
                resolve(json.data);
            }else {
                //key不匹配
                message.error(json.msg);
                if(json.code==1003){
                    location.href='login.html';
                }
                reject(json);
            }
        }).fail(function(status, statusText){
            reject(status, statusText);

            if(~[502,503,504].indexOf(status)){
                Err50x(component => {
                    ReactDOM.render(React.createElement(component), document.getElementById('container'));
                });
            }else {
                message.error('【'+status+'】'+statusText);
            }
        });
    });
}

function raw(method, url, data){
    return ajax(method, url, data, true);
}

function get(url, data){
    return ajax('GET', url, data);
}

function post(url, data){
    return data instanceof FormData?ajax('POST', url, data, false, true):ajax('POST', url, data);
}

function formData(url, data){
    let fd;
    if(typeof data==='string'){
        fd=new FormData(document.getElementById(data));
    }else if(data instanceof FormData){
        fd=data;
    }else{
        fd=new FormData();
        for(let key in data){
            if(data[key]!==undefined) {
                fd.append(key, data[key]);
            }
        }
    }
    return ajax('POST', url, fd, false, true);
}

export default {
    raw,
    get,
    post,
    formData
}
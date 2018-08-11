/**
 * 主要用于reducer里面
 * 对于react，reducer必须返回一个新的state，react才会重新渲染
 * 原来情况：即使改变一个state里的属性，也要调用objectAssign进行深复制，对于那些没有改变过的属性没必要复制
 * 改进情况：只为改变的属性创造一个新的对象，然后把那些没改变的属性直接“挂载”到新对象中，属于有选择地浅复制
 */
export function objectAppend(obj0, obj){
    for(var k in obj){
        if(!obj0.hasOwnProperty(k)){
            obj0[k]=obj[k];
        }
    }
    return obj0;
}
/**
 * 统一处理（后端）返回的文件路径，如相对路径、全路径等
 * @param url
 * @returns {*}
 */
export function fixUrl(url) {
    if(url) {
        if(url.indexOf('http')!==0&&url.indexOf('blob:')!==0&&url.indexOf('data:')!==0){
            //头部补上“/”
            if (url[0] != '/') {
                url = '/' + url;
            }
            url=api.ftpBaseUrl+url;
        }
    }
    return url
}

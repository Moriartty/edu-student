/**
 * 原生对象的扩展方法
 */

/**
 * Promise（webpack构建后的代码竟然用了Promise，所以在此做兼容）
 */
if(!window.Promise){
    window.Promise=require('tf-utils/class/Promise').default;
}

/**
 * 兼容数组find方法
 */
if (typeof Array.prototype.find !== 'function') {
    Array.prototype.find = function (callback) {
        let item;
        for (let i = 0; i < this.length; ++i) {
            if(callback(this[i], i, this)){
                item=this[i];
                break;
            }
        }
        return item;
    };
}
/**
 * 兼容数组findIndex方法
 */
if (typeof Array.prototype.findIndex !== 'function') {
    Array.prototype.findIndex = function (callback) {
        let index=-1;
        for (let i = 0; i < this.length; ++i) {
            if(callback(this[i], i, this)){
                index=i;
                break;
            }
        }
        return index;
    };
}
//注意原生数组的标准是没有此方法，注意与Array.includes的区别
Array.prototype.include = function () {
    if(arguments.length==1){
        return this.indexOf(arguments[0])>=0;
    }else{
        for(let i=0;i<arguments.length;i++){
            if(~this.indexOf(arguments[i])){
                return true;
            }
        }
        return false;
    }
};
Array.prototype.joinItem=function(separatorItem){
    if(this.length>1) {
        if(typeof separatorItem === 'function'){
            for (let i = this.length - 1; i > 0; i--) {
                this.splice(i, 0, separatorItem(i)); //有时需要利用索引
            }
        }else {
            for (let i = this.length - 1; i > 0; i--) {
                this.splice(i, 0, separatorItem);
            }
        }
    }
    return this;
};

/**
 * 日期格式化
 * @param pattern
 * @returns {*}
 */
Date.prototype.format=function(pattern){
    var fix=function(t) {
        if (t < 10)
            t = '0' + t;
        return t;
    };
    var x=this;
    var y = x.getFullYear(),
        M = fix(x.getMonth() + 1),
        d = fix(x.getDate()),
        H = fix(x.getHours()),
        m = fix(x.getMinutes()),
        s = fix(x.getSeconds());
    return pattern.replace('yyyy', y).replace('MM', M).replace('dd', d).replace('HH', H).replace('mm', m).replace('ss', s);
};

/**
 * 数字千分位格式化
 * @returns {*}
 */
Number.prototype.formatThousands=function(){
    return String(this).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};
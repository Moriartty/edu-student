export default (function(){
    var config = {};

    if(process.env.NODE_ENV === 'production'){
        config.ftpBaseUrl='http://'+location.host+'/nuoj-static';
        config.baseUrl='http://'+location.host+'/nuoj-admin';
        config.baseMallUrl='http://'+location.host+'/nuoj-shop';
    }else{
        config.ftpBaseUrl='http://nj.zxy-soft.cn/nuoj-static';
        config.baseUrl='http://'+location.host+'/api';
        config.baseMallUrl='http://'+location.host+'/mallapi';
    }

    return config;
})();
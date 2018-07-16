module.exports = [
    {
        desc:'登录',
        type:'POST',
        url:'/login',
        params:{
            username:'账号',
            password:'密码',
            auto:'是否自动登录，１是，０否（默认）'
        },
        result:{
            'code':'0',
            'data':{}  //此接口只做鉴权使用，数据由其他接口获取
        }
    },
    {
        desc:'退出登录',
        type:'POST',
        url:'/logout',
        params:'从cookie里面获取',
        result:{
            'code':'0',
            'data':{}
        }
    }
];
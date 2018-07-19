import news from './news';
//这里的name是默认名称
export default {
    ...news,
    home:{
        name:'首页',
        icon:'home',
        page:(cb)=>{require.ensure([], require=>{cb(require('pages/Home'));});}
    },
     profile:{
         name:'我的信息',
         icon:'user',
         page:(cb)=>{require.ensure([], require=>{cb(require('pages/Profile'));});}
     },
     avatar:{
         name:'修改头像',
         icon:'smile-o',
         page:(cb)=>{require.ensure([], require=>{cb(require('pages/Avatar'));});}
     },
     password:{
         name:'修改密码',
         icon:'key',
         page:(cb)=>{require.ensure([], require=>{cb(require('pages/Password'));});}
     },
    // role:{
    //     name:'角色管理',
    //     icon:'team',
    //     operations:[
    //         {key:'CREATE', name:'添加'},
    //         {key:'UPDATE', name:'修改'},
    //         {key:'DELETE', name:'删除'}
    //     ],
    //     page:(cb)=>{require.ensure([], require=>{cb(require('pages/Role'));});}
    // },
    // menu:{
    //     name:'菜单管理',
    //     icon:'bars',
    //     operations:[
    //         {key:'CREATE', name:'添加'},
    //         {key:'UPDATE', name:'修改'},
    //         {key:'DELETE', name:'删除'}
    //     ],
    //     page:(cb)=>{require.ensure([], require=>{cb(require('pages/Menu'));});}
    // },
    // log:{
    //     name:'系统日志',
    //     icon:'profile',
    //     page:(cb)=>{require.ensure([], require=>{cb(require('pages/Log'));});}
    // },
    // feedback:{
    //     name:'用户反馈',
    //     icon:'mail',
    //     page:(cb)=>{require.ensure([], require=>{cb(require('pages/Feedback'));});}
    // },
}
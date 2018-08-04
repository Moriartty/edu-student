import news from './news';
import flow from './flow';
import schoolDaily from './school-daily';
//这里的name是默认名称
export default {
    ...news,
    ...flow,
    ...schoolDaily,
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
}

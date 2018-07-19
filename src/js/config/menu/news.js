export default {
    "announcement":{
        name:'新闻资讯',
        icon:'bars',
        operations:[],
        page:(cb)=>{require.ensure([], require=>{cb(require('pages/Announcement'));});}
    },
    "news":{
        name:'通知公告',
        icon:'bars',
        operations:[],
        page:(cb)=>{require.ensure([], require=>{cb(require('pages/News'));});}
    }
}

export default {
    "announcement":{
        name:'新闻资讯',
        icon:'picture',
        operations:[],
        page:(cb)=>{require.ensure([], require=>{cb(require('pages/Announcement'));});}
    },
    "news":{
        name:'通知公告',
        icon:'bar',
        operations:[],
        page:(cb)=>{require.ensure([], require=>{cb(require('pages/News'));});}
    }
}

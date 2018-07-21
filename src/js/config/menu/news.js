export default {
    "news/notice":{
        name:'通知公告',
        icon:'bars',
        operations:[],
        page:(cb)=>{require.ensure([], require=>{cb(require('pages/NewsNotice'));});}
    },
    "news/slider":{
        name:'滚动新闻',
        icon:'bars',
        operations:[],
        page:(cb)=>{require.ensure([], require=>{cb(require('pages/NewsSlider'));});}
    },
    "news/school":{
        name:'学校新闻',
        icon:'bars',
        operations:[],
        page:(cb)=>{require.ensure([], require=>{cb(require('pages/NewsSchool'));});}
    },
    "news/activity":{
        name:'学校文化活动',
        icon:'bars',
        operations:[],
        page:(cb)=>{require.ensure([], require=>{cb(require('pages/NewsActivity'));});}
    }
}

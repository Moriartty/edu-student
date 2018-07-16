module.exports = [
    {
        desc:'获取滚动图片新闻列表',
        type:'GET',
        url:'/slider-news',
        params:{},
        result:{
            'code':'0',
            'data|0-10':[
                {
                    id:'@increment', //关联ID
                    picture:'/shop/dydz/user/201806/1528341171995.jpg',
                    newsId:1, //新闻ID
                    title:'@ctitle(10,30)', //标题
                    author:'@cname', //作者
                    updateTime:'@datetime', //最后更新时间
                    createTime:'@datetime', //创建时间
                }
            ]
        }
    },
    {
        desc:'创建',
        type:'POST',
        url:'/slider-news/create',
        params:{
            newsId:'新闻ID',
            picture:'图片',
        },
        result:{
            'code':'0',
            'data':{}
        }
    },
    {
        desc:'删除',
        type:'POST',
        url:'/slider-news/delete',
        params:{
            id:'ID'
        },
        result:{
            'code':'0',
            'data':{}
        }
    },
];
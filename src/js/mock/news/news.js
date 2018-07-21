module.exports = [
    {
        desc:'获取新闻列表',
        type:'GET',
        url:'/news',
        params:{
            categoryId:'分类ID，1为公告通知，2为学校新闻，3为校园文化活动',
            title:'标题，模糊查询',
            pageNo:'页码',
            'pageSize':'每页显示的条数（不传默认10条）'
        },
        result:{
            'code':'0',
            'data':{
                'pageNo':1,
                'pageSize':10,
                'result|10':[
                    {
                        id:'@increment',
                        title:'@ctitle(10,30)', //标题
                        highlight:'@pick(0,1)', //是否高亮
                        author:'@cname', //作者
                        updateTime:'@datetime', //最后更新时间
                        createTime:'@datetime', //创建时间
                    }
                ],
                'totalCount':30,
                'totalPages':3
            }
        }
    },
    {
        desc:'获取新闻信息',
        type:'GET',
        url:'/news/info',
        params:{
            id:'ID'
        },
        result:{
            'code':'0',
            'data':{
                title:'@ctitle(10,30)', //标题
                author:'@cname', //作者
                'readCount|1-999':1, //阅读次数
                content:'@cparagraph(10, 30)<br/><br/>@cparagraph(10, 30)<br/><br/>@cparagraph(10, 30)<br/><br/>@cparagraph(10, 30)', //文章内容
                scopeIds:[1,2,3], //查阅范围ID
                updateTime:'@datetime', //最后更新时间
                createTime:'@datetime', //创建时间
            }
        }
    },
    {
        desc:'创建',
        type:'POST',
        url:'/news/create',
        params:{
            categoryId:'分类ID，1为公告通知，2为学校新闻，3为校园文化活动',
            title:'标题',
            author:'作者，不传为匿名',
            scopeIds:'查阅范围ID，用逗号隔开；不传为所有人可见',
            highlight:'是否高亮，1是，0否',
            content:'文章内容',
        },
        result:{
            'code':'0',
            'data':{}
        }
    },
    {
        desc:'更新',
        type:'POST',
        url:'/news/update',
        params:{
            id:'ID',
            categoryId:'分类ID，1为公告通知，2为学校新闻，3为校园文化活动',
            title:'标题',
            author:'作者，不传为匿名',
            scopeIds:'查阅范围ID，用逗号隔开；不传为所有人可见',
            highlight:'是否高亮，1是，0否',
            content:'文章内容',
        },
        result:{
            'code':'0',
            'data':{}
        }
    },
    {
        desc:'删除',
        type:'POST',
        url:'/news/delete',
        params:{
            id:'ID'
        },
        result:{
            'code':'0',
            'data':{}
        }
    },
];

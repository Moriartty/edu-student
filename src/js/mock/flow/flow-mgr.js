module.exports = [
    {
        desc:'获取流程管理列表',
        type:'GET',
        url:'/flow-mgr',
        params:{},
        result:{
            'code':'0',
            'data|3-10':[
                {
                    id:'@increment',
                    name:'@ctitle(10,30)', //流程名称
                    desc:'@csentence(6, 10)', //描述
                    system:'@pick(0,1)', //是否系统内置流程
                    enable:'@pick(0,1)', //是否启用，0：停用， 1：启用
                    updateTime:'@datetime', //最后更新时间
                    createTime:'@datetime', //创建时间
                }
            ]
        }
    },
    {
        desc:'获取新闻信息',
        type:'GET',
        url:'/flow-mgr/info',
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
        url:'/flow-mgr/create',
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
        url:'/flow-mgr/update',
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
        url:'/flow-mgr/delete',
        params:{
            id:'ID'
        },
        result:{
            'code':'0',
            'data':{}
        }
    },
];
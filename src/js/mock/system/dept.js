module.exports = [
    {
        desc:'获取系部列表',
        type:'GET',
        url:'/dept',
        params:{
            name:'名称，模糊查询',
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
                        'id':'@increment',
                        name:'@ctitle()镇', //系部名称
                        'picList|1-3':[{ //责任教师列表
                            id:'@increment',
                            name:'@cname', //名称
                        }],
                        enable:'@pick(0,1)', //是否启用，0：停用， 1：启用
                        createTime:'@datetime'
                    }
                ],
                'totalCount':30,
                'totalPages':3
            }
        }
    },
    {
        desc:'获取字典列表',
        type:'GET',
        url:'/dept/list',
        params:'无',
        result:{
            'code':'0',
            'data|10':[
                {id:'@increment', name:'@ctitle()系'}
            ]
        }
    },
    {
        desc:'创建',
        type:'POST',
        url:'/dept/create',
        params:{
            name:'系部名称',
            picIds:'责任教师ID，用逗号分隔',
            enable:'是否启用，0：停用， 1：启用',
        },
        result:{
            'code':'0',
            'data':{}
        }
    },
    {
        desc:'更新',
        type:'POST',
        url:'/dept/update',
        params:{
            id:'ID',
            name:'系部名称',
            picIds:'责任教师ID，用逗号分隔',
            enable:'是否启用，0：停用， 1：启用',
        },
        result:{
            'code':'0',
            'data':{}
        }
    },
];
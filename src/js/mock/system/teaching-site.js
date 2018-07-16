module.exports = [
    {
        desc:'获取教学点列表',
        type:'GET',
        url:'/teaching-site',
        params:'无',
        result:{
            'code':'0',
            'data':[{
                id:'@increment',
                name:'省校',
                no:'@cword("123456789",6)', //教学点代码
                parentId:0, //上级ID
                authorize:'@pick(1,0)', //是否授权
                'deptList|0-10':[{ //系部列表
                    id:'@increment',
                    name:'@cname', //名称
                }],
                enable:'@pick(0,1)', //是否启用，0：停用， 1：启用
                createTime:'@datetime',
                'children|0-6':[{
                    id:'@increment',
                    name:'@ctitle()分校', //教学点名称
                    no:'@cword("123456789",6)', //教学点代码
                    parentId:'@id', //上级ID
                    authorize:'@pick(1,0)', //是否授权
                    'deptList|0-10':[{ //系部列表
                        id:'@increment',
                        name:'@cname', //名称
                    }],
                    enable:'@pick(0,1)', //是否启用，0：停用， 1：启用
                    createTime:'@datetime',
                }],
            }]
        }
    },
    {
        desc:'获取字典列表',
        type:'GET',
        url:'/teaching-site/list',
        params:'无',
        result:{
            'code':'0',
            'data|10':[
                {id:'@increment', name:'@ctitle()分校'}
            ]
        }
    },
    {
        desc:'添加',
        type:'POST',
        url:'/teaching-site/create',
        params:{
            parentId:'上级ID',
            name:'教学点名称',
            authorize:'是否授权',
            deptIds:'系部ID，用逗号分隔',
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
        url:'/teaching-site/update',
        params:{
            id:'ID',
            parentId:'上级ID',
            name:'教学点名称',
            authorize:'是否授权',
            deptIds:'系部ID，用逗号分隔',
            enable:'是否启用，0：停用， 1：启用',
        },
        result:{
            'code':'0',
            'data':{}
        }
    },
];
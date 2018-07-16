module.exports = [
    {
        desc:'获取教师列表',
        type:'GET',
        url:'/teacher',
        params:{
            pageNo:'页码',
            'pageSize':'每页显示的条数（不传默认10条）',
            name:'姓名的关键字查询',
            no:'职工编号',
            siteId:'教学点ID',
            state:'状态，1为在职，0为离职',
            roleId:'角色ID'
        },
        result:{
            'code':'0',
            'data':{
                'pageNo':1,
                'pageSize':10,
                'result|10':[
                    {
                        'id':'@increment',
                        'name':'@cname',
                        'sex':'@pick(1,2)', //性别，1男，2女
                        no:'@cword("0123456789",8)', //职工编号
                        'phone':'138@cword("0123456789", 8)',
                        site:'@ctitle()分校', //教学点
                        siteId:3, //教学点ID
                        entryDate:'@date', //入职时间，年月日
                        state:'@pick(1,0)', //状态，1为在职，0为离职
                        'roleList|1-3':[{ //角色列表
                            id:'@increment',
                            name:'@pick(讲师,校长,教授,主任,副主任)',
                        }],
                        'majorList|0-3':[{ //负责的专业列表
                            id:'@increment',
                            no:'@cword("0123456789",6)', //编号
                            name:'@ctitle()专业'
                        }],
                        'courseList|0-3':[{ //负责的课程列表
                            id:'@increment',
                            no:'@cword("0123456789",6)', //编号
                            name:'@ctitle()课'
                        }],
                    }
                ],
                'totalCount':30,
                'totalPages':3
            }
        }
    },
    {
        desc:'获取教师字典列表',
        type:'GET',
        url:'/teacher/list',
        params:'无',
        result:{
            'code':'0',
            'data|10':[
                {id:'@increment', name:'@cname'}
            ]
        }
    },
    {
        desc:'添加教师',
        type:'POST',
        url:'/teacher/create',
        params:{
            name:'姓名',
            sex:'性别',
            phone:'联系电话',
            siteId:'教学点ID',
            entryDate:'入职时间',
            state:'状态',
            roleIds:'角色ID，多个以逗号分隔',
            majorIds:'专业ID，多个用逗号分隔',
            courseIds:'课程ID，多个用逗号分隔',
        },
        result:{
            'code':'0',
            'data':{}
        }
    },
    {
        desc:'更新教师',
        type:'POST',
        url:'/teacher/update',
        params:{
            id:'教师ID',
            name:'姓名',
            sex:'性别',
            phone:'联系电话',
            siteId:'教学点ID',
            entryDate:'入职时间',
            state:'状态',
            roleIds:'角色ID，多个以逗号分隔',
            majorIds:'专业ID，多个用逗号分隔',
            courseIds:'课程ID，多个用逗号分隔',
        },
        result:{
            'code':'0',
            'data':{}
        }
    },
    {
        desc:'下载导入人员模板',
        type:'GET',
        url:'/teacher/download',
        params:{},
        result:'下载文件'
    },
    {
        desc:'导入人员信息',
        type:'POST',
        url:'/teacher/import',
        params:{
            file:'文件'
        },
        result:{
            'code':'0',
            'data':{}
        }
    },
];
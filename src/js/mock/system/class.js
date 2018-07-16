module.exports = [
    {
        desc:'获取班级列表',
        type:'GET',
        url:'/class',
        params:{
            name:'名称，模糊查询',
            siteId:'教学点ID',
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
                        'name':'@pick(电信,金融,信科,计算机)@cword("0123456789",4)',
                        teacher:'@cname', //班主任
                        term:'20@pick(17,18)@pick(春,秋)季', //学年
                        site:'@ctitle()分校', //教学点
                        siteId:3, //教学点ID
                        major:'@ctitle()专业', //所属专业
                        majorId:2, //专业ID
                        ruleNo:'1809@cword("0123456789",9)', //专业规则号
                        ruleId:2, //专业规则ID
                        flag:'@pick(0,1)', //1手动添加的，0中央电大同步的
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
        url:'/class/list',
        params:'无',
        result:{
            'code':'0',
            'data|10':[
                {id:'@increment', name:'@pick(电信,金融,信科,计算机)@cword("0123456789",4)'}
            ]
        }
    },
    {
        desc:'创建',
        type:'POST',
        url:'/class/create',
        params:{
            siteId:'教学点ID',
            name:'班级名称',
            teacher:'班主任',
            majorId:'专业ID',
            ruleId:'专业规则ID',
        },
        result:{
            'code':'0',
            'data':{}
        }
    },
    {
        desc:'更新',
        type:'POST',
        url:'/class/update',
        params:{
            id:'ID',
            siteId:'教学点ID',
            name:'班级名称',
            teacher:'班主任',
            majorId:'专业ID',
            ruleId:'专业规则ID',
        },
        result:{
            'code':'0',
            'data':{}
        }
    },
];
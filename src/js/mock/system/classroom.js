module.exports = [
    {
        desc:'获取教室列表',
        type:'GET',
        url:'/classroom',
        params:{
            categoryId:'分类ID，1为教学点，2为外借',
            siteId:'教学点ID',
            name:'教室名称，模糊查询',
            typeId:'教室类型ID',
            exam:'可否为考场',
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
                        categoryId:'@pick(1,2)', //分类ID，1为教学点，2为外借
                        site:'@ctitle()分校', //教学点
                        siteId:3, //教学点ID
                        name:'@pick(A,B,C)座@cword("0123456789",3)', //教室名称
                        type:'@pick(多媒体教室,会议室,普通教室)', //教室类型
                        typeId:1, //教室类型ID
                        remark:'@csentence', //备注
                        'capacity|10-100':1, //可容纳人数
                        address:'@province@city@county@cword(2, 4)路@integer(1,30)号', //地址
                        exam:'@pick(0,1)', //可否为考场
                    }
                ],
                'totalCount':30,
                'totalPages':3
            }
        }
    },
    {
        desc:'创建',
        type:'POST',
        url:'/classroom/create',
        params:{
            categoryId:'分类ID，1为教学点，2为外借',
            siteId:'教学点ID',
            name:'教室名称',
            typeId:'教室类型ID',
            remark:'备注',
            capacity:'可容纳人数',
            address:'地址',
            exam:'可否为考场',
        },
        result:{
            'code':'0',
            'data':{}
        }
    },
    {
        desc:'更新',
        type:'POST',
        url:'/classroom/update',
        params:{
            id:'ID',
            categoryId:'分类ID，1为教学点，2为外借',
            siteId:'教学点ID',
            name:'教室名称',
            typeId:'教室类型ID',
            remark:'备注',
            capacity:'可容纳人数',
            address:'地址',
            exam:'可否为考场',
        },
        result:{
            'code':'0',
            'data':{}
        }
    },
    {
        desc:'删除',
        type:'POST',
        url:'/classroom/delete',
        params:{
            id:'ID'
        },
        result:{
            'code':'0',
            'data':{}
        }
    },
];
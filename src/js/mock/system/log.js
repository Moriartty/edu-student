module.exports = [
    {
        desc:'获取系统日志列表',
        type:'GET',
        url:'/log',
        params:{
            pageNo:'页码',
            pageSize:'每页显示的条数（不传默认10条）',
            user:'操作用户',
            content:'操作内容（模糊搜索）'
        },
        result:{
            'code':'0',
            'data':{
                'pageNo':1,
                'pageSize':10,
                'result|10':[
                    {
                        'id':'@increment',
                        'name':'@cname', //操作用户
                        'operation':'@csentence(6, 10)', //操作内容
                        role:'@pick(管理员,教师,校长,学生)',
                        create:'@datetime("yyyy-MM-dd HH:mm:ss")'
                    }
                ],
                'totalCount':30,
                'totalPages':3
            }
        }
    }
];
module.exports = [
    {
        desc:'获取课程计划',
        type:'GET',
        url:'/coursePlan',
        params:{
            // categoryId:'分类ID，1为公告通知，2为学校新闻，3为校园文化活动',
            // title:'标题，模糊查询',
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
                        campus:'@ctitle(4,6)',//校区
                        schoolYear:'@ctitle(5)',//学年
                        courseName:'@ctitle(10,13)',//课程名
                        // highlight:'@pick(0,1)', //是否高亮
                        // author:'@cname', //作者
                        // updateTime:'@datetime', //最后更新时间
                        // createTime:'@datetime', //创建时间
                    }
                ],
                'totalCount':30,
                'totalPages':3
            }
        }
    },
]

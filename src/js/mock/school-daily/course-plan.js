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
    {
        desc:'获取课程计划详情',
        type:'GET',
        url:'/coursePlan/courseDetail',
        params:{
            autoId:'学期Id'
        },
        result:{
            'code':'0',
            'data|5-10':[
                {
                    id:'@increment',
                    grade:'@ctitle(4,6)',//年级
                    semester:'@ctitle(5)',//学期
                    subject:'@ctitle(5,17)',//专业
                    level:'@ctitle(5,6)',//层次
                    courseName:'@ctitle(3,5)',//课程
                    courseNo:'@increment',//课程编号
                    courseNature:'@ctitle(2)',//课程性质
                    credit:'@increment',//学分
                    period:'@increment',//学时
                    isAdjustSemester:'否',//是否调整学期
                    comment:'16.6%',//说明
                    teacher:{
                        name:'@cname',
                        phone:'13888888888',
                    },//任课教师
                    peopleNum:'@increment'
                }
            ]
        }
    },
]

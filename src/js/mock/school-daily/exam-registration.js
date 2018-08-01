/**
 * Created by user on 18-7-30.
 */
module.exports = [
    {
        desc:'获取考试报名信息',
        type:'GET',
        url:'/examRegistration',
        params:{
            pageNo:'页码',
            'pageSize':'每页显示的条数（不传默认10条）',

        },
        result:{
            'code':'0',
            data:{
                'pageNo':1,
                'pageSize':10,
                'totalCount':30,
                'totalPages':3,
                'list|10':[
                    {
                        'id':'@increment',//序号
                        'semester':'@ctitle(4)',//学期
                        'subject':'@ctitle(5)',//专业
                        'course':'@ctitle(5)',//课程
                        'testPaper':{
                            name:'@ctitle(5)',
                            no:'@increment'//试卷号
                        },//试卷
                        'isOpenTest':'是',//是否开卷
                        'testType':'机考',//考试方式
                        'duration':{
                            start:'2018-01-01 00:00:00',
                            end:'2018-01-01 02:00:00'
                        },//考试时间
                        'examFee':'@increment',//考试费用
                        'highestScore':'@increment',//历史最高成绩
                        'regisStatus':'@integer(0,2)',//报名状态,
                        //0:不可报名
                        //1:可报名
                        //2:已报名
                        'restNum':'@increment',//剩余可报人数
                    }
                ]
            }
        }
    },
    {
        desc:'获取学期列表',
        type:'GET',
        url:'/examRegistration/getSemester',
        params:{

        },
        result: {
            'code': '0',
            'data|5':[
                {
                    id:'@increment',
                    name:'@ctitle'
                }
            ]
        }
    },
    {
        desc:'获取专业列表',
        type:'GET',
        url:'/examRegistration/getSubject',
        params:{

        },
        result: {
            'code': '0',
            'data|5':[
                {
                    id:'@increment',
                    name:'@ctitle'
                }
            ]
        }
    },
    {
        desc:'获取课程列表',
        type:'GET',
        url:'/examRegistration/getCourse',
        params:{

        },
        result: {
            'code': '0',
            'data|5':[
                {
                    id:'@increment',
                    name:'@ctitle'
                }
            ]
        }
    },
    {
        desc:'提交考试申请',
        type:'POST',
        url:'/examRegistration/uploadApplication',
        params:{
            name:"学生姓名",
            studentId:'学号',
            campus:'校区',
            grade:"年级",
            class:"班级",
            subject:"专业",
            semester:"学期",
            course:"课程",
            payment:"缴费"
        },
        result: {
            'code': '0',
            'data':{}
        }
    },
]

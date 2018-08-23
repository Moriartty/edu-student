/**
 * Created by user on 18-8-23.
 */
module.exports = [
    {
        desc:'获取所有考试列表',
        type:'GET',
        url:'/resultInquiry',
        params:{
            pageNo:'',
            pageSize:'',
            semester:'学期',
            course:'课程',
            major:'专业'
        },
        result:{
            'code':'0',
            'data':
            {
                'pageNo':1,
                'pageSize':10,
                'totalCount':30,
                'totalPages':3,
                'list|10':[
                    {
                        'id':'@increment',//序号
                        'semester':'@ctitle',//学期
                        'major':'@ctitle',//专业
                        'course':'@ctitle(4)',//课程
                        'testName':'@ctitle(8)',//考试名
                        'isOpenTest':'是',//是否开卷
                        'testType':'机考',//考试方式
                        'score':80,//成绩
                        'zuoyeScore':90,//作业综合成绩
                    }
                ]
            }
        }
    },
    {
        desc:'获取试卷详情列表',
        type:'GET',
        url:'/resultInquiry/detail',
        params:{
            id:''
        },
        result:{
            'code':'0',
            'data':{
                id:'@increment', //记录ID（从该ID可以知道 作业ID、试卷ID、学生ID）
                name:'@ctitle()作业', //作业名称
                course:'@ctitle()课程', //课程名称
                courseNo:'@cword("0123456789",10)', //课程编号
                student:'@cname', //学生姓名
                studentNo:'@cword("0123456789",12)', //学号
                'total|80-100':1, //题目总数
                'finish|0-80':1, //已完成题目数
                'correct|0-80':1, //正确题数
                'wrong|0-80':1, //错误题数
                'categoryList|1-8':[{ //题类列表
                    // 'type|1-8':1, //题型，约定为：1单选题，2多选题，3判断题，4填空题，5简答题，6论述题，7案例分析题，8操作题
                    type:8,
                    name:'@ctitle()题', //题型名称
                    'score|1-10':1, //每题分数
                    'questionList|1-10':[{ //题目列表
                        id:'@increment', //能定位该题目的唯一ID，用于更新教师评语
                        topic:'@csentence()______@csentence()_________@csentence()_____________。', //题干
                        'topicSrc|0-4': ['https://toffy-chiu.github.io/img/avatar/@cword("1234556",1).jpg'], //题干资源
                        'score|1-10':1, //得分
                        //以下两个字段只针对选择题
                        optionType:1, //选项类型，1文字选项；2图片选项
                        'choiceList|1-4':['https://toffy-chiu.github.io/img/avatar/@cword("1234556",1).jpg'], //选项内容，注意可能为文字或图片
                        answer:'1', //标准答案
                        studentAnswer:'1', //学生答案
                        comment:'@csentence', //教师评语（只用于主观题）
                    }]
                }]
            }
        }
    },
];
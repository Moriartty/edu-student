module.exports = [
    {
        desc:'获取作业列表',
        type:'GET',
        url:'/myHomework',
        params:{
            pageNo:'',
            pageSize:'',
            homeworkName:'作业名',
            course:'课程',
            creator:'创建者'
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
                            'course':'@ctitle(4)',//课程
                            'homeworkName':'@ctitle(8)',//作业名
                            'creator':'@cname',//创建者
                            'endDate':'2018-01-01',//截止日期
                            'progress':{//完成进度
                                completeNum:'@increment',
                                totalNum:'@increment'
                            },
                            'hasSubmit':'@integer(0,1)',//0:未提交，1：已提交
                            'results':{//完成情况
                                correct:10,
                                error:2,
                                subjective:3
                            }
                        }
                    ]
                }
        }
    },
    {
        desc:'获取已提交作业详情列表',
        type:'GET',
        url:'/myHomework/detail',
        params:{
            pageNo:'',
            pageSize:'',
            homeworkName:'作业名',
            course:'课程',
            creator:'创建者'
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
    {
        desc:'获取未提交作业数据',
        type:'GET',
        url:'/myHomework/data',
        params:{
            id:'作业ID',
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
                'categoryList|1-8':[{ //题类列表
                    'type|1-8':1, //题型，约定为：1单选题，2多选题，3判断题，4填空题，5简答题，6论述题，7案例分析题，8操作题
                    name:'@ctitle()题', //题型名称
                    'questionList|1-10':[{ //题目列表
                        topic:'@csentence()______@csentence()_________@csentence()_____________。', //题干
                        'topicSrc|0-4': ['https://toffy-chiu.github.io/img/avatar/@cword("1234556",1).jpg'], //题干资源
                        //以下两个字段只针对选择题
                        optionType:1, //选项类型，1文字选项；2图片选项
                        'choiceList|1-4':['https://toffy-chiu.github.io/img/avatar/@cword("1234556",1).jpg'], //选项内容，注意可能为文字或图片
                    }]
                }]
            }
        }
    },

];

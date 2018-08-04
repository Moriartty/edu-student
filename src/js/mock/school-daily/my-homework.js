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
        desc:'获取作业列表',
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
            'data': {}
        }
    }
];

module.exports = [
    {
        desc:'获取滚动新闻列表',
        type:'GET',
        url:'/home/slider-news',
        params:{},
        result:{
            'code':'0',
            'data|4':[
                {
                    id:'@increment',
                    categoryId:1, //分类ID，1为公告通知，2为学校新闻，3为校园文化活动
                    title:'@ctitle(10,30)', //标题
                    img:'http://s.amazeui.org/media/i/demos/bing-@cword("1234",1).jpg'
                }
            ]
        }
    },
    {
        desc:'根据分类获取新闻列表',
        type:'GET',
        url:'/home/news-list',
        params:{
            limit:'指定获取的数据条数',
            categoryId:'分类ID，1为公告通知，2为学校新闻，3为校园文化活动'
        },
        result:{
            'code':'0',
            'data|7':[
                {
                    id:'@increment',
                    title:'@ctitle(10,30)', //标题
                    highlight:'@pick(0,1)', //是否高亮
                    createTime:'@datetime',
                }
            ]
        }
    },
    {
        desc:'获取常用模块列表',
        type:'GET',
        url:'/home/entry',
        params:{},
        result:{
            'code':'0',
            'data':[
                'school-daily/course-plan','school-daily/my-daily','school-daily/professional-rules',
                'school-daily/my-document','school-daily/my-payment'
                // 'inventory', 'members', 'promotion', 'trouble',
                // 'advertiser', 'rule', 'd-earnings', 'replenish', 'repository', 'repository-in', 'repository-out',
                // 'repository-return', 'device-map', 'device-log', 'device-ad', 'device-earnings', 'place', 'place-type',
                // 'place-earnings', 'commodity', 'commodity-self', 'commodity-type', 'commodity-earnings', 'coupon',
                // 'recharge', 'advertising', 'members-report', 'members-consume', 'device', 'merchant', 'trouble-type',
                // 'trouble-report'
            ]
        }
    },
    // {
    //     desc:'获取入口模块列表',
    //     type:'GET',
    //     url:'/home/entry',
    //     params:{},
    //     result:{
    //         'code':'0',
    //         'data':[
    //             {
    //                 no:'school-daily',
    //                 name:'校园日常',
    //                 list:[
    //                     {id:100, name:'我的日常', module:'my-daily-routine'},
    //                     {id:110, name:'专业规则', module:'professional-rules'},
    //                     {id:120, name:'课程计划', module:'course-plan'},
    //                     {id:130, name:'我的作业', module:'my-homework'},
    //                     {id:140, name:'考试报名', module:'exam-registration'},
    //                     {id:150, name:'成绩查询', module:'result-inquiry'},
    //                     {id:160, name:'我的档案', module:'my-document'},
    //                     {id:170, name:'我的缴费', module:'my-payment'}
    //                 ]
    //             },
    //             {
    //                 no:'flows',
    //                 name:'流程中心',
    //                 list:[
    //                     {id:200, name:'毕业申请', module:'graduation-application'},
    //                     {id:210, name:'我的申请', module:'my-application'}
    //                 ]
    //             }
    //         ]
    //     }
    // },
];

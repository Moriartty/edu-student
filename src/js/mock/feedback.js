module.exports = [
    {
        desc:'获取用户反馈概要列表',
        type:'GET',
        url:'/feedback',
        params:{
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
                        id:'@cword("0123456789", 11)', //单号
                        'name':'@cname', //用户名
                        avatar: 'https://toffy-chiu.github.io/img/avatar/@cword("123456",1).jpg', //头像
                        'phone':'138@cword("0123456789", 8)', //联系电话
                        'unread|0-9':1, //未读消息数
                        'content':'@csentence(10, 50)', //该用户反馈的最新的一条消息内容
                        'createTime':'@datetime("yyyy-MM-dd HH:mm:ss")', //该用户反馈的最新的一条消息内容
                    }
                ],
                'totalCount':30,
                'totalPages':3
            }
        }
    },
    {
        desc:'获取具体反馈内容列表，调用该接口时同时把该用户置为已读，即unread=0',
        type:'GET',
        url:'/feedback/detailList',
        params:{
            id:'ID',
        },
        result:{
            'code':'0',
            'data|30':[ //返回最近一个月的聊天数据，正序排序
                {
                    type:'@pick(0,1)', //消息类型，0为文本消息，1为图片消息（完整URL或BASE64）。客服的话目前只有0
                    userType:'@pick(0,1)', //0为客服，1为用户
                    'name':'@cname', //用户名
                    // content:'@csentence(10, 50)', //该用户反馈的最新的一条消息内容
                    content:'@pick(http://nj.zxy-soft.cn/nuoj-static/ad/20180606102052ad0aa.jpg, http://nj.zxy-soft.cn/nuoj-static/ad/20180526083100ad2a.jpg)', //图片内容
                    'createTime':'@datetime("yyyy-MM-dd HH:mm:ss")', //该用户反馈的最新的一条消息内容
                }
            ]
        }
    },
    {
        desc:'发送回复',
        type:'POST',
        url:'/feedback/reply',
        params:{
            id:'ID',
            content:'消息内容',
        },
        result:{
            'code':'0',
            'data':{}
        }
    },
];
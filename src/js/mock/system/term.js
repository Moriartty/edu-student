module.exports = [
    {
        desc:'获取当前学期信息',
        type:'GET',
        url:'/term',
        params:'无',
        result:{
            'code':'0',
            'data':{ //如果当前没有学期信息则返回空对象{}
                id:1, //主键那个ID
                //学期信息
                name:'20@pick(17,18)@pick(春,秋)季', //学期名称
                year:'@date("yyyy")', //如：2018
                term:'@pick("03","09")', //如：03
                begin:'@date', //开始日期
                end:'@date', //结束日期
                current:'@date', //当前日期，用于对比
            }
        }
    },
    {
        desc:'获取年级字典列表',
        type:'GET',
        url:'/term/list',
        params:'无',
        result:{
            'code':'0',
            'data':[
                {id:'201703', name:'2017春季'},
                {id:'201709', name:'2017秋季'},
                {id:'201803', name:'2018春季'},
                {id:'201809', name:'2018秋季'},
            ]
        }
    },
    {
        desc:'创建',
        type:'POST',
        url:'/term/create',
        params:{
            name:'学期名称，给后端的冗余字段',
            year:'学期-年',
            term:'学期-季',
            begin:'开始日期',
            end:'结束日期',
        },
        result:{
            'code':'0',
            'data':{}
        }
    },
    {
        desc:'更新',
        type:'POST',
        url:'/term/update',
        params:{
            id:'ID',
            name:'学期名称，给后端的冗余字段',
            year:'学期-年',
            term:'学期-季',
            begin:'开始日期',
            end:'结束日期',
        },
        result:{
            'code':'0',
            'data':{}
        }
    },
    {
        desc:'获取学期列表',
        type:'GET',
        url:'/term/history',
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
                        'id':'@increment',
                        name:'2018春', //学期名称
                        begin:'@date', //开始日期
                        end:'@date', //结束日期
                    }
                ],
                'totalCount':30,
                'totalPages':3
            }
        }
    },
];
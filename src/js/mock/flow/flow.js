module.exports = [
    {
        desc:'获取教师可申请的流程列表',
        type:'GET',
        url:'/flow',
        params:{},
        result:{
            'code':'0',
            'data|1-30':[
                {
                    id:'@cword("0123456789",15)', //流程ID
                    name:'@ctitle', //流程名称
                    desc:'@csentence', //描述
                    type:'@pick(通用流程,教务流程,考务流程)', //流程类型
                    typeId:1, //流程类型ID
                }
            ]
        }
    },
    {
        desc:'获取流程模板数据',
        type:'GET',
        url:'/flow/tpl-data',
        params:{
            id:'流程ID',
        },
        result:{
            'code':'0',
            'data':{
                id:'@cword("0123456789",15)', //流程ID
                name:'@ctitle', //流程名称
                desc:'@csentence', //描述
                key:'@pick(1,2,3,4,5)', //业务类型标识
                formData:'[{"comment":"百度","url":"http://www.baidu.com","display":true,"type":"COMMENT","id":1},{"label":"说明","placeholder":"请输入1","type":"SINGLE","required":true,"id":2},{"label":"详细理由","placeholder":"请输入2","type":"MULTIPLE","id":3},{"label":"数字输入框","placeholder":"请输入3","unit":"个","type":"NUMBER","required":true,"id":4},{"label":"单选框","list":[{"name":"可乐"},{"name":"百事"},{"name":"七喜"}],"type":"RADIO","id":5},{"label":"多选框","list":[{"name":"香蕉"},{"name":"苹果"},{"name":"雪梨"}],"type":"CHECKBOX","id":6},{"label":"日期","type":"DATE","dateType":"2","id":7},{"beginLabel":"开始时间","endLabel":"结束时间","type":"DATE_RANGE","durationEnable":false,"durationLabel":"时长","dateType":"1","id":8},{"label":"图片","type":"PICTURE","id":9},{"label":"附件","type":"ATTACHMENT","id":10},{"label":"明细","actionName":"增加明细","components":[{"label":"物料","placeholder":"箱","unit":"","type":"NUMBER"},{"label":"金额（元）","placeholder":"请输入4","capital":true,"type":"MONEY"},{"label":"图片","type":"PICTURE"}],"type":"DETAIL","id":11},{"label":"金额（元）","placeholder":"请输入5","capital":true,"type":"MONEY","id":12}]', //表单结构数据
                'defaultFlowList|0-10':[ //审批人列表
                    {
                        type:'@pick(USER,ROLE,SELF)', //类型
                        title:'@ctitle', //节点名称
                        id:'@increment', //USER,ROLE对应的ID
                        name:'@cname', //USER,ROLE对应的名称
                    }
                ],
                'defaultCcList|0-10':[{  //抄送人列表
                    id:'@increment',
                    name:'@cname',
                }]
            }
        }
    },
    {
        desc:'图片文件上传接口',
        type:'POST',
        url:'/flow/upload',
        params:{
            file:'文件/图片',
        },
        result:{
            'code':'0',
            'data':"/shop/dydz/user/201807/1530608367672.jpg", //相对路径
        }
    },
    {
        desc:'发起申请',
        type:'POST',
        url:'/flow/initiate',
        params:{
            id:'流程ID',
            formData:'表单结构数据',
        },
        result:{
            'code':'0',
            'data':{}
        }
    },
    {
        desc:'获取我的申请列表',
        type:'GET',
        url:'/flow/apply-list',
        params:{
            name:'流程名称，模糊查询',
            state:'状态',
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
                        id:'@cword("0123456789",10)', //流程id
                        name:'@ctitle', //流程名称
                        apply:'@cname', //申请人
                        state:'@pick(1,2,3,4)', //状态，约定：1审批中，2已通过，3已驳回，4已撤销
                        createTime:'@datetime', //创建时间
                    }
                ],
                'totalCount':30,
                'totalPages':3
            }
        }
    },
    {
        desc:'获取我的审批列表',
        type:'GET',
        url:'/flow/approve-list',
        params:{
            name:'流程名称，模糊查询',
            state:'状态',
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
                        id:'@cword("0123456789",10)', //流程id
                        name:'@ctitle', //流程名称
                        apply:'@cname', //申请人
                        state:'@pick(1,2,3,4)', //状态，约定：1审批中，2已通过，3已驳回，4已撤销
                        createTime:'@datetime', //创建时间
                    }
                ],
                'totalCount':30,
                'totalPages':3
            }
        }
    },
    {
        desc:'获取抄送我的列表',
        type:'GET',
        url:'/flow/cc-list',
        params:{
            name:'流程名称，模糊查询',
            state:'状态',
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
                        id:'@cword("0123456789",10)', //流程id
                        name:'@ctitle', //流程名称
                        apply:'@cname', //申请人
                        state:'@pick(1,2,3,4)', //状态，约定：1审批中，2已通过，3已驳回，4已撤销
                        createTime:'@datetime', //创建时间
                    }
                ],
                'totalCount':30,
                'totalPages':3
            }
        }
    },
    {
        desc:'获取审批流程详情',
        type:'GET',
        url:'/flow/details',
        params:{
            id:'流程id',
        },
        result:{
            'code':'0',
            'data':{
                id:'@cword("0123456789",10)', //流程id
                name:'@ctitle', //流程名称
                applyId:6, //申请人ID
                apply:'@cname', //申请人
                state:'@pick(1,2,3,4)', //状态，约定：1审批中，2已通过，3已驳回，4已撤销
                createTime:'@datetime', //创建时间
                formData:'[{"comment":"百度","url":"http://www.baidu.com","display":true,"type":"COMMENT","id":1},{"label":"说明","placeholder":"请输入1","type":"SINGLE","required":true,"id":2,"value":"需要上传一个或一些文"},{"label":"详细理由","placeholder":"请输入2","type":"MULTIPLE","id":3,"value":"实际项目开发中，你会需要对 ES2015 和 JSX 代码的构建、调试、代理、打包部署等一系列工程化的需求。 我们提供了一套 npm + webpack 的开发工具链来辅助开发，下面我们用一个简单的实例来说明。"},{"label":"数字输入框","placeholder":"请输入3","unit":"个","type":"NUMBER","required":true,"id":4,"value":"33"},{"label":"单选框","list":[{"name":"可乐"},{"name":"百事"},{"name":"七喜"}],"type":"RADIO","id":5,"value":"百事"},{"label":"多选框","list":[{"name":"香蕉"},{"name":"苹果"},{"name":"雪梨"}],"type":"CHECKBOX","id":6,"value":["香蕉","雪梨"]},{"label":"日期","type":"DATE","dateType":"2","id":7,"value":"2018-07-27 16:50:02"},{"beginLabel":"开始时间","endLabel":"结束时间","type":"DATE_RANGE","durationEnable":false,"durationLabel":"时长","dateType":"1","id":8,"value":["2018-07-27","2018-08-29"]},{"label":"图片","type":"PICTURE","id":9},{"label":"附件","type":"ATTACHMENT","id":10},{"label":"明细","actionName":"增加明细","components":[{"label":"物料","placeholder":"箱","unit":"","type":"NUMBER"},{"label":"金额（元）","placeholder":"请输入4","capital":true,"type":"MONEY"},{"label":"图片","type":"PICTURE"}],"type":"DETAIL","id":11},{"label":"金额（元）","placeholder":"请输入5","capital":true,"type":"MONEY","id":12,"value":"888"}]',
                approvalStep:2, //当前的步骤数
                'approvalList|3-10':[{ //审批节点列表
                    id:'@increment', //审批人ID
                    name:'@cname', //审批人名称
                    title:'@ctitle', //节点名称
                    comment:'@pick("","通过","没有问题","当数据是日期或按照日期划分时，例如日程、课表、价格日历等，农历等。目前支持年/月切换。")', //意见
                    state:'@pick(0,1,2)', //状态，约定：1通过，2驳回
                    createTime:'@datetime', //审批时间
                }],
                'ccList|0-10':[{  //抄送人列表
                    id:'@increment',
                    name:'@cname',
                }]
            }
        }
    },
    {
        desc:'审核（通过/驳回）操作',
        type:'POST',
        url:'/flow/verify',
        params:{
            id:'流程ID',
            state:'1通过，2驳回',
            step:'当前的步骤数',
            comment:'审核意见'
        },
        result:{
            'code':'0',
            'data':{}
        }
    },
    {
        desc:'流程撤销',
        type:'POST',
        url:'/flow/cancel',
        params:{
            id:'流程ID',
        },
        result:{
            'code':'0',
            'data':{}
        }
    },
];
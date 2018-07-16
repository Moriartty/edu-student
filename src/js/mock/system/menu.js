module.exports = [
    {
        desc:'获取用户的菜单数据',
        type:'GET',
        url:'/menu/user',
        params:'从cookie里面获取',
        result:{
            'code':'0',
            'data':[
                {
                    id:100,
                    name:'教学管理',
                    list:[
                        {
                            id:3,
                            name:'设备管理',
                            list:[
                                {id:7, name:'设备信息', module:'device', functions:['CREATE', 'UPDATE', 'DELETE', 'DISABLE', 'IMPORT', 'LOG', 'TRANSFER']},
                                {id:31, name:'设备库存', module:'inventory', functions:['SETTING', 'GOODS', 'GOODS_EDIT', 'LANE', 'HISTORY', 'EXPORT']},
                                {id:2, name:'设备地图', module:'device-map', functions:['CREATE', 'UPDATE', 'DELETE']},
                                {id:12, name:'故障信息', module:'trouble', functions:['CREATE', 'UPDATE', 'DELETE']},
                                {id:45, name:'设备型号', module:'device-type', functions:['CREATE', 'UPDATE', 'DELETE', 'UPGRADE']}
                            ]
                        },
                        {
                            id:28,
                            name:'区域管理',
                            list:[
                                {id:8, name:'区域信息', module:'place', functions:['CREATE', 'UPDATE', 'DELETE']},
                                {id:21, name:'区域类型', module:'place-type', functions:['CREATE', 'UPDATE', 'DELETE']}
                            ]
                        },
                        {
                            id:102,
                            name:'商品管理',
                            list:[
                                {id:33, name:'公共商品', module:'commodity', functions:['CREATE', 'UPDATE', 'DELETE']},
                                {id:34, name:'我的商品', module:'commodity-self', functions:['CREATE', 'UPDATE', 'DELETE', 'IMPORT']},
                                {id:32, name:'商品类型', module:'commodity-type', functions:['CREATE', 'UPDATE', 'DELETE', 'DISABLE']},
                                {id:35, name:'商品促销', module:'promotion', functions:['CREATE', 'DELETE']}
                            ]
                        },
                        {
                            id:104,
                            name:'仓库管理',
                            list:[
                                {id:37, name:'仓库信息', module:'repository', functions:['CREATE', 'UPDATE', 'DELETE', 'SETTING']},
                                {id:38, name:'入库管理', module:'repository-in', functions:['CREATE', 'UPDATE', 'DELETE', 'VERIFY']},
                                {id:39, name:'出库管理', module:'repository-out', functions:['CREATE', 'UPDATE', 'DELETE', 'VERIFY']},
                                {id:40, name:'退库管理', module:'repository-return', functions:['CREATE', 'UPDATE', 'DELETE', 'VERIFY']},
                                {id:48, name:'补货跟踪', module:'trace', functions:['EXPORT']},
                                {id:49, name:'库存盘点', module:'stock-check', functions:['VERIFY']},
                                {id:50, name:'商品货机库存', module:'commodity-inventory'},
                            ]
                        },
                        {
                            id:5,
                            name:'用户管理',
                            list:[
                                {id:17, name:'消费者管理', module:'members', functions:['HISTORY']},
                                {id:29, name:'商家管理', module:'merchant', functions:['PAY']},
                                {id:19, name:'用户反馈', module:'feedback', functions:['CREATE', 'UPDATE', 'DELETE']},
                                {id:46, name:'业务员管理', module:'pioneer', functions:['CREATE', 'UPDATE', 'DELETE', 'EARNINGS']},
                            ]
                        },
                        {
                            id:103,
                            name:'规则管理',
                            list:[
                                {id:20, name:'优惠券管理', module:'coupon', functions:['CREATE', 'DELETE']},
                                // {id:22, name:'充值管理', module:'recharge', functions:['CREATE', 'UPDATE', 'DELETE']},
                                {id:26, name:'规则设置', module:'rule', functions:['UPDATE']},
                            ]
                        },
                        {
                            id:101,
                            name:'广告管理',
                            list:[
                                {id:27, name:'广告信息', module:'advertising', functions:['CREATE', 'UPDATE', 'RENEWAL', 'CANCEL']},
                                {id:30, name:'广告商管理', module:'advertiser', functions:['CREATE', 'UPDATE', 'DELETE']},
                                // {id:36, name:'设备广告', module:'device-ad', functions:['UPDATE']},
                            ]
                        },
                    ]
                },
                {
                    id:105,
                    name:'考务管理',
                    list:[
                        {
                            id:13,
                            name:'营收数据',
                            list:[
                                {id:24, name:'区域收益', module:'place-earnings', functions:['EXPORT']},
                                {id:25, name:'设备收益', module:'device-earnings', functions:['EXPORT']},
                                {id:23, name:'商品销量', module:'commodity-earnings', functions:['EXPORT']},
                                {id:15, name:'广告营收', module:'ad-earnings'}
                            ]
                        },
                        {
                            id:106,
                            name:'数据报表',
                            list:[
                                {id:42, name:'用户报表', module:'members-report'},
                                {id:43, name:'消费详情', module:'members-consume', functions:['EXPORT', 'REFUND']},
                                {id:44, name:'故障报表', module:'trouble-report'},
                                {id:41, name:'补货详情', module:'replenish', functions:['EXPORT']},
                            ]
                        }
                    ]
                },
                {
                    id:300,
                    name:'学籍管理',
                    list:[
                        {
                            id:510,
                            name:'商品管理',
                            list:[
                                {id:511, name:'商品列表', module:'mall-goods', functions:['CREATE', 'UPDATE', 'DELETE']},
                                {id:512, name:'商品订单', module:'mall-goods-order', functions:['EXPORT', 'DISPATCH', 'RECEIVE_GOODS', 'RECEIVE_MONEY']},
                                {id:513, name:'商品分类', module:'mall-goods-type', functions:['CREATE', 'UPDATE', 'DELETE']},
                            ]
                        },
                        {id:531, name:'广告管理', module:'mall-ad', functions:['CREATE', 'UPDATE', 'DELETE']},
                        {
                            id:540,
                            name:'统计报表',
                            list:[
                                {id:541, name:'商品统计', module:'mall-goods-report'},
                                {id:542, name:'订单统计', module:'mall-order-report'},
                            ]
                        },
                    ]
                },
                {
                    id:400,
                    name:'流程中心',
                    list:[
                        {id:404, name:'流程管理', module:'flow-mgr', functions:['FORM', 'APPROVER']}
                    ]
                },
                {
                    id:500,
                    name:'教务资讯',
                    list:[
                        {id:501, name:'滚动图片新闻', module:'news/slider', functions:['DELETE']},
                        {id:502, name:'公告通知', module:'news/notice', functions:['SLIDER', 'CREATE', 'UPDATE', 'DELETE']},
                        {id:503, name:'学校新闻', module:'news/school', functions:['SLIDER', 'CREATE', 'UPDATE', 'DELETE']},
                        {id:504, name:'校园文化活动', module:'news/activity', functions:['SLIDER', 'CREATE', 'UPDATE', 'DELETE']},
                    ]
                },
                {
                    id:600,
                    name:'系统管理',
                    list:[
                        {id:601, name:'菜单管理', module:'menu', functions:['CREATE', 'UPDATE', 'DELETE']},
                        {id:602, name:'角色管理', module:'role', functions:['CREATE', 'UPDATE', 'DELETE']},
                        {id:603, name:'系统日志', module:'log'},
                        {id:604, name:'教学点管理', module:'teaching-site', functions:['CREATE', 'UPDATE']},
                        {id:605, name:'系部管理', module:'dept', functions:['CREATE', 'UPDATE']},
                        {id:606, name:'学期管理', module:'term', functions:['CREATE', 'UPDATE']},
                        {id:607, name:'教室管理', module:'classroom', functions:['CREATE', 'UPDATE', 'DELETE']},
                        {id:608, name:'班级管理', module:'class', functions:['CREATE', 'UPDATE']},
                        {id:609, name:'教师管理', module:'teacher', functions:['CREATE', 'UPDATE', 'DOWNLOAD', 'IMPORT']},
                        {id:610, name:'学生管理', module:'student', functions:['CREATE', 'UPDATE', 'DOWNLOAD', 'IMPORT']},
                    ]
                },
            ]
        }
    },
    {
        desc:'获取所有菜单数据',
        type:'GET',
        url:'/menu',
        params:'无',
        result:{
            'code':'0',
            'data':[
                {
                    id:100,
                    name:'平台管理',
                    list:[
                        {
                            id:3,
                            name:'设备管理',
                            list:[
                                {id:7, name:'设备信息', module:'device', display:1},
                                {id:31, name:'设备库存', module:'inventory', display:1},
                                {id:2, name:'设备地图', module:'device-map', display:1},
                                {id:12, name:'故障信息', module:'trouble', display:1},
                                {id:45, name:'设备型号', module:'device-type', display:1}
                            ], display:1
                        },
                        {
                            id:28,
                            name:'区域管理',
                            list:[
                                {id:8, name:'区域信息', module:'place', display:1},
                                {id:21, name:'区域类型', module:'place-type', display:1}
                            ],
                            display:1
                        },
                        {
                            id:102,
                            name:'商品管理',
                            list:[
                                {id:33, name:'公共商品', module:'commodity', display:1},
                                {id:34, name:'我的商品', module:'commodity-self', display:1},
                                {id:32, name:'商品类型', module:'commodity-type', display:1},
                                {id:35, name:'商品促销', module:'promotion', display:1}
                            ],
                            display:1
                        },
                        {
                            id:104,
                            name:'仓库管理',
                            list:[
                                {id:37, name:'仓库信息', module:'repository', display:1},
                                {id:38, name:'入库管理', module:'repository-in', display:1},
                                {id:39, name:'出库管理', module:'repository-out', display:1},
                                {id:40, name:'退库管理', module:'repository-return', display:1},
                                {id:48, name:'补货跟踪', module:'trace', display:1},
                                {id:49, name:'库存盘点', module:'stock-check', display:1},
                                {id:50, name:'商品货机库存', module:'commodity-inventory', display:1},
                            ],
                            display:1
                        },
                        {
                            id:5,
                            name:'用户管理',
                            list:[
                                {id:17, name:'消费者管理', module:'members', display:1},
                                {id:29, name:'商家管理', module:'merchant', display:1},
                                {id:19, name:'用户反馈', module:'feedback', display:1},
                                {id:46, name:'业务员管理', module:'pioneer', display:1}
                            ],
                            display:1
                        },
                        {
                            id:103,
                            name:'规则管理',
                            list:[
                                {id:20, name:'优惠券管理', module:'coupon', display:1},
                                // {id:22, name:'充值管理', module:'recharge', display:1},
                                {id:26, name:'规则设置', module:'rule', display:1},
                            ],
                            display:1
                        },
                        {
                            id:101,
                            name:'广告管理',
                            list:[
                                {id:27, name:'广告信息', module:'advertising', display:1},
                                {id:30, name:'广告商管理', module:'advertiser', display:1},
                                // {id:36, name:'设备广告', module:'device-ad', display:1},
                            ], display:1
                        },
                    ],
                    display:1
                },
                {
                    id:105,
                    name:'报表查询',
                    list:[
                        {
                            id:13,
                            name:'营收数据',
                            list:[
                                {id:24, name:'区域收益', module:'place-earnings', display:1},
                                {id:25, name:'设备收益', module:'device-earnings', display:1},
                                {id:23, name:'商品销量', module:'commodity-earnings', display:1},
                                {id:15, name:'广告营收', module:'ad-earnings', display:1}
                            ], display:1
                        },
                        {
                            id:106,
                            name:'数据报表',
                            list:[
                                {id:42, name:'用户报表', module:'members-report', display:1},
                                {id:43, name:'消费详情', module:'members-consume', display:1},
                                {id:44, name:'故障报表', module:'trouble-report', display:1},
                                {id:41, name:'补货详情', module:'replenish', display:1},
                            ], display:1
                        }
                    ],
                    display:1
                },
                {
                    id:400,
                    name:'流程中心',
                    list:[
                        {id:404, name:'流程管理', module:'flow-mgr', display:1},
                    ], display:1
                },
                {
                    id:500,
                    name:'教务资讯',
                    list:[
                        {id:501, name:'滚动图片新闻', module:'news/slider', display:1},
                        {id:502, name:'公告通知', module:'news/notice', display:1},
                        {id:503, name:'学校新闻', module:'news/school', display:1},
                        {id:504, name:'校园文化活动', module:'news/activity', display:1},
                    ], display:1
                },
                {
                    id:600,
                    name:'系统管理',
                    list:[
                        {id:601, name:'菜单管理', module:'menu', display:1},
                        {id:602, name:'角色管理', module:'role', display:1},
                        {id:603, name:'系统日志', module:'log', display:1},
                        {id:604, name:'教学点管理', module:'teaching-site', display:1},
                        {id:605, name:'系部管理', module:'dept', display:1},
                        {id:606, name:'学期管理', module:'term', display:1},
                        {id:607, name:'教室管理', module:'classroom', display:1},
                        {id:608, name:'班级管理', module:'class', display:1},
                        {id:609, name:'教师管理', module:'teacher', display:1},
                        {id:610, name:'学生管理', module:'student', display:1},
                    ], display:1
                },
            ]
        }
    },
    {
        desc:'添加菜单',
        type:'POST',
        url:'/menu/create',
        params:{
            parentId:'父级目录菜单ID',
            name:'菜单名称',
            module:'菜单模块名',
            display:'是否显示。1显示，0隐藏'
        },
        result:{
            'code':'0',
            'data':{}
        }
    },
    {
        desc:'更新菜单',
        type:'POST',
        url:'/menu/update',
        params:{
            id:'菜单ID',
            parentId:'父级目录菜单ID',
            name:'菜单名称',
            module:'菜单模块名',
            display:'是否显示。1显示，0隐藏'
        },
        result:{
            'code':'0',
            'data':{}
        }
    },
    {
        desc:'删除菜单',
        type:'POST',
        url:'/menu/delete',
        params:{
            id:'菜单ID'
        },
        result:{
            'code':'0',
            'data':{}
        }
    },
    {
        desc:'菜单排序－上移',
        type:'POST',
        url:'/menu/up',
        params:{
            id:'菜单ID'
        },
        result:{
            'code':'0',
            'data':{}
        }
    },
    {
        desc:'菜单排序－下移',
        type:'POST',
        url:'/menu/down',
        params:{
            id:'菜单ID'
        },
        result:{
            'code':'0',
            'data':{}
        }
    }
];
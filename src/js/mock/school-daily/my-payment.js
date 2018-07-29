module.exports = [
    {
        desc:'获取缴费信息',
        type:'GET',
        url:'/myPayment',
        params:{
            startDate:'开始时间',
            endDate:'结束时间'
        },
        result:{
            'code':'0',
            'data':{
                'curSemester|2-8':[
                    {
                        id: '@increment',//序号
                        semester: '1',//学期
                        docId: '@increment',//通知书号码
                        unitCode: '@increment',//单位编码
                        payStatus: '已缴费',//缴费信息
                        'payItems|2': [
                            {
                                id:'@increment',
                                itemName: '@ctitle(5)',//缴费项目
                                itemPay: '20'//缴费金额
                            }
                        ],//缴费项目
                        total: '@increment'//总金额
                    }
                ],
                'history|2-8':[
                    {
                        id: '@increment',//序号
                        semester: '1',//学期
                        docId: '@increment',//通知书号码
                        unitCode: '@increment',//单位编码
                        payStatus: '已缴费',//缴费信息
                        'payItems|2': [
                            {
                                id:'@increment',
                                itemName: '@ctitle(5)',//缴费项目
                                itemPay: '20'//缴费金额
                            }
                        ],//缴费项目
                        total: '@increment'//总金额
                    }
                ],
                'others|2-8':[
                    {
                        id:'@increment',//序号
                        payType:'@ctitle',//缴费类型
                        total:'20',//缴费金额
                        timeStamp:'2018-1-1',//缴费时间
                    }
                ]
            }
        }
    },
];

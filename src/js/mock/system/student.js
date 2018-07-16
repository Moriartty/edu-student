module.exports = [
    {
        desc:'获取学生列表',
        type:'GET',
        url:'/student',
        params:{
            pageNo:'页码',
            'pageSize':'每页显示的条数（不传默认10条）',
            name:'姓名的关键字查询',
            no:'学号',
            siteId:'教学点ID',
            termId:'年级，格式如：201703',
            classId:'班级ID',
            statusId:'学籍状态ID',
            typeId:'学生类型ID'
        },
        result:{
            'code':'0',
            'data':{
                'pageNo':1,
                'pageSize':10,
                'result|10':[
                    {
                        'id':'@increment',
                        'name':'@cname',
                        no:'2018@cword("0123456789",11)', //学号
                        sex:'@pick(1,2)', //性别，1男，2女
                        'phone':'138@cword("0123456789", 8)',
                        site:'@ctitle()分校', //教学点
                        siteId:3, //教学点ID
                        term:'20@pick(17,18)@pick(春,秋)季', //年级
                        className:'@pick(电信,金融,信科,计算机)@cword("0123456789",4)', //班级
                        classId:3, //班级ID
                        status:'@pick(在藉,未注册,转出,休学,退学,开除,毕业,异动中)', //学籍状态
                        'statusId|1-8':1, //学籍状态ID
                        type:'@pick(开放,普招,成招,一村一名大学生,课程开放,助力计划,农民大学生,直通车)', //学生类型
                        typeId:'@pick("03","06","099")', //学生类型ID
                    }
                ],
                'totalCount':30,
                'totalPages':3
            }
        }
    },
    {
        desc:'获取学生字典列表',
        type:'GET',
        url:'/student/list',
        params:{
            key:'关键字',
            limit:'返回前N条',
        },
        result:{
            'code':'0',
            'data|200':[
                {id:'@increment', name:'@cname', no:'2018@cword("0123456789",11)'}
            ]
        }
    },
    {
        desc:'获取学生详情信息',
        type:'GET',
        url:'/student/info',
        params:{
            id:'学生ID'
        },
        result:{
            'code':'0',
            'data':{
                'id':'@increment',
                'name':'@cname',
                no:'2018@cword("0123456789",11)', //学号
                sex:'@pick(1,2)', //性别，1男，2女
                'phone':'138@cword("0123456789", 8)',
                site:'@ctitle()分校', //教学点
                siteId:3, //教学点ID
                term:'20@pick(17,18)@pick(春,秋)季', //年级
                className:'@pick(电信,金融,信科,计算机)@cword("0123456789",4)', //班级
                classId:3, //班级ID
                status:'@pick(在藉,未注册,转出,休学,退学,开除,毕业,异动中)', //学籍状态
                'statusId|1-8':1, //学籍状态ID
                type:'@pick(开放,普招,成招,一村一名大学生,课程开放,助力计划,农民大学生,直通车)', //学生类型
                typeId:'@pick("03","06","099")', //学生类型ID
                nation:'汉族', //民族
                politicalStatus:'@pick(群众,党员)', //政治面貌
                maritalStatus:'@pick(已婚,未婚)', //婚姻状况
                nativePlace:'@city(true)', //籍贯
                birthday:'@date', //出生日期
                education:'@pick(专科,本科)', //文化程度
                identityCard:'44@cword("0123456789",16)', //身份证号
                email:'@lower(@first)@some.com', //邮箱
                picture: "https://toffy-chiu.github.io/img/avatar/5.jpg", //照片
            }
        }
    },
    {
        desc:'添加学生',
        type:'POST',
        url:'/student/create',
        params:{
            name:'姓名',
            sex:'性别',
            phone:'联系电话',
            siteId:'教学点ID',
            classId:'班级ID',
            statusId:'学籍状态ID',
            typeId:'学生类型ID',
            // nation:'民族',
            // politicalStatus:'政治面貌',
            // maritalStatus:'婚姻状况',
            // nativePlace:'籍贯',
            // birthday:'出生日期',
            // education:'文化程度',
            // identityCard:'身份证号',
            // email:'邮箱',
            // picture:'照片',
        },
        result:{
            'code':'0',
            'data':{}
        }
    },
    {
        desc:'更新学生',
        type:'POST',
        url:'/student/update',
        params:{
            id:'学生ID',
            name:'姓名',
            sex:'性别',
            phone:'联系电话',
            siteId:'教学点ID',
            classId:'班级ID',
            statusId:'学籍状态ID',
            typeId:'学生类型ID',
            nation:'民族',
            politicalStatus:'政治面貌',
            maritalStatus:'婚姻状况',
            nativePlace:'籍贯',
            birthday:'出生日期',
            education:'文化程度',
            identityCard:'身份证号',
            email:'邮箱',
            picture:'照片',
        },
        result:{
            'code':'0',
            'data':{}
        }
    },
    {
        desc:'下载导入模板',
        type:'GET',
        url:'/student/download',
        params:{},
        result:'下载文件'
    },
    {
        desc:'直通车学生导入',
        type:'POST',
        url:'/student/import-zhitongche',
        params:{
            file:'文件'
        },
        result:{
            'code':'0',
            'data':{}
        }
    },
    {
        desc:'成招生导入',
        type:'POST',
        url:'/student/import-chengzhaosheng',
        params:{
            file:'文件'
        },
        result:{
            'code':'0',
            'data':{}
        }
    },
];
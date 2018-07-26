/**
 * Created by user on 18-7-26.
 */
module.exports = [
    {
        desc:'获取我的档案',
        type:'GET',
        url:'/myDocument',
        params:{
        },
        result:{
            'code':'0',
            'data':
                {
                    'name':'@cname',//姓名
                    'birthDay':'1995-12-13',//出生日期
                    'gender':'变态',//性别
                    'nation':'汉族',//民族
                    'certificate':'身份证',//证件类型
                    'certificateId':'123456789',//证件号
                    'politicalStatus':'穆斯林',//政治面貌
                    'studentCategory':'不知道',//学生类别
                    'eduLevel':'本科生',//学历层次
                    'professional':'软件工程',//专业
                    'admissionTime':'2013-9-1',//入学时间
                    'graduationTime':'2013-9-1',//毕业时间
                    'regisNum':'1234567',//电子注册号
                    'employer':'建筑工地搬砖',//工作单位
                    'employerPhone':'13888888888',//工作单位联系电话
                    'phoneNum':'13888888888',//电话
                    'familyTel':'13888888888',//家庭电话
                    'email':'fsdafasf@1212.com',//邮箱
                }
        }
    },
];
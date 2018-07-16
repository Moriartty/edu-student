module.exports = [
    {
        desc:'获取当前登录者信息',
        type:'GET',
        url:'/profile',
        params:'从cookie里面获取',
        result:{
            'code':'0',
            'data':{
                loginName:'@first',
                //loginName:'admin', //当loginName为admin时说明是超级管理员
                email: "@first()@tcl.com",
                id: 6,
                name: "@cname",
                sex:'男',
                no: '@cword("0123456789", 8)', //职工号
                roles:[{id:'1', roleCode:'系统管理员', roleName:'系统管理员'}, {id:'2', roleCode:'商家'}],
                company:'@cword(2, 4)@pick(["科技","信息","网络科技"])有限公司',
                companyId:'137571212345859525',
                org:'@cword(4)',
                phone: '138@cword("0123456789", 8)', //如果是商家，则这是绑定的手机号
                tel: '0752-@cword("0123456789", 7)', //座机
                birthday:'1992-06-06',
                nativePlace:'广东惠州', //籍贯
                address:'@province@city@county@cword(2, 4)路@integer(1,30)号', //住址
                lastLogin:'@datetime',
                createTime:'@datetime',
                avatar: "https://toffy-chiu.github.io/img/avatar/5.jpg",
            }
        }
    },
    {
        desc:'更新登录者信息',
        type:'POST',
        url:'/profile/update',
        params:{
            sex:'性别',
            birthday:'生日',
            nativePlace:'籍贯',
            email:'邮箱',
            phone:'电话',
            tel:'座机',
            address:'住址',
        },
        result:{
            'code':'0',
            'data':{}
        }
    },
    {
        desc:'更新当前登录者密码',
        type:'POST',
        url:'/profile/update-password',
        params:{
            oldPwd:'旧密码',
            newPwd:'新密码'
        },
        result:{
            'code':'0',
            'data':{}
        }
    },
    {
        desc:'更新当前登录者头像',
        type:'POST',
        url:'/profile/update-avatar',
        params:{
            img:'图片文件'
        },
        result:{
            'code':'0',
            'data':{}
        }
    },
    // {
    //     desc:'发送短信验证码',
    //     type:'POST',
    //     url:'/profile/get-code',
    //     params:{
    //         phone:'手机号码'
    //     },
    //     result:{
    //         'code':'0',
    //         'data':{}
    //     }
    // },
    // {
    //     desc:'验证短信验证码',
    //     type:'POST',
    //     url:'/profile/check-code',
    //     params:{
    //         phone:'手机号码',
    //         code:'验证码'
    //     },
    //     result:{
    //         'code':'0', //通过就返回0， 不通过返回非0即可
    //         'data':{},
    //         msg:'验证失败！'
    //     }
    // },
];
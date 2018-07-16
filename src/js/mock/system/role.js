module.exports = [
    {
        desc:'获取角色列表',
        type:'GET',
        url:'/role',
        params:{},
        result:{
            'code':'0',
            'data':[
                {id:5, name:'管理员', desc:'系统管理员。'},
                {id:6, name:'校长', desc:'商家。'},
                {id:3, name:'教务处老师', desc:'直营点的管理员，负责将设备的库存管理，具有申请停机权限。'},
                {id:2, name:'考务处老师', desc:'直接操作设备的相关人员，受用户管理员调拨。'},
                {id:1, name:'专业规则老师', desc:'也被称作用户管理员，是设备使用的直接厂商高级人员。'},
                {id:4, name:'学生', desc:'也称作维修人员，根据注册人员信息表中的数据，能取出相关地点相关维修人员的具体信息，方便进行售后服务。'}
            ]
        }
    },
    {
        desc:'获取指定角色有哪些菜单权限',
        type:'GET',
        url:'/role/auth',
        params:{
            id:'角色ID'
        },
        result:{
            'code':'0',
            data:[
                {menuId:6}, //目录
                {menuId:9, functions:["CREATE","UPDATE","DELETE"]},
                {menuId:10, functions:["CREATE","UPDATE"]},
                {menuId:11, functions:["CREATE","UPDATE"]}
            ]
        }
    },
    {
        desc:'更新指定角色的菜单权限',
        type:'POST',
        url:'/role/auth-update',
        params:{
            id:'角色ID',
            data:'权限JSON串：[{menuId:6},{menuId:9, functions:["CREATE","UPDATE"]}]' //注意有些菜单是没有functions字段的，如目录
        },
        result:{
            'code':'0',
            'data':{}
        }
    },
    {
        desc:'添加角色',
        type:'POST',
        url:'/role/create',
        params:{
            name:'角色名称',
            desc:'描述'
        },
        result:{
            'code':'0',
            'data':{}
        }
    },
    {
        desc:'更新角色',
        type:'POST',
        url:'/role/update',
        params:{
            id:'角色ID',
            name:'角色名称',
            desc:'描述'
        },
        result:{
            'code':'0',
            'data':{}
        }
    },
    {
        desc:'删除角色',
        type:'POST',
        url:'/role/delete',
        params:{
            id:'菜单ID'
        },
        result:{
            'code':'0',
            'data':{}
        }
    }
];
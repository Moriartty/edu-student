module.exports = [
    {
        desc:'获取当前日期信息',
        type:'GET',
        url:'/common/current-date',
        params:'无',
        result:{
            'code':'0',
            'data':{
                year:2018,
                'month|1-12':1,
                'day|1-31':1,
                term:'20@pick(17,18)@pick(春,秋)季', //学期
                'week|1-20':1, //该学期的第几周
            }
        }
    },
    {
        desc:'统一图片上传接口',
        type:'POST',
        url:'/common/upload-img',
        params:{
            file:'文件',
        },
        result:{
            'code':'0',
            'data':"/shop/dydz/user/201807/1530608367672.jpg", //相对路径
        }
    },
    {
        desc:'获取教室类型列表',
        type:'GET',
        url:'/common/classroom-type-list',
        params:'无',
        result:{
            'code':'0',
            'data':[
                {id:1, name:'多媒体教室'},
                {id:2, name:'会议室'},
                {id:3, name:'普通教室'},
            ]
        }
    },
    {
        desc:'获取学籍状态列表',
        type:'GET',
        url:'/common/student-status-list',
        params:'无',
        result:{
            'code':'0',
            'data':[
                {id:1, name:'在藉'},
                {id:2, name:'未注册'},
                {id:3, name:'转出'},
                {id:4, name:'休学'},
                {id:5, name:'退学'},
                {id:6, name:'开除'},
                {id:7, name:'毕业'},
                {id:8, name:'异动中'},
            ]
        }
    },
    {
        desc:'获取学生类型列表',
        type:'GET',
        url:'/common/student-type-list',
        params:'无',
        result:{
            'code':'0',
            'data':[
                {id:'01', name:'开放'},
                {id:'02', name:'普招'},
                {id:'03', name:'成招'},
                {id:'04', name:'一村一名大学生'},
                {id:'05', name:'课程开放'},
                {id:'06', name:'助力计划'},
                {id:'07', name:'农民大学生'},
                {id:'099', name:'直通车'},
            ]
        }
    },
];
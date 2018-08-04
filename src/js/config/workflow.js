//SINGLE
//MULTIPLE
//NUMBER
//RADIO
//CHECKBOX
//DATE
//DATE_RANGE
//PICTURE
//DETAIL
//COMMENT
//MONEY
//ATTACHMENT
module.exports={
    stateList:[
        {value:1, text:'审批中', color:'blue'},
        {value:2, text:'已通过', color:'green'},
        {value:3, text:'已驳回', color:'red'},
        {value:4, text:'已撤销', color:'orange'},
    ],
    iconList:[
        {key:'RIGHT', name:'icon_right.png'},
        {key:'BAOXIAO', name:'icon_baoxiao.png'},
        {key:'BUKA', name:'icon_buka.png'},
        {key:'CAIGOU', name:'icon_caigou.png'},
        {key:'CARD', name:'icon_card.png'},
        {key:'CAR', name:'icon_car.png'},
        {key:'JIABAN', name:'icon_jiaban.png'},
        {key:'OUT', name:'icon_out.png'},
        {key:'TIAOPEI', name:'icon_tiaopei.png'},
        {key:'XINXICHUANDI', name:'icon_xinxichuandi.png'},
        {key:'EVECTION', name:'icon_evection.png'},
        {key:'EVECTION_CANCEL', name:'icon_evection_cancel.png'},
        {key:'LEAVE', name:'icon_leave.png'},
        {key:'LEAVE_CANCEL', name:'icon_leave_cancel.png'},
        {key:'COMMON', name:'icon_common.png'},
        {key:'COURSE', name:'icon_course.png'},
        {key:'DOC', name:'icon_doc.png'}
    ],
    //控件配置df
    components:{
        SINGLE:{
            name:'单行输入框',
            icon:'minus-square-o',
            data:{
                label:'单行输入框',
                placeholder:'请输入'
            }
        },
        MULTIPLE:{
            name:'多行输入框',
            icon:'menu-fold',
            data:{
                label:'多行输入框',
                placeholder:'请输入'
            }
        },
        NUMBER:{
            name:'数字输入框',
            icon:'edit',
            data:{
                label:'数字输入框',
                placeholder:'请输入',
                unit:''
            }
        },
        RADIO:{
            name:'单选框',
            icon:'check-circle-o',
            data:{
                label:'单选框',
                list:[
                    {name:'选项1'},
                    {name:'选项2'},
                    {name:'选项3'}
                ]
            }
        },
        CHECKBOX:{
            name:'多选框',
            icon:'check-square-o',
            data:{
                label:'多选框',
                list:[
                    {name:'选项1'},
                    {name:'选项2'},
                    {name:'选项3'}
                ]
            }
        },
        DATE:{
            name:'日期',
            icon:'calendar',
            data:{
                label:'日期',
                dateType:1
            }
        },
        DATE_RANGE:{
            name:'日期区间',
            icon:'layout',
            data:{
                beginLabel:'开始时间',
                endLabel:'结束时间',
                dateType:1,
                durationEnable:false,
                durationLabel:'时长'
            }
        },
        PICTURE:{
            name:'图片',
            icon:'picture',
            data:{
                label:'图片'
            }
        },
        DETAIL:{
            name:'明细',
            icon:'profile',
            data:{
                label:'明细',
                actionName:'增加明细',
                components:[]
            }
        },
        COMMENT:{
            name:'说明文字',
            icon:'info-circle-o',
            data:{
                comment:'请输入说明文字',
                url:'',
                display:true
            }
        },
        MONEY:{
            name:'金额',
            icon:'pay-circle-o',
            data:{
                label:'金额（元）',
                placeholder:'请输入',
                capital:true
            }
        },
        ATTACHMENT:{
            name:'附件',
            icon:'paper-clip',
            data:{
                label:'附件'
            }
        }
    }
};
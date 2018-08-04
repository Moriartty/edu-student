//这里的name是默认名称
export default {
    flow:{
        name:'发起申请',
        icon:'rocket',
        page:(cb)=>{require.ensure([], require=>{cb(require('pages/Flow'));});}
    },
    'flow-apply':{
        name:'我的申请',
        icon:'export',
        page:(cb)=>{require.ensure([], require=>{cb(require('pages/FlowApply'));});}
    },
}
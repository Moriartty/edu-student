export default {
    "school-daily/my-daily":{
        name:'我的日常',
        icon:'bars',
        operations:[],
        page:(cb)=>{require.ensure([], require=>{cb(require('pages/MyDaily'));});}
    },
     "school-daily/professional-rules":{
         name:'专业规则',
         icon:'bars',
         operations:[],
         page:(cb)=>{require.ensure([], require=>{cb(require('pages/ProfessionalRules'));});}
     },
    "school-daily/course-plan":{
        name:'课程计划',
        icon:'bars',
        operations:[],
        page:(cb)=>{require.ensure([], require=>{cb(require('pages/CoursePlan'));});}
    },
    "school-daily/course-detail":{
        name:'课程计划详情',
        icon:'bars',
        operations:[],
        page:(cb)=>{require.ensure([],require=>{cb(require('pages/CoursePlan/CourseTable'));});}
    },
    // "my-homework":{
    //     name:'我的作业',
    //     icon:'bars',
    //     operations:[],
    //     page:(cb)=>{require.ensure([], require=>{cb(require('pages/MyHomework'));});}
    // },
     "school-daily/exam-registration":{
         name:'考试报名',
         icon:'bars',
         operations:[],
         page:(cb)=>{require.ensure([], require=>{cb(require('pages/ExamRegistration'));});}
     },
    // "result-inquiry":{
    //     name:'成绩查询',
    //     icon:'bars',
    //     operations:[],
    //     page:(cb)=>{require.ensure([], require=>{cb(require('pages/ResultInquiry'));});}
    // },
     "school-daily/my-document":{
         name:'我的档案',
         icon:'bars',
         operations:[],
         page:(cb)=>{require.ensure([], require=>{cb(require('pages/MyDocument'));});}
     },
    "school-daily/my-payment":{
        name:'我的缴费',
        icon:'bars',
        operations:[],
        page:(cb)=>{require.ensure([], require=>{cb(require('pages/MyPayment'));});}
    }
}

/**
 * Created by user on 18-7-25.
 */
import moment from 'moment';
function getListData(){
    const days = moment().daysInMonth();
    let list = [];
    for(let i=0;i<days;i++){
        switch (i) {
            case 8:
                list.push([
                    { type: 'warning', content: '近期须关注事件',endTime:'2018-10-01',autoId:'@increment' },
                    { type: 'success', content: '急迫事件' ,endTime:'2018-10-01',autoId:'@increment'},
                ]); break;
            case 10:
                list.push([
                    { type: 'warning', content: '近期须关注事件',endTime:'2018-10-01',autoId:'@increment' },
                    { type: 'success', content: '普通事件' ,endTime:'2018-10-01',autoId:'@increment' },
                    { type: 'error', content: '急迫事件' ,endTime:'2018-10-01',autoId:'@increment'},
                ]); break;
            case 24:
                list.push([
                    { type: 'warning', content: '近期须关注事件',endTime:'2018-10-01',autoId:'@increment' },
                    { type: 'success', content: '普通事件' ,endTime:'2018-10-01',autoId:'@increment'},
                    { type: 'error', content: '急迫事件',endTime:'2018-10-01',autoId:'@increment' },
                    { type: 'error', content: '急迫事件' ,endTime:'2018-10-01',autoId:'@increment'},
                    { type: 'error', content: '急迫事件' ,endTime:'2018-10-01',autoId:'@increment'},
                    { type: 'error', content: '急迫事件',endTime:'2018-10-01',autoId:'@increment' },
                ]); break;
            default:list.push([{ type: 'success', content: '普通事件', endTime:'2018-10-01',autoId:'@increment' }])
        }
    }
    return list;
}
module.exports = [
    {
        desc:'获取我的日常',
        type:'GET',
        url:'/myDaily',
        params:{
            year:'查询年份',
            month:'查询月份'
        },
        result:{
            'code':'0',
            'data':getListData()
        }
    },
]
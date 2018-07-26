import {connect} from 'react-redux';
import ExTable from 'components/ExTable';
import {objectAppend} from "utils";

class ModuleTable extends React.Component{
    constructor(props) {
        super(props);
        this.columns = [
            {title:'模块名',dataIndex:'moduleName',render:(value,row,index)=>{
                return {
                    children: value,
                    props: {rowSpan:row.rows}
                };
            }},
            {title:'模块最低毕业学分',dataIndex:'minGradCredits',render:(value,row,index)=>{
                return {
                    children: value,
                    props: {rowSpan:row.rows}
                };
            },width:'5%'},
            {title:'中央电大最低考试学分',dataIndex:'minCentCredits',render:(value,row,index)=>{
                return {
                    children: value,
                    props: {rowSpan:row.rows}
                };
            },width:'5%'},
            {title:'课程序号',dataIndex:'courseNo'},
            {title:'课程Id',dataIndex:'courseId'},
            {title:'课程名称',dataIndex:'courseName'},
            {title:'课程学分',dataIndex:'courseCredits'},
            {title:'课程类型',dataIndex:'courseType'},
            {title:'课程性质',dataIndex:'courseNature'},
            {title:'开设学期',dataIndex:'openSemester'},
            {title:'考试单位',dataIndex:'examUnit'},
            {title:'课程分类',dataIndex:'courseCategory'},
            {title:'考试成绩',dataIndex:'score'},
            {title:'是否已注册',dataIndex:'isRegister'},
            {title:'是否获得学分',dataIndex:'hasCredits'},
        ];
        this.rebuildModules = this.rebuildModules.bind(this);
    }
    /**
     * 重构原始数据
     * */
    rebuildModules(modules){
        let result = [];
        modules.forEach(module=>{
            module.courses.forEach((o,i)=>{
                let temp = {
                    moduleName:module.moduleName,
                    minGradCredits:module.minGradCredits,
                    minCentCredits:module.minCentCredits
                };
                if(i===0)
                    temp['rows'] = module.courses.length;
                else
                    temp['rows'] = 0;
                result.push(objectAppend(temp,o));
            })
        });
        return result;
    }

    render(){
        const {moduleData,loading} = this.props;
        const modules = this.rebuildModules(moduleData);
        return (
            <div>
                <ExTable
                    loading={loading}
                    columns={this.columns}
                    dataSource={modules}
                    bordered={true}/>
            </div>
        )
    }
}
ModuleTable = connect(state=>{
    const {moduleData,loading} = state['school-daily/professional-rules'];
    return {moduleData,loading};
},null)(ModuleTable);

export default ModuleTable;

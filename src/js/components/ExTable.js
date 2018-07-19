import {Table, Input} from 'antd';

export default function ExTable(props){
    const {
        columns, scrollX, scrollY,
        pageNo, pageSize, dataCount, onPageChange, onPageSizeChange,tableSize
        } = props;
    //不传dataCount时则不分页
    let paginationOptions=false;
    if(dataCount){
        paginationOptions={
            showSizeChanger:true,
            showQuickJumper:true,
            pageSize,
            current:pageNo,
            total:dataCount,
            showTotal:(total, range) => `当前显示 ${range[0]}-${range[1]}，共 ${total} 条记录`
        };
        if(onPageChange){
            paginationOptions.onChange=onPageChange;
            paginationOptions.onShowSizeChange=onPageSizeChange;
        }
    }
    return (
        <Table rowKey="id"
               pagination={paginationOptions}
               scroll={{x:scrollX||Math.max(columns.reduce((a, b) => {
                   return {width:(a.width||200)+(b.width||200)}; //默认宽度，防止被挤到一块
               }).width, 1200), y:scrollY}}
               size={tableSize||'middle'}
               {...props}/>
    )
}

export function EditableCell({ editable, type, value, addonBefore, formatter, min, step, onChange }){
    return (
        <div>
            {editable
                ? <Input style={{ margin: '-5px 0' }}
                         type={type}
                         min={min}
                         step={step}
                         addonBefore={addonBefore}
                         value={value}
                         onChange={e => onChange(e.target.value)} />
                : formatter?formatter(value):value
            }
        </div>
    );
}

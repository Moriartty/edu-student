import TempComponent from './TempComponent';

var TempDetailComponent=React.createClass({
    propTypes:{
        data:React.PropTypes.object.isRequired,
        onChange:React.PropTypes.func.isRequired
    },
    /**
     * 处理值改变
     * @param groupIndex
     * @param comIndex
     * @param comId
     * @param comValue
     */
    handleChange:function(groupIndex, comIndex, comId, comValue){
        var com=this.props.data;
        com.groups[groupIndex][comIndex].value=comValue;
        this.props.onChange(com);
    },
    /**
     * 添加明细
     */
    handleItemAdd:function(){
        var com=this.props.data;
        com.groups.push(com.components);
        this.props.onChange(com);
    },
    /**
     * 删除明细
     * @param index
     */
    handleItemDel:function(index){
        if(confirm('确定要删除该明细项吗？')){
            var com=this.props.data;
            com.groups.splice(index, 1);
            this.props.onChange(com);
        }
    },
    render: function() {
        var data=this.props.data;
        //审批组件则必填
        var required=data.required;
        return (
            <div>
                {
                    data.groups&&data.groups.map(function(group, j){
                        return (
                            <div key={j}>
                                {j==0?<hr/>:null}
                                <div className="am-form-group">
                                    <label className="am-form-label am-u-sm-3">
                                        {required?<i className="am-text-danger">*</i>:null} {data.label}（{j+1}）
                                    </label>
                                    <div className="am-u-sm-8 am-u-end">
                                        {
                                            j>0
                                                ?(
                                                <a href="javascript:;" onClick={this.handleItemDel.bind(this, j)} className="am-text-danger am-fr">
                                                    <i className="am-icon-remove"/> 删除
                                                </a>
                                                ):null
                                        }
                                    </div>
                                </div>
                                {
                                    group.map(function(com, i){
                                        return <TempComponent key={i} data={com} onChange={this.handleChange.bind(this, j, i)}/>
                                    }.bind(this))
                                }
                                {
                                    j==data.groups.length-1?(
                                        <div className="am-form-group">
                                            <div className="am-u-sm-offset-3 am-u-sm-8 am-u-end">
                                                <a href="javascript:;" onClick={this.handleItemAdd} className="am-btn am-btn-xs am-btn-secondary">
                                                    <i className="am-icon-plus"/> {data.actionName}
                                                </a>
                                            </div>
                                        </div>
                                    ):null
                                }
                                <hr/>
                            </div>
                        )
                    }.bind(this))
                }
            </div>
        )
    }
});

module.exports = TempDetailComponent;
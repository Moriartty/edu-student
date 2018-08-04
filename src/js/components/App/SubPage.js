import {Button, Spin} from 'antd';

class SubPage extends React.Component{
    componentWillReceiveProps(nextProps){
        if(nextProps.show&&!this.props.show){
            //open
            const ele=document.querySelector('.ant-tabs-tabpane-active.page-pane');
            //滚动条回到顶部并隐藏
            this.scrollTop=ele.scrollTop; //保存初始位置
            ele.scrollTop=0;

            ele.style.overflow='hidden';
        }else if(!nextProps.show&&this.props.show){
            //close
            const ele=document.querySelector('.ant-tabs-tabpane-active.page-pane');
            ele.scrollTop=this.scrollTop; //还原
            ele.style.overflow='';
        }
    }

    render(){
        console.log('props',this.props);
        const {show, title, loading, children, bodyStyle, onClose} = this.props;
        return (
            <div className="sub-page display-flex flex-column" style={{display:show?'':'none'}}>
                <div className="hd">
                    <div className="actions">
                        <Button onClick={onClose} icon="rollback">返回</Button>
                    </div>
                    <span className="text-lg">{title}</span>
                </div>
                <div className="flex-grow-1 display-flex">
                    <div className="bd flex-grow-1" style={bodyStyle}>
                        {
                            loading ? (
                                <div style={{textAlign: 'center', paddingTop: 100}}><Spin/></div>
                            ) : children
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default SubPage

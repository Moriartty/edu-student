class Nl2br extends React.PureComponent {
    render(){
        const str=this.props.children;
        if(str){
            const exp=new RegExp('\n', 'g');
            return <div dangerouslySetInnerHTML={{__html:str.replace(exp, '<br/>')}}></div>
        }
        return str||null
    }
}

export default Nl2br
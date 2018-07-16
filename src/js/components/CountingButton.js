import {Button} from 'antd';

class CountingButton extends React.PureComponent {
    constructor(props){
        super(props);

        this.state={
            sec:0
        };

        this.handleClick=this.handleClick.bind(this);
    }

    componentWillUnmount(){
        clearInterval(this.interval);
    }

    handleClick(e){
        if(this.interval){
            clearInterval(this.interval);
        }

        this.props.onClick(e);
        this.setState({sec:this.props.sec});

        this.interval=setInterval(() => {
            const sec=this.state.sec-1;
            if(sec<=0){
                clearInterval(this.interval);
            }
            this.setState({sec:sec});
        }, 1000);
    }

    render(){
        const sec=this.state.sec;
        return (
            <Button onClick={this.handleClick}
                    type="primary"
                    disabled={this.props.disabled||sec>0}>
                {this.props.children}
                {sec>0&&<span>({sec}s)</span>}
            </Button>
        )
    }
}

export default CountingButton
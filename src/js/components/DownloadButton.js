import { Button } from 'antd';
import config from 'config/api';

class DownloadButton extends React.PureComponent {
    state = {
        loading:false
    };

    handleClick = () => {
        this.setState({loading:true});

        setTimeout(() => {
            this.setState({loading:false});
        }, 3000);
    };
    
    render(){
        const {url, params, children, mallApi} = this.props;
        let href=(mallApi?config.baseMallUrl:config.baseUrl)+url;
        if(params) {
            let arr = [];
            for (const name in params){
                params[name]&&arr.push(name+'='+params[name]);
            }
            if(arr.length){
                href+=('?'+arr.join('&'));
            }
        }
        return <Button href={href}
                       target="_blank"
                       icon="download"
                       onClick={this.handleClick}
                       loading={this.state.loading}>{children}</Button>
    }
}

export default DownloadButton
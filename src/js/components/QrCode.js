import QRCode from 'utils/qrcode';

class QrCode extends React.PureComponent {
    //static propTypes = {
    //    text:React.PropTypes.string.isRequired,
    //    size:React.PropTypes.number
    //};

    static defaultProps = {
        size:175
    };

    componentDidMount(){
        var qrcode = new QRCode(this.refs.qrcode, {
            width : this.props.size,//设置宽高
            height : this.props.size
        });
        qrcode.makeCode(this.props.text);
    }

    render(){
        return <span ref="qrcode"/>;
    }
}

export default QrCode;
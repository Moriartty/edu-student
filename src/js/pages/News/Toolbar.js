/**
 * Created by user on 18-7-19.
 */
import {Button} from 'antd';

class Toolbar extends React.Component{
    render(){
        const {onRefresh} = this.props;
        return (
             <div className="toolbar">
                <Button onClick={onRefresh} icon="sync">刷新</Button>
             </div>
        )
    }
}

export default Toolbar;

/**
 * Created by user on 18-7-19.
 */
import {Button,Input} from 'antd';
const Search = Input.Search;

class Toolbar extends React.Component{
    render(){
        const {onSearch} = this.props;
        return (
             <div className="toolbar">
                 <Search
                     placeholder="请输入关键字"
                     onSearch={value => onSearch(value)}
                     enterButton
                     style={{width:300}}
                     />
             </div>
        )
    }
}

export default Toolbar;

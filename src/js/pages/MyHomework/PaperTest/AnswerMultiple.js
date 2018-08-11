import {Checkbox} from 'antd';
import {fixUrl} from 'utils';

function AnswerMultiple(props) {
    const {type, list} = props;
    return (
        <Checkbox.Group className="checkbox-vertical" options={list.map((option, i) => ({
            value:i,
            label:(
                <span>
                    {String.fromCharCode(65+i)}、
                    {
                        type==2
                            ?(
                                <a href={fixUrl(option)} target="_blank">
                                    <Img src={option} style={{height:100}}/>
                                </a>
                            )
                            :option
                    }
                </span>
            )
        }))}/>
    )
}

export default AnswerMultiple;
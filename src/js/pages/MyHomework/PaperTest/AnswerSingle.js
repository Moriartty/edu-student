import {Radio} from 'antd';
import {fixUrl} from 'utils';

function AnswerSingle(props) {
    const {type, list} = props;
    return (
        <Radio.Group className="radio-vertical">
            {
                list.map((option, i) => (
                    <Radio key={i} value={i}>
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
                    </Radio>
                ))
            }
        </Radio.Group>
    )
}

export default AnswerSingle;
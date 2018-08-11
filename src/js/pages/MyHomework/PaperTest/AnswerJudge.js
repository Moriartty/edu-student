import {Radio} from 'antd';

function AnswerJudge(props) {
    return (
        <Radio.Group>
            <Radio value={1}>正确</Radio>
            <Radio value={0}>错误</Radio>
        </Radio.Group>
    )
}

export default AnswerJudge;
import {Tag, Input, Button, message} from 'antd';

const correct=<b className="text-green">✓</b>;
const wrong=<b className="text-danger">✗</b>;

class Result extends React.PureComponent {
    // submit = () => {
    //     const comment=this.refs.comment.textAreaRef.value;
    //     const score=this.refs.score.input.value;
    //     if(!score||!comment){
    //         message.warning('请输入评语和得分后提交！');
    //         return;
    //     }
    //     this.props.onCommentSubmit(score, comment);
    // };

    render(){
        const {type, data} = this.props;
        let answer,studentAnswer;
        switch (+type){
            case 1:
                answer=<Tag color="blue">{String.fromCharCode(+data.answer+65)}</Tag>;
                studentAnswer=data.studentAnswer&&<Tag color={data.answer===data.studentAnswer?'green':'red'}>{String.fromCharCode(+data.studentAnswer+65)}</Tag>;
                break;
            case 2:
                answer=data.answer.split(',').map((a, i) => <Tag key={i} color="blue">{String.fromCharCode(+a+65)}</Tag>);
                studentAnswer=data.studentAnswer&&data.studentAnswer.split(',').map((a, i) => <Tag key={i} color={data.answer===data.studentAnswer?'green':'red'}>{String.fromCharCode(+a+65)}</Tag>);
                break;
            case 3:
                answer=data.answer==1?correct:wrong;
                studentAnswer=data.studentAnswer&&data.studentAnswer==1?correct:wrong;
                break;
            case 4:
                answer=data.answer.split('^^^').map((a, i) => <Tag key={i} color="blue">{a}</Tag>);
                studentAnswer=data.studentAnswer&&data.studentAnswer.split('^^^').map((a, i) => <Tag key={i} color={data.answer===data.studentAnswer?'green':'red'}>{a}</Tag>);
                break;
            case 5:
            case 6:
            case 7:
            case 8:
                return (
                    <div className="margin-top">
                        <b>学生答案：</b>{data.studentAnswer}
                        <div className="margin-top" style={{display:'table'}}>
                            <b style={{display:'table-cell',verticalAlign:'top'}}>评语：</b>
                            {data.comment||''}
                        </div>
                        <div className="margin-top">
                            得分：
                            {data.comment
                                ?<b className="text-danger">{data.score}</b>
                                :''}
                        </div>
                    </div>
                )
        }
        return (
            <div className="margin-top">
                <span>标准答案：{answer}</span>
                <span className="margin-left-xl">学生答案：{studentAnswer}</span>
                <span className="margin-left-xl">得分：<b className="text-danger">{data.score}</b></span>
            </div>
        )
    }
}

export default Result

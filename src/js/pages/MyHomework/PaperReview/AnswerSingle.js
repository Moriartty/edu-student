import {fixUrl} from 'utils';

function AnswerSingle(props) {
    const {type, list} = props;
    return (
        <div>
            {
                list.map((option, i) => (
                    <div key={i} value={i} className="margin-v">
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
                    </div>
                ))
            }
        </div>
    )
}

export default AnswerSingle;
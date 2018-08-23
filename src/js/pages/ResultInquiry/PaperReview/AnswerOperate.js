import {Icon} from 'antd';
import {fixUrl} from "utils";

function AnswerOperate(props) {
    const srcList=props.srcList;
    return (
        <div>
            <div className="clearfix margin-bottom-xl">
                {
                    srcList&&srcList.length>0&&srcList.map((url, i) => (
                        <div key={i} className="input-file">
                            <label className="inner">
                                <a href={fixUrl(url)} target="_blank"><Icon type="file-text" style={{fontSize:40}}/></a>
                            </label>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default AnswerOperate;
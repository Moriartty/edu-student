import ajax from 'utils/ajax';
import {Spin} from 'antd';

import 'less/news-viewer';

function getUrlParams(name) {
    //指定参数获取
    var match = new RegExp('[?&]' + name + '=([^&]*)(&|$)').exec(location.search);
    return match && decodeURIComponent(match[1]);
}

class NewsViewer extends React.Component {
    state = {
        loading:false,
        title:'',
        time:'',
        author:'',
        readCount:0
    };

    componentDidMount(){
        const id=getUrlParams('id');
        if(id>0) {
            this.setState({loading:true});
            ajax.get('/news/info', {id}).then(info => {
                this.setState({
                    loading:false,
                    title: info.title,
                    time: info.updateTime || info.createTime,
                    author: info.author,
                    readCount: info.readCount
                });
                document.querySelector('#content').innerHTML = info.content;
                uParse('#content');
            });
        }
    }

    render() {
        const {loading, title, time, author, readCount} = this.state;
        return (
            <div className="news-viewer">
                <h1 className="header padding-v-lg"><img src={APP_LOGO} style={{height:50,marginTop:-5}}/> {APP_NAME}</h1>
                <Spin spinning={loading}>
                    <article className="article">
                        <h3 className="title">{title}</h3>
                        <div className="info">
                            <small>{time}</small>
                            <small className="margin-left-lg">{author}供稿</small>
                            <small className="margin-left-lg">阅读：{readCount}次</small>
                        </div>
                        <hr/>
                        <div id="content" className="content"></div>
                    </article>
                </Spin>
                <div className="text-center margin-v">
                    <span>版权所有 © 2018 All Rights Reserved {APP_NAME}</span>
                </div>
            </div>
        );
    }
}

module.exports = NewsViewer;
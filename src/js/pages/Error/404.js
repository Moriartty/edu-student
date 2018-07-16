import {Button, Layout} from 'antd';
const {Content} = Layout;
import img from 'img/err404.png';

class Err404 extends React.Component {
    render() {
        return (
            <Layout className="full-height">
                <Content className="page-error" style={{textAlign:'center'}}>
                    <div>
                        <img src={img}/>
                    </div>
                    <h1>404</h1>
                    <h3 className="am-text-xl">抱歉，你访问的页面不存在</h3>
                    <p className="am-link-muted">
                        <Button type="primary" href="/">返回首页</Button>
                    </p>
                </Content>
            </Layout>
        );
    }
}

module.exports = Err404;
import { Col, Row } from 'antd';
import Slider from './Slider';
import NewsListCard from './NewsListCard';

import 'less/home';

class Home extends React.Component {
    render(){
        return (
            <div className="home">
                <Row gutter={16}>
                    <Col span={12}>
                        <Slider/>
                    </Col>
                    <Col span={12}>
                        <NewsListCard category={1} title="公告通知"/>
                    </Col>
                </Row>
                <Row gutter={16} style={{marginTop:16}}>
                    <Col span={12}>
                        <NewsListCard category={2} title="学校新闻"/>
                    </Col>
                    <Col span={12}>
                        <NewsListCard category={3} title="校园文化活动"/>
                    </Col>
                </Row>
            </div>
        )
    }
}

module.exports = Home;
import {connect} from 'react-redux';
import action from 'actions/home';
import { Carousel } from 'antd';

class Slider extends React.Component{
    componentWillMount(){
        this.props.onLoad();
    }

    render(){
        const {list} = this.props;
        return (
            <Carousel autoplay>
                {
                    list.map((o, i) => (
                        <a key={i} href={`news-viewer.html?cid=${o.categoryId}&id=${o.id}`} target="_blank">
                            <Img src={o.img}/>
                            <div className="title">{o.title}</div>
                        </a>
                    ))
                }
            </Carousel>
        )
    }
}

Slider = connect(state => {
    const {sliderList:list} = state.home;
    return {list};
}, dispatch => ({
    onLoad(){
        dispatch(action.loadSliderNews());
    }
}))(Slider);

export default Slider
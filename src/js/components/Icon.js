import {Icon} from 'antd';

function ExIcon(props) {
    const {ex, style, className, type} = props;

    return ex?(
        <svg className={'icon '+(className||'')} style={style}>
            <use xlinkHref={'#icon-'+type}/>
        </svg>
    ):<Icon type={type} style={style} className={className}/>
}

export default ExIcon
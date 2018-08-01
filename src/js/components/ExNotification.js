import {notification} from 'antd';

const openNotificationWithIcon = (params) => {
    notification[params.type]({
        message: params.msg,
        description: params.desc,
        duration:params.duration
    });
};

export default openNotificationWithIcon

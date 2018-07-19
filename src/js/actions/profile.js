import ajax from 'utils/ajax';
let action={};

/**
 * 更新基本信息
 * @param data
 * @returns {Function}
 */
action.update = data => dispatch => ajax.post('/profile/update', data);

/**
 * 更新密码
 * @param data
 * @returns {Function}
 */
action.updatePassword = data => dispatch => ajax.post('/profile/update-password', data);

/**
 * 更新头像
 * @param data
 * @returns {Function}
 */
action.updateAvatar = data => dispatch => ajax.formData('/profile/update-avatar', data);

/**
 * 发送短信验证码
 * @param phone
 * @returns {Function}
 */
action.getCode = phone => dispatch => ajax.post('/profile/get-code', {phone});

/**
 * 验证短信验证码
 * @param phone
 * @param code
 * @returns {Function}
 */
action.checkCode = (phone, code) => dispatch => ajax.post('/profile/check-code', {phone, code});

export default action
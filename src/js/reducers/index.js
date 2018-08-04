/**
 * 每个模块对应一个reducer
 */
import {combineReducers} from 'redux';
import app from './app';
import home from './home';
import news from './news';
import schoolDaily from './school-daily';
// import feedback from './feedback';
//
// import teaching from './teaching';
import flow from './flow';
// import news from './news';
// import system from './system';

export default combineReducers({
    app,
    home,
    ...news,
    ...schoolDaily,
    // feedback,
    // ...teaching,
    ...flow,
    // ...news,
    // ...system
});

import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import RootReducer from './reducers';

const store=createStore(RootReducer, applyMiddleware(thunk));

export function getUserInfo(){
    return store.getState().app.userInfo;
}

export default store
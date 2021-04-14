import { combineReducers } from 'redux';
import reviewReducer from './reviewReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({ reviewReducer, userReducer });

export default rootReducer;

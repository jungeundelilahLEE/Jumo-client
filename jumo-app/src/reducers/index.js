import { combineReducers } from 'redux';
import reviewReducer from './reviewReducer';

const rootReducer = combineReducers({ reviewReducer });

export default rootReducer;

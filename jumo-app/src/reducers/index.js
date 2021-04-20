import { combineReducers } from 'redux';
import reviewReducer from './reviewReducer';
import userReducer from './userReducer';
import carouselReducer from './carouselReducer';
import signinReducer from './signinReducer';

const rootReducer = combineReducers({
  reviewReducer,
  userReducer,
  carouselReducer,
  signinReducer,
});

export default rootReducer;

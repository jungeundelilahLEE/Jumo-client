import { combineReducers } from 'redux';
import reviewReducer from './reviewReducer';
import userReducer from './userReducer';
import carouselReducer from './carouselReducer';

const rootReducer = combineReducers({
  reviewReducer,
  userReducer,
  carouselReducer,
});

export default rootReducer;

import { UPDATE_BEST } from '../actions';
import initialState from './initialState';

const carouselReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_BEST:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
export default carouselReducer;

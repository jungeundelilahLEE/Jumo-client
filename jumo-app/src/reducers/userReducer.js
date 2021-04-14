import { ADD_LIKE } from '../actions/index';
import initialState from './initialState';

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_LIKE:
      return {
        ...state,
        likesItem: [...state.likesItem, ...action.payload],
      };

    default:
      return state;
  }
};

export default userReducer;

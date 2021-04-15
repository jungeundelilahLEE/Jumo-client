import { ADD_LIKE, REMOVE_LIKE } from '../actions/index';
import initialState from './initialState';

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_LIKE:
      return {
        ...state,
        likesItem: [...state.likesItem, ...action.payload],
      };

    case REMOVE_LIKE:
      return {
        ...state,
        likesItem: state.likesItem.filter(
          el => el.itemId !== action.payload.itemId,
        ),
      };

    default:
      return state;
  }
};

export default userReducer;

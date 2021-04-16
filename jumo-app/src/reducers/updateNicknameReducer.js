// eslint-disable-next-line import/named
import { UPDATE_NICKNAME } from '../actions/index';
import initialState from './initialState';

const updateNicknameReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NICKNAME:
      return {
        ...state,
        user: {
          username: state.user.username,
        },
      };

    default:
      return state;
  }
};

export default updateNicknameReducer;

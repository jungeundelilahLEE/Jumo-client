import { ADD_REVIEW, REMOVE_REVIEW, UPDATE_REVIEW } from '../actions/index';
import initialState from './initialState';

const reviewReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_REVIEW:
      return {
        ...state,
        reviewList: [...state.reviewList, { ...action.payload.review }],
      };

    case REMOVE_REVIEW:
      return {
        ...state,
        reviewList: state.reviewList.filter(
          el => el.id !== action.payload.reviewId,
        ),
      };

    case UPDATE_REVIEW:
      return {
        ...state,
        reviewList: [
          ...state.reviewList,
          state.reviewList.map(el => {
            const review = el;
            if (review.id === action.payload.reviewId) {
              review.comment = action.payload.comment;
            }
            return review;
          }),
        ],
      };

    default:
      return state;
  }
};

export default reviewReducer;

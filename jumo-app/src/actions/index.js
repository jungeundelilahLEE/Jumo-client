// 로그인
export const SIGN_IN = 'SIGN_IN';
export const SIGN_OUT = 'SIGN_OUT';
export const UPDATE_TOKEN = 'UPDATE_TOKEN';

// 리뷰
export const ADD_REVIEW = 'ADD_REVIEW';
export const REMOVE_REVIEW = 'REMOVE_REVIEW';
export const UPDATE_REVIEW = 'UPDATE_REVIEW';

// LIKE
export const ADD_LIKE = 'ADD_LIKE';
export const REMOVE_LIKE = 'REMOVE_LIKE';

export const signIn = user => {
  return {
    type: SIGN_IN,
    payload: {
      user,
    },
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT,
    payload: {
      id: null,
      userName: '',
      email: '',
    },
  };
};

export const addReview = review => {
  return {
    type: ADD_REVIEW,
    payload: {
      review,
    },
  };
};

export const removeReview = reviewId => {
  return {
    type: REMOVE_REVIEW,
    payload: {
      reviewId,
    },
  };
};

export const editReview = (reviewId, comment) => {
  return {
    type: UPDATE_REVIEW,
    payload: {
      reviewId,
      comment,
    },
  };
};

export const addLike = itemId => {
  return {
    type: ADD_LIKE,
    payload: [itemId],
  };
};

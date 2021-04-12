// 로그인
export const SIGN_IN = 'SIGN_IN';
export const SIGN_OUT = 'SIGN_OUT';
export const UPDATE_TOKEN = 'UPDATE_TOKEN';

// 리뷰
export const ADD_REVIEW = 'ADD_REVIEW';
export const UPDATE_REVIEW = 'UPDATE_REVIEW';
export const DELETE_REVIEW = 'DELETE_REVIEW';

// LIKE
export const ADD_LIKE = 'ADD_LIKE';
export const DELETE_LIKE = 'DELETE_LIKE';

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

export const addReview = (id, star, comment, image, userId, userName) => {
  return {
    type: ADD_REVIEW,
    payload: {
      reviews: { id, star, comment, image, userId, userName },
    },
  };
};

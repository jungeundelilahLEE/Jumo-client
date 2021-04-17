// 로그인
export const SIGN_IN = 'SIGN_IN';
export const SIGN_OUT = 'SIGN_OUT';
export const UPDATE_TOKEN = 'UPDATE_TOKEN';

// 리뷰
export const ADD_REVIEW = 'ADD_REVIEW';
export const REMOVE_REVIEW = 'REMOVE_REVIEW';
export const UPDATE_REVIEW = 'UPDATE_REVIEW';
export const UPDATE_REVIEWLIST = 'UPDATE_REVIEWLIST';

// LIKE
export const ADD_LIKE = 'ADD_LIKE';
export const REMOVE_LIKE = 'REMOVE_LIKE';

// 유저네임
export const EDIT_NICKNAME = 'EDIT_NICKNAME';

// 베스트 막걸리
export const UPDATE_BEST = 'UPDATE_BEST';

export const editNickname = username => {
  return {
    type: EDIT_NICKNAME,
    payload: {
      user: { username },
    },
  };
};

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

export const updateReivewList = review => {
  return {
    type: UPDATE_REVIEWLIST,
    payload: {
      review,
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

export const removeLike = itemId => {
  return {
    type: REMOVE_LIKE,
    payload: [itemId],
  };
};

export const updateCarousel = bestItem => {
  return {
    type: UPDATE_BEST,
    payload: { bestList: [...bestItem] },
  };
};

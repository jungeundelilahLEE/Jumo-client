// eslint-disable-next-line import/named
import { IS_LOGIN } from '../actions/index';
import initialState from './initialState';

// switch 문
// action.type을 변수라고 생각하고
// case IS_LOGIN  === if (action.type = IS_LOGIN) 과 같음
// case문에서 변수 action.type과 일치하는 값을 찾으면, 해당 case 문 아래 코드 실행
// break 문을 만나거나, switch문이 끝나면

// eslint-disable-next-line consistent-return
const isLoginReducer = (state = initialState, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case IS_LOGIN:
      return {
        ...state,
        // accessToken: state.accessToken,
        isLogin: true,
        // user: {
        //   id: state.user.id,
        //   email: state.user.email,
        //   username: state.user.username,
        // },
      };
  }
};

export default isLoginReducer;

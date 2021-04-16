import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { updateNickname } from '../actions/index';
// import pages에서 가져오기

const UpdateNickname = () => {
  const state = useSelector(state => state.updateNicknameReducer);
  const { isLogin, user } = state;
  const dispatch = useDispatch();

  const editHandler = () => {
    console.log('editHandler');
  };

  return (
    <div>
      <Button
        editHandler={() => {
          editHandler();
        }}
      >
        edit
      </Button>
    </div>
  );
};

const Button = styled.button`
  background: red;
`;

export default UpdateNickname;

/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { editNickname } from '../actions';

/* eslint-disable react/prop-types */
const UsernameEditBtn = ({ isLogin, user }) => {
  // 얘들은 Mypage에서 넘어온 props고,
  const dispatch = useDispatch();
  // const { id, email, username } = user;
  const [inputNickname, setInputNickname] = useState('');
  const [edit, setEdit] = useState(false);

  const handleInputNickname = e => {
    setInputNickname(e.target.value);
  };
  const handleEditBtn = () => {
    setEdit(true);
  };
  const handleSaveBtn = () => {
    if (window.confirm('닉네임을 수정하시겠습니까?') === false) {
      return;
    }
    setEdit(false);
    dispatch(editNickname(inputNickname));
  };
  const handleCancelBtn = () => {
    setEdit(false);
  };

  return (
    <div>
      {edit === false ? (
        <>
          <MyProfileEditBtn onClick={() => handleEditBtn()}>
            edit
          </MyProfileEditBtn>
        </>
      ) : (
        <>
          <MyProfileContentInputNickname
            maxLength={10}
            onChange={handleInputNickname}
            placeholder="Write your new nickname"
          />
          <MyProfileEditBtn onClick={() => handleSaveBtn(user.username)}>
            save
          </MyProfileEditBtn>
          <MyProfileCancleBtn onClick={() => handleCancelBtn()}>
            cancel
          </MyProfileCancleBtn>
        </>
      )}
    </div>
  );
};

const MyProfileContentInputNickname = styled.input`
  display: flex;
  background-color: pink;
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  margin: 0;
  @media screen and (min-width: 480px) and (max-width: 768px) {
    // 테블릿
    display: flex;
    flex-direction: column;
    margin: 0px;
  }
  @media screen and (min-width: 769px) {
    // 데스크탑
    display: flex;
    flex-direction: column;
    margin-left: 50px;
  }
`;
const MyProfile = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  margin: 0px;
  font-size: 20px;
  background: linear-gradient(to bottom, #c29b86, white);
  @media screen and (min-width: 480px) and (max-width: 768px) {
    // 테블릿
    display: flex;
    flex-direction: column;
    background-color: orange;
    width: 100vw;
    height: 100vh;
    margin: 0px;
    font-size: 20px;
  }
  @media screen and (min-width: 769px) {
    // 데스크탑
    display: flex;
    flex-direction: column;
    background-color: #c29b86;
    width: 19vw;
    height: 50vh;
    margin-left: 9rem;
    margin-top: 40px; // header height ref
    margin-bottom: 6rem;
    font-size: 20px;
  }
`;
const MyProfileContent = styled.li`
  display: flex;
  flex-direction: column;
  list-style: none;
  color: black;
  font-weight: bold;
  align-items: center;
  font-size: 0.9em;
  margin: 0.5em;
`;
const MyProfileEditBtn = styled.button`
  display: flex;
  justify-content: center;
  background: #293848;
  color: white;
`;
const MyprofileDeleteBtn = styled.button`
  display: flex;
  justify-content: center;
  background: blue;
  color: white;
`;
const MyProfileCancleBtn = styled.button`
  display: flex;
  justify-content: center;
  background: #293848;
  color: orange;
`;

export default UsernameEditBtn;

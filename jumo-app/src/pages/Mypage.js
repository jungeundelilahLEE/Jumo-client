/* eslint-disable no-else-return */
/* eslint-disable import/no-cycle */
import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { signIn } from '../actions';
import server, { clientURL } from '../apis/server';

import UsernameEditBtn from './UsernameEditBtn';
import MypageMyReviews from './MypageMyReviews';
import MypageMyFavs from './MypageMyFavs';
import MyFavsBoard1 from './MyFavsBoard1';
import MyFavsCard from './MyFavsCard1';
import LikeDeleteBtn from './LikeDeleteBtn';
import MyFavs from './MyFavs';

const Mypage = ({ channelHandler, navHeader, setNavHeader }) => {
  const state = useSelector(states => states.signinReducer);
  const { isLogin, user } = state;
  const { id, username, email, createdAt } = user;
  const [formDate, setFormDate] = useState('');
  const [save, setSave] = useState(false);
  const [edit, setEdit] = useState(false);
  const dispatch = useDispatch();
  const accessToken = localStorage.getItem('accessToken');

  const dateFormat = (origin = '') => {
    if (
      origin.length &&
      origin !== undefined &&
      origin !== null &&
      typeof origin === 'string'
    ) {
      const format = origin.slice(0, 10).split('-');
      const numFormat = [...format];
      const result = `${numFormat[0]}년 ${Number(numFormat[1])}월 ${
        numFormat[2]
      }일`;
      setFormDate(result);
    }
  };

  const getUserInfo = async () => {
    try {
      const res = await server.get('/user/info', {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      const { data } = res.data;

      dispatch(signIn(data));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (!navHeader) {
      setNavHeader(true);
    }
    channelHandler('Mypage');
    getUserInfo();
  }, []);

  useEffect(() => {
    dateFormat(createdAt);
  }, [createdAt]);

  const updateUserInfo = async () => {
    try {
      const res = await server.get('/user/info', {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      const { data } = res.data;
      dispatch(signIn(data));
      // localStorage.setItem('accessToken', newToken);
    } catch (err) {
      console.log(err);
    }
  };

  const submitUserName = async inputNickname => {
    if (inputNickname === '') {
      alert('변경할 닉네임을 입력해주세요.');
      return;
    } else if (inputNickname === username) {
      alert('새로운 닉네임을 입력해주세요.');
      return;
    }

    try {
      const changeUsername = await server
        .put(
          '/user/update',
          { username: inputNickname },
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          },
        )
        .then(res => res.data.data)
        .then(data => updateUserInfo());

      setSave(true);
      setEdit(false);
      alert('닉네임이 변경되었습니다.');
      return;
    } catch (err) {
      console.log(err);
    }
  };

  const handleEditBtn = () => {
    setEdit(true);
    setSave(false);
  };

  const handleCancelBtn = () => {
    setEdit(false);
  };

  // reviews, favs 버튼 클릭
  const [clicked, setClicked] = useState(false);
  const HandleClick = () => {
    setClicked(!clicked);
    console.log('changed');
  };

  return (
    <div>
      {isLogin === 'true' ? (
        ''
      ) : (
        <div>
          <Section>
            <Top>
              <MyProfile>
                <MyProfileTitle>MY&nbsp;PROFILE</MyProfileTitle>
                <Div>
                  <MyProfileList>NAME</MyProfileList>
                  {/* <MyProfileContent>{user.username}</MyProfileContent> */}
                  {/* //!어디있지? */}
                  <UsernameEditBtn
                    username={username}
                    submitUserName={submitUserName}
                    handleEditBtn={handleEditBtn}
                    handleCancelBtn={handleCancelBtn}
                    save={save}
                    edit={edit}
                  />
                  <MyProfileList>EMAIL</MyProfileList>
                  <MyProfileContent>{email}</MyProfileContent>
                  <MyProfileList>REGISTERED DATE</MyProfileList>
                  <MyProfileContent>{formDate}</MyProfileContent>
                </Div>
              </MyProfile>

              {/* <MyProfileHello>Hello {username}! Wellcome back!</MyProfileHello> */}
              {/* <G>
                <MyProfileHello1>H</MyProfileHello1>
                <MyProfileHello11>e</MyProfileHello11>
                <MyProfileHello111>l</MyProfileHello111>
                <MyProfileHello1111>l</MyProfileHello1111>
                <MyProfileHello11111>o</MyProfileHello11111>
                <MyProfileHello2>{user.username}</MyProfileHello2>
                <MyProfileHello3>Wellcome</MyProfileHello3>
                <MyProfileHello33>back!</MyProfileHello33>
              </G> */}
            </Top>

            {clicked === false ? (
              <>
                <MyBtn>
                  <MyReviewBtn clicked={clicked} onClick={HandleClick}>
                    MY REVIEWS
                  </MyReviewBtn>
                  <MyFavBtn clicked={clicked} onClick={HandleClick}>
                    MY FAVORITES
                  </MyFavBtn>
                </MyBtn>

                <StyledMyReviews>
                  <MypageMyReviews isLogin={isLogin} user={user} />
                </StyledMyReviews>
              </>
            ) : (
              <>
                <MyBtn>
                  <MyReviewBtn clicked={clicked} onClick={HandleClick}>
                    MY REVIEWS
                  </MyReviewBtn>
                  <MyFavBtn clicked={clicked} onClick={HandleClick}>
                    MY FAVORITES
                  </MyFavBtn>
                </MyBtn>

                <StyledMyFavs>
                  <MyFavsBoard1>
                    <MyFavsCard draggable="true">
                      {/* <MyFavsContentArea> */}
                      <MypageMyFavs />
                      {/* </MyFavsContentArea> */}
                    </MyFavsCard>
                  </MyFavsBoard1>
                  <LikeDeleteBtn user={user} isLogin={isLogin} />
                </StyledMyFavs>
              </>
            )}

            {/* <MyBtn>
              <MyReviewBtn>MY REVIEWS</MyReviewBtn>
              <MyFavBtn>MY FAVORITES</MyFavBtn>
            </MyBtn>

            <MyReviews>
              <MypageMyReviews />
            </MyReviews>

            <MyFavs />

            <LikeDeleteBtn user={user} isLogin={isLogin} /> */}
          </Section>
        </div>
      )}
    </div>
  );
};

const Div = styled.div`
  margin-bottom: 3em;
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  margin: 0;
  @media ${props => props.theme.tablet} {
    // 테블릿
    display: flex;
    flex-direction: column;
    margin: 0px;
  }
  @media ${props => props.theme.desktop} {
    // 데스크탑
    display: flex;
    /* flex-direction: column; */
    margin-left: 50px;
  }
`;
const Top = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
  /* border: 1px dashed purple; */
`;
const MyProfile = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  margin: 0px;
  font-size: 20px;
  background: linear-gradient(to bottom, #c29b86, white);
  align-items: center;
  @media ${props => props.theme.tablet} {
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100%;
    margin: 0px;
    font-size: 20px;
    animation-name: showItem;
    animation-duration: 3s;
    animation-iteration-count: 1;
    @keyframes showItem {
      0% {
        transform: translateY(-100px);
        opacity: 0;
      }
      100% {
        transform: translateY(0px);
        opacity: 1;
      }
    }
  }
  @media ${props => props.theme.desktop} {
    border: none;
    display: flex;
    flex-direction: column;
    background-color: #c29b86;
    width: 17vw;
    height: 55vh;
    margin-left: 9rem;
    margin-top: 40px; // header height ref
    margin-bottom: 6rem;
    position: fixed;
    /* padding-bottom: 1em; */
    /* border: 1px solid red; */
    font-size: 20px;
    z-index: -1;
    animation-name: showItem;
    animation-duration: 3s;
    animation-iteration-count: 1;
    @keyframes showItem {
      0% {
        transform: translateY(-100px);
        opacity: 0;
      }
      100% {
        transform: translateY(0px);
        opacity: 1;
      }
    }
  }
`;

const MyProfileTitle = styled.div`
  display: flex;
  flex-direction: row;
  color: #e7d1bf;
  font-size: 2.5em;
  align-items: center;
  justify-content: center;
  margin-top: 70%;
  margin-bottom: 20%;
  text-shadow: 7px 12px 9px #707070;
  @media ${props => props.theme.tablet} {
    text-shadow: 7px 12px 9px #707070;
  }
  @media ${props => props.theme.tablet} {
    // 테블릿
    display: flex;
    text-indent: none;
    margin-top: 25%;
    margin-bottom: 20%;
    font-size: 3.6em;
    /* text-shadow: 17px 12px 9px #707070; */
  }
  @media ${props => props.theme.desktop} {
    // 데스크탑
    display: flex;
    flex-direction: row;
    text-indent: 2em;
    margin-top: 20%;
    margin-bottom: 12%;
    font-size: 3.8em;
    text-indent: 3em;
    text-shadow: none;

    position: relative;
    animation: move 5s infinite;
    @keyframes move {
      from {
        left: 0px;
      }
      to {
        left: 200px;
        text-shadow: 17px 12px 9px #707070;
      }
    }
  }
`;
const MyProfileList = styled.li`
  display: flex;
  flex-direction: column;
  list-style: none;
  color: #293848;
  /* font-weight: bold; */
  align-items: center;
  font-size: 1em;
  text-decoration: underline;
  text-underline-position: under;
  text-decoration-color: rgba(41, 56, 72, 0.2);
  margin-top: 1em;
  /* word-spacing: 5px; */
  letter-spacing: 3px;
  @media ${props => props.theme.tablet} {
    font-size: 1.4em;
  }
  @media ${props => props.theme.desktop} {
    font-size: 1.2em;
    margin-top: 1.3em;
    margin-bottom: 0.8em;
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
  /* margin-bottom: 5em; */
  @media ${props => props.theme.tablet} {
    font-size: 1.2em;
  }
  @media ${props => props.theme.desktop} {
    font-size: 1.1em;
  }
`;

// TODO - Btn
//! not yet
const MyBtn = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
  justify-content: center;

  /* align-items: center; */
  /* justify-content: flex-end; */
  /* border: 1px solid red; */
  @media ${props => props.theme.tablet} {
    display: flex;
    flex-direction: row;
    width: 100vw;
    justify-content: center;
  }
  @media ${props => props.theme.desktop} {
    display: flex;
    flex-direction: row;
    width: 60vw;
    /* margin-top: 20em; */
    justify-content: flex-start;
    /* border: 1px solid red; */
    margin-left: 35%;
    margin-right: 0;
    margin-top: 20em;
    align-items: baseline;
  }
`;
//! ok
const MyReviewBtn = styled.button`
  display: flex;
  width: 50vw;
  height: 8.5vh;
  justify-content: center;
  align-items: center;

  /* align-self: baseline;  */
  /* align-items : baseline; */
  box-shadow: inset -2px 5px 5px #ccb49f;
  background-color: #e7d1bf;
  color: white;
  font-size: 2.2em;
  font-weight: 500;
  text-shadow: 2.5px 5px 4px #a39283;
  border: 2px solid #e7d1bf;
  z-index: 1;
  @media ${props => props.theme.tablet} {
    display: flex;
    font-size: 2.5em;
  }
  @media ${props => props.theme.desktop} {
    display: flex;
    font-size: 2.2em;
    width: 25vw;
    height: 8.5vh;
    &:hover {
      display: flex;
      font-size: 2.5em;
      width: 26vw;
      height: 9.3vh;
      color: #293848;
    }
  }
`;
const BlackFont = css`
  color: black;
  width: 500px;
  height: 500px;
  background: pink;
`;
const StyledMyFavs = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #c29b86;
  width: 100vw;
  height: 100vh;
  padding-bottom: 5em;
  justify-content: center;
  align-items: center;
  /* border: 3px solid black; */
  @media ${props => props.theme.tablet} {
    display: flex;
    flex-direction: row;
    width: 100vw;
  }
  @media ${props => props.theme.desktop} {
    display: flex;
    flex-direction: row;
    width: 65vw;
    margin-left: 35%;
    justify-content: center;
    /* border: 10px solid red; */
  }
`;
//! !!!!!!!!!!!!!!!!!!!! 클릭 버튼시 바꾸는거.....
const MyFavBtn = styled(MyReviewBtn)`
  display: flex;
  width: 50vw;
  height: 8.5vh;
  justify-content: center;
  align-items: center;
  background-color: white;
  color: #c29b86;
  /* align-self: baseline;  */
  /* align-items : baseline; */
  box-shadow: inset -2px 3px 5px #ccb49f;
  /* background-color: #e7d1bf;
  color: white; */
  font-size: 2.2em;
  font-weight: 500;
  text-shadow: 2.5px 5px 4px #c4b7ab;
  border: 2px solid #c29b86;
  z-index: 1;
  ${props => (props.clicked ? StyledMyFavs : '')}

  @media ${props => props.theme.tablet} {
    display: flex;
    font-size: 2.5em;
  }
  @media ${props => props.theme.desktop} {
    display: flex;
    font-size: 2.2em;
    width: 25vw;
    height: 8.5vh;
    &:hover {
      display: flex;
      font-size: 2.5em;
      width: 26vw;
      height: 9.3vh;
      color: #293848;
    }
  }
`;

const StyledMyReviews = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #e7d1bf;
  width: 100vw;
  padding-bottom: 5em;
  justify-content: center;
  /* border: 3px solid black; */
  @media ${props => props.theme.tablet} {
    display: flex;
    flex-direction: row;
    width: 100vw;
  }
  @media ${props => props.theme.desktop} {
    display: flex;
    flex-direction: row;
    width: 65vw;
    margin-left: 35%;
    justify-content: center;
    /* border: 10px solid red; */
  }
`;

//! 여기요 ---------------------------------------------------
const G = styled.div`
  @media ${props => props.theme.desktop} {
    display: flex;
    text-align: center;
    cursor: pointer;
    user-select: none;
    margin-top: 20em;
    margin-left: 30%;
    /* height: 40vh; */
    border: 10px solid black;
    overflow: hidden;
  }
  @media ${props => props.theme.mobile} {
    display: none;
    width: 0;
    height: 0;
  }
  @media ${props => props.theme.tablet} {
    width: 0;
    height: 0;
    display: flex;
  }
`;
const MyProfileHello1 = styled.div`
  display: flex;
  /* opacity: 1; */
  font-size: 4em;
  margin-left: 5em;
  height: 2em;
  /* margin-left: 0.2em; */
  background: linear-gradient(to right, #ee82ee, #ffb6c1);
  /* border-right: 1px solid #eb57eb; */
  /* box-shadow: 10px 5px 5px rgba(255, 182, 193, 0.3); */
  /* box-shadow: 0px 100px 10px rgba(255, 182, 193, 0.3); */
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  animation-name: a;
  animation-duration: 4s;
  animation-iteration-count: 1;
  @keyframes a {
    0% {
      transform: translateX(2000px);
      box-shadow: 3px 3px 13px 3px #ee82ee;
      /* border-right: 19px solid #ee82ee; */
      color: #ee82ee;
      opacity: 0.1;
    }
    40% {
      transform: translateX(20px);
      /* border-right: 10px solid #eb57eb; */
      color: #eb57eb;
      opacity: 0.4;
    }
  }
`;

const MyProfileHello11 = styled.div`
  display: flex;
  font-size: 4em;
  height: 2em;
  margin-left: 0.2em;
  background: linear-gradient(to right, #ee82ee, #ffb6c1);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  animation-name: a;
  animation-duration: 4.5s;
  animation-iteration-count: 1;
  @keyframes a {
    0% {
      transform: translateX(2000px);
      box-shadow: 3px 3px 13px 3px #ee82ee;
      color: #ee82ee;
      opacity: 0.1;
    }
    40% {
      transform: translateX(20px);
      color: #eb57eb;
      opacity: 0.4;
    }
  }
`;

const MyProfileHello111 = styled.div`
  display: flex;
  font-size: 4em;
  height: 2em;
  margin-left: 0.2em;
  background: linear-gradient(to right, #ee82ee, #ffb6c1);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  animation-name: a;
  animation-duration: 5s;
  animation-iteration-count: 1;
  @keyframes a {
    0% {
      transform: translateX(2000px);
      box-shadow: 3px 3px 13px 3px #ee82ee;
      color: #ee82ee;
      opacity: 0.1;
    }
    40% {
      transform: translateX(20px);
      color: #eb57eb;
      opacity: 0.4;
    }
  }
`;
const MyProfileHello1111 = styled.div`
  display: flex;
  font-size: 4em;
  height: 2em;
  margin-left: 0.2em;
  background: linear-gradient(to right, #ee82ee, #ffb6c1);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  animation-name: a;
  animation-duration: 5.5s;
  animation-iteration-count: 1;
  @keyframes a {
    0% {
      transform: translateX(2000px);
      box-shadow: 3px 3px 13px 3px #ee82ee;
      color: #ee82ee;
      opacity: 0.1;
    }
    40% {
      transform: translateX(20px);
      color: #eb57eb;
      opacity: 0.4;
    }
  }
`;
const MyProfileHello11111 = styled.div`
  display: flex;
  font-size: 4em;
  height: 2em;
  margin-left: 0.2em;
  background: linear-gradient(to right, #ee82ee, #ffb6c1);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  animation-name: a;
  animation-duration: 6s;
  animation-iteration-count: 1;
  @keyframes a {
    0% {
      transform: translateX(2000px);
      /* box-shadow: 3px 3px 13px 3px #ee82ee; */
      color: #ee82ee;
      opacity: 0.1;
    }
    40% {
      transform: translateX(30px);
      color: #eb57eb;
      opacity: 0.4;
    }
  }
`;
// const MyProfileHello111 = styled.div`
//   display: flex;
//   opacity: 1;
//   font-size: 5em;
//   margin-top: 8.5%;
//   /* margin-left: 4em; */

//   animation-name: a;
//   animation-duration: 3s;
//   animation-iteration-count: 1;
//   @keyframes a {
//     0% {
//       transform: translateX(2000px);
//       border: 1px solid orange;
//       color: purple;
//     }
//     10% {
//       transform: translateX(20px);
//       border: 1px solid yellow;
//       color: red;
//     }
//   }
// `;

const MyProfileHello2 = styled.div`
  display: flex;
  font-size: 3em;
  margin-left: 0.5em;
  height: 5em;
  width: 15vw;
  letter-spacing: 2px; //! ?
  /* box-shadow: 5px 4px 10px grey; */
  /* padding: 2px 4px; */
  background: linear-gradient(to right, #ee82ee, #ffb6c1);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  animation-name: aa;
  animation-duration: 6s;
  animation-iteration-count: 1;
  @keyframes aa {
    0% {
      transform: translateY(-1000px);
      color: #ee82ee;
      opacity: 0.1;
      /* border: 1px solid orange; */
    }
    40% {
      /* right: 0px; */
      transform: translateY(-20px);
      color: #eb57eb;
      opacity: 0.4;
      /* border: 1px solid yellow; */
    }
  }
  @media ${props => props.theme.tablet} {
    width: 0;
    height: 0;
    display: none;
  }
  @media ${props => props.theme.mobile} {
    width: 0;
    height: 0;
    display: none;
  }
`;
const MyProfileHello3 = styled.div`
  display: flex;
  font-size: 2.5em;
  height: 2em;
  margin-left: 0.2em;
  background: linear-gradient(to right, #ee82ee, #cccccc);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  animation-name: a;
  animation-duration: 6s;
  animation-iteration-count: 1;
  @keyframes a {
    0% {
      transform: translateX(2000px);
      /* box-shadow: 3px 3px 13px 3px #ee82ee; */
      color: #ee82ee;
      opacity: 0.1;
    }
    40% {
      transform: translateX(30px);
      color: #eb57eb;
      opacity: 0.4;
    }
  }
`;
const MyProfileHello33 = styled.div`
  display: flex;
  font-size: 2.5em;
  height: 2em;
  margin-left: 0.2em;
  background: linear-gradient(to right, #ee82ee, #ffb6c1);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  animation-name: a;
  animation-duration: 6s;
  animation-iteration-count: 1;
  @keyframes a {
    0% {
      transform: translateX(2000px);
      /* box-shadow: 3px 3px 13px 3px #ee82ee; */
      color: #ee82ee;
      opacity: 0.1;
    }
    40% {
      transform: translateX(30px);
      color: #eb57eb;
      opacity: 0.4;
    }
  }
`;
//! 여기까지

export default Mypage;

// TODO -----------------------------------------------///////////////////////////////////////////

// // const MyFavsBoard = styled.div`
// //   display: flex;
// //   border: 5px solid yellow;
// // `;
// // const MyFavsCard = styled.div`
// //   display: flex;
// //   cursor: pointer;
// //   border: 3px solid orange;
// // `;

// const Section = styled.section`
//   display: flex;
//   flex-direction: column;
//   margin: 0;
//   @media screen and (min-width: 480px) and (max-width: 768px) {
//     // 테블릿
//     display: flex;
//     flex-direction: column;
//     margin: 0px;
//   }
//   @media screen and (min-width: 769px) {
//     // 데스크탑
//     display: flex;
//     flex-direction: column;
//     margin-left: 50px;
//   }
// `;
// const MyProfile = styled.div`
//   display: flex;
//   flex-direction: column;
//   width: 100vw;
//   height: 100vh;
//   margin: 0px;
//   font-size: 20px;
//   background: linear-gradient(to bottom, #c29b86, white);
//   @media screen and (min-width: 480px) and (max-width: 768px) {
//     // 테블릿
//     display: flex;
//     flex-direction: column;
//     /* background-color : #C29B86; */
//     background-color: orange;
//     width: 100vw;
//     height: 100vh;
//     margin: 0px;
//     font-size: 20px;
//   }
//   @media screen and (min-width: 769px) {
//     // 데스크탑
//     display: flex;
//     flex-direction: column;
//     background-color: #c29b86;
//     width: 19vw;
//     height: 50vh;
//     margin-left: 9rem;
//     margin-top: 40px; // header height ref
//     margin-bottom: 6rem;
//     font-size: 20px;
//   }
// `;
// const MyProfileTitle = styled.div`
//   display: flex;
//   flex-direction: row;
//   color: #e7d1bf;
//   font-size: 2.5em;
//   align-items: center;
//   justify-content: center;
//   margin-top: 40%;
//   margin-bottom: 15%;
//   @media screen and (min-width: 480px) and (max-width: 768px) {
//     // 테블릿
//     display: flex;
//     text-indent: none;
//     margin-top: 40%;
//     margin-bottom: 15%;
//     font-size: 3em;
//   }
//   @media screen and (min-width: 769px) {
//     // 데스크탑
//     display: flex;
//     flex-direction: row;
//     text-indent: 2em;
//     margin-top: 20%;
//     margin-bottom: 30%;
//     font-size: 3em;
//     text-indent: 4em;
//   }
// `;
// const MyProfileList = styled.li`
//   display: flex;
//   flex-direction: column;
//   list-style: none;
//   color: #293848;
//   background-color: pink;
//   font-weight: bold;
//   align-items: center;
//   font-size: 1em;
// `;
// const MyProfileContent = styled.li`
//   display: flex;
//   flex-direction: column;
//   list-style: none;
//   color: black;
//   font-weight: bold;
//   align-items: center;
//   font-size: 0.9em;
//   margin: 0.5em;
// `;
// const MyProfileEditBtn = styled.button`
//   display: flex;
//   justify-content: center;
//   background: #293848;
//   color: white;
// `;

// const MyProfileHello = styled.div`
//   display: flex;
//   color: deeppink;
// `;

// const MyBtn = styled.div`
//   display: flex;
//   flex-direction: row;
//   /* align-items : baseline; */
//   /* align-content : baseline; */

//   /* flex-wrap : wrap; */
// `;
// const MyReviewBtn = styled.button`
//   display: flex;
//   width: 53vw;
//   height: 10vh;
//   justify-content: center;
//   align-items: center;
//   /* align-self: baseline;  */
//   /* align-items : baseline; */
//   box-shadow: inset -2px 5px 5px #ccb49f;
//   background-color: #e7d1bf;
//   color: white;
//   font-size: 1.6em;
//   font-weight: 500;
//   text-shadow: 2.5px 5px 4px #a39283;
//   border: 2px solid #e7d1bf;
//   z-index: 1;
//   @media screen and (min-width: 480px) and (max-width: 768px) {
//     // 테블릿
//     display: flex;
//   }
//   @media screen and (min-width: 769px) {
//     // 데스크탑
//   }
// `;
// const MyFavBtn = styled.button`
//   display: flex;
//   width: 47vw;
//   height: 10vh;
//   justify-content: center;
//   align-items: center;
//   align-self: center;
//   background-color: white;
//   color: #c29b86;
//   font-size: 1.4em;
//   font-weight: 500;
//   border: 2px solid #c29b86;
//   text-shadow: 2.5px 5px 4px #c4b7ab;
//   box-shadow: inset -2px 3px 5px #ccb49f;
//   padding-bottom: 0px;
// `;

// const MyReviews = styled.div`
//   display: flex;
//   flex-direction: row;
//   background-color: #e7d1bf;
//   width: 100vw;
//   height: 100vh;
//   padding-bottom: 5em;
//   justify-content: center;
// `;
// const MyReviewsBox = styled.div`
//   display: flex;
//   flex-direction: row;
//   width: 80vw;
//   height: 23vh;
//   background-color: #ffffff;
//   justify-content: center;
//   align-items: center;
//   margin: 1em;
// `;

// const MyReviewImg = styled.img`
//   display: flex;
//   width: 8em;
//   height: 10em;
//   padding: 0.5em;
//   border: 3px dashed blue;
// `;
// const MyReviewContent = styled.div`
//   display: block;
//   background-color: pink;
//   border: 3px dashed skyblue;
//   width: 40vw;
//   height: 20vh;
//   overflow: hidden;
//   text-overflow: ellipsis;
//   padding-top: 0.5em;
//   padding-left: 0.5em;
// `;
// const MyReviewCreatedAt = styled.div`
//   display: flex;
//   color: gray;
//   font-size: 0.9em;
// `;
// const MyReviewReview = styled.div`
//   display: inline-block;
//   width: 35vw;
//   height: 9vh;
//   white-space: nowrap;
//   overflow: scroll;
//   color: black;
//   font-size: 1.2em;
//   text-indent: 0.3em;
//   border: 1px solid red;
// `;
// const MyReviewBtnBox = styled.div`
//   display: flex;
//   flex-direction: row;
//   border: 3px dashed blue;
//   justify-content: flex-end;
//   padding-right: 0.5em;
//   padding-top: 0.5em;
// `;
// const MyReviewEditBtn = styled.button`
//   margin-left: 0.3em;
// `;
// const MyReviewDeleteBtn = styled.button`
//   margin-left: 0.3em;
// `;

// // const MyFavs = styled.div`
// //   display: flex;
// //   flex-direction: row;
// //   background-color: #c29b86;
// //   width: 90vw;
// //   height: 100vh; // 신경 안써도 됨
// //   z-index: 2;
// //   padding-bottom: 5em;
// // `;
// const MyFavsContentArea = styled.div`
//   display: flex;
//   flex-direction: row;
//   border: 4px dashed green;
//   width: 90vw;
//   padding: 3em;
//   justify-content: center;
// `;
// const MyFavsDeleteBtnArea = styled.div`
//   display: flex;
//   flex-direction: column;
//   border: 4px dashed deepskyblue;
//   width: 10vw;
//   justify-content: right;
// `;
// const MyFavsBox = styled.div`
//   border: 3px dashed deeppink;
//   display: inline-block;
//   flex-direction: column;
//   margin: 2em;
//   /* flex-direction : column; */
// `;
// const MyFavImg = styled.img`
//   border: 3px solid white;
//   display: inline-block;
//   justify-content: flex-start;
//   align-items: center;
//   width: 8em;
//   height: 10em;
//   padding: 0.3em;
//   margin: 1em;
//   padding: 10px;
//   box-shadow: 2px 1px 3px white;
//   flex-wrap: wrap;
//   flex-shrink: 1;
// `;
// const MyFavDeleteBtn = styled.img`
//   border: 3px dashed yellow;
//   display: flex;
//   width: 6em;
//   height: 7em;
//   justify-content: center;
//   align-items: center;
//   margin-top: 40vh;
//   margin-right: 1.5em;
// `;

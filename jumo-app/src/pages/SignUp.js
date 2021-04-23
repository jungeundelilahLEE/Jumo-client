import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { signIn } from '../actions';
import Inputs from '../atoms/Inputs';
import server, { clientURL } from '../apis/server';
import img from '../images/JustJ.PNG';

const SignUp = ({ close, closeHandler, openHendler }) => {
  // document.body.style.overflow = 'hidden';

  const history = useHistory();
  const dispatch = useDispatch();

  const [userInfo, setUserInfo] = useState({
    username: '',
    email: '',
    password: '',
    checkPassword: '',
  });

  const [errorMessage, setErrorMessage] = useState('');

  const inputInfo = [
    {
      placeholder: '이름',
      type: 'username',
    },
    { placeholder: 'Email', type: 'email' },
    {
      placeholder: '비밀번호(8자리 이상)',
      type: 'password',
    },
    {
      placeholder: '비밀번호',
      type: 'checkPassword',
    },
  ];

  const isEmail = email => {
    // const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i
    const emailRegex = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    return emailRegex.test(email);
  };

  const inputHandler = e => {
    const target = e.target.value;
    const type = e.target.dataset.type;

    setUserInfo({ ...userInfo, [type]: target });
  };

  const submitHandler = async () => {
    const { username, email, password, checkPassword } = userInfo;
    if (
      username.length === 0 ||
      email.length === 0 ||
      password.length === 0 ||
      checkPassword.length === 0
    ) {
      setErrorMessage('공백을 모두 입력해주세요');
    } else if (checkPassword !== password) {
      setErrorMessage(
        '입력하신 비밀번호가 일치하지 않습니다. 다시 확인해주세요.',
      );
    } else if (password.length < 8) {
      setErrorMessage('비밀번호는 8자리 이상으로 적어주세요');
    } else if (!isEmail(email)) {
      setErrorMessage('email 형식이 올바르지 않습니다');
    } else {
      try {
        const sendUserInfo = await server.post('/user/signup', {
          username,
          email,
          password,
        });
        localStorage.setItem('oauth', 'local');
        closeHandler();
        openHendler();
        alert('정상적으로 회원가입 되었습니다.');
        history.push('/user/signin');
      } catch (err) {
        setErrorMessage('중복된 이메일입니다.');
      }
    }
  };

  return (
    <>
      {close ? (
        <OutBox>
          <BoxWrapper>
            <BoxInner>
              <Title>
                <div>SIGN UP</div>
                <Image>
                  <img src={img} alt="icon" width="140px" height="80px" />
                  <X onClick={closeHandler}>x</X>
                </Image>
              </Title>
              <br />

              <Input>
                <Inputs inputInfo={inputInfo} inputHandler={inputHandler} />
              </Input>

              <br />
              <Alert>{errorMessage}</Alert>
              <br />
              <Line />
              <br />
              <Buttons>
                <Button type="submit" onClick={submitHandler}>
                  SignUp
                </Button>
                <br />
                <Link to="/">
                  <SkipButton type="submit" onClick={closeHandler}>
                    Skip
                  </SkipButton>
                </Link>
              </Buttons>
              <br />
            </BoxInner>
          </BoxWrapper>
        </OutBox>
      ) : null}
    </>
  );
};

const BoxInner = styled.div`
  box-sizing: border-box;
  position: relative;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.5);
  background-color: #fff;
  border-radius: 10px;
  width: 360px;
  max-width: 480px;
  top: 50%;
  transform: translateY(-50%);
  margin: 0 auto;
  padding: 0px 0px 10px 0px;
`;

const BoxWrapper = styled.div`
  box-sizing: border-box;
  display: block;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  overflow: auto;
  outline: 0;
`;
const Input = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const OutBox = styled.div`
  box-sizing: border-box;
  display: box;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 999;
`;
const Title = styled.div`
  font-family: 'Sansation';
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 30px;
  margin-left: 40px;
`;
const Image = styled.div`
  background-color: #293848;
  padding: 0px 0px 5px 10px;
`;
const Alert = styled.div`
  color: red;
  text-align: center;
`;
const Button = styled.button`
  font-family: 'Sansation';
  width: 200px;
  height: 20px;
  background-color: #c29b86;
  border-radius: 4px;
  border: 0px;
  cursor: pointer;
  padding: 15px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  &:active {
    transform: translateY(2px);
  }
`;
const SkipButton = styled.button`
  font-family: 'Sansation';
  width: 200px;
  height: 30px;
  background-color: #293848;
  border: 0px;
  border-radius: 4px;
  cursor: pointer;
  color: white;
`;
const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  text-aligns: center;
`;

const Line = styled.div`
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 1px solid #c29b86;
`;
const X = styled.button`
  float: right;
  width: 20px;
  height: 20px;
  padding: 0px;
  margin: 0px;
`;
const NickName = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const Email = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const Password = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export default SignUp;

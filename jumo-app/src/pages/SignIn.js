import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import server, { clientURL } from '../apis/server';
import Inputs from '../atoms/Inputs';
import img from '../images/JumoIcon.PNG';
import google from '../images/google.png';

const SignIn = () => {
  document.body.style.overflow = 'hidden';

  const history = useHistory();

  const inputInfo = [
    { placeholder: '이메일', type: 'email' },
    { placeholder: '비밀번호', type: 'password' },
  ];

  const [info, setInfo] = useState({
    email: '',
    password: '',
  });

  const [errorMessage, setErrorMessage] = useState('');

  const inputHandler = e => {
    const target = e.target.value;
    const type = e.target.dataset.type;
    const userValue = { [type]: target };
    setInfo({ ...info, ...userValue });
  };

  const submitHandler = async () => {
    try {
      if (!info.email.length) {
        setErrorMessage('이메일을 입력해주세요');
      } else if (!info.password.length) {
        setErrorMessage('비밀번호를 입력해주세요');
      } else {
        const getLoginInfo = await server
          .post(
            '/user/login',
            { ...info },
            {
              headers: { 'Content-Type': 'application/json' },
              withCredentials: true,
            },
          )
          .then(res => {
            const { data } = res;
            localStorage.setItem('isLogin', JSON.stringify(true));
            localStorage.setItem('accessToken', data.data.accessToken);
            localStorage.setItem('oauth', 'local');
            history.push('/makgeolli/info');
            window.location.reload();
          });
      }
    } catch (err) {
      setErrorMessage('이메일 혹은 비밀번호가 일치하지 않습니다');
    }
  };

  const redirectUrl = `${clientURL}/user/login`;
  const clientIDForGoogle =
    '698453377731-fmpthr77bo88djpa1hpmv06d8u2ef0g5.apps.googleusercontent.com';
  const GOOGLE_LOGIN_URL = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${clientIDForGoogle}&redirect_uri=${redirectUrl}&response_type=code&scope=https://www.googleapis.com/auth/userinfo.email+https://www.googleapis.com/auth/userinfo.profile`;

  const googleLoginHandler = () => {
    window.location.assign(GOOGLE_LOGIN_URL);
    localStorage.setItem('oauth', 'google');
  };

  const getAccessToken = async authorizationCode => {
    try {
      const oauth = localStorage.getItem('oauth');
      let res;
      if (oauth === 'google') {
        res = await server.post(`/users/google`, { authorizationCode });
      }
      const { data } = res;
      localStorage.setItem('isLogin', JSON.stringify(true));
      localStorage.setItem('accessToken', data.accessToken);
      history.push('/makgeolli/info');
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const url = new URL(window.location.href);
    const authorizationCode = url.searchParams.get('code');

    if (authorizationCode) {
      getAccessToken(authorizationCode);
    }
  });

  return (
    <>
      <OutBox>
        <BoxWrapper>
          <BoxInner>
            <Title>
              <div>Sign In</div>
              <Image>
                <img src={img} alt="icon" width="150px" height="80px" />
                <X>x</X>
              </Image>
            </Title>
            <br />
            <Inputs inputInfo={inputInfo} inputHandler={inputHandler} />
            <br />
            <Alert>{errorMessage}</Alert>
            <br />
            <Buttons>
              <Button type="submit" onClick={() => submitHandler()}>
                Sign in
              </Button>
            </Buttons>
            <br />
            <Line />
            <br />
            <Buttons>
              <Button type="submit" onClick={() => googleLoginHandler()}>
                <Google src={google} alt="google" />
                Google로그인
              </Button>
              <br />
              <SkipButton type="submit">Skip</SkipButton>
            </Buttons>
            <br />
            <Buttons>
              아직 회원이 아니신가요?
              <A href="https://www.naver.com">회원가입하러가기</A>
            </Buttons>
          </BoxInner>
        </BoxWrapper>
      </OutBox>
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
  padding: 0px 0px 40px 0px;
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
  justify-content: space-around;
  align-items: center;
`;
const InputForm = styled.input`
  width: 200px;
  height: 20px;
`;
const OutBox = styled.div`
  box-sizing: border-box;
  /* display: none; */
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
  width: 200px;
  height: 20px;
  background-color: #c29b86;
  border-radius: 4px;
  border: 0px;
  cursor: pointer;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SkipButton = styled.button`
  width: 200px;
  height: 20px;
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
const A = styled.a`
  color: blue;
`;

const Line = styled.div`
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 1px solid #c29b86;
`;
const Google = styled.img`
  padding-right: 10px;
  width: 25px;
  height: 25px;
`;
const X = styled.button`
  float: right;
  width: 20px;
  height: 20px;
  padding: 0px;
  margin: 0px;
`;

export default SignIn;

import React from 'react';
import styled from 'styled-components';
import img from '../images/JumoIcon.PNG';
import google from '../images/google.png';

function SignIn() {
  // document.body.style.overflow = 'hidden';

  return (
    <>
      <OutBox>
        <BoxWrapper>
          <BoxInner className="login">
            <form className="login_form">
              <Title>
                <div>Sign In</div>
                <Image>
                  <img src={img} alt="icon" width="150px" height="80px" />
                  <X>x</X>
                </Image>
              </Title>
              <br />
              <Input>
                <InputForm placeholder="email을입력하세요" />
                <br />
                <InputForm placeholder="비밀번호를입력하세요" type="password" />
              </Input>
              <br />
              <Alert>이메일이나 비밀번호가 올바르지 않습니다</Alert>
              <br />
              <Buttons>
                <Button type="submit" className="submit_btn">
                  Sign in
                </Button>
              </Buttons>
              <br />
              <Line />
              <br />
              <Buttons>
                <Button type="submit">
                  <Google src={google} alt="1" />
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
            </form>
          </BoxInner>
        </BoxWrapper>
      </OutBox>
    </>
  );
}

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

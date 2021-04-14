import React from 'react';
import styled from 'styled-components';
import img from '../images/JumoIcon.PNG';

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
function SignUp() {
  document.body.style.overflow = 'hidden';
  return (
    <>
      <OutBox>
        <BoxWrapper>
          <BoxInner>
            <Title>
              <div>Sign Up</div>
              <Image>
                <img src={img} alt="icon" width="150px" height="80px" />
                <X>x</X>
              </Image>
            </Title>
            <br />
            <Input>
              <NickName>
                <div>Nickname</div>
                <div>
                  <InputForm placeholder="이름을 입력하세요" />
                </div>
                <div>
                  <button type="button">check</button>
                </div>
              </NickName>
              <br />
              <Alert>이미 사용중인 닉네임입니다</Alert>
              <br />
              <Email>
                <div>E-mail</div>
                <div>
                  <InputForm placeholder="email을 입력하세요" />
                </div>
                <div>
                  <button type="button">check</button>
                </div>
              </Email>
              <br />
              <Alert>E-mail형식이 올바르지 않습니다</Alert>
              <br />
              <Password>
                <div>password</div>
                <InputForm placeholder="비밀번호를 입력하세요" />
              </Password>
              <br />
              <Password>
                <div>password</div>
                <InputForm placeholder="비밀번호를 입력하세요" />
              </Password>
            </Input>
            <br />
            <Alert>
              입력하신 비밀번호가 일치하지 않습니다. 다시 확인해주세요
            </Alert>
            <br />
            <br />
            <Line />
            <br />
            <Buttons>
              <Button type="submit">SignUp</Button>
              <br />
              <SkipButton type="submit">Skip</SkipButton>
            </Buttons>
            <br />
          </BoxInner>
        </BoxWrapper>
      </OutBox>
    </>
  );
}

export default SignUp;

import React from 'react';
import styled from 'styled-components';

const Inputs = ({ inputInfo, inputHandler }) => {
  return (
    <Input>
      {inputInfo.map(info =>
        info.type === 'password' ||
        info.type === 'confirmPassword' ||
        info.type === 'newPassword' ? (
          <InputForm
            placeholder={info.placeholder}
            onChange={inputHandler}
            data-type={info.type}
            type="password"
          />
        ) : (
          <InputForm
            placeholder={info.placeholder}
            onChange={inputHandler}
            data-type={info.type}
          />
        ),
      )}
    </Input>

    // <Input>
    //   <InputForm placeholder="email을입력하세요" />
    //   <br />
    //   <InputForm placeholder="비밀번호를입력하세요" />
    // </Input>
  );
};

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

export default Inputs;

import React from 'react';
import styled from 'styled-components';

const Inputs = ({ inputInfo, inputHandler }) => {
  return (
    <Input>
      {inputInfo.map(info =>
        info.type === 'password' ||
        info.type === 'checkPassword' ||
        info.type === 'newPassword' ? (
          <StyleInputRow>
            <div>{info.subtitle}</div>
            <InputForm
              placeholder={info.placeholder}
              onChange={inputHandler}
              data-type={info.type}
              type="password"
            />
          </StyleInputRow>
        ) : (
          <StyleInputRow>
            <div>{info.subtitle}</div>
            <InputForm
              placeholder={info.placeholder}
              onChange={inputHandler}
              data-type={info.type}
            />

            {info.subtitle === 'Email' || info.subtitle === 'Nickname' ? (
              <div>
                <button type="button">check</button>
              </div>
            ) : null}
          </StyleInputRow>
        ),
      )}
    </Input>
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
const StyleInputRow = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export default Inputs;

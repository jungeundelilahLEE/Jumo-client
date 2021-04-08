import React from 'react';
import styled from 'styled-components';

const ReviewInput = () => {
  return (
    <StyleInputBox>
      <div>
        <StyleStar>ㅁㅁㅁㅁㅁ</StyleStar>
        <StyleInputWrap>
          <StyleInputItem>
            <StyleInput />
          </StyleInputItem>
          <StylebtnItem>
            <StyleSaveBtn>save</StyleSaveBtn>
          </StylebtnItem>
        </StyleInputWrap>
        <StyleBtnWrap>
          <StyleBtnArea>
            <StyleBtn>photo</StyleBtn>
            <StyleBtn>list</StyleBtn>
          </StyleBtnArea>
        </StyleBtnWrap>
      </div>
    </StyleInputBox>
  );
};

const StyleInputBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyleStar = styled.div``;

const StyleInputWrap = styled.div`
  display: flex;
  border: 2px red solid;
  width: 1000px;
  height: 100px;
`;

const StyleInputItem = styled.div`
  flex: 6;
`;

const StyleInput = styled.textarea`
  width: 100%;
  height: 96%;
  border: none;
  resize: none;
`;

const StyleBtnWrap = styled.div`
  display: flex;
`;

const StyleBtnArea = styled.div`
  margin-left: auto;
`;

const StyleBtn = styled.button`
  margin-top: 10px;
  margin-left: 20px;
`;

const StylebtnItem = styled.div`
  flex: 1;
  padding: 3px;
`;

const StyleSaveBtn = styled.button`
  width: 100%;
  height: 100%;
`;

export default ReviewInput;

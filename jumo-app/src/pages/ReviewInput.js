import React from 'react';
import styled from 'styled-components';
import star from '../images/star.png';

const ReviewInput = () => {
  return (
    <StyleInputBox>
      <div>
        <StyleStarBox>
          <StyleStar />
          <StyleStar />
          <StyleStar />
          <StyleStar />
          <StyleStar />
        </StyleStarBox>
        <StyleInputWrap>
          <StyleInputItem>
            <StyleInput placeholder="리뷰를 입력해주세요(300자 이내)" />
          </StyleInputItem>
          <StyleBtnItem>
            <StyleSaveBtn>SAVE</StyleSaveBtn>
          </StyleBtnItem>
        </StyleInputWrap>
        <StyleBtnWrap>
          <StyleBtnArea>
            <StyleBtn>photo</StyleBtn>
          </StyleBtnArea>
        </StyleBtnWrap>
      </div>
    </StyleInputBox>
  );
};

const StyleInputBox = styled.div`
  width: 100vw;
  padding-top: 10vmin;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media ${props => props.theme.mobile} {
  }

  @media ${props => props.theme.tablet} {
  }

  @media ${props => props.theme.desktop} {
  }
`;

const StyleStarBox = styled.div`
  display: flex;
  justify-content: center;

  @media ${props => props.theme.mobile} {
  }

  @media ${props => props.theme.tablet} {
    justify-content: flex-start;
  }

  @media ${props => props.theme.desktop} {
  }
`;

const StyleStar = styled.div`
  width: 8vmin;
  height: 8vmin;
  max-width: 40px;
  max-height: 40px;
  background-image: url(${star});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  @media ${props => props.theme.mobile} {
  }

  @media ${props => props.theme.tablet} {
    width: 5vmin;
    height: 5vmin;
    max-width: 5vmin;
    max-height: 5vmin;
  }

  @media ${props => props.theme.desktop} {
  }
`;

const StyleInputWrap = styled.div`
  width: 100vw;
  height: 20vmin;
  display: flex;
  border-top: 2px red solid;

  /* position: fixed;
  bottom: 50px; */

  @media ${props => props.theme.mobile} {
  }

  @media ${props => props.theme.tablet} {
    border-bottom: 2px red solid;
  }

  @media ${props => props.theme.desktop} {
    width: 80vw;
    height: 15vmin;
    border: 2px red solid;
  }
`;

const StyleInputItem = styled.div`
  flex: 6;
`;

const StyleInput = styled.textarea`
  width: 100%;
  height: 96%;
  border: none;
  resize: none;
  font-size: 1.5rem;
  padding: 2vmin;

  @media ${props => props.theme.mobile} {
  }

  @media ${props => props.theme.tablet} {
  }

  @media ${props => props.theme.desktop} {
    font-size: 1.2rem;
  }
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

const StyleBtnItem = styled.div`
  flex: 1;
  padding: 3px;
`;

const StyleSaveBtn = styled.button`
  width: 100%;
  height: 100%;
  font-size: 1.3rem;

  @media ${props => props.theme.mobile} {
  }

  @media ${props => props.theme.tablet} {
  }

  @media ${props => props.theme.desktop} {
  }
`;

export default ReviewInput;

import React from 'react';
import styled from 'styled-components';
import star from '../images/star.png';
import reviewSampleImg from '../images/review-sample-1.png';

const ReviewList = () => {
  return (
    <StyleReviewList>
      <StyleReviewsTop>
        <div className="StyleReviewsCategory" />
        <div>6,047</div>
      </StyleReviewsTop>
      <div>
        <StyleReviewsBox>
          <StyleWriter>
            <StyleNickname>이윌리</StyleNickname>
            <StyleStarBox>
              <StyleStars />
              <StyleStars />
              <StyleStars />
              <StyleStars />
              <StyleStars />
            </StyleStarBox>
            <StyleCreated>오늘</StyleCreated>
          </StyleWriter>
          <StyleContents>
            <StyleImg />
            <StyleEffective>
              <StyleText>
                쩡말 맜잇었어요!! 역시아이유 역시 차트에 들어올정도로 와 역시
                믿고 있었다구 짱 윌리랑 함계 먺으니 떠 맜잇는 느린마을맊껄리이라
                낭러꼬 하껄리능 따는 ㅎ쓰니 쩡말 맜잇었어요!! 먺으니 떠 맜잇는
                느린마을맊껄리이라 낭러꼬 룰루랄레오울발하
                히로뤠오미러햐응애파저 이건 실시간 인기차트가 아니고 실시간
                인기아이유노래 아닌가요?
              </StyleText>
              <StyleModifyBox>
                <StyleChangeBtn>edit</StyleChangeBtn>
                <StyleChangeBtn>delete</StyleChangeBtn>
              </StyleModifyBox>
            </StyleEffective>
          </StyleContents>
        </StyleReviewsBox>

        <StyleReviewsBox>
          <StyleWriter>
            <StyleNickname>ierunbi23454</StyleNickname>
            <StyleStarBox>
              <StyleStars />
              <StyleStars />
              <StyleStars />
              <StyleStars />
              <StyleStars />
            </StyleStarBox>
            <StyleCreated>어제</StyleCreated>
          </StyleWriter>
          <StyleContents>
            <StyleImg />
            <StyleEffective>
              <StyleText>
                쩡말 맜잇었어요!! 역시아이유 역시 차트에 들어올정도로 와 역시
                믿고 있었다구 짱 윌리랑 함계 먺으니 떠 맜잇는 느린마을맊껄리이라
                낭러꼬 하껄리능 따는 ㅎ쓰니 쩡말 맜잇었어요!! 먺으니 떠 맜잇는
                느린마을맊껄리이라
              </StyleText>
              <StyleModifyBox>
                <StyleChangeBtn>edit</StyleChangeBtn>
                <StyleChangeBtn>delete</StyleChangeBtn>
              </StyleModifyBox>
            </StyleEffective>
          </StyleContents>
        </StyleReviewsBox>

        <StyleReviewsBox>
          <StyleWriter>
            <StyleNickname>아이유Lilac짱</StyleNickname>
            <StyleStarBox>
              <StyleStars />
              <StyleStars />
              <StyleStars />
              <StyleStars />
              <StyleStars />
            </StyleStarBox>
            <StyleCreated>3일전</StyleCreated>
          </StyleWriter>
          <StyleContents>
            <StyleEffective>
              <StyleText>쩡말 맜잇었어요!!</StyleText>
              <StyleModifyBox>
                <StyleChangeBtn>edit</StyleChangeBtn>
                <StyleChangeBtn>delete</StyleChangeBtn>
              </StyleModifyBox>
            </StyleEffective>
          </StyleContents>
        </StyleReviewsBox>

        <StyleReviewsBox>
          <StyleWriter>
            <StyleNickname>sfghfghhghkt</StyleNickname>
            <StyleStarBox>
              <StyleStars />
              <StyleStars />
              <StyleStars />
              <StyleStars />
              <StyleStars />
            </StyleStarBox>
            <StyleCreated>2020. 7. 13</StyleCreated>
          </StyleWriter>
          <StyleContents>
            <StyleEffective>
              <StyleText>쩡말 맜잇었어요!! 느린마을맊껄리이라 낭러꼬</StyleText>
              <StyleModifyBox>
                <StyleChangeBtn>edit</StyleChangeBtn>
                <StyleChangeBtn>delete</StyleChangeBtn>
              </StyleModifyBox>
            </StyleEffective>
          </StyleContents>
        </StyleReviewsBox>
      </div>
    </StyleReviewList>
  );
};

const StyleReviewList = styled.div`
  width: 100vw;
  padding: 5vmin 0;
  background-color: yellowgreen;

  @media ${props => props.theme.mobile} {
  }

  @media ${props => props.theme.tablet} {
  }

  @media ${props => props.theme.desktop} {
    width: 80vw;
  }
`;

const StyleReviewsTop = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 2vmin;
  padding-right: 1rem;
  font-size: 1.4rem;
`;

const StyleReviewsBox = styled.div`
  min-height: 10vmin;
  /* padding-top: 20px;
  padding-bottom: 20px; */
  padding: 3vmin;
  font-size: 1rem;
  border-bottom: 2px black solid;
  display: flex;
  /* flex-direction: column; */
  /* align-items: center; */
  /* justify-content: center; */

  @media ${props => props.theme.mobile} {
  }

  @media ${props => props.theme.tablet} {
    min-height: 5vmin;
    /* padding-bottom: 0; */
  }

  @media ${props => props.theme.desktop} {
  }
`;

const StyleWriter = styled.div`
  /* flex: 1; */
  display: flex;
  flex-direction: column;
  /* flex-wrap: wrap; */
`;

const StyleNickname = styled.div`
  /* flex: 1 1 0; */
`;

const StyleStarBox = styled.div`
  width: 20vmin;
  padding-top: 2vmin;
  display: flex;
  /* justify-content: center; */

  @media ${props => props.theme.mobile} {
  }

  @media ${props => props.theme.tablet} {
    justify-content: flex-start;
  }

  @media ${props => props.theme.desktop} {
  }
`;

const StyleStars = styled.div`
  width: 20px;
  height: 20px;
  background-image: url(${star});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  @media ${props => props.theme.mobile} {
  }

  @media ${props => props.theme.tablet} {
    width: 15px;
    height: 15px;
  }

  @media ${props => props.theme.desktop} {
  }
`;

const StyleCreated = styled.div`
  /* flex: 1 1 0; */
  /* padding-left: 20px; */
  padding-top: 2vmin;
`;

const StyleContents = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-left: 3vmin;

  @media ${props => props.theme.mobile} {
  }

  @media ${props => props.theme.tablet} {
    flex-direction: row;
  }

  @media ${props => props.theme.desktop} {
  }
`;

const StyleImg = styled.div`
  width: 200px;
  height: 200px;
  background-image: url(${reviewSampleImg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  margin-bottom: 3vmin;

  @media ${props => props.theme.mobile} {
  }

  @media ${props => props.theme.tablet} {
    flex: 3;
    margin-bottom: 0;
  }

  @media ${props => props.theme.desktop} {
    flex: 2;
  }
`;

const StyleEffective = styled.div`
  @media ${props => props.theme.mobile} {
  }

  @media ${props => props.theme.tablet} {
    flex: 5;
    padding-left: 3vmin;
    display: flex;
    flex-direction: column;
  }

  @media ${props => props.theme.desktop} {
  }
`;

const StyleText = styled.div`
  @media ${props => props.theme.mobile} {
  }

  @media ${props => props.theme.tablet} {
  }

  @media ${props => props.theme.desktop} {
  }
`;

const StyleModifyBox = styled.div`
  padding: 3vmin 0 0 0;
  display: flex;
  justify-content: flex-end;

  @media ${props => props.theme.mobile} {
  }

  @media ${props => props.theme.tablet} {
    margin: auto 0 0 auto;
    padding: 2vmin 0 0 0;
  }

  @media ${props => props.theme.desktop} {
  }
`;

const StyleChangeBtn = styled.button`
  margin: 0 3vmin 0 0;

  @media ${props => props.theme.mobile} {
  }

  @media ${props => props.theme.tablet} {
    margin: 0 1vmin 0 0;
  }

  @media ${props => props.theme.desktop} {
  }
`;

export default ReviewList;

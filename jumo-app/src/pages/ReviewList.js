import React from 'react';
import styled from 'styled-components';

const ReviewList = () => {
  return (
    <StyleReviewList>
      <StyleReviewsTop>
        <div className="StyleReviewsCategory">
          <button type="button">최신순</button>
          <button type="button">사진리뷰</button>
        </div>
        <div>6,047</div>
      </StyleReviewsTop>
      <div>
        <StyleReviewsBox>
          <StyleWriter>
            <StyleNickname>이윌리</StyleNickname>
            <StyleCreated>오늘</StyleCreated>
            <StyleStars>ㅁㅁㅁㅁㅁ</StyleStars>
          </StyleWriter>
          <StyleContents>
            <StyleImg>사진</StyleImg>
            <StyleContentRight>
              <StyleText>
                쩡말 맜잇었어요!! 역시아이유 역시 차트에 들어올정도로 와 역시
                믿고 있었다구 짱 윌리랑 함계 먺으니 떠 맜잇는 느린마을맊껄리이라
                낭러꼬 하껄리능 따는 ㅎ쓰니 쩡말 맜잇었어요!! 먺으니 떠 맜잇는
                느린마을맊껄리이라 낭러꼬 룰루랄레오울발하
                히로뤠오미러햐응애파저 이건 실시간 인기차트가 아니고 실시간
                인기아이유노래 아닌가요?
              </StyleText>
              <StyleChangesBtn>
                <button type="button">edit</button>
                <button type="button">delete</button>
              </StyleChangesBtn>
            </StyleContentRight>
          </StyleContents>
        </StyleReviewsBox>
        <StyleReviewsBox>
          <StyleWriter>
            <StyleNickname>sfghfghhghkt</StyleNickname>
            <StyleCreated>어제</StyleCreated>
            <StyleStars>ㅁㅁㅁㅁ</StyleStars>
          </StyleWriter>
          <StyleContents>
            <StyleImg>사진</StyleImg>
            <StyleContentRight>
              <StyleText>
                쩡말 맜잇었어요!! 역시아이유 역시 차트에 들어올정도로 와 역시
                믿고 있었다구 짱 윌리랑 함계 먺으니 떠 맜잇는 느린마을맊껄리이라
                낭러꼬 하껄리능 따는 ㅎ쓰니 쩡말 맜잇었어요!! 먺으니 떠 맜잇는
                느린마을맊껄리이라 낭러꼬 룰루랄레오울발하
                히로뤠오미러햐응애파저 이건 실시간 인기차트가 아니고 실시간
                인기아이유노래 아닌가요?
              </StyleText>
              <StyleChangesBtn>
                <button type="button">edit</button>
                <button type="button">delete</button>
              </StyleChangesBtn>
            </StyleContentRight>
          </StyleContents>
        </StyleReviewsBox>
        <StyleReviewsBox>
          <StyleWriter>
            <StyleNickname>ierunbi23454</StyleNickname>
            <StyleCreated>3일전</StyleCreated>
            <StyleStars>ㅁㅁㅁ</StyleStars>
          </StyleWriter>
          <StyleContents>
            <StyleContentRight>
              <StyleText>
                쩡말 맜잇었어요!! 역시아이유 역시 차트에 들어올정도로 와 역시
                믿고 있었다구 짱 윌리랑 함계 먺으니 떠 맜잇는 느린마을맊껄리이라
                낭러꼬 하껄리능 따는 ㅎ쓰니 쩡말 맜잇었어요!! 먺으니 떠 맜잇는
                느린마을맊껄리이라 낭러꼬 룰루랄레오울발하
                히로뤠오미러햐응애파저 이건 실시간 인기차트가 아니고 실시간
                인기아이유노래 아닌가요?
              </StyleText>
              <StyleChangesBtn>
                <button type="button">edit</button>
                <button type="button">delete</button>
              </StyleChangesBtn>
            </StyleContentRight>
          </StyleContents>
        </StyleReviewsBox>

        <StyleReviewsBox>
          <StyleWriter>
            <StyleNickname>아이유Lilac짱</StyleNickname>
            <StyleCreated>2020. 11. 29</StyleCreated>
            <StyleStars>ㅁ</StyleStars>
          </StyleWriter>
          <StyleContents>
            <StyleContentRight>
              <StyleText>
                쩡말 맜잇었어요!! 역시아이유 역시 차트에 들어올정도로 와 역시
                믿고 있었다구 짱 윌리랑 함계 먺으니 떠 맜잇는 느린마을맊껄리이라
                낭러꼬 하껄리능 따는 ㅎ쓰니 쩡말 맜잇었어요!! 먺으니 떠 맜잇는
                느린마을맊껄리이라 낭러꼬 룰루랄레오울발하
                히로뤠오미러햐응애파저 이건 실시간 인기차트가 아니고 실시간
                인기아이유노래 아닌가요?
              </StyleText>
              <StyleChangesBtn>
                <button type="button">edit</button>
                <button type="button">delete</button>
              </StyleChangesBtn>
            </StyleContentRight>
          </StyleContents>
        </StyleReviewsBox>
      </div>
    </StyleReviewList>
  );
};

const StyleReviewList = styled.div`
  padding: 50px 100px;
`;

const StyleReviewsTop = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 50px;
  padding-right: 1rem;
`;

const StyleReviewsBox = styled.div`
  display: flex;
  height: 130px;
  padding-top: 20px;
  padding-bottom: 20px;
  border-bottom: 2px black solid;
`;

const StyleWriter = styled.div`
  flex: 1;
  display: flex;
  flex-wrap: wrap;
`;

const StyleNickname = styled.div`
  flex: 1 1 0;
`;
const StyleCreated = styled.div`
  flex: 1 1 0;
  padding-left: 20px;
`;

const StyleStars = styled.div`
  width: 100%;
  height: 55%;
`;

const StyleContents = styled.div`
  flex: 5;
  display: flex;
`;

const StyleImg = styled.div`
  background-color: #e7d1bf;
  color: #f266a1;
  flex: 1;
  padding: 10px;
`;

const StyleContentRight = styled.div`
  flex: 5;
  display: flex;
  flex-wrap: wrap;
  padding: 0.6rem;
`;

const StyleChangesBtn = styled.div`
  margin-left: auto;
`;

const StyleText = styled.div`
  width: 100%;
  height: 80%;
`;

export default ReviewList;

/* eslint-disable no-useless-return */
/* eslint-disable consistent-return */
/* eslint-disable object-shorthand */
/* eslint-disable no-else-return */
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { signIn, addLike, removeLike } from '../actions';
import server from '../apis/server';
import ReviewInput from '../components/ReviewInput';
import ReviewList from '../components/ReviewList';

const Detail = ({ channelHandler, navHeader, setNavHeader }) => {
  const [likeList, setLikeList] = useState([]);
  const [likeId, setLikeId] = useState([]);
  const accessToken = localStorage.getItem('accessToken');
  const [isLoading, setIsLoading] = useState(false);
  const [allReivews, setAllReviews] = useState([]);
  const { name } = useParams();

  const [userInfo, setUserInfo] = useState({
    id: null,
    email: '',
    username: '',
  });
  const [item, setItem] = useState({
    id: '',
    brewery_id: '',
    name: '',
    area: '',
    content: '',
    explain: '',
    material: '',
    likes: '',
    views: '',
    image: '',
    createdAt: null,
    updatedAt: null,
  });

  const getMakgeolliInfo = async () => {
    // setIsLoading(true);
    await server
      .get(`/makgeolli/list?name=${name}`)
      .then(res =>
        setItem(prev => {
          return { ...prev, ...res.data.data };
        }),
      )
      .then(iteminfo => {
        // setIsLoading(false);
      });
  };

  const getUserInfo = async () => {
    try {
      const res = await server.get('/user/info', {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      const { data } = res.data;
      setUserInfo(data);
    } catch (err) {
      console.log(err);
    }
  };

  const getUserLikesInfo = async () => {
    try {
      const res = await server.get('/like/info', {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      const { data } = res.data;
      const userLikesInfo = data.map(el => el.makgeolli_id);
      const getLikeId = data.map(el => {
        if (el.makgeolli_id === item.id) {
          return el.id;
        }
        return;
      });

      setLikeList(userLikesInfo);
      setLikeId(getLikeId);

      // .then(res => {
      //   const { data } = res.data;
      //   return data;
      // })
      // .then(data => {
      //   const userLikesInfo = data.map(el => el.makgeolli_id);
      //   const getLikeId = data.map(el => {
      //     if (el.makgeolli_id === itemId) {
      //       return el.id;
      //     }
      //     return;
      //   });

      //   setLikeList([...userLikesInfo]);
      //   setLikeId([...getLikeId]);
      // });

      // const { data } = res.data;
      // const userLikesInfo = data.map(el => el.makgeolli_id);
      // const getLikeId = data.map(el => {
      //   if (el.makgeolli_id === item.id) {
      //     return el.id;
      //   }
      //   return el.makgeolli_id;
      // });

      // setLikeList(data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleAddLike = async () => {
    if (!accessToken) {
      return alert('로그인 해 주세요.');
    } else {
      try {
        const plusLike = await server.post(
          '/like/create',
          { name: name },
          { headers: { Authorization: `Bearer ${accessToken}` } },
        );
        // window.location.reload();
        // setLikeList(prev => [...prev, itemId]);
      } catch (err) {
        console.log(err);
      }
    }
  };

  const handleDeleteLike = async () => {
    if (!accessToken) {
      return alert('로그인 해 주세요.');
    } else {
      try {
        const minusLike = await server.post(
          '/like/remove',
          { name: name, id: likeId },
          { headers: { Authorization: `Bearer ${accessToken}` } },
        );
        // window.location.reload();
        // setLikeList(prev => prev.filter(el => el !== delLike));
      } catch (err) {
        console.log(err);
      }
    }
  };

  useEffect(() => {
    channelHandler('Detail');
    if (!navHeader) {
      setNavHeader(true);
    }
    getMakgeolliInfo();
    getUserInfo();
  }, []);

  useEffect(() => {
    if (accessToken) {
      getUserLikesInfo();
    }
  }, [item]);

  useEffect(() => {
    if (accessToken) {
      getMakgeolliInfo();
    }
  }, [isLoading]);

  const handleLike = () => {
    handleAddLike();
    setIsLoading(!isLoading);
  };

  const handleRemoveLike = () => {
    handleDeleteLike();
    setIsLoading(!isLoading);
  };

  return (
    <StyleDetailes>
      <StyleDetailesImageBox>
        <StyleBackgroundImg makgeolliImg={item.image} alt="막걸리 흑백이미지" />
        <StyleImg makgeolliImg={item.image} alt="막걸리 이미지" />
      </StyleDetailesImageBox>
      <StyleVertical>
        <StyleDescBox>
          <StyleDescInfo>
            <div>조회수 : {item.views}</div>
            <div>
              {!likeList.includes(item.id) ? (
                <StyleSmallLikeBtn onClick={() => handleLike()}>
                  {item.likes}
                </StyleSmallLikeBtn>
              ) : (
                <StyleSmallLikeBtn onClick={() => handleRemoveLike()}>
                  Not LIKE
                </StyleSmallLikeBtn>
              )}

              <StyleTextLike>LIKE : {item.likes}</StyleTextLike>
            </div>
          </StyleDescInfo>
          <StyleExplanation>
            <StyleTitle>{item.name}</StyleTitle>
            <StyleKinds>
              <p>용량 : {item.content}</p>
              <p>양조장 :{item.material} </p>
              <p>생산지역 :{item.area} </p>
            </StyleKinds>
          </StyleExplanation>
          {/* <StyleDescBottom>{item.explain}</StyleDescBottom> */}
          <StyleDescBottom>
            <div>item:{item.id}</div>
            <div>likeId:{likeId}</div>
            <div>likeList:{likeList}</div>
          </StyleDescBottom>
        </StyleDescBox>

        {!likeList.includes(item.id) ? (
          <StyleLikeBtn onClick={() => handleLike()}>LIKE</StyleLikeBtn>
        ) : (
          <StyleLikeBtn onClick={() => handleRemoveLike()}>
            Not Like
          </StyleLikeBtn>
        )}
      </StyleVertical>
      <ReviewInput makgeolliId={item.id} setAllReviews={setAllReviews} />
      <ReviewList
        makgeolliId={item.id}
        allReivews={allReivews}
        setAllReviews={setAllReviews}
      />
    </StyleDetailes>
  );
};

const StyleDetailes = styled.div`
  width: 500px;

  @media ${props => props.theme.mobile} {
    width: 100vw;
  }

  @media ${props => props.theme.tablet} {
    width: 100vw;
  }

  @media ${props => props.theme.desktop} {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
`;

const StyleDetailesImageBox = styled.div`
  @media ${props => props.theme.mobile} {
  }

  @media ${props => props.theme.tablet} {
    display: flex;
    justify-content: center;
  }

  @media ${props => props.theme.desktop} {
    width: 500px;
    height: 500px;
    padding-right: 20px;
    flex-direction: column;
    align-items: center;
  }
`;

const StyleBackgroundImg = styled.div`
  display: none;

  @media ${props => props.theme.mobile} {
  }

  @media ${props => props.theme.tablet} {
  }

  @media ${props => props.theme.desktop} {
    display: block;
    background-image: url(${props => props.makgeolliImg});
    background-size: cover;
    background-repeat: no-repeat;
    filter: grayscale(100%);
    opacity: 0.5;
    width: 90%;
    height: 90%;
    margin-left: auto;
    transform: rotate(-5deg);
    position: relative;
    z-index: 1;
  }
`;

const StyleImg = styled.div`
  background-image: url(${props => props.makgeolliImg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  height: 60vh;

  @media ${props => props.theme.mobile} {
  }

  @media ${props => props.theme.tablet} {
    width: 50%;
    height: 60vh;
  }

  @media ${props => props.theme.desktop} {
    width: 350px;
    height: 350px;
    position: absolute;
    z-index: 2;
  }
`;

const StyleVertical = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyleDescBox = styled.div`
  background-color: skyblue;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 5vmin;

  @media ${props => props.theme.mobile} {
  }

  @media ${props => props.theme.tablet} {
    width: 100vw;
  }

  @media ${props => props.theme.desktop} {
    width: 40vw;
    min-height: 55vmin;
    padding-bottom: 3vmin;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: stretch;
    justify-content: space-around;
  }
`;

const StyleDescInfo = styled.div`
  width: 100%;
  border: 5px red solid;
  padding: 20px;
  font-size: 1.2rem;
  display: flex;
  justify-content: space-between;

  @media ${props => props.theme.mobile} {
  }

  @media ${props => props.theme.tablet} {
    width: 50%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-bottom: 10px;

    div {
      margin-bottom: 0.8rem;
    }
  }

  @media ${props => props.theme.desktop} {
    max-height: 130px;
    font-size: 1rem;
    margin-top: 10px;
    width: auto;
    order: 2;

    div {
      margin-bottom: 0.5rem;
    }
  }
`;

const StyleExplanation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media ${props => props.theme.mobile} {
  }

  @media ${props => props.theme.tablet} {
  }

  @media ${props => props.theme.desktop} {
    margin-left: 20px;
    width: 60%;
    justify-content: start;
    align-items: flex-start;
    order: 1;
  }
`;

const StyleTitle = styled.div`
  margin-top: 40px;
  margin-bottom: 40px;
  font-size: 2rem;
  text-align: center;

  @media ${props => props.theme.mobile} {
  }

  @media ${props => props.theme.tablet} {
  }

  @media ${props => props.theme.desktop} {
    margin-top: 50px;
  }
`;

const StyleKinds = styled.div`
  font-size: 1.3rem;
  margin-bottom: 40px;

  @media ${props => props.theme.mobile} {
  }

  @media ${props => props.theme.tablet} {
  }

  @media ${props => props.theme.desktop} {
    font-size: 1.2rem;
  }
`;

const StyleDescBottom = styled.div`
  width: 80%;
  font-size: 1.5rem;

  @media ${props => props.theme.mobile} {
  }

  @media ${props => props.theme.tablet} {
  }

  @media ${props => props.theme.desktop} {
    width: 90%;
    font-size: 1rem;
    line-height: 1.2rem;
    height: 14rem;
    margin-top: 0;
    overflow: scroll;
    word-break: break-all;
    word-break: break-word;
    order: 3;
  }
`;

const StyleLikeBtn = styled.button`
  display: none;

  @media ${props => props.theme.mobile} {
  }

  @media ${props => props.theme.tablet} {
  }

  @media ${props => props.theme.desktop} {
    display: block;
    max-width: 10vmin;
    justify-content: flex-start;
  }
`;

const StyleSmallLikeBtn = styled.button`
  display: inline-block;

  @media ${props => props.theme.mobile} {
  }

  @media ${props => props.theme.tablet} {
  }

  @media ${props => props.theme.desktop} {
    display: none;
  }
`;

const StyleTextLike = styled.div`
  display: none;

  @media ${props => props.theme.mobile} {
  }

  @media ${props => props.theme.tablet} {
  }

  @media ${props => props.theme.desktop} {
    display: inline;
  }
`;

export default Detail;

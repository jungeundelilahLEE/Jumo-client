import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { signIn, addLike, removeLike } from '../actions';
import server from '../apis/server';
import ReviewInput from '../components/ReviewInput';
import ReviewList from '../components/ReviewList';

// import res from '../atoms/dummyMaks';

const Detail = ({ channelHandler, navHeader, setNavHeader }) => {
  const state = useSelector(states => states.userReducer);
  const { likeItems } = state;
  const accessToken = localStorage.getItem('accessToken');
  // const [isLoading, setIsLoading] = useState(false);
  // const [viewCount, SetViewCount] = useState(0);
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

  const dispatch = useDispatch();

  const getMakgeolliInfo = () => {
    // setIsLoading(true);
    server
      .get(`/makgeolli/list?name=${name}`)
      .then(res =>
        setItem(prev => {
          return { ...prev, ...res.data.data };
        }),
      )
      .then(() => {
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

  useEffect(() => {
    if (!navHeader) {
      setNavHeader(true);
    }
    channelHandler('Detail');
    getMakgeolliInfo();
    if (accessToken) {
      getUserInfo();
    }
  }, []);

  const handleLike = () => {
    dispatch(addLike(item.id));
  };

  const handleRemoveLike = () => {
    dispatch(removeLike(item.id));
  };

  return (
    <StyleDetailes>
      <StyleDetailesImageBox>
        <StyleBackgroundImg makgeolliImg={item.image} alt="막걸리 흑백이미지" />
        <Div>
          <StyleImg makgeolliImg={item.image} alt="막걸리 이미지" />
        </Div>
      </StyleDetailesImageBox>

      <StyleVertical>
        <StyleDescBox>
          <StyleDescInfo>
            <div>조회수 : {item.views}</div>
            <div>
              {!likeItems.includes(item.id) ? (
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
            <HRtop />
            <StyleKinds>
              <p>용량 : {item.content}</p>
              <p>양조장 :{item.material} </p>
              <p>생산지역 :{item.area} </p>
            </StyleKinds>
            <HR />
          </StyleExplanation>
          <StyleDescBottom>{item.explain}</StyleDescBottom>
        </StyleDescBox>

        {!likeItems.includes(item.id) ? (
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
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-bottom: 100px;
  border: 3px solid red;

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
  //! 위에 헤더공간 마진/패딩 다시 고려
  @media ${props => props.theme.mobile} {
    display: flex;
    border: 20px solid skyblue;
    padding-top: 2.2em;
    width: 100vw;
    justify-content: center;
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
    /* display: block;
    display: flex;
    background-image: url(${props => props.makgeolliImg});
    background-size: cover;
    background-repeat: no-repeat;
    width: 100vw; */
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

const Div = styled.div`
  display: flex;
  border: 10px solid deeppink;
  justify-content: center;
  align-items: center;
`;

const StyleImg = styled.div`
  /* display: flex; */
  background-image: url(${props => props.makgeolliImg});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  /* width: 100vw;
  height: 80vh; */
  width: 70vw;
  height: 70vh;
  object-fit: none;

  border: 3px solid white;
  /* display: inline-block;
  justify-content: flex-start;
  align-items: center;
  width: 8em;
  height: 10em;
  padding: 0.3em;
  margin: 1em;
  padding: 10px;
  box-shadow: 2px 1px 3px black;
  flex-wrap: nowrap;
  flex-shrink: 1; */

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
  border: 3px dashed green;
  padding: 0 - 1em;
  background-color: #e7d1bf;
`;

const StyleDescBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 5vmin;
  border: 3px solid yellow;

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
  display: flex;
  flex-direction: row;
  width: 100%;
  border: 5px white solid;
  padding: 1.2em 1em;
  font-size: 1.2rem;
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
  color: black;
  /* align-items: flex-start;
  justify-content: flex-start; */
  /* border: 2px dashed orange; */
  width: 80%;

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
  margin-top: 1.2em;
  /* margin-bottom: 1.2em; */
  font-size: 2rem;
  text-align: center;
  background: none;
  border-radius: 10px 10px 0 0;
  padding: 1em 0em;
  box-shadow: 5px 5px 8px 5px rgba(194, 155, 134, 0.4),
    -5px -5px 8px 5px rgba(194, 155, 134, 0.4);

  @media ${props => props.theme.mobile} {
  }

  @media ${props => props.theme.tablet} {
  }

  @media ${props => props.theme.desktop} {
    margin-top: 50px;
  }
`;
const HRtop = styled.hr`
  display: flex;
  color: black;
  border: 2px solid #ffffff;
  width: 30em;
  align-items: center;
  justify-content: center;
  margin: 8px auto;
  /* margin-bottom: 2em; */
`;
const HR = styled.hr`
  color: black;
  border: 1px solid grey;
  width: 7em;
  margin-bottom: 2em;
`;

const StyleKinds = styled.div`
  font-size: 1.3rem;
  /* margin-bottom: 1.5em; */
  margin: 0em 0em 1.5em;
  /* border: 3px solid #c29b86; */
  padding: 1em 0.5em;
  letter-spacing: 0.4px;
  line-height: 1.7;
  border-radius: 0 0 10px 10px;
  background: rgba(194, 155, 134, 0.4);
  box-shadow: 5px 5px 7px 5px rgba(194, 155, 134, 0.4),
    -5px -5px 7px 5px rgba(194, 155, 134, 0.4);

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
  color: black;
  line-height: 1.5;

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
  //! 빈 하트로 바꾸기 하트 안에 숫자들어가도록
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

// const StyleDetailes = styled.div`
//   width: 500px;

//   @media ${props => props.theme.mobile} {
//     width: 100vw;
//   }

//   @media ${props => props.theme.tablet} {
//     width: 100vw;
//   }

//   @media ${props => props.theme.desktop} {
//     display: flex;
//     flex-wrap: wrap;
//     align-items: center;
//     justify-content: center;
//   }
// `;

// const StyleDetailesImageBox = styled.div`
//   @media ${props => props.theme.mobile} {
//   }

//   @media ${props => props.theme.tablet} {
//     display: flex;
//     justify-content: center;
//   }

//   @media ${props => props.theme.desktop} {
//     width: 500px;
//     height: 500px;
//     padding-right: 20px;
//     flex-direction: column;
//     align-items: center;
//   }
// `;

// const StyleBackgroundImg = styled.div`
//   display: none;

//   @media ${props => props.theme.mobile} {
//   }

//   @media ${props => props.theme.tablet} {
//   }

//   @media ${props => props.theme.desktop} {
//     display: block;
//     background-image: url(${props => props.makgeolliImg});
//     background-size: cover;
//     background-repeat: no-repeat;
//     filter: grayscale(100%);
//     opacity: 0.5;
//     width: 90%;
//     height: 90%;
//     margin-left: auto;
//     transform: rotate(-5deg);
//     position: relative;
//     z-index: 1;
//   }
// `;

// const StyleImg = styled.div`
//   background-image: url(${props => props.makgeolliImg});
//   background-size: cover;
//   background-repeat: no-repeat;
//   background-position: center;
//   width: 100%;
//   height: 60vh;

//   @media ${props => props.theme.mobile} {
//   }

//   @media ${props => props.theme.tablet} {
//     width: 50%;
//     height: 60vh;
//   }

//   @media ${props => props.theme.desktop} {
//     width: 350px;
//     height: 350px;
//     position: absolute;
//     z-index: 2;
//   }
// `;

// const StyleVertical = styled.div`
//   display: flex;
//   flex-direction: column;
// `;

// const StyleDescBox = styled.div`
//   background-color: skyblue;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   padding-bottom: 5vmin;

//   @media ${props => props.theme.mobile} {
//   }

//   @media ${props => props.theme.tablet} {
//     width: 100vw;
//   }

//   @media ${props => props.theme.desktop} {
//     width: 40vw;
//     min-height: 55vmin;
//     padding-bottom: 3vmin;
//     flex-wrap: wrap;
//     flex-direction: row;
//     align-items: stretch;
//     justify-content: space-around;
//   }
// `;

// const StyleDescInfo = styled.div`
//   width: 100%;
//   border: 5px red solid;
//   padding: 20px;
//   font-size: 1.2rem;
//   display: flex;
//   justify-content: space-between;

//   @media ${props => props.theme.mobile} {
//   }

//   @media ${props => props.theme.tablet} {
//     width: 50%;
//     flex-direction: column;
//     align-items: center;
//     justify-content: center;
//     padding-bottom: 10px;

//     div {
//       margin-bottom: 0.8rem;
//     }
//   }

//   @media ${props => props.theme.desktop} {
//     max-height: 130px;
//     font-size: 1rem;
//     margin-top: 10px;
//     width: auto;
//     order: 2;

//     div {
//       margin-bottom: 0.5rem;
//     }
//   }
// `;

// const StyleExplanation = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;

//   @media ${props => props.theme.mobile} {
//   }

//   @media ${props => props.theme.tablet} {
//   }

//   @media ${props => props.theme.desktop} {
//     margin-left: 20px;
//     width: 60%;
//     justify-content: start;
//     align-items: flex-start;
//     order: 1;
//   }
// `;

// const StyleTitle = styled.div`
//   margin-top: 40px;
//   margin-bottom: 40px;
//   font-size: 2rem;
//   text-align: center;

//   @media ${props => props.theme.mobile} {
//   }

//   @media ${props => props.theme.tablet} {
//   }

//   @media ${props => props.theme.desktop} {
//     margin-top: 50px;
//   }
// `;

// const StyleKinds = styled.div`
//   font-size: 1.3rem;
//   margin-bottom: 40px;

//   @media ${props => props.theme.mobile} {
//   }

//   @media ${props => props.theme.tablet} {
//   }

//   @media ${props => props.theme.desktop} {
//     font-size: 1.2rem;
//   }
// `;

// const StyleDescBottom = styled.div`
//   width: 80%;
//   font-size: 1.5rem;

//   @media ${props => props.theme.mobile} {
//   }

//   @media ${props => props.theme.tablet} {
//   }

//   @media ${props => props.theme.desktop} {
//     width: 90%;
//     font-size: 1rem;
//     line-height: 1.2rem;
//     height: 14rem;
//     margin-top: 0;
//     overflow: scroll;
//     word-break: break-all;
//     word-break: break-word;
//     order: 3;
//   }
// `;

// const StyleLikeBtn = styled.button`
//   display: none;

//   @media ${props => props.theme.mobile} {
//   }

//   @media ${props => props.theme.tablet} {
//   }

//   @media ${props => props.theme.desktop} {
//     display: block;
//     max-width: 10vmin;
//     justify-content: flex-start;
//   }
// `;

// const StyleSmallLikeBtn = styled.button`
//   display: inline-block;

//   @media ${props => props.theme.mobile} {
//   }

//   @media ${props => props.theme.tablet} {
//   }

//   @media ${props => props.theme.desktop} {
//     display: none;
//   }
// `;

// const StyleTextLike = styled.div`
//   display: none;

//   @media ${props => props.theme.mobile} {
//   }

//   @media ${props => props.theme.tablet} {
//   }

//   @media ${props => props.theme.desktop} {
//     display: inline;
//   }
// `;

export default {
  accessToken: '',
  isLogin: false,
  user: { id: null, email: '', username: '' },
  makgeollis: [
    {
      id: null,
      name: '',
      area: '',
      content: '',
      explain: '',
      material: '',
      likes: '',
      views: '',
      image: '',
    },
  ],
  brewerys: [
    {
      id: null,
      name: '',
      address: '',
      map: '',
    },
  ],
  review: {
    id: null,
    star: 0,
    comment: '',
    image: '',
    userId: null,
    userName: '',
    createAt: '',
    updateAt: '',
  },

  reviews: [
    {
      id: 1,
      makgeolliId: 4,
      star: 3.5,
      comment: '맛이끝내줍니자아주',
      image: '../images/review-sample-1.png',
      userId: 1,
      userName: '김코딩',
      createAt: '2021/07/13',
      updateAt: '',
    },

    {
      id: 2,
      makgeolliId: 4,
      star: 1,
      comment: '니자아주',
      image:
        'https://s3.ap-northeast-2.amazonaws.com/jumo.ml/%E1%84%91%E1%85%A9%E1%84%8E%E1%85%A5%E1%86%AB%E1%84%8B%E1%85%B5%E1%86%AF%E1%84%83%E1%85%A9%E1%86%BC%E1%84%86%E1%85%A1%E1%86%A8%E1%84%80%E1%85%A5%E1%86%AF%E1%84%85%E1%85%B5.jpg',
      userId: 1,
      userName: '김코딩',
      createAt: '2021/07/13',
      updateAt: '',
    },

    {
      id: 3,
      makgeolliId: 4,
      star: 2,
      comment: '자아주',
      image: '/static/media/review-sample-1.24446f9b.png',
      userId: 1,
      userName: '김코딩',
      createAt: '2021/07/13',
      updateAt: '',
    },

    {
      id: 3,
      makgeolliId: 4,
      star: 2.5,
      comment: '맛있습니다강추합니다정말맛있습니다',
      image: '/static/media/review-sample-1.24446f9b.png',
      userId: 1,
      userName: '김코딩',
      createAt: '2021/07/13',
      updateAt: '',
    },
  ],
};

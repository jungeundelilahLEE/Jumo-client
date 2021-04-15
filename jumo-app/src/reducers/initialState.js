export default {
  accessToken: '',
  isLogin: false,
  user: { id: null, email: '', username: '' },
  likesItem: [],
  // makgeolli: [
  //   {
  //     id: null,
  //     name: '',
  //     area: '',
  //     content: '',
  //     explain: '',
  //     material: '',
  //     likes: 0,
  //     views: 0,
  //     image: '',
  //   },
  // ],
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
  // reviewList: [],

  // 테스트용 dummy data
  reviewList: [
    {
      id: 1,
      makgeolliId: 4,
      star: 3.5,
      comment: '맛이끝내줍니자아주',
      image: '',
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
      id: 4,
      makgeolliId: 4,
      star: 2.5,
      comment: '맛있습니다강추합니다정말맛있습니다',
      image: '',
      userId: 1,
      userName: '김코딩',
      createAt: '2021/07/13',
      updateAt: '',
    },
  ],

  makgeolli: [
    {
      id: 1,
      name: '느린 막걸리',
      area: '서울',
      content: '750ml',
      explain:
        'ㅇㅇ막걸리는.... 느린마을 막걸리는 일체의 인공감미료 없이, 엄선된 원료와 최적의 발효과정을 거쳐 빚어낸 프리미엄 수제 생 막걸리 입니다. 배상면주가의 오랜 연구개발과 제조 노하우로 빚어낸 부드러운 단맛과 목넘김, 효모가 만들어내는 풍성한 과실향과 산미가 잘 조화되어 있습니다. 또한 계절이 변하듯 시간의 흐름에 따라, 살아있는 효모가 만들어내는 다채로운 맛의 사계를 느낄 수 있습니다. 그렇기 때문에, 느린마을막걸리는 맛을 아시는 분들이 꾸준히 다시 찾아주시고 주변에 권해주시는, 입소문 제대로 난 막걸리입니다. ㅇㅇ막걸리는.... 느린마을 막걸리는 일체의 인공감미료 없이, 엄선된 원료와 최적의 발효과정을 거쳐 빚어낸 프리미엄 수제 생 막걸리 입니다. 배상면주가의 오랜 연구개발과 제조 노하우로 빚어낸 부드러운 단맛과 목넘김, 효모가 만들어내는 풍성한 과실향과 산미가 잘 조화되어 있습니다. 또한 계절이 변하듯 시간의 흐름에 따라, 살아있는 효모가 만들어내는 다채로운 맛의 사계를 느낄 수 있습니다. 그렇기 때문에, 느린마을막걸리는 맛을 아시는 분들이 꾸준히 다시 찾아주시고 주변에 권해주시는, 입소문 제대로 난 막걸리입니다.ㅇㅇ막걸리는.... 느린마을 막걸리는 일체의 인공감미료 없이, 엄선된 원료와 최적의 발효과정을 거쳐 빚어낸 프리미엄 수제 생 막걸리 입니다. 배상면주가의 오랜 연구개발과 제조 노하우로 빚어낸 부드러운 단맛과 목넘김, 효모가 만들어내는 풍성한 과실향과 산미가 잘 조화되어 있습니다. 또한 계절이 변하듯 시간의 흐름에 따라, 살아있는 효모가 만들어내는 다채로운 맛의 사계를 느낄 수 있습니다. 그렇기 때문에, 느린마을막걸리는 맛을 아시는 분들이 꾸준히 다시 찾아주시고 주변에 권해주시는, 입소문 제대로 난 막걸리입니다.',
      material: 'ㅇㅇㅇ양조장',
      likes: 456,
      views: 1234567,
      revuews: 277,
      image: '',
    },
  ],
};

export default {
  accessToken: '',
  isLogin: true,
  user: {
    id: null,
    email: '',
    username: '이윌리',
  },
  likeItems: [],

  makgeolli: {
    id: null,
    breweryId: null,
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
  },

  brewery: {
    name: '',
    address: '',
    number: '',
    kinds: '',
    createdAt: null,
    updatedAt: null,
  },

  review: {
    id: null,
    makgeolliId: null,
    userId: null,
    star: '',
    comment: '',
    image: '',
  },

  reviewList: [],
  makgeolliList: [],
  breweryList: [],
};

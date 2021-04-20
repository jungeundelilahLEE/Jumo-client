import axios from 'axios';

export const clientURL = 'https://www.jumo.ml';

export default axios.create({
  baseURL: 'https://www.jumoserver.ml',
});

/* eslint-disable consistent-return */
/* eslint-disable no-useless-return */
const dateFormat = (origin = '') => {
  if (
    origin.length &&
    origin !== undefined &&
    origin !== null &&
    typeof origin === 'string'
  ) {
    const format = origin.slice(0, 10).split('-');
    const numFormat = [...format];
    const result = `${numFormat[0]}년 ${Number(numFormat[1])}월 ${
      numFormat[2]
    }일`;
    return result;
  }
  return;
};

export default dateFormat;

// const size = {
//   mobile: '770px',
//   tabletS: '1023px',
//   tabletM: '1220px',
//   tabletL: '1280px',
//   laptop: '14060px',
//   desktop: '1700px',
// };

// const theme = {
//   mobile: `(max-width: ${size.mobile})`,
//   tabletS: `(max-width: ${size.tabletS})`,
//   tabletM: `(max-width: ${size.tabletM})`,
//   tabletL: `(max-width: ${size.tabletL})`,
//   laptop: `(max-width: ${size.laptop})`,
//   desktop: `(min-width: ${size.desktop})`,
// };

const size = {
  mobile: '480px',
  tablet: '768px',
  desktop: '1024px',
};

const theme = {
  mobile: `(max-width: ${size.mobile})`,
  tablet: `(min-width: ${size.tablet})`,
  desktop: `(min-width: ${size.desktop})`,
};

export default theme;

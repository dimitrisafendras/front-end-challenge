export const typography = (typo) => {
  const { pxToRem } = typo;
  return {
    fontFamily: 'Roboto',
    fontSize: 16,
    h1: {
      fontSize: pxToRem(70),
      lineHeight: 1.1,
      fontWeight: 800,
    },
    h2: {
      fontSize: pxToRem(56),
      lineHeight: 1.1,
      fontWeight: 500,
    },
    h3: {
      fontSize: pxToRem(28),
      lineHeight: 1.1,
      fontWeight: 300,
    },
    body1: {
      fontSize: pxToRem(16),
      lineHeight: 1.1,
      fontWeight: 300,
    },
    body2: {
      fontSize: pxToRem(16),
      lineHeight: 1.1,
      fontWeight: 300,
    },
  };
};

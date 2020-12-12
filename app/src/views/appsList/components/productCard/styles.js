import { fade } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles(
  ({
    palette: {
      black,
      text: { discountOriginal, secondary },
    },
  }) => ({
    link: {
      color: 'unset',
      textDecoration: 'unset',
    },
    productCard: {
      paddingRight: '12px',
      margin: '10px',
      display: 'flex',
      backgroundColor: fade(black, 0.2),
    },
    img: {
      height: 69,
      maxWidth: '184px',
    },
    info: {
      display: 'flex',
      margin: '0 12px',
      flexDirection: 'column',
      alignItems: 'flex-start',
      justifyContent: 'space-around',
    },
    name: {
      color: secondary,
      textAlign: 'left',
    },
    platforms: {},
    logo: {
      height: 20,
      width: 20,
      margin: 2,
    },
    price: {
      marginLeft: 'auto',
      display: 'flex',
      alignItems: 'center',
    },
    extraPrices: {
      textAlign: 'right',
    },
    initialPrice: {
      textDecoration: 'line-through',
      color: discountOriginal,
      fontSize: '12px',

    },
    finalPrice: {
      color: secondary,
    },
    '@media (max-width: 768px)': {
      price: {
        flexDirection: 'column',
        alignItems: 'flex-end',
        justifyContent: 'center',
      },
      discount: {
        margin: 'unset',
      },
    },
  }),
);

import { fade } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles(
  ({ palette: { black } }) => ({
    link: {
      color: 'unset',
      textDecoration: 'unset',
    },
    productCard: {
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
      margin: '0 4px',
      flexDirection: 'column',
      alignItems: 'flex-start',
      justifyContent: 'space-around',
    },
    platforms: {},
    logo: {
      height: 20,
      width: 20,
      margin: 2,
    },
    price: {
      marginLeft: 'auto',
      backgroundColor: black,
      display: 'flex',
      alignItems: 'center',
    },
    discount: {
      margin: '0 60px 0 4px',
    },
    initialPrice: {
      textDecoration: 'line-through',
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

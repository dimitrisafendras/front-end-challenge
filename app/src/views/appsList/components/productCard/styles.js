import { fade } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles(
  ({
    palette: {
      black,
      lightBlue,
      text: { secondary },
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
      '&:hover': {
        backgroundColor: fade(lightBlue, 0.6),
      },
    },
    img: {
      width: '100%',
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
      width: '150px',
      marginLeft: 'auto',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
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

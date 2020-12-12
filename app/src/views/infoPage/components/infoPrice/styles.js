import { makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles(
  ({
    palette: {
      text: {
        secondary,
      },
      white,
    },
  }) => ({
    infoPrice: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      textAlign: 'left',
      height: 'fit-content',
      padding: '16px',
      background: 'linear-gradient( -60deg, rgba(226,244,255,0.3) 5%,rgba(84, 107, 115, 0.3) 95%)',
    },
    name: {
      fontSize: '30px',
      color: secondary,
    },
    logo: {
      color: white,
      height: 20,
      width: 20,
      margin: 2,
    },
  }),
);

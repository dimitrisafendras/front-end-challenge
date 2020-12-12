import { makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles(
  ({
    palette: {
      text: {
        secondary,
      },
      white,
      black,
    },
  }) => ({
    infoPrice: {
      minHeight: '100px',
      position: 'relative',
      borderRadius: '10px',
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
    priceContainer: {
      position: 'absolute',
      bottom: '-16px',
      right: '16px',
      borderRadius: '2px',
      backgroundColor: black,
      display: 'flex',
      alignItems: 'center',
      padding: '2px',
    },
    discountStyle: {
      padding: '4px',
      marginRight: '4px',
      fontSize: '24px',
      margin: 'unset',
    },
    btn: {
      marginLeft: '4px',
      color: white,
      background: 'linear-gradient( to right, #8ed629 5%, #6aa621 95%)',
    },
  }),
);

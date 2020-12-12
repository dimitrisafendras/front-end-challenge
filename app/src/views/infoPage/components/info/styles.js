import { makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles(
  ({
    palette: {
      text: {
        secondary,
        tertiary,
      },
    },
  }) => ({
    info: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
    },
    img: {
      width: '100%',
      maxWidth: '300px',
      marginBottom: '8px',
    },
    shortDesc: {
      color: secondary,
      fontSize: '12px',
      textAlign: 'left',
      marginBottom: '8px',
    },
    textContainer: {
      margin: '4px 0',
      fontSize: '10px',
    },
    greyText: {
      color: tertiary,
    },

  }),
);

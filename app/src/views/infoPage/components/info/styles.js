import { fade } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles(
  ({
    palette: {
      text: {
        secondary,
        tertiary,
      },
      black,
    },
  }) => ({
    info: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      backgroundColor: fade(black, 0.2),

    },
    img: {
      width: '100%',
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

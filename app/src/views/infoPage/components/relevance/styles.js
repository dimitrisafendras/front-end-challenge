import { fade } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles(
  ({
    palette:
    {
      text: { secondary },
      black,
      lightBlue,
    },
  }) => ({
    relevance: {
      backgroundColor: fade(black, 0.2),
      textAlign: 'left',
    },
    title: {
      backgroundColor: fade(black, 0.4),
      padding: '4px',
      fontSize: '12px',
      color: secondary,
    },
    container: {
      padding: '4px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'stretch',
      flexDirection: 'column',
    },
    item: {
      height: '26px',
      width: '100%',
      margin: '2px 0',
      display: 'flex',
      alignItems: 'center',
      backgroundColor: fade(lightBlue, 0.1),

    },
    icon: {
      color: secondary,
      backgroundColor: fade(black, 0.4),
    },
    text: {
      marginLeft: '4px',
      fontSize: '12px',
    },
  }),
);

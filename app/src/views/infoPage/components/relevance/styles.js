import { fade } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles(
  ({
    palette:
    {
      text: { secondary },
      black,
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

    },
  }),
);

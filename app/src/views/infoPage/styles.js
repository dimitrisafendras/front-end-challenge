import { makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles(
  ({
    palette: {
      text: {
        secondary,
      },
    },
  }) => ({
    infoPage: {
    },
    link: {
      color: 'unset',
      textDecoration: 'unset',
      justifySelf: 'stretch',
      gridArea: 'backBtn',
    },
    backBtn: {
      color: secondary,
      width: '100%',
    },
    title: {
      gridArea: 'title',
      alignSelf: 'center',
      textAlign: 'left',
      color: secondary,
      fontSize: '24px',
    },
    carousel: {
      gridArea: 'carousel',
      backgroundColor: 'blue',
    },
    info: {
      gridArea: 'info',
      backgroundColor: 'pink',
    },
    about: {
      gridArea: 'about',
      backgroundColor: 'orange',
    },
  }),
);

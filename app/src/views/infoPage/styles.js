import { makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles(
  () => ({
    infoPage: {
    },
    link: {
      color: 'unset',
      textDecoration: 'unset',
      width: '100%',
      gridArea: 'backBtn',
    },
    backBtn: {
      width: '100%',
    },
    title: {
      gridArea: 'title',
      backgroundColor: 'green',
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

import { makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles(
  ({
    palette: {
      text: {
        secondary,
      },
      lightBlue,
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
    },
    info: {
      gridArea: 'info',
    },
    price: {
      gridArea: 'price',
    },
    relevance: {
      gridArea: 'relevance',
    },
    about: {
      color: secondary,
      gridArea: 'about',
      textAlign: 'left',
    },
    aboutTitle: {
      fontSize: '24px',
      marginBottom: '12px',
      textTransform: 'uppercase',
    },
  }),
);

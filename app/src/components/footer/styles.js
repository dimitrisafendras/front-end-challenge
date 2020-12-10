import { makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles(
  ({ palette: { background: { darkBackground } } }) => ({
    footer: {
      gridArea: 'footer',
      backgroundColor: darkBackground,
    },
  }),
);

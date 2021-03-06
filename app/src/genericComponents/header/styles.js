import { makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles(
  ({ palette: { background: { darkBackground } } }) => ({
    header: {
      gridArea: 'header',
      backgroundColor: darkBackground,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  }),
);

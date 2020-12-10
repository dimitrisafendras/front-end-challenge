import { makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles(({ variables: { appHeight, appWidth } }) => ({
  app: {
    textAlign: 'center',
    height: appHeight,
    width: appWidth,
  },
}));

import { makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles(
  ({
    variables: {
      appHeight, appWidth, headerHeight, mainHeight, footerHeight,
    },
  }) => ({
    appLayout: {
      textAlign: 'center',
      height: appHeight,
      width: appWidth,

      display: 'grid',
      gridTemplateRows: `${headerHeight} ${mainHeight} ${footerHeight}`,
      gridTemplateAreas: `
        "header"
        "main"
        "footer"
      `,
    },
  }),
);

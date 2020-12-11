import { makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles(
  ({
    variables: {
      appHeight, headerHeight, mainHeight, footerHeight,
    },
  }) => ({
    appLayout: {
      textAlign: 'center',
      minHeight: appHeight,

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

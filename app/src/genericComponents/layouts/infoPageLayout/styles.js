import { makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles(
  () => ({
    infoPageLayout: {
      padding: '8px',
      display: 'grid',
      gridGap: '4px',
      gridTemplateColumns: '1fr 1fr',
      gridTemplateRows: '36px 32px auto',
      gridTemplateAreas: `
        "backBtn backBtn"
        "title title"
        "carousel info"
        "price relevance"
        "about ."
      `,
    },
  }),
);

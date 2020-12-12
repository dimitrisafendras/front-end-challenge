import { makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles(
  () => ({
    infoPageLayout: {
      justifySelf: 'center',
      maxWidth: '940px',
      padding: '8px',
      display: 'grid',
      gridGap: '4px',
      gridTemplateColumns: '67% 33%',
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

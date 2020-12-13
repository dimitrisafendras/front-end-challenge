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
      gridTemplateAreas: `
        "backBtn backBtn"
        "title title"
        "carousel info"
        "price relevance"
        "about ."
      `,
    },
    '@media (max-width: 768px)': {
      infoPageLayout: {
        maxWidth: '768px',
        rowGap: '12px',
        gridTemplateColumns: '1fr',
        gridTemplateAreas: `
        "backBtn"
        "title"
        "carousel"
        "info"
        "price"
        "relevance"
        "about"
      `,
      },
    },
  }),
);

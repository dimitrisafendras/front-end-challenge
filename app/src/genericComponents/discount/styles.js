import { makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles(
  ({
    palette: {
      background: { discount },
      text: { discount: discountText },
    },
  }) => ({
    discount: {
      padding: '2px 4px',
      margin: '4px 4px 4px 4px',
      color: discountText,
      backgroundColor: discount,
    },
    '@media (max-width: 768px)': {
      discount: {
        margin: '4px 0 4px 4px',
      },
    },
  }),
);

import { makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles(
  ({
    palette: {
      background: { discount },
      text: { discount: discountText },
    },
  }) => ({
    discount: {
      padding: '0 4px',
      margin: '0 60px 0 4px',
      color: discountText,
      backgroundColor: discount,
    },
  }),

);

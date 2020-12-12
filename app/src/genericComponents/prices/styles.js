import { makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles(
  ({
    palette: {
      text: { discountOriginal, secondary },
    },
  }) => ({
    prices: {
      textAlign: 'right',
    },
    initialPrice: {
      textDecoration: 'line-through',
      color: discountOriginal,
      fontSize: '12px',
    },
    finalPrice: {
      color: secondary,
    },
  }),
);

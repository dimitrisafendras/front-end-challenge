import { makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles(
  ({
    palette: {
      text: {
        primary,
        secondary,
      },
      darkBlue,
    },
  }) => ({
    appBar: {
      padding: '24px 0 0',
      backgroundColor: 'transparent',
      color: primary,

      '& .Mui-selected': {
        color: secondary,
        backgroundColor: darkBlue,
        borderTopLeftRadius: '4px',
        borderTopRightRadius: '4px',
      },

      '& .MuiTabs-indicator': {
        display: 'none',
      },
      '& ,MuiPaper-elevation4': {
        boxShadow: 'unset',
      },
    },
    appList: {
      backgroundColor: darkBlue,
    },
  }),
);

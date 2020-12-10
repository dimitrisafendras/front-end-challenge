import { muiTheme } from './muiTheme';

export const theme = {
  ...muiTheme,
  app: {
    maxWidth: muiTheme.typography.pxToRem(960),
  },
};

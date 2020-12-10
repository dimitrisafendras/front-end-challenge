import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import { merge } from 'lodash-es';
import { typography } from './typography';
import { palette } from './palette';
import { color } from './color';
import { variables } from './variables';

export const muiTheme = responsiveFontSizes(
  createMuiTheme({
    typography: {
      useNextVariants: true,
      fontFamily: typography.fontFamily,
    },
    palette,
    color,
    variables,
  }),
);

let {
  // eslint-disable-next-line no-unused-vars
  overrides,
  // eslint-disable-next-line prefer-const
  palette: muiPalette,
  typography: muiTypography,
  // eslint-disable-next-line prefer-const
  breakpoints,
} = muiTheme;

const { pxToRem } = muiTypography;
const { down } = breakpoints;
const { primary, secondary } = muiPalette;

muiTypography = merge(muiTypography, typography(muiTypography));

// Overrides
// eslint-disable-next-line no-unused-vars
overrides = {
  MuiTypography: {
    colorInherit: {
      color: 'inherit',
    },
    colorSecondary: {
      color: secondary.main,
    },
    colorPrimary: {
      color: primary.main,
    },
    h1: {
      [down('sm')]: {
        fontSize: pxToRem(56),
      },
      [down('xs')]: {
        fontSize: pxToRem(40),
      },
    },
    h2: {
      [down('sm')]: {
        fontSize: pxToRem(48),
      },
      [down('xs')]: {
        fontSize: pxToRem(32),
      },
    },
    h3: {
      [down('sm')]: {
        fontSize: pxToRem(21),
      },
      [down('xs')]: {
        fontSize: pxToRem(18),
      },
    },
    subtitle1: {
      [down('sm')]: {
        fontSize: pxToRem(14),
      },
    },
    body1: {
      [down('sm')]: {
        fontSize: pxToRem(14),
      },
    },
    body2: {
      [down('sm')]: {
        fontSize: pxToRem(12),
      },
    },
  },
};

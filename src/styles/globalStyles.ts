import { Theme } from '@mui/material';

export const globalStyles = (theme: Theme) => {
  return {
    '*': {
      boxSizing: 'border-box',
    },

    'html, body': {
      padding: 0,
      margin: 0,
      fontWeight: 400,
      color: theme.palette.text.primary,
      fontFamily: theme.typography.fontFamily,
      fontSize: theme.typography.fontSize,
      backgroundColor: theme.palette.background.paper,
      lineHeight: 1.2,
      letterSpacing: '0',
      scrollBehavior: 'smooth',
    },
    a: {
      backgroundColor: 'transparent',
      color: 'inherit',
      textDecoration: 'inherit',
    },
    p: {
      margin: 0,
    },

    'input:-webkit-autofill': {
      transition: 'background-color 0s 600000s, color 0s 600000s !important',
    },

    'input:-internal-autofill-selected': {
      backgroundColor: 'transparent !important',
    },

    'input:-webkit-autofill:focus': {
      transition: 'background-color 0s 600000s, color 0s 600000s !important',
    },

    'input[type=number]': { MozAppearance: 'textfield' },

    'ol, ul': {
      listStyle: 'none',
      margin: 0,
      padding: 0,
    },

    'h1, h2, h3, h4, blockquote, dl, dd, h1, h2, h3, h4, h5, h6, hr, figure, p': {
      margin: 0,
    },
  };
};

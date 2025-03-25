import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles/createPalette' {
  interface TypeBackground {
    button?: string;
    buttonHover?: string;
    buttonActiveGradient?: string;
    buttonActiveAlternative?: string;
  }

  interface TypeText {
    buttonAlternative: string;
  }
}

const theme = createTheme({
  typography: {
    fontFamily: 'Open Sans, Helvetica, Arial, sans-serif',
    fontSize: 16,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,

    h4: {
      fontSize: '24px',
      fontWeight: 700,
    },

    h6: {
      fontSize: '18px',
      fontWeight: 700,
    },
    button: {
      fontSize: '0.875rem',
      fontWeight: 400,
      lineHeight: 1.4,
      letterSpacing: '0',
      color: '#201F1F',
    },
  },
  palette: {
    background: {
      default: 'linear-gradient(180deg, #141333 0%, #202261 30%, #543C97 70%, #6939A1 100%)',
      paper: '#FFF0F0',
      button: '#EAEEF7',
      buttonHover: '#E3E9F4',
      buttonActiveGradient:
        'linear-gradient(180deg, #141333 0%, #202261 30%, #543C97 70%, #6939A1 100%)',
      buttonActiveAlternative: '#FFF0F0',
    },
    text: {
      primary: '#333333',
      secondary: '#FBFBFF',
      buttonAlternative: '#6A3AA2',
    },
    common: {
      white: '#FFF',
      black: '#000',
    },
  },
  shape: {
    borderRadius: 16,
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 1024,
      lg: 1280,
      xl: 1920,
    },
  },
});

export default theme;

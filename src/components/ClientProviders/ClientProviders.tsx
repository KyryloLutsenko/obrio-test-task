'use client';

import { ThemeProvider } from '@mui/material/styles';
import { Provider as ReduxProvider } from 'react-redux';
import CssBaseline from '@mui/material/CssBaseline';
import { GlobalStyles } from '@mui/material';
import { store } from '@/store/store';
import theme from '@/styles/theme';
import { globalStyles } from '@/styles/globalStyles';

const ClientProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider theme={theme}>
      <ReduxProvider store={store}>
        <CssBaseline />
        <GlobalStyles styles={globalStyles(theme)} />
        {children}
      </ReduxProvider>
    </ThemeProvider>
  );
};

export default ClientProviders;

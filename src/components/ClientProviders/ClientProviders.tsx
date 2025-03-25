'use client';

import { Provider as ReduxProvider } from 'react-redux';
import { StyledEngineProvider, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { GlobalStyles } from '@mui/material';

import StyledComponentsRegistry from '@/app/registry';
import { store } from '@/store/store';

import { globalStyles } from '@/styles/globalStyles';
import theme from '@/styles/theme';

const ClientProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <StyledEngineProvider injectFirst>
      <StyledComponentsRegistry>
        <ThemeProvider theme={theme}>
          <ReduxProvider store={store}>
            <CssBaseline />
            <GlobalStyles styles={globalStyles(theme)} />
            {children}
          </ReduxProvider>
        </ThemeProvider>
      </StyledComponentsRegistry>
    </StyledEngineProvider>
  );
};

export default ClientProviders;

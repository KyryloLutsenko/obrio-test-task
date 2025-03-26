'use client';

import { Provider as ReduxProvider } from 'react-redux';
import { StyledEngineProvider, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { GlobalStyles } from '@mui/material';
import { PersistGate } from 'redux-persist/integration/react';

import StyledComponentsRegistry from '@/app/registry';
import { store, persistor } from '@/store/store';

import { globalStyles } from '@/styles/globalStyles';
import theme from '@/styles/theme';

const ClientProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <StyledEngineProvider injectFirst>
      <StyledComponentsRegistry>
        <ThemeProvider theme={theme}>
          <ReduxProvider store={store}>
            <PersistGate loading={null} persistor={persistor}>
              <CssBaseline />
              <GlobalStyles styles={globalStyles(theme)} />
              {children}
            </PersistGate>
          </ReduxProvider>
        </ThemeProvider>
      </StyledComponentsRegistry>
    </StyledEngineProvider>
  );
};

export default ClientProviders;

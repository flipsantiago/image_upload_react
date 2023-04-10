import { FC } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import ErrorBoundary from '../components/ErrorBoundary';

import { GlobalStyle } from '../styles/global';
import { theme } from '../styles/theme';

// Add in application-wide provider INSIDE the error boundary

const AppProvider: FC = ({ children }) => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyle />

        <ErrorBoundary>{children}</ErrorBoundary>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default AppProvider;

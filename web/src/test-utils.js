import React, { Suspense } from 'react';
import T from 'prop-types';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'theme-ui';
import theme from './components/assets/themes';

const ThemingProvider = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Suspense fallback='..'>
        {children}
      </Suspense>
    </ThemeProvider>
  )
}

const renderWithTheme = (ui, options) =>
  render(ui, { wrapper: ThemingProvider, ...options })

  ThemingProvider.propTypes = {
  children: T.node,
}

// re-export everything
export * from '@testing-library/react'

// render method
export { renderWithTheme };

import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import App from './App';
import Heading from './components/Heading';
import { renderWithTheme } from './test-utils';


test('renders setting buttons and logo', async () => {
  render(<App />);

  // wait for appearance
  await waitFor(() => {
    const languageButton = screen.getByLabelText('Switch language to German');
    const themeButton = screen.getByTestId('theme_switch');

    expect(languageButton).toBeInTheDocument();
    expect(themeButton).toBeInTheDocument();
  })
});

test('renders logo theme switch', async () => {
  renderWithTheme(<Heading />);

  await waitFor(() => {
    expect(screen.getByTestId('logo_theme_switch')).toBeInTheDocument();
  })
})

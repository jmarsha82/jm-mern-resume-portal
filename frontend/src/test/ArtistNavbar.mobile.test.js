import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import ArtistNavbar from '../components/ArtistNavbar';
import { ThemeContextProvider } from '../context/ThemeContext';
import useMediaQuery from '@mui/material/useMediaQuery';

jest.mock('@mui/material/useMediaQuery', () => jest.fn());

jest.mock('react-router-dom', () => ({
  Link: ({ children, to, target, ...props }) => (
    <a href={to} target={target} {...props}>
      {children}
    </a>
  ),
}));

jest.mock('react-router-hash-link', () => ({
  HashLink: require('react').forwardRef(({ children, to, className, ...props }, ref) => (
    <a ref={ref} href={to} className={className} {...props}>
      {children}
    </a>
  )),
}));

const renderArtistNavbar = () => render(
  <ThemeContextProvider>
    <ArtistNavbar />
  </ThemeContextProvider>
);

describe('ArtistNavbar Mobile', () => {
  beforeEach(() => {
    useMediaQuery.mockReturnValue(true);
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  test('renders the mobile hamburger menu and instagram icon', () => {
    renderArtistNavbar();

    expect(screen.getByLabelText('open artist navigation menu')).toBeInTheDocument();
    expect(screen.getByTestId('InstagramIcon')).toBeInTheDocument();
  });

  test('opens and closes the mobile drawer menu', async () => {
    renderArtistNavbar();

    fireEvent.click(screen.getByLabelText('open artist navigation menu'));
    expect(screen.getByText('Portraits')).toBeInTheDocument();
    expect(screen.getByText('Landscapes/Still Life')).toBeInTheDocument();

    const presentationTargets = screen.getAllByRole('presentation');
    fireEvent.click(presentationTargets[presentationTargets.length - 1]);

    await waitFor(() => {
      expect(screen.queryByText('Landscapes/Still Life')).not.toBeInTheDocument();
    });
  });

  test('closes the drawer through the Drawer onClose handler', async () => {
    renderArtistNavbar();

    fireEvent.click(screen.getByLabelText('open artist navigation menu'));
    expect(screen.getByText('Abstract')).toBeInTheDocument();

    fireEvent.click(document.querySelector('.MuiBackdrop-root'));

    await waitFor(() => {
      expect(screen.queryByText('Abstract')).not.toBeInTheDocument();
    });
  });
});

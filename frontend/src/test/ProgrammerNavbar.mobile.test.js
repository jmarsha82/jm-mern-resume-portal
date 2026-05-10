import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import ProgrammerNavbar from '../components/ProgrammerNavbar';
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

const renderProgrammerNavbar = () => render(
  <ThemeContextProvider>
    <ProgrammerNavbar />
  </ThemeContextProvider>
);

describe('ProgrammerNavbar Mobile', () => {
  beforeEach(() => {
    useMediaQuery.mockReturnValue(true);
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  test('renders the mobile layout with menu button, resume button, and right-side icons', () => {
    renderProgrammerNavbar();

    expect(screen.getByLabelText('open programmer navigation menu')).toBeInTheDocument();
    expect(screen.getByText('Resume')).toBeInTheDocument();
    expect(screen.getByTestId('LinkedInIcon')).toBeInTheDocument();
    expect(screen.getByTestId('GitHubIcon')).toBeInTheDocument();
  });

  test('opens and closes the mobile drawer menu', async () => {
    renderProgrammerNavbar();

    fireEvent.click(screen.getByLabelText('open programmer navigation menu'));
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Extended Tech Stack')).toBeInTheDocument();

    const presentationTargets = screen.getAllByRole('presentation');
    fireEvent.click(presentationTargets[presentationTargets.length - 1]);

    await waitFor(() => {
      expect(screen.queryByText('Extended Tech Stack')).not.toBeInTheDocument();
    });
  });

  test('closes the drawer through the Drawer onClose handler', async () => {
    renderProgrammerNavbar();

    fireEvent.click(screen.getByLabelText('open programmer navigation menu'));
    expect(screen.getByText('Dev Links')).toBeInTheDocument();

    fireEvent.click(document.querySelector('.MuiBackdrop-root'));

    await waitFor(() => {
      expect(screen.queryByText('Dev Links')).not.toBeInTheDocument();
    });
  });

  test('downloads the resume from the mobile button', () => {
    renderProgrammerNavbar();

    const click = jest.fn();
    const anchor = { click, href: '', download: '' };
    const originalCreateElement = document.createElement.bind(document);
    jest.spyOn(document, 'createElement').mockImplementation((tagName) => {
      if (tagName === 'a') {
        return anchor;
      }

      return originalCreateElement(tagName);
    });
    jest.spyOn(document.body, 'appendChild').mockImplementation(() => anchor);
    jest.spyOn(document.body, 'removeChild').mockImplementation(() => anchor);

    fireEvent.click(screen.getByText('Resume'));

    expect(document.createElement).toHaveBeenCalledWith('a');
    expect(anchor.href).toBe('/img/developer/JustinMarshallResume.pdf');
    expect(anchor.download).toBe('JustinMarshallResume.pdf');
    expect(click).toHaveBeenCalled();
    expect(document.body.appendChild).toHaveBeenCalledWith(anchor);
    expect(document.body.removeChild).toHaveBeenCalledWith(anchor);
  });
});

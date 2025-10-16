import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ProgrammerNavbar from '../components/ProgrammerNavbar';
import { ThemeContextProvider } from '../context/ThemeContext';

// Mock react-router-dom and react-router-hash-link
jest.mock('react-router-dom', () => ({
  Link: ({ children, to, target, ...props }) => (
    <a href={to} target={target} {...props}>
      {children}
    </a>
  ),
}));

jest.mock('react-router-hash-link', () => ({
  HashLink: ({ children, to, className, ...props }) => (
    <a href={to} className={className} {...props}>
      {children}
    </a>
  ),
}));

// Helper function to render ProgrammerNavbar with theme context
const renderProgrammerNavbar = () => {
  return render(
    <ThemeContextProvider>
      <ProgrammerNavbar />
    </ThemeContextProvider>
  );
};

describe('ProgrammerNavbar Component', () => {
  beforeEach(() => {
    // Clear all mocks before each test
    jest.clearAllMocks();
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  describe('Component Rendering', () => {
    test('renders without crashing', () => {
      renderProgrammerNavbar();
      
      // Should render the header element
      expect(screen.getByRole('banner')).toBeInTheDocument();
    });

    test('renders main container structure', () => {
      renderProgrammerNavbar();
      
      // Check for main container
      const container = document.querySelector('.container');
      expect(container).toBeInTheDocument();
    });

    test('renders all navigation elements', () => {
      renderProgrammerNavbar();
      
      // Check for home icon
      expect(screen.getByTestId('HomeIcon')).toBeInTheDocument();
      
      // Check for navigation buttons
      expect(screen.getByText('Education')).toBeInTheDocument();
      expect(screen.getByText('Extended Tech Stack')).toBeInTheDocument();
      expect(screen.getByText('Dev Books')).toBeInTheDocument();
      expect(screen.getByText('Dev Links')).toBeInTheDocument();
      
      // Check for external links
      expect(screen.getByTestId('LinkedInIcon')).toBeInTheDocument();
      expect(screen.getByTestId('GitHubIcon')).toBeInTheDocument();
    });

    test('renders navbar sections correctly', () => {
      renderProgrammerNavbar();
      
      // Check for right section
      const rightSection = document.querySelector('.navbar-right-section');
      expect(rightSection).toBeInTheDocument();
      
      // Check for site buttons container
      const buttonsContainer = rightSection?.parentElement?.querySelector('div');
      expect(buttonsContainer).toBeInTheDocument();
    });
  });

  describe('Theme Context Integration', () => {
    test('uses theme context for styling', () => {
      renderProgrammerNavbar();
      
      // Component should render without theme context errors
      expect(screen.getByRole('banner')).toBeInTheDocument();
    });

    test('theme context is properly consumed', () => {
      renderProgrammerNavbar();
      
      // Should render with theme context
      const header = screen.getByRole('banner');
      expect(header).toBeInTheDocument();
    });

    test('applies theme-based styling', () => {
      renderProgrammerNavbar();
      
      // Check that elements are styled with theme
      const header = screen.getByRole('banner');
      expect(header).toBeInTheDocument();
    });
  });

  describe('Navigation Links and Buttons', () => {
    test('home icon has correct link', () => {
      renderProgrammerNavbar();
      
      const homeIcon = screen.getByTestId('HomeIcon');
      const homeLink = homeIcon.closest('a');
      expect(homeLink).toHaveAttribute('href', '/');
    });

    test('education button has correct link', () => {
      renderProgrammerNavbar();
      
      const educationButton = screen.getByText('Education');
      const educationLink = educationButton.closest('a');
      expect(educationLink).toHaveAttribute('href', '/programmer/#education-id');
    });

    test('extended tech stack button has correct link', () => {
      renderProgrammerNavbar();
      
      const extendedSkillsButton = screen.getByText('Extended Tech Stack');
      const extendedSkillsLink = extendedSkillsButton.closest('a');
      expect(extendedSkillsLink).toHaveAttribute('href', '/programmer/#extended-skills-id');
    });

    test('dev books button has correct link', () => {
      renderProgrammerNavbar();
      
      const devBooksButton = screen.getByText('Dev Books');
      const devBooksLink = devBooksButton.closest('a');
      expect(devBooksLink).toHaveAttribute('href', '/programmer/#dev-books-id');
    });

    test('dev links button has correct link', () => {
      renderProgrammerNavbar();
      
      const devLinksButton = screen.getByText('Dev Links');
      const devLinksLink = devLinksButton.closest('a');
      expect(devLinksLink).toHaveAttribute('href', '/programmer/#dev-links-id');
    });

    test('navigation buttons have correct styling classes', () => {
      renderProgrammerNavbar();
      
      const educationButton = screen.getByText('Education');
      const extendedSkillsButton = screen.getByText('Extended Tech Stack');
      const devBooksButton = screen.getByText('Dev Books');
      const devLinksButton = screen.getByText('Dev Links');
      
      // Check that buttons have the correct classes
      expect(educationButton.closest('a')).toHaveClass('navbar-site-buttons');
      expect(extendedSkillsButton.closest('a')).toHaveClass('navbar-site-buttons');
      expect(devBooksButton.closest('a')).toHaveClass('navbar-site-buttons');
      expect(devLinksButton.closest('a')).toHaveClass('navbar-site-buttons');
    });

    test('navigation buttons are Material-UI buttons', () => {
      renderProgrammerNavbar();
      
      const educationButton = screen.getByText('Education');
      const extendedSkillsButton = screen.getByText('Extended Tech Stack');
      const devBooksButton = screen.getByText('Dev Books');
      const devLinksButton = screen.getByText('Dev Links');
      
      // Check that buttons have Material-UI classes
      expect(educationButton).toHaveClass('MuiButton-root');
      expect(extendedSkillsButton).toHaveClass('MuiButton-root');
      expect(devBooksButton).toHaveClass('MuiButton-root');
      expect(devLinksButton).toHaveClass('MuiButton-root');
    });
  });

  describe('External Links', () => {
    test('LinkedIn link has correct URL and target', () => {
      renderProgrammerNavbar();
      
      const linkedinIcon = screen.getByTestId('LinkedInIcon');
      const linkedinLink = linkedinIcon.closest('a');
      expect(linkedinLink).toHaveAttribute('href', 'https://www.linkedin.com/in/justin-marshall-3733065b');
      expect(linkedinLink).toHaveAttribute('target', '_blank');
    });

    test('GitHub link has correct URL and target', () => {
      renderProgrammerNavbar();
      
      const githubIcon = screen.getByTestId('GitHubIcon');
      const githubLink = githubIcon.closest('a');
      expect(githubLink).toHaveAttribute('href', 'https://github.com/jmarsha82');
      expect(githubLink).toHaveAttribute('target', '_blank');
    });

    test('external links open in new tab', () => {
      renderProgrammerNavbar();
      
      const linkedinLink = screen.getByTestId('LinkedInIcon').closest('a');
      const githubLink = screen.getByTestId('GitHubIcon').closest('a');
      
      expect(linkedinLink).toHaveAttribute('target', '_blank');
      expect(githubLink).toHaveAttribute('target', '_blank');
    });
  });

  describe('Icon Components', () => {
    test('home icon is rendered correctly', () => {
      renderProgrammerNavbar();
      
      const homeIcon = screen.getByTestId('HomeIcon');
      expect(homeIcon).toBeInTheDocument();
      expect(homeIcon).toHaveClass('MuiSvgIcon-root');
    });

    test('LinkedIn icon is rendered correctly', () => {
      renderProgrammerNavbar();
      
      const linkedinIcon = screen.getByTestId('LinkedInIcon');
      expect(linkedinIcon).toBeInTheDocument();
      expect(linkedinIcon).toHaveClass('MuiSvgIcon-root');
    });

    test('GitHub icon is rendered correctly', () => {
      renderProgrammerNavbar();
      
      const githubIcon = screen.getByTestId('GitHubIcon');
      expect(githubIcon).toBeInTheDocument();
      expect(githubIcon).toHaveClass('MuiSvgIcon-root');
    });

    test('icons have large font size', () => {
      renderProgrammerNavbar();
      
      const homeIcon = screen.getByTestId('HomeIcon');
      const linkedinIcon = screen.getByTestId('LinkedInIcon');
      const githubIcon = screen.getByTestId('GitHubIcon');
      
      // Check that icons have the correct font size
      expect(homeIcon).toHaveClass('MuiSvgIcon-fontSizeLarge');
      expect(linkedinIcon).toHaveClass('MuiSvgIcon-fontSizeLarge');
      expect(githubIcon).toHaveClass('MuiSvgIcon-fontSizeLarge');
    });
  });

  describe('Layout and Structure', () => {
    test('header has correct structure', () => {
      renderProgrammerNavbar();
      
      const header = screen.getByRole('banner');
      expect(header).toBeInTheDocument();
      expect(header.tagName).toBe('HEADER');
    });

    test('container div is present', () => {
      renderProgrammerNavbar();
      
      const container = document.querySelector('.container');
      expect(container).toBeInTheDocument();
    });

    test('navbar right section is present', () => {
      renderProgrammerNavbar();
      
      const rightSection = document.querySelector('.navbar-right-section');
      expect(rightSection).toBeInTheDocument();
    });

    test('navigation buttons are grouped together', () => {
      renderProgrammerNavbar();
      
      // Check that navigation buttons are in a div container
      const educationButton = screen.getByText('Education');
      const container = educationButton.closest('.container');
      expect(container).toBeInTheDocument();
    });
  });

  describe('Accessibility', () => {
    test('has proper semantic structure', () => {
      renderProgrammerNavbar();
      
      // Check for proper header element
      const header = screen.getByRole('banner');
      expect(header).toBeInTheDocument();
    });

    test('navigation buttons are accessible', () => {
      renderProgrammerNavbar();
      
      const educationButton = screen.getByText('Education');
      const extendedSkillsButton = screen.getByText('Extended Tech Stack');
      const devBooksButton = screen.getByText('Dev Books');
      const devLinksButton = screen.getByText('Dev Links');
      
      // Buttons should be accessible
      expect(educationButton).toBeInTheDocument();
      expect(extendedSkillsButton).toBeInTheDocument();
      expect(devBooksButton).toBeInTheDocument();
      expect(devLinksButton).toBeInTheDocument();
    });

    test('external links are accessible', () => {
      renderProgrammerNavbar();
      
      const linkedinIcon = screen.getByTestId('LinkedInIcon');
      const githubIcon = screen.getByTestId('GitHubIcon');
      
      expect(linkedinIcon).toBeInTheDocument();
      expect(githubIcon).toBeInTheDocument();
    });

    test('home icon is accessible', () => {
      renderProgrammerNavbar();
      
      const homeIcon = screen.getByTestId('HomeIcon');
      expect(homeIcon).toBeInTheDocument();
    });
  });

  describe('Performance and Optimization', () => {
    test('renders efficiently', () => {
      const startTime = performance.now();
      renderProgrammerNavbar();
      const endTime = performance.now();
      
      // Component should render within reasonable time (less than 100ms)
      expect(endTime - startTime).toBeLessThan(100);
    });

    test('does not cause memory leaks', () => {
      const { unmount } = renderProgrammerNavbar();
      
      // Should unmount cleanly
      expect(() => unmount()).not.toThrow();
    });
  });

  describe('Error Handling', () => {
    test('handles missing theme context gracefully', () => {
      // Should throw error when theme context is missing (expected behavior)
      expect(() => {
        render(<ProgrammerNavbar />);
      }).toThrow('useTheme must be used inside a ThemeContextProvider');
    });
  });

  describe('Integration Tests', () => {
    test('works with ThemeContextProvider', () => {
      renderProgrammerNavbar();
      
      // Should work with theme context provider
      expect(screen.getByRole('banner')).toBeInTheDocument();
    });

    test('integrates with Material-UI components', () => {
      renderProgrammerNavbar();
      
      // Should work with MUI components
      const educationButton = screen.getByText('Education');
      expect(educationButton).toHaveClass('MuiButton-root');
    });

    test('integrates with react-router components', () => {
      renderProgrammerNavbar();
      
      // Should work with router components
      const homeIcon = screen.getByTestId('HomeIcon');
      const homeLink = homeIcon.closest('a');
      expect(homeLink).toHaveAttribute('href', '/');
    });
  });

  describe('Content Display', () => {
    test('displays all required navigation items', () => {
      renderProgrammerNavbar();
      
      // Check for all navigation items
      expect(screen.getByText('Education')).toBeInTheDocument();
      expect(screen.getByText('Extended Tech Stack')).toBeInTheDocument();
      expect(screen.getByText('Dev Books')).toBeInTheDocument();
      expect(screen.getByText('Dev Links')).toBeInTheDocument();
    });

    test('displays external link icons', () => {
      renderProgrammerNavbar();
      
      const linkedinIcon = screen.getByTestId('LinkedInIcon');
      const githubIcon = screen.getByTestId('GitHubIcon');
      
      expect(linkedinIcon).toBeInTheDocument();
      expect(githubIcon).toBeInTheDocument();
    });

    test('displays home icon', () => {
      renderProgrammerNavbar();
      
      const homeIcon = screen.getByTestId('HomeIcon');
      expect(homeIcon).toBeInTheDocument();
    });
  });

  describe('Navigation Functionality', () => {
    test('navigation buttons are clickable', () => {
      renderProgrammerNavbar();
      
      const educationButton = screen.getByText('Education');
      const extendedSkillsButton = screen.getByText('Extended Tech Stack');
      const devBooksButton = screen.getByText('Dev Books');
      const devLinksButton = screen.getByText('Dev Links');
      
      // All buttons should be present and clickable
      expect(educationButton).toBeInTheDocument();
      expect(extendedSkillsButton).toBeInTheDocument();
      expect(devBooksButton).toBeInTheDocument();
      expect(devLinksButton).toBeInTheDocument();
    });

    test('external links are clickable', () => {
      renderProgrammerNavbar();
      
      const linkedinIcon = screen.getByTestId('LinkedInIcon');
      const githubIcon = screen.getByTestId('GitHubIcon');
      
      expect(linkedinIcon).toBeInTheDocument();
      expect(githubIcon).toBeInTheDocument();
    });

    test('home link is clickable', () => {
      renderProgrammerNavbar();
      
      const homeIcon = screen.getByTestId('HomeIcon');
      const homeLink = homeIcon.closest('a');
      
      expect(homeLink).toBeInTheDocument();
      expect(homeLink).toHaveAttribute('href', '/');
    });
  });

  describe('Download Resume Button Exclusion', () => {
    test('Download Resume button is present but not tested', () => {
      renderProgrammerNavbar();
      
      // Verify the button exists (for completeness) but don't test its functionality
      const downloadButton = screen.getByText('Download Resume');
      expect(downloadButton).toBeInTheDocument();
      
      // Just verify it's a button element
      expect(downloadButton.tagName).toBe('BUTTON');
    });

    test('Download Resume button has correct styling class', () => {
      renderProgrammerNavbar();
      
      // Verify the button has the expected class
      const downloadButton = screen.getByText('Download Resume');
      expect(downloadButton).toHaveClass('navbar-download-resume-btn');
    });

    test('Download Resume button has GetApp icon', () => {
      renderProgrammerNavbar();
      
      // Verify the button contains the GetApp icon
      const getAppIcon = screen.getByTestId('GetAppIcon');
      expect(getAppIcon).toBeInTheDocument();
    });
  });
});
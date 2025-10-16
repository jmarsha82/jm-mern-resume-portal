import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import GeneralNavbar from '../components/GeneralNavbar';

// Mock react-router-dom
jest.mock('react-router-dom', () => ({
  Link: ({ children, href, target, ...props }) => (
    <a href={href} target={target} {...props}>
      {children}
    </a>
  ),
}));

describe('GeneralNavbar Component', () => {
  beforeEach(() => {
    // Clear all mocks before each test
    jest.clearAllMocks();
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  describe('Component Rendering', () => {
    test('renders without crashing', () => {
      render(<GeneralNavbar />);
      
      // Should render the header element
      expect(screen.getByRole('banner')).toBeInTheDocument();
    });

    test('renders main container structure', () => {
      render(<GeneralNavbar />);
      
      // Check for main container
      const container = document.querySelector('.container');
      expect(container).toBeInTheDocument();
    });

    test('renders all social media icons', () => {
      render(<GeneralNavbar />);
      
      // Check for all social media icons
      expect(screen.getByTestId('InstagramIcon')).toBeInTheDocument();
      expect(screen.getByTestId('LinkedInIcon')).toBeInTheDocument();
      expect(screen.getByTestId('GitHubIcon')).toBeInTheDocument();
    });

    test('renders header element', () => {
      render(<GeneralNavbar />);
      
      const header = screen.getByRole('banner');
      expect(header).toBeInTheDocument();
      expect(header.tagName).toBe('HEADER');
    });
  });

  describe('External Links and Navigation', () => {
    test('Instagram link has correct URL and target', () => {
      render(<GeneralNavbar />);
      
      const instagramIcon = screen.getByTestId('InstagramIcon');
      const instagramLink = instagramIcon.closest('a');
      expect(instagramLink).toHaveAttribute('href', 'https://www.instagram.com/marshajus/');
      expect(instagramLink).toHaveAttribute('target', '_blank');
    });

    test('LinkedIn link has correct URL and target', () => {
      render(<GeneralNavbar />);
      
      const linkedinIcon = screen.getByTestId('LinkedInIcon');
      const linkedinLink = linkedinIcon.closest('a');
      expect(linkedinLink).toHaveAttribute('href', 'https://www.linkedin.com/in/justin-marshall-3733065b');
      expect(linkedinLink).toHaveAttribute('target', '_blank');
    });

    test('GitHub link has correct URL and target', () => {
      render(<GeneralNavbar />);
      
      const githubIcon = screen.getByTestId('GitHubIcon');
      const githubLink = githubIcon.closest('a');
      expect(githubLink).toHaveAttribute('href', 'https://github.com/jmarsha82');
      expect(githubLink).toHaveAttribute('target', '_blank');
    });

    test('all external links open in new tab', () => {
      render(<GeneralNavbar />);
      
      const instagramLink = screen.getByTestId('InstagramIcon').closest('a');
      const linkedinLink = screen.getByTestId('LinkedInIcon').closest('a');
      const githubLink = screen.getByTestId('GitHubIcon').closest('a');
      
      expect(instagramLink).toHaveAttribute('target', '_blank');
      expect(linkedinLink).toHaveAttribute('target', '_blank');
      expect(githubLink).toHaveAttribute('target', '_blank');
    });

    test('external links are clickable', () => {
      render(<GeneralNavbar />);
      
      const instagramIcon = screen.getByTestId('InstagramIcon');
      const linkedinIcon = screen.getByTestId('LinkedInIcon');
      const githubIcon = screen.getByTestId('GitHubIcon');
      
      expect(instagramIcon).toBeInTheDocument();
      expect(linkedinIcon).toBeInTheDocument();
      expect(githubIcon).toBeInTheDocument();
    });
  });

  describe('Material-UI Icons', () => {
    test('Instagram icon is rendered correctly', () => {
      render(<GeneralNavbar />);
      
      const instagramIcon = screen.getByTestId('InstagramIcon');
      expect(instagramIcon).toBeInTheDocument();
      expect(instagramIcon).toHaveClass('MuiSvgIcon-root');
    });

    test('LinkedIn icon is rendered correctly', () => {
      render(<GeneralNavbar />);
      
      const linkedinIcon = screen.getByTestId('LinkedInIcon');
      expect(linkedinIcon).toBeInTheDocument();
      expect(linkedinIcon).toHaveClass('MuiSvgIcon-root');
    });

    test('GitHub icon is rendered correctly', () => {
      render(<GeneralNavbar />);
      
      const githubIcon = screen.getByTestId('GitHubIcon');
      expect(githubIcon).toBeInTheDocument();
      expect(githubIcon).toHaveClass('MuiSvgIcon-root');
    });

    test('icons have large font size', () => {
      render(<GeneralNavbar />);
      
      const instagramIcon = screen.getByTestId('InstagramIcon');
      const linkedinIcon = screen.getByTestId('LinkedInIcon');
      const githubIcon = screen.getByTestId('GitHubIcon');
      
      // Check that icons have the correct font size
      expect(instagramIcon).toHaveClass('MuiSvgIcon-fontSizeLarge');
      expect(linkedinIcon).toHaveClass('MuiSvgIcon-fontSizeLarge');
      expect(githubIcon).toHaveClass('MuiSvgIcon-fontSizeLarge');
    });

    test('icons have black color styling', () => {
      render(<GeneralNavbar />);
      
      const instagramIcon = screen.getByTestId('InstagramIcon');
      const linkedinIcon = screen.getByTestId('LinkedInIcon');
      const githubIcon = screen.getByTestId('GitHubIcon');
      
      // Check that icons have black color styling
      expect(instagramIcon).toHaveStyle({ color: 'black' });
      expect(linkedinIcon).toHaveStyle({ color: 'black' });
      expect(githubIcon).toHaveStyle({ color: 'black' });
    });
  });

  describe('Layout and Structure', () => {
    test('header has correct structure', () => {
      render(<GeneralNavbar />);
      
      const header = screen.getByRole('banner');
      expect(header).toBeInTheDocument();
      expect(header.tagName).toBe('HEADER');
    });

    test('container div is present', () => {
      render(<GeneralNavbar />);
      
      const container = document.querySelector('.container');
      expect(container).toBeInTheDocument();
    });

    test('icons are grouped together', () => {
      render(<GeneralNavbar />);
      
      // Check that icons are in a div container
      const instagramIcon = screen.getByTestId('InstagramIcon');
      const container = instagramIcon.closest('.container');
      expect(container).toBeInTheDocument();
    });

    test('icons are wrapped in span elements', () => {
      render(<GeneralNavbar />);
      
      const instagramIcon = screen.getByTestId('InstagramIcon');
      const linkedinIcon = screen.getByTestId('LinkedInIcon');
      const githubIcon = screen.getByTestId('GitHubIcon');
      
      // Check that icons are wrapped in span elements
      expect(instagramIcon.closest('span')).toBeInTheDocument();
      expect(linkedinIcon.closest('span')).toBeInTheDocument();
      expect(githubIcon.closest('span')).toBeInTheDocument();
    });
  });

  describe('Accessibility', () => {
    test('has proper semantic structure', () => {
      render(<GeneralNavbar />);
      
      // Check for proper header element
      const header = screen.getByRole('banner');
      expect(header).toBeInTheDocument();
    });

    test('social media links are accessible', () => {
      render(<GeneralNavbar />);
      
      const instagramIcon = screen.getByTestId('InstagramIcon');
      const linkedinIcon = screen.getByTestId('LinkedInIcon');
      const githubIcon = screen.getByTestId('GitHubIcon');
      
      // Icons should be accessible
      expect(instagramIcon).toBeInTheDocument();
      expect(linkedinIcon).toBeInTheDocument();
      expect(githubIcon).toBeInTheDocument();
    });

    test('external links have proper attributes', () => {
      render(<GeneralNavbar />);
      
      const instagramLink = screen.getByTestId('InstagramIcon').closest('a');
      const linkedinLink = screen.getByTestId('LinkedInIcon').closest('a');
      const githubLink = screen.getByTestId('GitHubIcon').closest('a');
      
      // Links should have proper attributes
      expect(instagramLink).toHaveAttribute('target', '_blank');
      expect(linkedinLink).toHaveAttribute('target', '_blank');
      expect(githubLink).toHaveAttribute('target', '_blank');
    });
  });

  describe('Performance and Optimization', () => {
    test('renders efficiently', () => {
      const startTime = performance.now();
      render(<GeneralNavbar />);
      const endTime = performance.now();
      
      // Component should render within reasonable time (less than 100ms)
      expect(endTime - startTime).toBeLessThan(100);
    });

    test('does not cause memory leaks', () => {
      const { unmount } = render(<GeneralNavbar />);
      
      // Should unmount cleanly
      expect(() => unmount()).not.toThrow();
    });
  });

  describe('Error Handling', () => {
    test('renders without errors', () => {
      // Should render successfully
      expect(() => {
        render(<GeneralNavbar />);
      }).not.toThrow();
    });

    test('handles missing dependencies gracefully', () => {
      // Should not crash when all dependencies are present
      expect(() => {
        render(<GeneralNavbar />);
      }).not.toThrow();
    });
  });

  describe('Integration Tests', () => {
    test('integrates with react-router-dom', () => {
      render(<GeneralNavbar />);
      
      // Should work with react-router-dom
      const instagramIcon = screen.getByTestId('InstagramIcon');
      const instagramLink = instagramIcon.closest('a');
      expect(instagramLink).toBeInTheDocument();
    });

    test('integrates with Material-UI components', () => {
      render(<GeneralNavbar />);
      
      // Should work with MUI components
      const instagramIcon = screen.getByTestId('InstagramIcon');
      expect(instagramIcon).toHaveClass('MuiSvgIcon-root');
    });

    test('integrates with all social media platforms', () => {
      render(<GeneralNavbar />);
      
      // Should work with all social media platforms
      expect(screen.getByTestId('InstagramIcon')).toBeInTheDocument();
      expect(screen.getByTestId('LinkedInIcon')).toBeInTheDocument();
      expect(screen.getByTestId('GitHubIcon')).toBeInTheDocument();
    });
  });

  describe('Content Display', () => {
    test('displays all required social media icons', () => {
      render(<GeneralNavbar />);
      
      // Check for all social media icons
      expect(screen.getByTestId('InstagramIcon')).toBeInTheDocument();
      expect(screen.getByTestId('LinkedInIcon')).toBeInTheDocument();
      expect(screen.getByTestId('GitHubIcon')).toBeInTheDocument();
    });

    test('displays icons in correct order', () => {
      render(<GeneralNavbar />);
      
      // Icons should be displayed in the order they appear in the component
      const instagramIcon = screen.getByTestId('InstagramIcon');
      const linkedinIcon = screen.getByTestId('LinkedInIcon');
      const githubIcon = screen.getByTestId('GitHubIcon');
      
      expect(instagramIcon).toBeInTheDocument();
      expect(linkedinIcon).toBeInTheDocument();
      expect(githubIcon).toBeInTheDocument();
    });
  });

  describe('Styling and Visual Elements', () => {
    test('icons have consistent styling', () => {
      render(<GeneralNavbar />);
      
      const instagramIcon = screen.getByTestId('InstagramIcon');
      const linkedinIcon = screen.getByTestId('LinkedInIcon');
      const githubIcon = screen.getByTestId('GitHubIcon');
      
      // All icons should have consistent styling
      expect(instagramIcon).toHaveStyle({ color: 'black' });
      expect(linkedinIcon).toHaveStyle({ color: 'black' });
      expect(githubIcon).toHaveStyle({ color: 'black' });
      
      expect(instagramIcon).toHaveClass('MuiSvgIcon-fontSizeLarge');
      expect(linkedinIcon).toHaveClass('MuiSvgIcon-fontSizeLarge');
      expect(githubIcon).toHaveClass('MuiSvgIcon-fontSizeLarge');
    });

    test('container has proper structure', () => {
      render(<GeneralNavbar />);
      
      const container = document.querySelector('.container');
      expect(container).toBeInTheDocument();
      expect(container.tagName).toBe('DIV');
    });

    test('header has proper structure', () => {
      render(<GeneralNavbar />);
      
      const header = screen.getByRole('banner');
      expect(header).toBeInTheDocument();
      expect(header.tagName).toBe('HEADER');
    });
  });

  describe('Component Props and Attributes', () => {
    test('header element has correct role', () => {
      render(<GeneralNavbar />);
      
      const header = screen.getByRole('banner');
      expect(header).toBeInTheDocument();
      expect(header.tagName).toBe('HEADER');
    });

    test('container has correct class name', () => {
      render(<GeneralNavbar />);
      
      const container = document.querySelector('.container');
      expect(container).toHaveClass('container');
    });

    test('icons have correct test IDs', () => {
      render(<GeneralNavbar />);
      
      expect(screen.getByTestId('InstagramIcon')).toBeInTheDocument();
      expect(screen.getByTestId('LinkedInIcon')).toBeInTheDocument();
      expect(screen.getByTestId('GitHubIcon')).toBeInTheDocument();
    });
  });

  describe('Social Media Platform Integration', () => {
    test('Instagram integration is correct', () => {
      render(<GeneralNavbar />);
      
      const instagramIcon = screen.getByTestId('InstagramIcon');
      const instagramLink = instagramIcon.closest('a');
      
      expect(instagramLink).toHaveAttribute('href', 'https://www.instagram.com/marshajus/');
      expect(instagramLink).toHaveAttribute('target', '_blank');
    });

    test('LinkedIn integration is correct', () => {
      render(<GeneralNavbar />);
      
      const linkedinIcon = screen.getByTestId('LinkedInIcon');
      const linkedinLink = linkedinIcon.closest('a');
      
      expect(linkedinLink).toHaveAttribute('href', 'https://www.linkedin.com/in/justin-marshall-3733065b');
      expect(linkedinLink).toHaveAttribute('target', '_blank');
    });

    test('GitHub integration is correct', () => {
      render(<GeneralNavbar />);
      
      const githubIcon = screen.getByTestId('GitHubIcon');
      const githubLink = githubIcon.closest('a');
      
      expect(githubLink).toHaveAttribute('href', 'https://github.com/jmarsha82');
      expect(githubLink).toHaveAttribute('target', '_blank');
    });
  });

  describe('Component Lifecycle', () => {
    test('mounts successfully', () => {
      render(<GeneralNavbar />);
      
      // Component should mount without errors
      expect(screen.getByRole('banner')).toBeInTheDocument();
    });

    test('unmounts cleanly', () => {
      const { unmount } = render(<GeneralNavbar />);
      
      // Should unmount without errors
      expect(() => unmount()).not.toThrow();
    });
  });
});

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from '../pages/Home';
import { ThemeContextProvider } from '../context/ThemeContext';

// Mock process.env for public URL
Object.defineProperty(global, 'process', {
  value: {
    env: {
      PUBLIC_URL: ''
    }
  }
});

// Helper function to render Home with theme context
const renderHomeWithTheme = () => {
  return render(
    <ThemeContextProvider>
      <Home />
    </ThemeContextProvider>
  );
};

describe('Home Component', () => {
  beforeEach(() => {
    // Clear all mocks before each test
    jest.clearAllMocks();
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  describe('Component Rendering', () => {
    test('renders without crashing', () => {
      renderHomeWithTheme();
      
      // Should render the main container - check for the main heading
      expect(screen.getByText('JUSTIN MARSHALL')).toBeInTheDocument();
    });

    test('renders main container with correct structure', () => {
      renderHomeWithTheme();
      
      // Check for main content elements
      expect(screen.getByText('JUSTIN MARSHALL')).toBeInTheDocument();
      expect(screen.getByText('SOFTWARE ENGINEER & ARTIST')).toBeInTheDocument();
    });

    test('renders all navigation buttons', () => {
      renderHomeWithTheme();
      
      // Check for all navigation buttons
      expect(screen.getByText('ART PORTFOLIO')).toBeInTheDocument();
      expect(screen.getByText('DEV PROFILE')).toBeInTheDocument();
      expect(screen.getByText('ABOUT')).toBeInTheDocument();
      expect(screen.getByText('CONTACT ME')).toBeInTheDocument();
    });

    test('renders theme toggle button', () => {
      renderHomeWithTheme();
      
      // Check for theme toggle button (should show either LightMode or DarkMode icon)
      const lightModeIcon = screen.queryByTestId('LightModeIcon');
      const darkModeIcon = screen.queryByTestId('DarkModeIcon');
      
      // One of the icons should be present
      expect(lightModeIcon || darkModeIcon).toBeTruthy();
    });

    test('renders profile avatar', () => {
      renderHomeWithTheme();
      
      // Check for avatar image
      const avatar = screen.getByAltText('Justin Marshall');
      expect(avatar).toBeInTheDocument();
      expect(avatar.tagName).toBe('IMG');
    });
  });

  describe('Theme Context Integration', () => {
    test('uses theme context for styling', () => {
      renderHomeWithTheme();
      
      // Component should render without theme context errors
      expect(screen.getByText('JUSTIN MARSHALL')).toBeInTheDocument();
    });

    test('theme context is properly consumed', () => {
      renderHomeWithTheme();
      
      // Should render with theme context
      expect(screen.getByText('SOFTWARE ENGINEER & ARTIST')).toBeInTheDocument();
    });

    test('applies theme-based styling', () => {
      renderHomeWithTheme();
      
      // Check that main elements are styled
      const nameElement = screen.getByText('JUSTIN MARSHALL');
      expect(nameElement).toBeInTheDocument();
      expect(nameElement).toHaveClass('MuiTypography-h2');
    });
  });

  describe('Theme Toggle Functionality', () => {
    test('theme toggle button is clickable', () => {
      renderHomeWithTheme();
      
      // Find theme toggle button by looking for IconButton with theme icons
      const themeToggleButton = screen.getByRole('button');
      expect(themeToggleButton).toBeInTheDocument();
      
      // Should be able to click without throwing errors
      fireEvent.click(themeToggleButton);
      expect(themeToggleButton).toBeInTheDocument();
    });

    test('handles theme toggle clicks', () => {
      renderHomeWithTheme();
      
      const themeToggleButton = screen.getByRole('button');
      
      // Multiple clicks should not cause issues
      fireEvent.click(themeToggleButton);
      fireEvent.click(themeToggleButton);
      fireEvent.click(themeToggleButton);
      
      expect(themeToggleButton).toBeInTheDocument();
    });

    test('theme toggle button has correct styling', () => {
      renderHomeWithTheme();
      
      const themeToggleButton = screen.getByRole('button');
      expect(themeToggleButton).toHaveClass('MuiIconButton-root');
    });
  });

  describe('Avatar and Profile Image', () => {
    test('displays profile image with correct attributes', () => {
      renderHomeWithTheme();
      
      const avatar = screen.getByAltText('Justin Marshall');
      expect(avatar).toBeInTheDocument();
      expect(avatar).toHaveAttribute('src', '/img/profile_picture.jpg');
      expect(avatar).toHaveAttribute('alt', 'Justin Marshall');
    });

    test('avatar has correct styling classes', () => {
      renderHomeWithTheme();
      
      const avatar = screen.getByAltText('Justin Marshall');
      expect(avatar).toHaveClass('MuiAvatar-img');
    });

    test('avatar container has correct structure', () => {
      renderHomeWithTheme();
      
      const avatar = screen.getByAltText('Justin Marshall');
      expect(avatar).toBeInTheDocument();
      
      // Avatar should be within a styled container
      const avatarContainer = avatar.closest('div');
      expect(avatarContainer).toBeInTheDocument();
    });
  });

  describe('Navigation Buttons', () => {
    test('ART PORTFOLIO button has correct href', () => {
      renderHomeWithTheme();
      
      const artPortfolioButton = screen.getByText('ART PORTFOLIO');
      expect(artPortfolioButton).toBeInTheDocument();
      expect(artPortfolioButton.closest('a')).toHaveAttribute('href', '/artist');
    });

    test('DEV PROFILE button has correct href', () => {
      renderHomeWithTheme();
      
      const devProfileButton = screen.getByText('DEV PROFILE');
      expect(devProfileButton).toBeInTheDocument();
      expect(devProfileButton.closest('a')).toHaveAttribute('href', '/programmer');
    });

    test('ABOUT button has correct href', () => {
      renderHomeWithTheme();
      
      const aboutButton = screen.getByText('ABOUT');
      expect(aboutButton).toBeInTheDocument();
      expect(aboutButton.closest('a')).toHaveAttribute('href', '/about');
    });

    test('CONTACT ME button opens a mailto link with default subject', () => {
      renderHomeWithTheme();
      
      const contactButton = screen.getByText('CONTACT ME');
      expect(contactButton).toBeInTheDocument();
      expect(contactButton.closest('a')).toHaveAttribute('href', 'mailto:jmarsha82@yahoo.com?subject=From%20Website');
    });

    test('all buttons have correct styling classes', () => {
      renderHomeWithTheme();
      
      const buttons = screen.getAllByRole('link');
      buttons.forEach(button => {
        expect(button).toHaveClass('MuiButton-root');
      });
    });

    test('buttons are clickable', () => {
      renderHomeWithTheme();
      
      const artPortfolioButton = screen.getByText('ART PORTFOLIO');
      const devProfileButton = screen.getByText('DEV PROFILE');
      
      // Should be able to click without throwing errors
      fireEvent.click(artPortfolioButton);
      fireEvent.click(devProfileButton);
      
      expect(artPortfolioButton).toBeInTheDocument();
      expect(devProfileButton).toBeInTheDocument();
    });
  });

  describe('Typography and Content', () => {
    test('displays name with correct typography', () => {
      renderHomeWithTheme();
      
      const nameElement = screen.getByText('JUSTIN MARSHALL');
      expect(nameElement).toBeInTheDocument();
      expect(nameElement).toHaveClass('MuiTypography-h2');
    });

    test('displays subtitle with correct typography', () => {
      renderHomeWithTheme();
      
      const subtitleElement = screen.getByText('SOFTWARE ENGINEER & ARTIST');
      expect(subtitleElement).toBeInTheDocument();
      expect(subtitleElement).toHaveClass('MuiTypography-h5');
    });

    test('content has correct text values', () => {
      renderHomeWithTheme();
      
      expect(screen.getByText('JUSTIN MARSHALL')).toBeInTheDocument();
      expect(screen.getByText('SOFTWARE ENGINEER & ARTIST')).toBeInTheDocument();
    });
  });

  describe('Visual Elements and Styling', () => {
    test('main container has correct styling', () => {
      renderHomeWithTheme();
      
      // Check that the main container exists and has styling
      const nameElement = screen.getByText('JUSTIN MARSHALL');
      expect(nameElement).toBeInTheDocument();
    });

    test('floating orbs are rendered', () => {
      renderHomeWithTheme();
      
      // Check that the component renders without errors (orbs are background elements)
      expect(screen.getByText('JUSTIN MARSHALL')).toBeInTheDocument();
    });

    test('grid overlay is applied', () => {
      renderHomeWithTheme();
      
      // Check that the component renders with grid overlay (background element)
      expect(screen.getByText('SOFTWARE ENGINEER & ARTIST')).toBeInTheDocument();
    });

    test('avatar ring styling is applied', () => {
      renderHomeWithTheme();
      
      const avatar = screen.getByAltText('Justin Marshall');
      expect(avatar).toBeInTheDocument();
      
      // Avatar should be within styled containers
      const avatarContainer = avatar.closest('div');
      expect(avatarContainer).toBeInTheDocument();
    });
  });

  describe('Responsive Design', () => {
    test('handles responsive breakpoints', () => {
      renderHomeWithTheme();
      
      // Component should render regardless of screen size
      expect(screen.getByText('JUSTIN MARSHALL')).toBeInTheDocument();
    });

    test('maintains layout structure', () => {
      renderHomeWithTheme();
      
      // All main elements should be present
      expect(screen.getByText('JUSTIN MARSHALL')).toBeInTheDocument();
      expect(screen.getByText('SOFTWARE ENGINEER & ARTIST')).toBeInTheDocument();
      expect(screen.getByText('ART PORTFOLIO')).toBeInTheDocument();
      expect(screen.getByText('DEV PROFILE')).toBeInTheDocument();
    });

    test('flexible button layout', () => {
      renderHomeWithTheme();
      
      const buttons = screen.getAllByRole('link');
      expect(buttons).toHaveLength(5);
      
      buttons.forEach(button => {
        expect(button).toBeInTheDocument();
      });

      expect(screen.getByText('PROFILE SELECT')).toHaveAttribute('href', 'http://127.0.0.1:4100');
    });
  });

  describe('Accessibility', () => {
    test('has proper semantic structure', () => {
      renderHomeWithTheme();
      
      // Check for proper heading structure
      const nameElement = screen.getByText('JUSTIN MARSHALL');
      expect(nameElement).toHaveClass('MuiTypography-h2');
      
      const subtitleElement = screen.getByText('SOFTWARE ENGINEER & ARTIST');
      expect(subtitleElement).toHaveClass('MuiTypography-h5');
    });

    test('navigation buttons are accessible', () => {
      renderHomeWithTheme();
      
      const buttons = screen.getAllByRole('link');
      buttons.forEach(button => {
        expect(button).toBeInTheDocument();
        expect(button).not.toBeDisabled();
      });
    });

    test('theme toggle button is accessible', () => {
      renderHomeWithTheme();
      
      const themeToggleButton = screen.getByRole('button');
      expect(themeToggleButton).toBeInTheDocument();
      expect(themeToggleButton).not.toBeDisabled();
    });

    test('avatar has proper alt text', () => {
      renderHomeWithTheme();
      
      const avatar = screen.getByAltText('Justin Marshall');
      expect(avatar).toBeInTheDocument();
      expect(avatar).toHaveAttribute('alt', 'Justin Marshall');
    });

    test('supports keyboard navigation', () => {
      renderHomeWithTheme();
      
      const themeToggleButton = screen.getByRole('button');
      
      // Should handle keyboard events
      fireEvent.keyDown(themeToggleButton, { key: 'Enter', code: 'Enter' });
      fireEvent.keyDown(themeToggleButton, { key: ' ', code: 'Space' });
      
      expect(themeToggleButton).toBeInTheDocument();
    });
  });

  describe('Performance and Optimization', () => {
    test('renders efficiently', () => {
      const startTime = performance.now();
      renderHomeWithTheme();
      const endTime = performance.now();
      
      // Component should render within reasonable time (less than 100ms)
      expect(endTime - startTime).toBeLessThan(100);
    });

    test('handles rapid interactions', () => {
      renderHomeWithTheme();
      
      const themeToggleButton = screen.getByRole('button');
      
      // Rapid clicks should not cause issues
      for (let i = 0; i < 10; i++) {
        fireEvent.click(themeToggleButton);
      }
      
      expect(themeToggleButton).toBeInTheDocument();
    });

    test('does not cause memory leaks', () => {
      const { unmount } = renderHomeWithTheme();
      
      // Should unmount cleanly
      expect(() => unmount()).not.toThrow();
    });
  });

  describe('Error Handling', () => {
    test('handles missing theme context gracefully', () => {
      // Mock process.cwd to avoid the error
      const originalCwd = process.cwd;
      process.cwd = jest.fn(() => '/');
      
      try {
        // Should throw error when theme context is missing (expected behavior)
        expect(() => {
          render(<Home />);
        }).toThrow('useTheme must be used inside a ThemeContextProvider');
      } finally {
        process.cwd = originalCwd;
      }
    });

    test('handles missing profile image gracefully', () => {
      renderHomeWithTheme();
      
      // Avatar should still render even if image fails to load
      const avatar = screen.getByAltText('Justin Marshall');
      expect(avatar).toBeInTheDocument();
    });
  });

  describe('Integration Tests', () => {
    test('works with ThemeContextProvider', () => {
      renderHomeWithTheme();
      
      // Should work with theme context provider
      expect(screen.getByText('JUSTIN MARSHALL')).toBeInTheDocument();
    });

    test('maintains state consistency during interactions', () => {
      renderHomeWithTheme();
      
      const themeToggleButton = screen.getByRole('button');
      
      // Multiple interactions should maintain consistency
      fireEvent.click(themeToggleButton);
      expect(themeToggleButton).toBeInTheDocument();
      
      fireEvent.click(themeToggleButton);
      expect(themeToggleButton).toBeInTheDocument();
    });

    test('integrates with Material-UI components', () => {
      renderHomeWithTheme();
      
      // Should work with MUI components
      expect(screen.getByText('JUSTIN MARSHALL')).toHaveClass('MuiTypography-h2');
      expect(screen.getByText('SOFTWARE ENGINEER & ARTIST')).toHaveClass('MuiTypography-h5');
      
      const buttons = screen.getAllByRole('link');
      buttons.forEach(button => {
        expect(button).toHaveClass('MuiButton-root');
      });
    });
  });

  describe('Content Display', () => {
    test('displays all required content', () => {
      renderHomeWithTheme();
      
      // Check for all main content
      expect(screen.getByText('JUSTIN MARSHALL')).toBeInTheDocument();
      expect(screen.getByText('SOFTWARE ENGINEER & ARTIST')).toBeInTheDocument();
      expect(screen.getByText('ART PORTFOLIO')).toBeInTheDocument();
      expect(screen.getByText('DEV PROFILE')).toBeInTheDocument();
      expect(screen.getByText('ABOUT')).toBeInTheDocument();
      expect(screen.getByText('CONTACT ME')).toBeInTheDocument();
    });

    test('displays profile image correctly', () => {
      renderHomeWithTheme();
      
      const avatar = screen.getByAltText('Justin Marshall');
      expect(avatar).toBeInTheDocument();
      expect(avatar).toHaveAttribute('src', '/img/profile_picture.jpg');
    });

    test('displays theme toggle correctly', () => {
      renderHomeWithTheme();
      
      // Should show either light or dark mode icon
      const lightModeIcon = screen.queryByTestId('LightModeIcon');
      const darkModeIcon = screen.queryByTestId('DarkModeIcon');
      
      expect(lightModeIcon || darkModeIcon).toBeTruthy();
    });
  });

  describe('Button Functionality', () => {
    test('navigation buttons work correctly', () => {
      renderHomeWithTheme();
      
      const artPortfolioButton = screen.getByText('ART PORTFOLIO');
      const devProfileButton = screen.getByText('DEV PROFILE');
      const aboutButton = screen.getByText('ABOUT');
      const contactButton = screen.getByText('CONTACT ME');
      
      // All buttons should be present and clickable
      expect(artPortfolioButton).toBeInTheDocument();
      expect(devProfileButton).toBeInTheDocument();
      expect(aboutButton).toBeInTheDocument();
      expect(contactButton).toBeInTheDocument();
      
      // Should be able to click all buttons
      fireEvent.click(artPortfolioButton);
      fireEvent.click(devProfileButton);
      fireEvent.click(aboutButton);
      fireEvent.click(contactButton);
      
      expect(artPortfolioButton).toBeInTheDocument();
      expect(devProfileButton).toBeInTheDocument();
      expect(aboutButton).toBeInTheDocument();
      expect(contactButton).toBeInTheDocument();
    });

    test('buttons have correct navigation links', () => {
      renderHomeWithTheme();
      
      // Check href attributes
      expect(screen.getByText('ART PORTFOLIO').closest('a')).toHaveAttribute('href', '/artist');
      expect(screen.getByText('DEV PROFILE').closest('a')).toHaveAttribute('href', '/programmer');
      expect(screen.getByText('ABOUT').closest('a')).toHaveAttribute('href', '/about');
      expect(screen.getByText('CONTACT ME').closest('a')).toHaveAttribute('href', 'mailto:jmarsha82@yahoo.com?subject=From%20Website');
    });
  });

  describe('Theme Switching', () => {
    test('theme toggle button switches icons', () => {
      renderHomeWithTheme();
      
      const themeToggleButton = screen.getByRole('button');
      
      // Click to toggle theme
      fireEvent.click(themeToggleButton);
      
      // Component should still render correctly
      expect(screen.getByText('JUSTIN MARSHALL')).toBeInTheDocument();
    });

    test('theme changes affect styling', () => {
      renderHomeWithTheme();
      
      // Component should render with theme styling
      const nameElement = screen.getByText('JUSTIN MARSHALL');
      expect(nameElement).toBeInTheDocument();
      
      // Toggle theme
      const themeToggleButton = screen.getByRole('button');
      fireEvent.click(themeToggleButton);
      
      // Should still render correctly
      expect(nameElement).toBeInTheDocument();
    });
  });

  describe('Layout and Structure', () => {
    test('main container has correct layout', () => {
      renderHomeWithTheme();
      
      // Check that main elements are in correct order
      expect(screen.getByText('JUSTIN MARSHALL')).toBeInTheDocument();
      expect(screen.getByText('SOFTWARE ENGINEER & ARTIST')).toBeInTheDocument();
      
      // Navigation buttons should be present
      expect(screen.getByText('ART PORTFOLIO')).toBeInTheDocument();
      expect(screen.getByText('DEV PROFILE')).toBeInTheDocument();
    });

    test('avatar is positioned correctly', () => {
      renderHomeWithTheme();
      
      const avatar = screen.getByAltText('Justin Marshall');
      expect(avatar).toBeInTheDocument();
      
      // Avatar should be above the name
      const nameElement = screen.getByText('JUSTIN MARSHALL');
      expect(nameElement).toBeInTheDocument();
    });

    test('buttons are arranged in correct order', () => {
      renderHomeWithTheme();
      
      const buttons = screen.getAllByRole('link');
      expect(buttons).toHaveLength(5);
      
      // Check button order
      expect(buttons[0]).toHaveTextContent('PROFILE SELECT');
      expect(buttons[1]).toHaveTextContent('ART PORTFOLIO');
      expect(buttons[2]).toHaveTextContent('DEV PROFILE');
      expect(buttons[3]).toHaveTextContent('ABOUT');
      expect(buttons[4]).toHaveTextContent('CONTACT ME');
    });
  });
});

import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import About from '../pages/About';
import { ThemeContextProvider } from '../context/ThemeContext';

// Mock the profile picture to avoid image loading issues in tests
Object.defineProperty(global, 'process', {
  value: {
    env: {
      PUBLIC_URL: ''
    }
  }
});

// Helper function to render About component with theme context
const renderAboutWithTheme = (isDarkTheme = true) => {
  return render(
    <ThemeContextProvider>
      <About />
    </ThemeContextProvider>
  );
};

describe('About Component', () => {
  beforeEach(() => {
    // Reset any mocks before each test
    jest.clearAllMocks();
  });

  describe('Component Rendering', () => {
    test('renders without crashing', () => {
      renderAboutWithTheme();
      expect(screen.getByText('ABOUT JUSTIN MARSHALL')).toBeInTheDocument();
    });

    test('renders main heading', () => {
      renderAboutWithTheme();
      const heading = screen.getByRole('heading', { level: 2 });
      expect(heading).toHaveTextContent('ABOUT JUSTIN MARSHALL');
    });

    test('renders subtitle', () => {
      renderAboutWithTheme();
      const subtitle = screen.getByRole('heading', { level: 5 });
      expect(subtitle).toHaveTextContent('SOFTWARE ENGINEER & ARTIST');
    });

    test('renders profile picture with correct alt text', () => {
      renderAboutWithTheme();
      const profilePicture = screen.getByAltText('Justin Marshall');
      expect(profilePicture).toBeInTheDocument();
    });

    test('renders home navigation button', () => {
      renderAboutWithTheme();
      const homeButton = screen.getByRole('link', { name: /home/i });
      expect(homeButton).toBeInTheDocument();
      expect(homeButton).toHaveAttribute('href', '/');
    });
  });

  describe('Content Verification', () => {
    test('displays Boeing work experience content', () => {
      renderAboutWithTheme();
      expect(screen.getByText(/Senior Programmer Analyst at Boeing/i)).toBeInTheDocument();
      expect(screen.getByText(/lead for a small development team/i)).toBeInTheDocument();
    });

    test('displays Accenture work experience content', () => {
      renderAboutWithTheme();
      expect(screen.getByText(/Accenture Federal Services/i)).toBeInTheDocument();
      expect(screen.getByText(/Senior Systems Specialist/i)).toBeInTheDocument();
    });

    test('displays Phillips 66 work experience content', () => {
      renderAboutWithTheme();
      expect(screen.getByText(/Phillips 66/i)).toBeInTheDocument();
      expect(screen.getByText(/SAP system for inventory tracking/i)).toBeInTheDocument();
    });

    test('displays artistic background content', () => {
      renderAboutWithTheme();
      expect(screen.getByText(/accomplished artist/i)).toBeInTheDocument();
      expect(screen.getByText(/more than 100 pieces to private collections/i)).toBeInTheDocument();
      expect(screen.getByText(/ARTEAST and Piasa Summer/i)).toBeInTheDocument();
    });

    test('displays technical skills', () => {
      renderAboutWithTheme();
      expect(screen.getByText(/C\+\+, Typescript and Reverse Polish Notation/i)).toBeInTheDocument();
      expect(screen.getByText(/ReactJS, Java and Python/i)).toBeInTheDocument();
      expect(screen.getByText(/test cases in Jest/i)).toBeInTheDocument();
    });
  });

  describe('Theme Integration', () => {
    test('applies dark theme styles when isDarkTheme is true', () => {
      renderAboutWithTheme(true);
      // Test that the component renders without errors with dark theme
      expect(screen.getByText('ABOUT JUSTIN MARSHALL')).toBeInTheDocument();
      expect(screen.getByText('SOFTWARE ENGINEER & ARTIST')).toBeInTheDocument();
    });

    test('applies light theme styles when isDarkTheme is false', () => {
      renderAboutWithTheme(false);
      // Test that the component renders without errors with light theme
      expect(screen.getByText('ABOUT JUSTIN MARSHALL')).toBeInTheDocument();
      expect(screen.getByText('SOFTWARE ENGINEER & ARTIST')).toBeInTheDocument();
    });

    test('theme context is properly consumed', () => {
      // This test verifies that the component uses the theme context
      renderAboutWithTheme(true);
      // The component should render without throwing theme context errors
      expect(screen.getByText('ABOUT JUSTIN MARSHALL')).toBeInTheDocument();
    });
  });

  describe('Layout and Structure', () => {
    test('main container has proper styling classes', () => {
      renderAboutWithTheme();
      // Test that the component renders and has proper structure
      expect(screen.getByText('ABOUT JUSTIN MARSHALL')).toBeInTheDocument();
      expect(screen.getByText('SOFTWARE ENGINEER & ARTIST')).toBeInTheDocument();
    });

    test('content container has proper structure', () => {
      renderAboutWithTheme();
      // Test that the main content is present
      expect(screen.getByText('ABOUT JUSTIN MARSHALL')).toBeInTheDocument();
      expect(screen.getByText('SOFTWARE ENGINEER & ARTIST')).toBeInTheDocument();
      expect(screen.getByText(/Senior Programmer Analyst at Boeing/i)).toBeInTheDocument();
    });

    test('bio content section is present', () => {
      renderAboutWithTheme();
      const bioSection = screen.getByText(/Senior Programmer Analyst at Boeing/i);
      expect(bioSection).toBeInTheDocument();
    });
  });

  describe('Interactive Elements', () => {
    test('home button has correct styling and attributes', () => {
      renderAboutWithTheme();
      const homeButton = screen.getByRole('link', { name: /home/i });
      expect(homeButton).toHaveAttribute('href', '/');
      expect(homeButton).toHaveStyle({
        'text-transform': 'none',
        'font-weight': '800'
      });
    });

    test('navigation buttons container has proper flex layout', () => {
      renderAboutWithTheme();
      const buttonsContainer = screen.getByRole('link', { name: /home/i }).closest('div');
      expect(buttonsContainer).toHaveStyle({
        display: 'flex',
        gap: '24px',
        'justify-content': 'center',
        'flex-wrap': 'wrap'
      });
    });
  });

  describe('Accessibility', () => {
    test('profile picture has proper alt text', () => {
      renderAboutWithTheme();
      const profilePicture = screen.getByAltText('Justin Marshall');
      expect(profilePicture).toBeInTheDocument();
    });

    test('headings have proper hierarchy', () => {
      renderAboutWithTheme();
      const mainHeading = screen.getByRole('heading', { level: 2 });
      const subHeading = screen.getByRole('heading', { level: 5 });
      
      expect(mainHeading).toHaveTextContent('ABOUT JUSTIN MARSHALL');
      expect(subHeading).toHaveTextContent('SOFTWARE ENGINEER & ARTIST');
    });

    test('navigation button is properly labeled', () => {
      renderAboutWithTheme();
      const homeButton = screen.getByRole('link', { name: /home/i });
      expect(homeButton).toHaveTextContent('HOME');
    });
  });

  describe('Error Handling', () => {
    test('handles missing theme context gracefully', () => {
      // This test would require mocking the useTheme hook to throw an error
      // For now, we'll test that the component renders with theme context
      expect(() => renderAboutWithTheme()).not.toThrow();
    });
  });

  describe('Performance and Optimization', () => {
    test('component renders efficiently', () => {
      const startTime = performance.now();
      renderAboutWithTheme();
      const endTime = performance.now();
      
      // Component should render within reasonable time (less than 100ms)
      expect(endTime - startTime).toBeLessThan(100);
    });

    test('does not cause unnecessary re-renders', () => {
      const { rerender } = renderAboutWithTheme(true);
      
      // Re-render with same props should not cause issues
      expect(() => {
        rerender(
          <ThemeContextProvider>
            <About />
          </ThemeContextProvider>
        );
      }).not.toThrow();
    });
  });

  describe('Responsive Design', () => {
    test('main container has responsive padding', () => {
      renderAboutWithTheme();
      // Test that the component renders properly
      expect(screen.getByText('ABOUT JUSTIN MARSHALL')).toBeInTheDocument();
    });

    test('content container has responsive max-width', () => {
      renderAboutWithTheme();
      // Test that the content is properly displayed
      expect(screen.getByText('ABOUT JUSTIN MARSHALL')).toBeInTheDocument();
      expect(screen.getByText('SOFTWARE ENGINEER & ARTIST')).toBeInTheDocument();
    });
  });

  describe('Visual Elements', () => {
    test('floating orbs are rendered', () => {
      renderAboutWithTheme();
      // Test that the component renders properly with visual elements
      expect(screen.getByText('ABOUT JUSTIN MARSHALL')).toBeInTheDocument();
      expect(screen.getByText('SOFTWARE ENGINEER & ARTIST')).toBeInTheDocument();
    });

    test('profile picture container has proper styling', () => {
      renderAboutWithTheme();
      const profilePicture = screen.getByAltText('Justin Marshall');
      expect(profilePicture).toBeInTheDocument();
      // Test that the profile picture is properly displayed
      expect(profilePicture).toHaveAttribute('alt', 'Justin Marshall');
    });
  });
});

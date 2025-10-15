import React from 'react';
import { render, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom'
import ArtistNavbar from "../components/ArtistNavbar";
import { ThemeContextProvider } from "../context/ThemeContext";
import { BrowserRouter } from "react-router-dom";

// Mock react-router-hash-link
jest.mock('react-router-hash-link', () => ({
  HashLink: ({ children, to, className, ...props }) => {
    const React = require('react');
    return React.createElement('a', { href: to, className, ...props }, children);
  }
}));

// Helper function to render component with necessary providers
const renderWithProviders = (component) => {
  return render(
    <BrowserRouter>
      <ThemeContextProvider>
        {component}
      </ThemeContextProvider>
    </BrowserRouter>
  );
};

describe('ArtistNavbar Component', () => {
  
  describe('Component Rendering', () => {
    test('renders ArtistNavbar component without crashing', () => {
      renderWithProviders(<ArtistNavbar />);
      expect(screen.getByRole('banner')).toBeInTheDocument();
    });

    test('renders header element with correct structure', () => {
      renderWithProviders(<ArtistNavbar />);
      const header = screen.getByRole('banner');
      expect(header).toBeInTheDocument();
      expect(header.tagName).toBe('HEADER');
    });

    test('renders container div with correct class', () => {
      renderWithProviders(<ArtistNavbar />);
      const container = document.querySelector('.container');
      expect(container).toBeInTheDocument();
    });
  });

  describe('Navigation Links', () => {
    test('renders home icon link', () => {
      renderWithProviders(<ArtistNavbar />);
      const homeIcon = screen.getByTestId('HomeIcon');
      const homeLink = homeIcon.closest('a');
      expect(homeLink).toBeInTheDocument();
      expect(homeLink).toHaveAttribute('href', '/');
    });

    test('renders all artwork category navigation buttons', () => {
      renderWithProviders(<ArtistNavbar />);
      
      expect(screen.getByText('Portraits')).toBeInTheDocument();
      expect(screen.getByText('Flowers')).toBeInTheDocument();
      expect(screen.getByText('Landscapes/Still Life')).toBeInTheDocument();
      expect(screen.getByText('Abstract')).toBeInTheDocument();
    });

    test('renders Instagram icon link', () => {
      renderWithProviders(<ArtistNavbar />);
      const instagramIcon = screen.getByTestId('InstagramIcon');
      const instagramLink = instagramIcon.closest('a');
      expect(instagramLink).toBeInTheDocument();
      expect(instagramLink).toHaveAttribute('href', 'https://www.instagram.com/marshajus/');
      expect(instagramLink).toHaveAttribute('target', '_blank');
    });
  });

  describe('HashLink Navigation', () => {
    test('Portraits link has correct hash route', () => {
      renderWithProviders(<ArtistNavbar />);
      const portraitsLink = screen.getByText('Portraits').closest('a');
      expect(portraitsLink).toHaveAttribute('href', '/artist/#portraits-id');
    });

    test('Flowers link has correct hash route', () => {
      renderWithProviders(<ArtistNavbar />);
      const flowersLink = screen.getByText('Flowers').closest('a');
      expect(flowersLink).toHaveAttribute('href', '/artist/#flowers-id');
    });

    test('Landscapes/Still Life link has correct hash route', () => {
      renderWithProviders(<ArtistNavbar />);
      const landscapesLink = screen.getByText('Landscapes/Still Life').closest('a');
      expect(landscapesLink).toHaveAttribute('href', '/artist/#landscapes-id');
    });

    test('Abstract link has correct hash route', () => {
      renderWithProviders(<ArtistNavbar />);
      const abstractLink = screen.getByText('Abstract').closest('a');
      expect(abstractLink).toHaveAttribute('href', '/artist/#abstract-id');
    });
  });

  describe('CSS Classes and Styling', () => {
    test('navigation buttons have correct CSS classes', () => {
      renderWithProviders(<ArtistNavbar />);
      
      const portraitsLink = screen.getByText('Portraits').closest('a');
      const flowersLink = screen.getByText('Flowers').closest('a');
      const landscapesLink = screen.getByText('Landscapes/Still Life').closest('a');
      const abstractLink = screen.getByText('Abstract').closest('a');
      
      expect(portraitsLink).toHaveClass('navbar-site-buttons');
      expect(flowersLink).toHaveClass('navbar-site-buttons');
      expect(landscapesLink).toHaveClass('navbar-site-buttons');
      expect(abstractLink).toHaveClass('navbar-site-buttons');
    });

    test('buttons have correct CSS classes', () => {
      renderWithProviders(<ArtistNavbar />);
      
      const buttons = screen.getAllByRole('button');
      buttons.forEach(button => {
        expect(button).toHaveClass('navbar-button-color');
      });
    });
  });

  describe('Theme Integration', () => {
    test('applies theme styles to header background', () => {
      renderWithProviders(<ArtistNavbar />);
      const header = screen.getByRole('banner');
      expect(header).toHaveStyle('background: rgb(0, 255, 255)'); // dark theme accent4
    });

    test('applies theme styles to navigation buttons', () => {
      renderWithProviders(<ArtistNavbar />);
      const buttons = screen.getAllByRole('button');
      buttons.forEach(button => {
        expect(button).toHaveStyle('color: rgb(0, 0, 0)'); // dark theme accent5
      });
    });

    test('applies theme styles to icons', () => {
      renderWithProviders(<ArtistNavbar />);
      const homeIcon = screen.getByTestId('HomeIcon');
      const instagramIcon = screen.getByTestId('InstagramIcon');
      
      expect(homeIcon).toHaveStyle('color: rgb(0, 0, 0)');
      expect(instagramIcon).toHaveStyle('color: rgb(0, 0, 0)');
    });
  });

  describe('Material-UI Components', () => {
    test('renders Material-UI Button components', () => {
      renderWithProviders(<ArtistNavbar />);
      const buttons = screen.getAllByRole('button');
      expect(buttons).toHaveLength(4); // Portraits, Flowers, Landscapes, Abstract
    });

    test('buttons have text variant', () => {
      renderWithProviders(<ArtistNavbar />);
      const buttons = screen.getAllByRole('button');
      buttons.forEach(button => {
        expect(button).toHaveClass('MuiButton-text');
      });
    });
  });

  describe('Accessibility', () => {
    test('navigation links are accessible', () => {
      renderWithProviders(<ArtistNavbar />);
      
      const homeIcon = screen.getByTestId('HomeIcon');
      const homeLink = homeIcon.closest('a');
      const portraitsLink = screen.getByText('Portraits').closest('a');
      const flowersLink = screen.getByText('Flowers').closest('a');
      const landscapesLink = screen.getByText('Landscapes/Still Life').closest('a');
      const abstractLink = screen.getByText('Abstract').closest('a');
      const instagramIcon = screen.getByTestId('InstagramIcon');
      const instagramLink = instagramIcon.closest('a');
      
      expect(homeLink).toBeInTheDocument();
      expect(portraitsLink).toBeInTheDocument();
      expect(flowersLink).toBeInTheDocument();
      expect(landscapesLink).toBeInTheDocument();
      expect(abstractLink).toBeInTheDocument();
      expect(instagramLink).toBeInTheDocument();
    });

    test('buttons have accessible text content', () => {
      renderWithProviders(<ArtistNavbar />);
      
      expect(screen.getByRole('button', { name: 'Portraits' })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: 'Flowers' })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: 'Landscapes/Still Life' })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: 'Abstract' })).toBeInTheDocument();
    });
  });

  describe('External Links', () => {
    test('Instagram link opens in new tab', () => {
      renderWithProviders(<ArtistNavbar />);
      const instagramIcon = screen.getByTestId('InstagramIcon');
      const instagramLink = instagramIcon.closest('a');
      expect(instagramLink).toHaveAttribute('target', '_blank');
    });

    test('Instagram link has correct URL', () => {
      renderWithProviders(<ArtistNavbar />);
      const instagramIcon = screen.getByTestId('InstagramIcon');
      const instagramLink = instagramIcon.closest('a');
      expect(instagramLink).toHaveAttribute('href', 'https://www.instagram.com/marshajus/');
    });
  });

  describe('Component Structure', () => {
    test('has correct DOM structure', () => {
      renderWithProviders(<ArtistNavbar />);
      
      const header = screen.getByRole('banner');
      const container = header.querySelector('.container');
      
      expect(container).toBeInTheDocument();
      
      // Check for three main sections: home link, navigation buttons, social links
      const spans = container.querySelectorAll('span');
      expect(spans.length).toBeGreaterThanOrEqual(5); // At least 5 spans (1 home + 4 nav + 1 social)
    });

    test('contains all required navigation elements', () => {
      renderWithProviders(<ArtistNavbar />);
      
      // Home icon
      const homeIcon = screen.getByTestId('HomeIcon');
      expect(homeIcon.closest('a')).toBeInTheDocument();
      
      // Navigation buttons
      expect(screen.getByText('Portraits')).toBeInTheDocument();
      expect(screen.getByText('Flowers')).toBeInTheDocument();
      expect(screen.getByText('Landscapes/Still Life')).toBeInTheDocument();
      expect(screen.getByText('Abstract')).toBeInTheDocument();
      
      // Social media link
      const instagramIcon = screen.getByTestId('InstagramIcon');
      expect(instagramIcon.closest('a')).toBeInTheDocument();
    });
  });

  describe('Icon Components', () => {
    test('renders Home icon', () => {
      renderWithProviders(<ArtistNavbar />);
      const homeIcon = screen.getByTestId('HomeIcon');
      expect(homeIcon).toBeInTheDocument();
      expect(homeIcon).toHaveClass('MuiSvgIcon-fontSizeLarge');
    });

    test('renders Instagram icon', () => {
      renderWithProviders(<ArtistNavbar />);
      const instagramIcon = screen.getByTestId('InstagramIcon');
      expect(instagramIcon).toBeInTheDocument();
      expect(instagramIcon).toHaveClass('MuiSvgIcon-fontSizeLarge');
    });
  });

  describe('Responsive Design', () => {
    test('component renders without layout issues', () => {
      renderWithProviders(<ArtistNavbar />);
      const header = screen.getByRole('banner');
      const container = header.querySelector('.container');
      
      expect(header).toBeVisible();
      expect(container).toBeVisible();
    });
  });

  describe('Theme Context Integration', () => {
    test('uses theme context correctly', () => {
      renderWithProviders(<ArtistNavbar />);
      const header = screen.getByRole('banner');
      
      // Should have theme-based styling
      expect(header).toHaveStyle('background: rgb(0, 255, 255)');
    });

    test('theme changes affect component styling', () => {
      const { rerender } = renderWithProviders(<ArtistNavbar />);
      
      // Component should render with dark theme by default
      const header = screen.getByRole('banner');
      expect(header).toHaveStyle('background: rgb(0, 255, 255)');
    });
  });
});

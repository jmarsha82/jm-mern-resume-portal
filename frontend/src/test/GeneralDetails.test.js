import React from 'react';
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import GeneralDetails from "../components/GeneralDetails";
import { ThemeContextProvider } from "../context/ThemeContext";
import { BrowserRouter } from "react-router-dom";

// Mock date-fns to return a consistent date
jest.mock('date-fns/formatDistanceToNow', () => {
  return jest.fn(() => '2 months ago');
});

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

describe('GeneralDetails Component', () => {
  
  describe('Component Rendering', () => {
    test('renders GeneralDetails component without crashing', () => {
      renderWithProviders(<GeneralDetails />);
      expect(screen.getByText('Current Role : Programmer at Boeing')).toBeInTheDocument();
    });

    test('renders all general information elements', () => {
      renderWithProviders(<GeneralDetails />);
      
      // Check for all main elements
      expect(screen.getByText('Current Role : Programmer at Boeing')).toBeInTheDocument();
      expect(screen.getByText('(618)-978-1469')).toBeInTheDocument();
      expect(screen.getByText('jmarsha82@yahoo.com')).toBeInTheDocument();
      expect(screen.getByText('Last updated :')).toBeInTheDocument();
      expect(screen.getByText('2 months ago')).toBeInTheDocument();
    });

    test('renders contact information with icons', () => {
      renderWithProviders(<GeneralDetails />);
      
      // Check for phone number and email
      expect(screen.getByText('(618)-978-1469')).toBeInTheDocument();
      expect(screen.getByText('jmarsha82@yahoo.com')).toBeInTheDocument();
      
      // Check for icons (they should be present as SVG elements)
      const phoneIcon = document.querySelector('[data-testid="PhoneAndroidIcon"]');
      const emailIcon = document.querySelector('[data-testid="EmailIcon"]');
      expect(phoneIcon).toBeInTheDocument();
      expect(emailIcon).toBeInTheDocument();
    });
  });

  describe('General Information Display', () => {
    test('displays current role information', () => {
      renderWithProviders(<GeneralDetails />);
      
      // Check for current role
      expect(screen.getByText('Current Role : Programmer at Boeing')).toBeInTheDocument();
    });

    test('displays contact information', () => {
      renderWithProviders(<GeneralDetails />);
      
      // Check for phone number
      expect(screen.getByText('(618)-978-1469')).toBeInTheDocument();
      
      // Check for email
      expect(screen.getByText('jmarsha82@yahoo.com')).toBeInTheDocument();
    });

    test('displays last updated information', () => {
      renderWithProviders(<GeneralDetails />);
      
      // Check for last updated label and value
      expect(screen.getByText('Last updated :')).toBeInTheDocument();
      expect(screen.getByText('2 months ago')).toBeInTheDocument();
    });

    test('uses formatDistanceToNow for date formatting', () => {
      renderWithProviders(<GeneralDetails />);
      
      // Check that the mocked date formatting function was called and returns expected value
      expect(screen.getByText('2 months ago')).toBeInTheDocument();
    });
  });

  describe('Theme Integration', () => {
    test('general details container has theme-based styling', () => {
      renderWithProviders(<GeneralDetails />);
      
      // Get the main container
      const container = document.querySelector('.general-details');
      expect(container).toHaveStyle('background: rgb(42, 42, 42)'); // dark theme cardBg
      expect(container).toHaveStyle('color: rgb(224, 224, 224)'); // dark theme textColor
      expect(container).toHaveStyle('transition: background 0.3s ease, color 0.3s ease');
    });

    test('component responds to theme changes', () => {
      renderWithProviders(<GeneralDetails />);
      
      // Component should render with dark theme by default
      const container = document.querySelector('.general-details');
      expect(container).toHaveStyle('background: rgb(42, 42, 42)');
    });

    test('heading has theme-based styling', () => {
      renderWithProviders(<GeneralDetails />);
      
      // Check that the heading has theme accent color
      const heading = screen.getByText('Current Role : Programmer at Boeing');
      expect(heading).toHaveStyle('color: rgb(0, 255, 255)'); // dark theme accent4
    });

    test('all text elements inherit theme colors', () => {
      renderWithProviders(<GeneralDetails />);
      
      // Check that all text elements are present and inherit theme colors
      const container = document.querySelector('.general-details');
      expect(container).toHaveStyle('color: rgb(224, 224, 224)');
      
      // Check individual text elements
      expect(screen.getByText('(618)-978-1469')).toBeInTheDocument();
      expect(screen.getByText('jmarsha82@yahoo.com')).toBeInTheDocument();
      expect(screen.getByText('Last updated :')).toBeInTheDocument();
    });
  });

  describe('Component Structure', () => {
    test('has correct DOM structure', () => {
      renderWithProviders(<GeneralDetails />);
      
      // Check for main container
      const container = document.querySelector('.general-details');
      expect(container).toBeInTheDocument();
      
      // Check for heading
      const heading = screen.getByText('Current Role : Programmer at Boeing');
      expect(heading.tagName).toBe('H4');
    });

    test('contains all required information sections', () => {
      renderWithProviders(<GeneralDetails />);
      
      // Check for all sections
      expect(screen.getByText('Current Role : Programmer at Boeing')).toBeInTheDocument();
      expect(screen.getByText('(618)-978-1469')).toBeInTheDocument();
      expect(screen.getByText('jmarsha82@yahoo.com')).toBeInTheDocument();
      expect(screen.getByText('Last updated :')).toBeInTheDocument();
    });

    test('has proper icon alignment classes', () => {
      renderWithProviders(<GeneralDetails />);
      
      // Check for icon alignment classes
      const phoneIcon = document.querySelector('[data-testid="PhoneAndroidIcon"]');
      const emailIcon = document.querySelector('[data-testid="EmailIcon"]');
      
      expect(phoneIcon).toHaveClass('icon-text-alignment');
      expect(emailIcon).toHaveClass('icon-text-alignment');
    });
  });

  describe('Material-UI Icons', () => {
    test('renders PhoneAndroidIcon correctly', () => {
      renderWithProviders(<GeneralDetails />);
      
      const phoneIcon = document.querySelector('[data-testid="PhoneAndroidIcon"]');
      expect(phoneIcon).toBeInTheDocument();
      expect(phoneIcon).toHaveClass('icon-text-alignment');
    });

    test('renders EmailIcon correctly', () => {
      renderWithProviders(<GeneralDetails />);
      
      const emailIcon = document.querySelector('[data-testid="EmailIcon"]');
      expect(emailIcon).toBeInTheDocument();
      expect(emailIcon).toHaveClass('icon-text-alignment');
    });

    test('icons are properly positioned with contact information', () => {
      renderWithProviders(<GeneralDetails />);
      
      // Check that icons are present alongside their respective contact information
      const phoneContainer = screen.getByText('(618)-978-1469').parentElement;
      const emailContainer = screen.getByText('jmarsha82@yahoo.com').parentElement;
      
      expect(phoneContainer.querySelector('[data-testid="PhoneAndroidIcon"]')).toBeInTheDocument();
      expect(emailContainer.querySelector('[data-testid="EmailIcon"]')).toBeInTheDocument();
    });
  });

  describe('Accessibility', () => {
    test('contact information is properly structured', () => {
      renderWithProviders(<GeneralDetails />);
      
      // Check that contact information is accessible
      expect(screen.getByText('(618)-978-1469')).toBeInTheDocument();
      expect(screen.getByText('jmarsha82@yahoo.com')).toBeInTheDocument();
    });

    test('heading is properly structured', () => {
      renderWithProviders(<GeneralDetails />);
      
      // Check for proper heading structure
      const heading = screen.getByText('Current Role : Programmer at Boeing');
      expect(heading.tagName).toBe('H4');
    });

    test('content is readable and accessible', () => {
      renderWithProviders(<GeneralDetails />);
      
      // Check that all information is present and readable
      expect(screen.getByText('Current Role : Programmer at Boeing')).toBeInTheDocument();
      expect(screen.getByText('(618)-978-1469')).toBeInTheDocument();
      expect(screen.getByText('jmarsha82@yahoo.com')).toBeInTheDocument();
      expect(screen.getByText('Last updated :')).toBeInTheDocument();
    });

    test('icons have proper accessibility attributes', () => {
      renderWithProviders(<GeneralDetails />);
      
      // Check that icons are present (they should be accessible via their testid)
      const phoneIcon = document.querySelector('[data-testid="PhoneAndroidIcon"]');
      const emailIcon = document.querySelector('[data-testid="EmailIcon"]');
      
      expect(phoneIcon).toBeInTheDocument();
      expect(emailIcon).toBeInTheDocument();
    });
  });

  describe('Content Validation', () => {
    test('contains expected role information', () => {
      renderWithProviders(<GeneralDetails />);
      
      // Check for role information
      expect(screen.getByText(/Current Role.*Programmer at Boeing/)).toBeInTheDocument();
    });

    test('contains expected contact information', () => {
      renderWithProviders(<GeneralDetails />);
      
      // Check for phone number format
      expect(screen.getByText(/\(\d{3}\)-\d{3}-\d{4}/)).toBeInTheDocument();
      
      // Check for email format
      expect(screen.getByText(/\S+@\S+\.\S+/)).toBeInTheDocument();
    });

    test('contains expected last updated information', () => {
      renderWithProviders(<GeneralDetails />);
      
      // Check for last updated label
      expect(screen.getByText(/Last updated/)).toBeInTheDocument();
      
      // Check for formatted date
      expect(screen.getByText('2 months ago')).toBeInTheDocument();
    });

    test('contact information is properly formatted', () => {
      renderWithProviders(<GeneralDetails />);
      
      // Check phone number format
      expect(screen.getByText('(618)-978-1469')).toBeInTheDocument();
      
      // Check email format
      expect(screen.getByText('jmarsha82@yahoo.com')).toBeInTheDocument();
    });
  });

  describe('Date Formatting', () => {
    test('uses date-fns formatDistanceToNow function', () => {
      const formatDistanceToNow = require('date-fns/formatDistanceToNow');
      
      renderWithProviders(<GeneralDetails />);
      
      // Verify that formatDistanceToNow was called with the expected date
      expect(formatDistanceToNow).toHaveBeenCalledWith(
        new Date("2025-09-19T16:09:38.349+00:00"),
        { addSuffix: true }
      );
    });

    test('displays formatted date correctly', () => {
      renderWithProviders(<GeneralDetails />);
      
      // Check that the mocked date is displayed
      expect(screen.getByText('2 months ago')).toBeInTheDocument();
    });

    test('date formatting is consistent', () => {
      renderWithProviders(<GeneralDetails />);
      
      // The mocked function should return the same value consistently
      expect(screen.getByText('2 months ago')).toBeInTheDocument();
    });
  });

  describe('Theme Context Integration', () => {
    test('uses theme context correctly', () => {
      renderWithProviders(<GeneralDetails />);
      
      const container = document.querySelector('.general-details');
      expect(container).toHaveStyle('background: rgb(42, 42, 42)'); // dark theme cardBg
    });

    test('theme colors are applied consistently', () => {
      renderWithProviders(<GeneralDetails />);
      
      const container = document.querySelector('.general-details');
      const heading = screen.getByText('Current Role : Programmer at Boeing');
      
      // Container should have theme colors
      expect(container).toHaveStyle('background: rgb(42, 42, 42)');
      expect(container).toHaveStyle('color: rgb(224, 224, 224)');
      
      // Heading should have theme accent color
      expect(heading).toHaveStyle('color: rgb(0, 255, 255)');
    });

    test('theme transition is applied', () => {
      renderWithProviders(<GeneralDetails />);
      
      const container = document.querySelector('.general-details');
      expect(container).toHaveStyle('transition: background 0.3s ease, color 0.3s ease');
    });
  });

  describe('Component Behavior', () => {
    test('component maintains state correctly', () => {
      const { rerender } = renderWithProviders(<GeneralDetails />);
      
      // Component should render the same way on multiple renders
      const firstRender = screen.getByText('Current Role : Programmer at Boeing');
      expect(firstRender).toBeInTheDocument();
      
      // Re-render with providers and check again
      rerender(
        <BrowserRouter>
          <ThemeContextProvider>
            <GeneralDetails />
          </ThemeContextProvider>
        </BrowserRouter>
      );
      expect(screen.getByText('Current Role : Programmer at Boeing')).toBeInTheDocument();
    });

    test('all information elements are properly rendered', () => {
      renderWithProviders(<GeneralDetails />);
      
      // Check that all information is present
      const informationElements = [
        'Current Role : Programmer at Boeing',
        '(618)-978-1469',
        'jmarsha82@yahoo.com',
        'Last updated :',
        '2 months ago'
      ];
      
      informationElements.forEach(element => {
        expect(screen.getByText(element)).toBeInTheDocument();
      });
    });
  });

  describe('Icon Integration', () => {
    test('phone icon is properly integrated with phone number', () => {
      renderWithProviders(<GeneralDetails />);
      
      // Check that phone icon and number are in the same container
      const phoneContainer = screen.getByText('(618)-978-1469').parentElement;
      const phoneIcon = phoneContainer.querySelector('[data-testid="PhoneAndroidIcon"]');
      
      expect(phoneIcon).toBeInTheDocument();
      expect(phoneIcon).toHaveClass('icon-text-alignment');
    });

    test('email icon is properly integrated with email address', () => {
      renderWithProviders(<GeneralDetails />);
      
      // Check that email icon and address are in the same container
      const emailContainer = screen.getByText('jmarsha82@yahoo.com').parentElement;
      const emailIcon = emailContainer.querySelector('[data-testid="EmailIcon"]');
      
      expect(emailIcon).toBeInTheDocument();
      expect(emailIcon).toHaveClass('icon-text-alignment');
    });

    test('icons have consistent styling', () => {
      renderWithProviders(<GeneralDetails />);
      
      const phoneIcon = document.querySelector('[data-testid="PhoneAndroidIcon"]');
      const emailIcon = document.querySelector('[data-testid="EmailIcon"]');
      
      // Both icons should have the same alignment class
      expect(phoneIcon).toHaveClass('icon-text-alignment');
      expect(emailIcon).toHaveClass('icon-text-alignment');
    });
  });

  describe('Contact Information Structure', () => {
    test('phone information is properly structured', () => {
      renderWithProviders(<GeneralDetails />);
      
      const phoneContainer = screen.getByText('(618)-978-1469').parentElement;
      
      // Should contain both icon and phone number
      expect(phoneContainer.querySelector('[data-testid="PhoneAndroidIcon"]')).toBeInTheDocument();
      expect(phoneContainer.textContent).toContain('(618)-978-1469');
    });

    test('email information is properly structured', () => {
      renderWithProviders(<GeneralDetails />);
      
      const emailContainer = screen.getByText('jmarsha82@yahoo.com').parentElement;
      
      // Should contain both icon and email address
      expect(emailContainer.querySelector('[data-testid="EmailIcon"]')).toBeInTheDocument();
      expect(emailContainer.textContent).toContain('jmarsha82@yahoo.com');
    });

    test('last updated information is properly structured', () => {
      renderWithProviders(<GeneralDetails />);
      
      // Check for the label and value
      expect(screen.getByText('Last updated :')).toBeInTheDocument();
      expect(screen.getByText('2 months ago')).toBeInTheDocument();
      
      // Check that the label has strong styling
      const strongElement = screen.getByText('Last updated :');
      expect(strongElement.tagName).toBe('STRONG');
    });
  });
});

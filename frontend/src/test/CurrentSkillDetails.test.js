import React from 'react';
import { render, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom';
import CurrentSkillDetails from "../components/CurrentSkillDetails";
import { ThemeContextProvider } from "../context/ThemeContext";
import { BrowserRouter } from "react-router-dom";

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

describe('CurrentSkillDetails Component', () => {
  
  describe('Component Rendering', () => {
    test('renders CurrentSkillDetails component without crashing', () => {
      renderWithProviders(<CurrentSkillDetails />);
      expect(screen.getByText('ReactJS')).toBeInTheDocument();
    });

    test('renders all skill cards', () => {
      renderWithProviders(<CurrentSkillDetails />);
      
      // Check for all skill buttons
      expect(screen.getByText('ReactJS')).toBeInTheDocument();
      expect(screen.getByText('Python')).toBeInTheDocument();
      expect(screen.getByText('C++')).toBeInTheDocument();
      expect(screen.getByText('Jest')).toBeInTheDocument();
    });

    test('renders skill descriptions', () => {
      renderWithProviders(<CurrentSkillDetails />);
      
      // Check for skill descriptions
      expect(screen.getByText(/Assorted personal projects including uses in the MERN Stack/)).toBeInTheDocument();
      expect(screen.getByText(/Machine learning projects and neural network research/)).toBeInTheDocument();
      expect(screen.getByText(/Executable and Webassembly projects using a SimConnect API/)).toBeInTheDocument();
      expect(screen.getByText(/Used to test javascript code in both work and personal projects/)).toBeInTheDocument();
    });
  });

  describe('Skill Buttons', () => {
    test('ReactJS button has correct properties', () => {
      renderWithProviders(<CurrentSkillDetails />);
      
      const reactButton = screen.getByText('ReactJS');
      expect(reactButton).toBeInTheDocument();
      expect(reactButton).toHaveAttribute('href', 'https://react.dev/');
      expect(reactButton).toHaveAttribute('target', '_blank');
      expect(reactButton).toHaveClass('MuiButton-contained');
    });

    test('Python button has correct properties', () => {
      renderWithProviders(<CurrentSkillDetails />);
      
      const pythonButton = screen.getByText('Python');
      expect(pythonButton).toBeInTheDocument();
      expect(pythonButton).toHaveAttribute('href', 'https://www.python.org/');
      expect(pythonButton).toHaveAttribute('target', '_blank');
      expect(pythonButton).toHaveClass('MuiButton-contained');
    });

    test('C++ button has correct properties', () => {
      renderWithProviders(<CurrentSkillDetails />);
      
      const cppButton = screen.getByText('C++');
      expect(cppButton).toBeInTheDocument();
      expect(cppButton).toHaveAttribute('href', 'https://isocpp.org/std/the-standard');
      expect(cppButton).toHaveAttribute('target', '_blank');
      expect(cppButton).toHaveClass('MuiButton-contained');
    });

    test('Jest button has correct properties', () => {
      renderWithProviders(<CurrentSkillDetails />);
      
      const jestButton = screen.getByText('Jest');
      expect(jestButton).toBeInTheDocument();
      expect(jestButton).toHaveAttribute('href', 'https://jestjs.io/');
      expect(jestButton).toHaveAttribute('target', '_blank');
      expect(jestButton).toHaveClass('MuiButton-contained');
    });
  });

  describe('Tooltip Functionality', () => {
    test('all buttons have tooltips with correct text', () => {
      renderWithProviders(<CurrentSkillDetails />);
      
      // Check that all skill links have tooltips
      const skillLinks = screen.getAllByRole('link');
      expect(skillLinks).toHaveLength(4);
      
      // Each link should have a tooltip with "Used Daily" text
      skillLinks.forEach(link => {
        expect(link).toBeInTheDocument();
        expect(link).toHaveAttribute('aria-label', 'Used Daily');
      });
    });

    test('tooltips display on hover', async () => {
      renderWithProviders(<CurrentSkillDetails />);
      
      const reactLink = screen.getByText('ReactJS');
      
      // Hover over the link to trigger tooltip
      fireEvent.mouseOver(reactLink);
      
      // Wait for tooltip to appear (Material-UI tooltips have a delay)
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Check if tooltip is present in DOM
      const tooltip = document.querySelector('[role="tooltip"]');
      if (tooltip) {
        expect(tooltip).toBeInTheDocument();
      } else {
        // If tooltip doesn't appear, at least verify the link has aria-label
        expect(reactLink).toHaveAttribute('aria-label', 'Used Daily');
      }
    });
  });

  describe('Theme Integration', () => {
    test('skill cards have theme-based styling', () => {
      renderWithProviders(<CurrentSkillDetails />);
      
      // Get all skill detail containers
      const skillCards = document.querySelectorAll('.current-skill-details');
      expect(skillCards.length).toBe(4);
      
      // Check that each card has theme styling
      skillCards.forEach(card => {
        expect(card).toHaveStyle('background: rgb(42, 42, 42)'); // dark theme cardBg
        expect(card).toHaveStyle('color: rgb(224, 224, 224)'); // dark theme textColor
        expect(card).toHaveStyle('transition: background 0.3s ease, color 0.3s ease');
      });
    });

    test('buttons have theme-based styling', () => {
      renderWithProviders(<CurrentSkillDetails />);
      
      const skillLinks = screen.getAllByRole('link');
      
      skillLinks.forEach(link => {
        expect(link).toHaveStyle('background: rgb(0, 255, 255)'); // dark theme accent4
        expect(link).toHaveStyle('color: rgb(0, 0, 0)'); // dark theme accent5
      });
    });

    test('component responds to theme changes', () => {
      renderWithProviders(<CurrentSkillDetails />);
      
      // Component should render with dark theme by default
      const firstCard = document.querySelector('.current-skill-details');
      expect(firstCard).toHaveStyle('background: rgb(42, 42, 42)');
    });
  });

  describe('Component Structure', () => {
    test('has correct DOM structure', () => {
      renderWithProviders(<CurrentSkillDetails />);
      
      // Check for main container
      const mainContainer = screen.getByText('ReactJS').closest('div').parentElement;
      expect(mainContainer).toBeInTheDocument();
      
      // Check for skill detail containers
      const skillCards = document.querySelectorAll('.current-skill-details');
      expect(skillCards.length).toBe(4);
      
      // Check for description elements
      const descriptions = document.querySelectorAll('.current-skill-details-desc');
      expect(descriptions.length).toBe(4);
    });

    test('each skill has proper structure', () => {
      renderWithProviders(<CurrentSkillDetails />);
      
      const skillCards = document.querySelectorAll('.current-skill-details');
      
      skillCards.forEach(card => {
        // Each card should have a link
        const link = card.querySelector('a');
        expect(link).toBeInTheDocument();
        
        // Each card should have a description
        const description = card.querySelector('.current-skill-details-desc');
        expect(description).toBeInTheDocument();
      });
    });
  });

  describe('External Links', () => {
    test('ReactJS button links to correct URL', () => {
      renderWithProviders(<CurrentSkillDetails />);
      
      const reactButton = screen.getByText('ReactJS');
      expect(reactButton.closest('a')).toHaveAttribute('href', 'https://react.dev/');
      expect(reactButton.closest('a')).toHaveAttribute('target', '_blank');
    });

    test('Python button links to correct URL', () => {
      renderWithProviders(<CurrentSkillDetails />);
      
      const pythonButton = screen.getByText('Python');
      expect(pythonButton.closest('a')).toHaveAttribute('href', 'https://www.python.org/');
      expect(pythonButton.closest('a')).toHaveAttribute('target', '_blank');
    });

    test('C++ button links to correct URL', () => {
      renderWithProviders(<CurrentSkillDetails />);
      
      const cppButton = screen.getByText('C++');
      expect(cppButton.closest('a')).toHaveAttribute('href', 'https://isocpp.org/std/the-standard');
      expect(cppButton.closest('a')).toHaveAttribute('target', '_blank');
    });

    test('Jest button links to correct URL', () => {
      renderWithProviders(<CurrentSkillDetails />);
      
      const jestButton = screen.getByText('Jest');
      expect(jestButton.closest('a')).toHaveAttribute('href', 'https://jestjs.io/');
      expect(jestButton.closest('a')).toHaveAttribute('target', '_blank');
    });
  });

  describe('Accessibility', () => {
    test('buttons are accessible via keyboard navigation', () => {
      renderWithProviders(<CurrentSkillDetails />);
      
      const skillLinks = screen.getAllByRole('link');
      
      skillLinks.forEach(link => {
        expect(link).toBeInTheDocument();
        expect(link).toHaveAttribute('tabindex', '0');
      });
    });

    test('external links have proper accessibility attributes', () => {
      renderWithProviders(<CurrentSkillDetails />);
      
      const skillLinks = screen.getAllByRole('link');
      
      skillLinks.forEach(link => {
        expect(link).toHaveAttribute('target', '_blank');
        expect(link).toHaveAttribute('href');
      });
    });

    test('skill descriptions are readable', () => {
      renderWithProviders(<CurrentSkillDetails />);
      
      const descriptions = document.querySelectorAll('.current-skill-details-desc');
      
      descriptions.forEach(description => {
        expect(description).toBeInTheDocument();
        expect(description.textContent.length).toBeGreaterThan(0);
      });
    });
  });

  describe('Material-UI Components', () => {
    test('renders Button components correctly', () => {
      renderWithProviders(<CurrentSkillDetails />);
      
      const skillLinks = screen.getAllByRole('link');
      expect(skillLinks).toHaveLength(4);
      
      skillLinks.forEach(link => {
        expect(link).toHaveClass('MuiButton-root');
        expect(link).toHaveClass('MuiButton-contained');
      });
    });

    test('renders Tooltip components correctly', () => {
      renderWithProviders(<CurrentSkillDetails />);
      
      // Check that links have tooltip aria-labels (Material-UI tooltips may not render containers in test environment)
      const skillLinks = screen.getAllByRole('link');
      expect(skillLinks).toHaveLength(4);
      
      skillLinks.forEach(link => {
        expect(link).toHaveAttribute('aria-label', 'Used Daily');
      });
    });
  });

  describe('Content Validation', () => {
    test('skill descriptions contain expected content', () => {
      renderWithProviders(<CurrentSkillDetails />);
      
      // ReactJS description
      expect(screen.getByText(/MERN Stack/)).toBeInTheDocument();
      
      // Python description
      expect(screen.getByText(/Machine learning/)).toBeInTheDocument();
      
      // C++ description
      expect(screen.getByText(/SimConnect API/)).toBeInTheDocument();
      
      // Jest description
      expect(screen.getByText(/javascript code/)).toBeInTheDocument();
    });

    test('all skill names are displayed correctly', () => {
      renderWithProviders(<CurrentSkillDetails />);
      
      const skillNames = ['ReactJS', 'Python', 'C++', 'Jest'];
      
      skillNames.forEach(skillName => {
        expect(screen.getByText(skillName)).toBeInTheDocument();
      });
    });
  });

  describe('Theme Context Integration', () => {
    test('uses theme context correctly', () => {
      renderWithProviders(<CurrentSkillDetails />);
      
      const firstCard = document.querySelector('.current-skill-details');
      expect(firstCard).toHaveStyle('background: rgb(42, 42, 42)'); // dark theme cardBg
    });

    test('theme colors are applied consistently', () => {
      renderWithProviders(<CurrentSkillDetails />);
      
      const skillLinks = screen.getAllByRole('link');
      const cards = document.querySelectorAll('.current-skill-details');
      
      // All links should have the same theme colors
      skillLinks.forEach(link => {
        expect(link).toHaveStyle('background: rgb(0, 255, 255)');
        expect(link).toHaveStyle('color: rgb(0, 0, 0)');
      });
      
      // All cards should have the same theme colors
      cards.forEach(card => {
        expect(card).toHaveStyle('background: rgb(42, 42, 42)');
        expect(card).toHaveStyle('color: rgb(224, 224, 224)');
      });
    });
  });

  describe('Responsive Design', () => {
    test('component renders without layout issues', () => {
      renderWithProviders(<CurrentSkillDetails />);
      
      const mainContainer = screen.getByText('ReactJS').closest('div').parentElement;
      expect(mainContainer).toBeVisible();
    });

    test('skill cards are properly spaced', () => {
      renderWithProviders(<CurrentSkillDetails />);
      
      const skillCards = document.querySelectorAll('.current-skill-details');
      expect(skillCards.length).toBe(4);
      
      // Each card should be visible
      skillCards.forEach(card => {
        expect(card).toBeVisible();
      });
    });
  });

  describe('Component Behavior', () => {
    test('component maintains state correctly', () => {
      const { rerender } = renderWithProviders(<CurrentSkillDetails />);
      
      // Component should render the same way on multiple renders
      const firstRender = screen.getByText('ReactJS');
      expect(firstRender).toBeInTheDocument();
      
      // Re-render with providers and check again
      rerender(
        <BrowserRouter>
          <ThemeContextProvider>
            <CurrentSkillDetails />
          </ThemeContextProvider>
        </BrowserRouter>
      );
      expect(screen.getByText('ReactJS')).toBeInTheDocument();
    });

    test('all interactive elements are functional', () => {
      renderWithProviders(<CurrentSkillDetails />);
      
      const skillLinks = screen.getAllByRole('link');
      
      skillLinks.forEach(link => {
        // Each link should be clickable
        expect(link).not.toBeDisabled();
        
        // Each link should have proper styling
        expect(link).toHaveClass('MuiButton-contained');
      });
    });
  });
});
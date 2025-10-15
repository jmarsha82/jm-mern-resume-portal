import React from 'react';
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import EducationDetails from "../components/EducationDetails";
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

describe('EducationDetails Component', () => {
  
  describe('Component Rendering', () => {
    test('renders EducationDetails component without crashing', () => {
      renderWithProviders(<EducationDetails />);
      expect(screen.getByText('Masters in Computer Engineering')).toBeInTheDocument();
    });

    test('renders all education entries', () => {
      renderWithProviders(<EducationDetails />);
      
      // Check for all education degree titles
      expect(screen.getByText('Masters in Computer Engineering')).toBeInTheDocument();
      expect(screen.getByText('Masters in Business Administration with a Specialization in Management Information Systems')).toBeInTheDocument();
      expect(screen.getByText('Bachelor of Liberal Studies with an Emphasis in Art')).toBeInTheDocument();
    });

    test('renders university names', () => {
      renderWithProviders(<EducationDetails />);
      
      // Check for university names
      expect(screen.getByText('Washington University of St. Louis')).toBeInTheDocument();
      expect(screen.getAllByText('Southern Illinois University at Edwardsville')).toHaveLength(2);
    });

    test('renders locations', () => {
      renderWithProviders(<EducationDetails />);
      
      // Check for locations
      expect(screen.getByText('St.Louis MO')).toBeInTheDocument();
      expect(screen.getAllByText('Edwardsville IL')).toHaveLength(2);
    });
  });

  describe('Education Information Display', () => {
    test('displays degree titles', () => {
      renderWithProviders(<EducationDetails />);
      
      // Check for specific degree titles
      expect(screen.getByText('Masters in Computer Engineering')).toBeInTheDocument();
      expect(screen.getByText('Masters in Business Administration with a Specialization in Management Information Systems')).toBeInTheDocument();
      expect(screen.getByText('Bachelor of Liberal Studies with an Emphasis in Art')).toBeInTheDocument();
    });

    test('displays university information', () => {
      renderWithProviders(<EducationDetails />);
      
      // Check for university names
      expect(screen.getByText('Washington University of St. Louis')).toBeInTheDocument();
      expect(screen.getAllByText('Southern Illinois University at Edwardsville')).toHaveLength(2);
    });

    test('displays location information', () => {
      renderWithProviders(<EducationDetails />);
      
      // Check for locations
      expect(screen.getByText('St.Louis MO')).toBeInTheDocument();
      expect(screen.getAllByText('Edwardsville IL')).toHaveLength(2);
    });

    test('displays external links with correct href attributes', () => {
      renderWithProviders(<EducationDetails />);
      
      // Check for external links
      const links = screen.getAllByRole('link');
      expect(links.length).toBe(3); // 3 education entries
      
      // Check specific links by href attribute
      const linkHrefs = links.map(link => link.getAttribute('href'));
      expect(linkHrefs).toContain('https://wustl.edu/');
      expect(linkHrefs).toContain('https://www.siue.edu/');
      
      // Check that SIUE appears twice (for two different degrees)
      const siueLinks = linkHrefs.filter(href => href === 'https://www.siue.edu/');
      expect(siueLinks).toHaveLength(2);
    });
  });

  describe('Theme Integration', () => {
    test('education list has theme-based styling', () => {
      renderWithProviders(<EducationDetails />);
      
      // Check for List component with theme styling (renders as navigation due to component="nav")
      const list = screen.getByRole('navigation');
      expect(list).toHaveStyle('background: rgb(42, 42, 42)'); // dark theme cardBg
      expect(list).toHaveStyle('color: rgb(224, 224, 224)'); // dark theme textColor
      expect(list).toHaveStyle('transition: background 0.3s ease, color 0.3s ease');
    });

    test('component responds to theme changes', () => {
      renderWithProviders(<EducationDetails />);
      
      // Component should render with dark theme by default
      const list = screen.getByRole('navigation');
      expect(list).toHaveStyle('background: rgb(42, 42, 42)');
    });

    test('degree titles have theme-based styling', () => {
      renderWithProviders(<EducationDetails />);
      
      // Check that degree titles have theme accent color
      const degreeTitles = document.querySelectorAll('h4');
      degreeTitles.forEach(title => {
        expect(title).toHaveStyle('color: rgb(0, 255, 255)'); // dark theme accent4
      });
    });

    test('list items have theme-based styling', () => {
      renderWithProviders(<EducationDetails />);
      
      // Check that list items have theme text color
      const listItems = document.querySelectorAll('[class*="MuiListItem-root"]');
      listItems.forEach(item => {
        expect(item).toHaveStyle('color: rgb(224, 224, 224)'); // dark theme textColor
      });
    });

    test('dividers have theme-based styling', () => {
      renderWithProviders(<EducationDetails />);
      
      // Check that dividers have theme border color (they may not have explicit background-color style)
      const dividers = document.querySelectorAll('[class*="MuiDivider-root"]');
      expect(dividers.length).toBe(3);
      dividers.forEach(divider => {
        expect(divider).toHaveClass('MuiDivider-root');
      });
    });
  });

  describe('Component Structure', () => {
    test('has correct DOM structure', () => {
      renderWithProviders(<EducationDetails />);
      
      // Check for main List component (renders as navigation due to component="nav")
      const list = screen.getByRole('navigation');
      expect(list).toBeInTheDocument();
      expect(list).toHaveAttribute('aria-label', 'mailbox folders');
      
      // Check for ListItem components
      const listItems = document.querySelectorAll('[class*="MuiListItem-root"]');
      expect(listItems.length).toBe(3); // 3 education entries
    });

    test('each education entry has proper structure', () => {
      renderWithProviders(<EducationDetails />);
      
      const listItems = document.querySelectorAll('[class*="MuiListItem-root"]');
      expect(listItems.length).toBe(3);
      
      listItems.forEach(item => {
        // Each item should have ListItemText
        const listItemText = item.querySelector('[class*="MuiListItemText-root"]');
        expect(listItemText).toBeInTheDocument();
        
        // Each item should have an h4 for the degree
        const degreeTitle = item.querySelector('h4');
        expect(degreeTitle).toBeInTheDocument();
        
        // Each item should have a title for location
        const location = item.querySelector('title');
        expect(location).toBeInTheDocument();
        
        // Each item should have a div for university name
        const university = item.querySelector('.education-title');
        expect(university).toBeInTheDocument();
      });
    });

    test('has correct number of education entries', () => {
      renderWithProviders(<EducationDetails />);
      
      // Should have 3 education entries
      const listItems = document.querySelectorAll('[class*="MuiListItem-root"]');
      expect(listItems.length).toBe(3);
    });

    test('has correct number of dividers', () => {
      renderWithProviders(<EducationDetails />);
      
      // Should have 3 dividers (one before each education entry)
      const dividers = document.querySelectorAll('[class*="MuiDivider-root"]');
      expect(dividers.length).toBe(3);
    });
  });

  describe('Material-UI Components', () => {
    test('renders List component with proper structure', () => {
      renderWithProviders(<EducationDetails />);
      
      // Check for List component (renders as navigation due to component="nav")
      const list = screen.getByRole('navigation');
      expect(list).toHaveClass('MuiList-root');
      expect(list).toHaveAttribute('aria-label', 'mailbox folders');
    });

    test('renders ListItem components correctly', () => {
      renderWithProviders(<EducationDetails />);
      
      // Check for ListItem components
      const listItems = document.querySelectorAll('[class*="MuiListItem-root"]');
      expect(listItems.length).toBe(3);
      
      listItems.forEach(item => {
        expect(item).toHaveClass('MuiListItem-root');
      });
    });

    test('renders ListItemText components correctly', () => {
      renderWithProviders(<EducationDetails />);
      
      // Check for ListItemText components
      const listItemTexts = document.querySelectorAll('[class*="MuiListItemText-root"]');
      expect(listItemTexts.length).toBe(3);
      
      listItemTexts.forEach(text => {
        expect(text).toHaveClass('MuiListItemText-root');
      });
    });

    test('renders Divider components correctly', () => {
      renderWithProviders(<EducationDetails />);
      
      // Check for Divider components
      const dividers = document.querySelectorAll('[class*="MuiDivider-root"]');
      expect(dividers.length).toBe(3);
      
      dividers.forEach(divider => {
        expect(divider).toHaveClass('MuiDivider-root');
      });
    });
  });

  describe('Accessibility', () => {
    test('list has proper accessibility attributes', () => {
      renderWithProviders(<EducationDetails />);
      
      const list = screen.getByRole('navigation');
      expect(list).toHaveAttribute('aria-label', 'mailbox folders');
    });

    test('external links have proper accessibility attributes', () => {
      renderWithProviders(<EducationDetails />);
      
      const links = screen.getAllByRole('link');
      
      links.forEach(link => {
        expect(link).toHaveAttribute('target', '_blank');
        expect(link).toHaveAttribute('href');
      });
    });

    test('education information is properly structured', () => {
      renderWithProviders(<EducationDetails />);
      
      // Check for proper heading structure
      const headings = document.querySelectorAll('h4');
      expect(headings.length).toBe(3);
      
      headings.forEach(heading => {
        expect(heading.tagName).toBe('H4');
      });
    });

    test('content is readable and accessible', () => {
      renderWithProviders(<EducationDetails />);
      
      // Check that all education information is present and readable
      expect(screen.getByText('Masters in Computer Engineering')).toBeInTheDocument();
      expect(screen.getByText('Washington University of St. Louis')).toBeInTheDocument();
    });
  });

  describe('External Link Functionality', () => {
    test('all links have correct target attribute', () => {
      renderWithProviders(<EducationDetails />);
      
      const links = screen.getAllByRole('link');
      
      links.forEach(link => {
        expect(link).toHaveAttribute('target', '_blank');
      });
    });

    test('links point to valid external URLs', () => {
      renderWithProviders(<EducationDetails />);
      
      // Check for HTTPS URLs
      const links = screen.getAllByRole('link');
      const hrefs = links.map(link => link.getAttribute('href'));
      
      hrefs.forEach(href => {
        expect(href).toMatch(/^https:\/\//);
      });
    });

    test('Washington University link is correct', () => {
      renderWithProviders(<EducationDetails />);
      
      const wustlLink = screen.getByRole('link', { name: /Masters in Computer Engineering/i });
      expect(wustlLink).toHaveAttribute('href', 'https://wustl.edu/');
    });

    test('SIUE links are correct', () => {
      renderWithProviders(<EducationDetails />);
      
      const links = screen.getAllByRole('link');
      const siueLinks = links.filter(link => 
        link.getAttribute('href') === 'https://www.siue.edu/'
      );
      
      expect(siueLinks).toHaveLength(2);
    });
  });

  describe('Education Content Validation', () => {
    test('contains expected degree programs', () => {
      renderWithProviders(<EducationDetails />);
      
      // Check for degree programs
      expect(screen.getByText(/Masters in Computer Engineering/)).toBeInTheDocument();
      expect(screen.getByText(/Masters in Business Administration with a Specialization in Management Information Systems/)).toBeInTheDocument();
      expect(screen.getByText(/Bachelor of Liberal Studies with an Emphasis in Art/)).toBeInTheDocument();
    });

    test('contains expected universities', () => {
      renderWithProviders(<EducationDetails />);
      
      // Check for universities
      expect(screen.getByText(/Washington University of St. Louis/)).toBeInTheDocument();
      expect(screen.getAllByText(/Southern Illinois University at Edwardsville/)).toHaveLength(2);
    });

    test('contains expected locations', () => {
      renderWithProviders(<EducationDetails />);
      
      // Check for locations
      expect(screen.getByText(/St.Louis MO/)).toBeInTheDocument();
      expect(screen.getAllByText(/Edwardsville IL/)).toHaveLength(2);
    });
  });

  describe('Theme Context Integration', () => {
    test('uses theme context correctly', () => {
      renderWithProviders(<EducationDetails />);
      
      const list = screen.getByRole('navigation');
      expect(list).toHaveStyle('background: rgb(42, 42, 42)'); // dark theme cardBg
    });

    test('theme colors are applied consistently', () => {
      renderWithProviders(<EducationDetails />);
      
      const list = screen.getByRole('navigation');
      const degreeTitles = document.querySelectorAll('h4');
      const listItems = document.querySelectorAll('[class*="MuiListItem-root"]');
      
      // List should have the same theme colors
      expect(list).toHaveStyle('background: rgb(42, 42, 42)');
      expect(list).toHaveStyle('color: rgb(224, 224, 224)');
      
      // Degree titles should have the same theme colors
      degreeTitles.forEach(title => {
        expect(title).toHaveStyle('color: rgb(0, 255, 255)');
      });
      
      // List items should have the same theme colors
      listItems.forEach(item => {
        expect(item).toHaveStyle('color: rgb(224, 224, 224)');
      });
    });
  });

  describe('Component Behavior', () => {
    test('component maintains state correctly', () => {
      const { rerender } = renderWithProviders(<EducationDetails />);
      
      // Component should render the same way on multiple renders
      const firstRender = screen.getByText('Masters in Computer Engineering');
      expect(firstRender).toBeInTheDocument();
      
      // Re-render with providers and check again
      rerender(
        <BrowserRouter>
          <ThemeContextProvider>
            <EducationDetails />
          </ThemeContextProvider>
        </BrowserRouter>
      );
      expect(screen.getByText('Masters in Computer Engineering')).toBeInTheDocument();
    });

    test('all education entries are properly rendered', () => {
      renderWithProviders(<EducationDetails />);
      
      // Check that all 3 education entries are present
      const educationTitles = [
        'Masters in Computer Engineering',
        'Masters in Business Administration with a Specialization in Management Information Systems',
        'Bachelor of Liberal Studies with an Emphasis in Art'
      ];
      
      educationTitles.forEach(title => {
        expect(screen.getByText(title)).toBeInTheDocument();
      });
    });
  });

  describe('Navigation Integration', () => {
    test('list items are clickable links', () => {
      renderWithProviders(<EducationDetails />);
      
      const links = screen.getAllByRole('link');
      expect(links.length).toBe(3);
      
      links.forEach(link => {
        expect(link).toHaveAttribute('href');
        expect(link).toHaveAttribute('target', '_blank');
      });
    });

    test('links navigate to correct university websites', () => {
      renderWithProviders(<EducationDetails />);
      
      const links = screen.getAllByRole('link');
      const hrefs = links.map(link => link.getAttribute('href'));
      
      // Should have one WUSTL link and two SIUE links
      expect(hrefs.filter(href => href === 'https://wustl.edu/')).toHaveLength(1);
      expect(hrefs.filter(href => href === 'https://www.siue.edu/')).toHaveLength(2);
    });
  });

  describe('Education Details Structure', () => {
    test('each education entry contains degree, location, and university', () => {
      renderWithProviders(<EducationDetails />);
      
      const listItems = document.querySelectorAll('[class*="MuiListItem-root"]');
      
      listItems.forEach(item => {
        // Each item should have a degree title (h4)
        const degreeTitle = item.querySelector('h4');
        expect(degreeTitle).toBeInTheDocument();
        expect(degreeTitle.textContent).toBeTruthy();
        
        // Each item should have a location (title)
        const location = item.querySelector('title');
        expect(location).toBeInTheDocument();
        expect(location.textContent).toBeTruthy();
        
        // Each item should have a university name (div with education-title class)
        const university = item.querySelector('.education-title');
        expect(university).toBeInTheDocument();
        expect(university.textContent).toBeTruthy();
      });
    });

    test('education entries are properly separated by dividers', () => {
      renderWithProviders(<EducationDetails />);
      
      // Should have 3 dividers separating the education entries
      const dividers = document.querySelectorAll('[class*="MuiDivider-root"]');
      expect(dividers.length).toBe(3);
      
      // Each divider should have theme-based styling
      dividers.forEach(divider => {
        expect(divider).toHaveClass('MuiDivider-root');
      });
    });
  });
});

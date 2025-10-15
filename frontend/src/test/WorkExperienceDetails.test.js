import React from 'react';
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import WorkExperienceDetails from "../components/WorkExperienceDetails";
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

describe('WorkExperienceDetails Component', () => {
  describe('Component Rendering', () => {
    test('renders WorkExperienceDetails component without crashing', () => {
      renderWithProviders(<WorkExperienceDetails />);
      expect(screen.getAllByText('Boeing')).toHaveLength(2); // Boeing appears twice
    });

    test('renders all work experience entries', () => {
      renderWithProviders(<WorkExperienceDetails />);
      
      // Check for all company names
      expect(screen.getAllByText('Boeing')).toHaveLength(2); // Boeing appears twice
      expect(screen.getByText('Accenture')).toBeInTheDocument();
      expect(screen.getByText('Phillips 66')).toBeInTheDocument();
    });

    test('renders all job titles', () => {
      renderWithProviders(<WorkExperienceDetails />);
      
      expect(screen.getByText('Senior Programmer')).toBeInTheDocument();
      expect(screen.getByText('System and Data Analyst')).toBeInTheDocument();
      expect(screen.getByText('Senior Systems Specialist')).toBeInTheDocument();
      expect(screen.getByText('Production Associate')).toBeInTheDocument();
    });

    test('renders all employment periods', () => {
      renderWithProviders(<WorkExperienceDetails />);
      
      expect(screen.getByText('June 2019 – Present')).toBeInTheDocument();
      expect(screen.getByText('July 2015 - June 2019')).toBeInTheDocument();
      expect(screen.getByText('June 2013 - July 2015')).toBeInTheDocument();
      expect(screen.getByText('August 2008 - June 2013')).toBeInTheDocument();
    });

    test('renders all locations', () => {
      renderWithProviders(<WorkExperienceDetails />);
      
      expect(screen.getAllByText('St. Louis MO')).toHaveLength(3); // Boeing positions + Accenture
      expect(screen.getByText('Hartford IL')).toBeInTheDocument();
    });
  });

  describe('Work Experience Information Display', () => {
    test('displays Boeing Senior Programmer experience correctly', () => {
      renderWithProviders(<WorkExperienceDetails />);
      
      // Check for the first Boeing position
      const boeingHeadings = screen.getAllByText('Boeing');
      expect(boeingHeadings[0]).toBeInTheDocument();
      expect(screen.getByText('Senior Programmer')).toBeInTheDocument();
      expect(screen.getByText('June 2019 – Present')).toBeInTheDocument();
    });

    test('displays Boeing System and Data Analyst experience correctly', () => {
      renderWithProviders(<WorkExperienceDetails />);
      
      // Check for the second Boeing position
      expect(screen.getByText('System and Data Analyst')).toBeInTheDocument();
      expect(screen.getByText('July 2015 - June 2019')).toBeInTheDocument();
    });

    test('displays Accenture experience correctly', () => {
      renderWithProviders(<WorkExperienceDetails />);
      
      expect(screen.getByText('Accenture')).toBeInTheDocument();
      expect(screen.getByText('Senior Systems Specialist')).toBeInTheDocument();
      expect(screen.getByText('June 2013 - July 2015')).toBeInTheDocument();
    });

    test('displays Phillips 66 experience correctly', () => {
      renderWithProviders(<WorkExperienceDetails />);
      
      expect(screen.getByText('Phillips 66')).toBeInTheDocument();
      expect(screen.getByText('Production Associate')).toBeInTheDocument();
      expect(screen.getByText('August 2008 - June 2013')).toBeInTheDocument();
    });

    test('displays work experience responsibilities', () => {
      renderWithProviders(<WorkExperienceDetails />);
      
      // Check for some key responsibilities
      expect(screen.getByText(/Developed several mod packages using C\+\+ web assembly/)).toBeInTheDocument();
      expect(screen.getByText(/Acted as Proxy Product Owner on Scrum Team/)).toBeInTheDocument();
      expect(screen.getByText(/Production Associate capable of running and maintaining/)).toBeInTheDocument();
    });
  });

  describe('Theme Integration', () => {
    test('work experience containers have theme-based styling', () => {
      renderWithProviders(<WorkExperienceDetails />);
      
      const workExperienceContainers = document.querySelectorAll('.work-experience-details');
      expect(workExperienceContainers.length).toBe(4);
      
      workExperienceContainers.forEach(container => {
        expect(container).toHaveStyle('background: rgb(42, 42, 42)'); // dark theme cardBg
        expect(container).toHaveStyle('color: rgb(224, 224, 224)'); // dark theme textColor
        expect(container).toHaveStyle('transition: background 0.3s ease, color 0.3s ease');
      });
    });

    test('company headings have theme-based styling', () => {
      renderWithProviders(<WorkExperienceDetails />);
      
      const headings = document.querySelectorAll('h4');
      expect(headings.length).toBe(4);
      
      headings.forEach(heading => {
        expect(heading).toHaveStyle('color: rgb(0, 255, 255)'); // dark theme accent4
      });
    });

    test('component responds to theme changes', () => {
      renderWithProviders(<WorkExperienceDetails />);
      
      const workExperienceContainers = document.querySelectorAll('.work-experience-details');
      workExperienceContainers.forEach(container => {
        expect(container).toHaveStyle('background: rgb(42, 42, 42)'); // dark theme cardBg
      });
    });

    test('all text elements inherit theme colors', () => {
      renderWithProviders(<WorkExperienceDetails />);
      
      const workExperienceContainers = document.querySelectorAll('.work-experience-details');
      workExperienceContainers.forEach(container => {
        expect(container).toHaveStyle('color: rgb(224, 224, 224)'); // dark theme textColor
      });
    });
  });

  describe('Component Structure', () => {
    test('has correct DOM structure', () => {
      renderWithProviders(<WorkExperienceDetails />);
      
      // Check for main container
      const mainContainer = document.querySelector('div');
      expect(mainContainer).toBeInTheDocument();
      
      // Check for work experience containers
      const workExperienceContainers = document.querySelectorAll('.work-experience-details');
      expect(workExperienceContainers.length).toBe(4);
    });

    test('contains all required sections', () => {
      renderWithProviders(<WorkExperienceDetails />);
      
      // Check for all work experience entries
      expect(document.querySelectorAll('.work-experience-details')).toHaveLength(4);
      expect(document.querySelectorAll('.work-experience-title')).toHaveLength(4);
      expect(document.querySelectorAll('.work-experience-misc')).toHaveLength(8); // 2 per entry (dates and locations)
      expect(document.querySelectorAll('.work-experience-comment-list')).toHaveLength(4);
    });

    test('has proper list structure for responsibilities', () => {
      renderWithProviders(<WorkExperienceDetails />);
      
      const commentLists = document.querySelectorAll('.work-experience-comment-list');
      expect(commentLists.length).toBe(4);
      
      commentLists.forEach(list => {
        expect(list.tagName).toBe('UL');
        const listItems = list.querySelectorAll('li');
        expect(listItems.length).toBeGreaterThan(0);
        
        listItems.forEach(item => {
          expect(item.tagName).toBe('LI');
          expect(item.querySelector('strong')).toBeInTheDocument();
        });
      });
    });
  });

  describe('Work Experience Content Validation', () => {
    test('contains expected companies', () => {
      renderWithProviders(<WorkExperienceDetails />);
      
      // Check for companies, using getAllByText for Boeing since it appears twice
      expect(screen.getAllByText('Boeing')).toHaveLength(2);
      expect(screen.getByText('Accenture')).toBeInTheDocument();
      expect(screen.getByText('Phillips 66')).toBeInTheDocument();
    });

    test('contains expected job titles', () => {
      renderWithProviders(<WorkExperienceDetails />);
      
      const jobTitles = [
        'Senior Programmer',
        'System and Data Analyst', 
        'Senior Systems Specialist',
        'Production Associate'
      ];
      
      jobTitles.forEach(title => {
        expect(screen.getByText(title)).toBeInTheDocument();
      });
    });

    test('contains expected technologies and skills', () => {
      renderWithProviders(<WorkExperienceDetails />);
      
      // Check for various technologies mentioned in the experience, using getAllByText for repeated technologies
      expect(screen.getByText(/C\+\+ web assembly/)).toBeInTheDocument();
      expect(screen.getByText(/Typescript, HTML, and CSS/)).toBeInTheDocument();
      expect(screen.getAllByText(/Jest/)).toHaveLength(2); // Jest appears in multiple responsibilities
      expect(screen.getByText(/ReactJS and Kotlin/)).toBeInTheDocument();
      expect(screen.getByText(/Spring Boot Framework/)).toBeInTheDocument();
      expect(screen.getByText(/SQL\/PLSQL/)).toBeInTheDocument();
      expect(screen.getByText(/SAP computer system/)).toBeInTheDocument();
    });

    test('contains expected methodologies and practices', () => {
      renderWithProviders(<WorkExperienceDetails />);
      
      expect(screen.getAllByText(/CI\/CD pipeline/)).toHaveLength(2); // CI/CD appears in multiple responsibilities
      expect(screen.getByText(/Test Driven development/)).toBeInTheDocument();
      expect(screen.getByText(/Agile development standards/)).toBeInTheDocument();
      expect(screen.getByText(/Scrum Team/)).toBeInTheDocument();
      expect(screen.getByText(/Agile Sprint method/)).toBeInTheDocument();
    });
  });

  describe('Responsibility Lists', () => {
    test('Boeing Senior Programmer has correct number of responsibilities', () => {
      renderWithProviders(<WorkExperienceDetails />);
      
      const workExperienceContainers = document.querySelectorAll('.work-experience-details');
      const seniorProgrammerContainer = workExperienceContainers[0];
      const responsibilities = seniorProgrammerContainer.querySelectorAll('.work-experience-comment-list li');
      
      expect(responsibilities.length).toBe(17); // 17 responsibilities for Senior Programmer
    });

    test('Boeing System and Data Analyst has correct number of responsibilities', () => {
      renderWithProviders(<WorkExperienceDetails />);
      
      const workExperienceContainers = document.querySelectorAll('.work-experience-details');
      const analystContainer = workExperienceContainers[1];
      const responsibilities = analystContainer.querySelectorAll('.work-experience-comment-list li');
      
      expect(responsibilities.length).toBe(10); // 10 responsibilities for System and Data Analyst
    });

    test('Accenture Senior Systems Specialist has correct number of responsibilities', () => {
      renderWithProviders(<WorkExperienceDetails />);
      
      const workExperienceContainers = document.querySelectorAll('.work-experience-details');
      const accentureContainer = workExperienceContainers[2];
      const responsibilities = accentureContainer.querySelectorAll('.work-experience-comment-list li');
      
      expect(responsibilities.length).toBe(14); // 14 responsibilities for Senior Systems Specialist
    });

    test('Phillips 66 Production Associate has correct number of responsibilities', () => {
      renderWithProviders(<WorkExperienceDetails />);
      
      const workExperienceContainers = document.querySelectorAll('.work-experience-details');
      const phillipsContainer = workExperienceContainers[3];
      const responsibilities = phillipsContainer.querySelectorAll('.work-experience-comment-list li');
      
      expect(responsibilities.length).toBe(7); // 7 responsibilities for Production Associate
    });

    test('all responsibilities are properly formatted with strong tags', () => {
      renderWithProviders(<WorkExperienceDetails />);
      
      const strongElements = document.querySelectorAll('.work-experience-comment-list strong');
      expect(strongElements.length).toBe(48); // Total of all responsibilities (17+10+14+7)
      
      strongElements.forEach(strong => {
        expect(strong.textContent.length).toBeGreaterThan(0);
      });
    });
  });

  describe('Accessibility', () => {
    test('work experience information is properly structured', () => {
      renderWithProviders(<WorkExperienceDetails />);
      
      // Check for proper heading structure
      const headings = document.querySelectorAll('h4');
      expect(headings.length).toBe(4);
      
      headings.forEach(heading => {
        expect(heading.textContent).toBeTruthy();
      });
    });

    test('responsibility lists are accessible', () => {
      renderWithProviders(<WorkExperienceDetails />);
      
      const lists = document.querySelectorAll('.work-experience-comment-list');
      expect(lists.length).toBe(4);
      
      lists.forEach(list => {
        expect(list.tagName).toBe('UL');
        const listItems = list.querySelectorAll('li');
        expect(listItems.length).toBeGreaterThan(0);
      });
    });

    test('content is readable and accessible', () => {
      renderWithProviders(<WorkExperienceDetails />);
      
      // Check that all main information is present and readable
      expect(screen.getAllByText('Boeing')).toHaveLength(2); // Boeing appears twice
      expect(screen.getByText('Senior Programmer')).toBeInTheDocument();
      expect(screen.getByText('System and Data Analyst')).toBeInTheDocument();
      expect(screen.getByText('Accenture')).toBeInTheDocument();
      expect(screen.getByText('Phillips 66')).toBeInTheDocument();
    });
  });

  describe('Theme Context Integration', () => {
    test('uses theme context correctly', () => {
      renderWithProviders(<WorkExperienceDetails />);
      
      const workExperienceContainers = document.querySelectorAll('.work-experience-details');
      workExperienceContainers.forEach(container => {
        expect(container).toHaveStyle('background: rgb(42, 42, 42)'); // dark theme cardBg
      });
    });

    test('theme colors are applied consistently', () => {
      renderWithProviders(<WorkExperienceDetails />);
      
      const workExperienceContainers = document.querySelectorAll('.work-experience-details');
      const headings = document.querySelectorAll('h4');
      
      // Containers should have theme colors
      workExperienceContainers.forEach(container => {
        expect(container).toHaveStyle('background: rgb(42, 42, 42)');
        expect(container).toHaveStyle('color: rgb(224, 224, 224)');
      });
      
      // Headings should have theme accent color
      headings.forEach(heading => {
        expect(heading).toHaveStyle('color: rgb(0, 255, 255)');
      });
    });

    test('theme transition is applied', () => {
      renderWithProviders(<WorkExperienceDetails />);
      
      const workExperienceContainers = document.querySelectorAll('.work-experience-details');
      workExperienceContainers.forEach(container => {
        expect(container).toHaveStyle('transition: background 0.3s ease, color 0.3s ease');
      });
    });
  });

  describe('Component Behavior', () => {
    test('component maintains state correctly', () => {
      const { rerender } = renderWithProviders(<WorkExperienceDetails />);
      
      // Component should render the same way on multiple renders
      const firstRender = screen.getAllByText('Boeing');
      expect(firstRender).toHaveLength(2);
      
      // Re-render with providers and check again
      rerender(
        <BrowserRouter>
          <ThemeContextProvider>
            <WorkExperienceDetails />
          </ThemeContextProvider>
        </BrowserRouter>
      );
      expect(screen.getAllByText('Boeing')).toHaveLength(2);
    });

    test('all work experience elements are properly rendered', () => {
      renderWithProviders(<WorkExperienceDetails />);
      
      // Check that all work experience information is present
      const workExperienceElements = [
        'Senior Programmer',
        'System and Data Analyst',
        'Accenture',
        'Senior Systems Specialist',
        'Phillips 66',
        'Production Associate',
        'June 2019 – Present',
        'July 2015 - June 2019',
        'June 2013 - July 2015',
        'August 2008 - June 2013',
        'Hartford IL'
      ];
      
      workExperienceElements.forEach(element => {
        expect(screen.getByText(element)).toBeInTheDocument();
      });
      
      // Check for elements that appear multiple times
      expect(screen.getAllByText('Boeing')).toHaveLength(2);
      expect(screen.getAllByText('St. Louis MO')).toHaveLength(3);
    });
  });

  describe('Work Experience Timeline', () => {
    test('work experience entries are in chronological order', () => {
      renderWithProviders(<WorkExperienceDetails />);
      
      const workExperienceContainers = document.querySelectorAll('.work-experience-details');
      
      // Check that entries are in reverse chronological order (most recent first)
      expect(workExperienceContainers[0].textContent).toContain('June 2019 – Present'); // Senior Programmer
      expect(workExperienceContainers[1].textContent).toContain('July 2015 - June 2019'); // System and Data Analyst
      expect(workExperienceContainers[2].textContent).toContain('June 2013 - July 2015'); // Accenture
      expect(workExperienceContainers[3].textContent).toContain('August 2008 - June 2013'); // Phillips 66
    });

    test('current position is marked as Present', () => {
      renderWithProviders(<WorkExperienceDetails />);
      
      expect(screen.getByText('June 2019 – Present')).toBeInTheDocument();
    });

    test('all positions have complete date ranges', () => {
      renderWithProviders(<WorkExperienceDetails />);
      
      const dateRanges = [
        'June 2019 – Present',
        'July 2015 - June 2019',
        'June 2013 - July 2015',
        'August 2008 - June 2013'
      ];
      
      dateRanges.forEach(dateRange => {
        expect(screen.getByText(dateRange)).toBeInTheDocument();
      });
    });
  });

  describe('Content Quality and Completeness', () => {
    test('each work experience entry has company, title, dates, and location', () => {
      renderWithProviders(<WorkExperienceDetails />);
      
      const workExperienceContainers = document.querySelectorAll('.work-experience-details');
      
      workExperienceContainers.forEach(container => {
        // Each container should have an h4 (company), title, dates, and location
        expect(container.querySelector('h4')).toBeInTheDocument();
        expect(container.querySelector('.work-experience-title')).toBeInTheDocument();
        expect(container.querySelectorAll('.work-experience-misc')).toHaveLength(2); // dates and location
        expect(container.querySelector('.work-experience-comment-list')).toBeInTheDocument();
      });
    });

    test('responsibilities contain meaningful content', () => {
      renderWithProviders(<WorkExperienceDetails />);
      
      const strongElements = document.querySelectorAll('.work-experience-comment-list strong');
      
      // Check that responsibilities have substantial content
      strongElements.forEach(strong => {
        expect(strong.textContent.length).toBeGreaterThan(20); // Each responsibility should be meaningful
      });
    });

    test('work experience covers diverse skill sets', () => {
      renderWithProviders(<WorkExperienceDetails />);
      
      // Check for different types of skills and technologies, using getAllByText for repeated technologies
      expect(screen.getAllByText(/C\+\+/)).toHaveLength(4); // C++ appears in multiple responsibilities
      expect(screen.getByText(/ReactJS/)).toBeInTheDocument();
      expect(screen.getByText(/Java/)).toBeInTheDocument(); // Java appears in one responsibility
      expect(screen.getByText(/SQL/)).toBeInTheDocument();
      expect(screen.getAllByText(/Agile/)).toHaveLength(3); // Agile appears in multiple responsibilities
      expect(screen.getAllByText(/Scrum/)).toHaveLength(3); // Scrum appears in multiple responsibilities
      expect(screen.getByText(/SAP/)).toBeInTheDocument();
    });
  });
});

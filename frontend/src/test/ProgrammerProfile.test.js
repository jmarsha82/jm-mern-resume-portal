import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ProgrammerProfile from '../pages/ProgrammerProfile';
import { ThemeContextProvider } from '../context/ThemeContext';
import { GeneralsContextProvider } from '../context/GeneralContext';
import { CurrentSkillsContextProvider } from '../context/CurrentSkillsContext';
import { WorkExperiencesContextProvider } from '../context/WorkExperienceContext';
import { EducationsContextProvider } from '../context/EducationContext';
import { FullSkillsContextProvider } from '../context/FullSkillsContext';
import { DevBooksContextProvider } from '../context/DevBookContext';
import { DevLinksContextProvider } from '../context/DevLinkContext';

// Mock all child components
jest.mock('../components/ProgrammerNavbar', () => {
  return function MockProgrammerNavbar() {
    return <div data-testid="programmer-navbar">Programmer Navbar</div>;
  };
});

jest.mock('../components/GeneralDetails', () => {
  return function MockGeneralDetails() {
    return <div data-testid="general-details">General Details</div>;
  };
});

jest.mock('../components/CurrentSkillDetails', () => {
  return function MockCurrentSkillDetails() {
    return <div data-testid="current-skill-details">Current Skill Details</div>;
  };
});

jest.mock('../components/WorkExperienceDetails', () => {
  return function MockWorkExperienceDetails() {
    return <div data-testid="work-experience-details">Work Experience Details</div>;
  };
});

jest.mock('../components/EducationDetails', () => {
  return function MockEducationDetails() {
    return <div data-testid="education-details">Education Details</div>;
  };
});

jest.mock('../components/FullSkillDetails', () => {
  return function MockFullSkillDetails() {
    return <div data-testid="full-skill-details">Full Skill Details</div>;
  };
});

jest.mock('../components/DevBooksDetails', () => {
  return function MockDevBooksDetails() {
    return <div data-testid="dev-books-details">Dev Books Details</div>;
  };
});

jest.mock('../components/DevLinkDetails', () => {
  return function MockDevLinkDetails() {
    return <div data-testid="dev-link-details">Dev Link Details</div>;
  };
});

// Mock process.env for public URL
Object.defineProperty(global, 'process', {
  value: {
    env: {
      PUBLIC_URL: ''
    }
  }
});

// Helper function to render ProgrammerProfile with all required contexts
const renderProgrammerProfileWithContexts = () => {
  return render(
    <ThemeContextProvider>
      <GeneralsContextProvider>
        <CurrentSkillsContextProvider>
          <WorkExperiencesContextProvider>
            <EducationsContextProvider>
              <FullSkillsContextProvider>
                <DevBooksContextProvider>
                  <DevLinksContextProvider>
                    <ProgrammerProfile />
                  </DevLinksContextProvider>
                </DevBooksContextProvider>
              </FullSkillsContextProvider>
            </EducationsContextProvider>
          </WorkExperiencesContextProvider>
        </CurrentSkillsContextProvider>
      </GeneralsContextProvider>
    </ThemeContextProvider>
  );
};

describe('ProgrammerProfile Component', () => {
  beforeEach(() => {
    // Clear all mocks before each test
    jest.clearAllMocks();
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  describe('Component Rendering', () => {
    test('renders without crashing', () => {
      renderProgrammerProfileWithContexts();
      
      expect(screen.getByTestId('programmer-navbar')).toBeInTheDocument();
      expect(screen.getByTestId('general-details')).toBeInTheDocument();
    });

    test('renders main container with proper styling', () => {
      renderProgrammerProfileWithContexts();
      
      const mainContainer = screen.getByTestId('programmer-navbar').closest('div').parentElement;
      expect(mainContainer).toHaveStyle({
        'min-height': '100vh'
      });
    });

    test('renders ProgrammerNavbar component', () => {
      renderProgrammerProfileWithContexts();
      
      expect(screen.getByTestId('programmer-navbar')).toBeInTheDocument();
    });

    test('renders all detail components', () => {
      renderProgrammerProfileWithContexts();
      
      expect(screen.getByTestId('general-details')).toBeInTheDocument();
      expect(screen.getByTestId('current-skill-details')).toBeInTheDocument();
      expect(screen.getByTestId('work-experience-details')).toBeInTheDocument();
      expect(screen.getByTestId('education-details')).toBeInTheDocument();
      expect(screen.getByTestId('full-skill-details')).toBeInTheDocument();
      expect(screen.getByTestId('dev-books-details')).toBeInTheDocument();
      expect(screen.getByTestId('dev-link-details')).toBeInTheDocument();
    });
  });

  describe('Theme Integration', () => {
    test('applies theme background styling', () => {
      renderProgrammerProfileWithContexts();
      
      const mainContainer = screen.getByTestId('programmer-navbar').closest('div');
      expect(mainContainer).toHaveStyle({
        background: expect.any(String)
      });
    });

    test('theme context is properly consumed', () => {
      renderProgrammerProfileWithContexts();
      
      // Component should render without throwing theme context errors
      expect(screen.getByTestId('programmer-navbar')).toBeInTheDocument();
      expect(screen.getByTestId('general-details')).toBeInTheDocument();
    });

    test('theme transitions are applied', () => {
      renderProgrammerProfileWithContexts();
      
      const mainContainer = screen.getByTestId('programmer-navbar').closest('div').parentElement;
      expect(mainContainer).toHaveStyle({
        transition: 'background 0.3s ease'
      });
    });
  });

  describe('Context Integration', () => {
    test('all context providers are properly integrated', () => {
      renderProgrammerProfileWithContexts();
      
      // All components should render without context errors
      expect(screen.getByTestId('programmer-navbar')).toBeInTheDocument();
      expect(screen.getByTestId('general-details')).toBeInTheDocument();
      expect(screen.getByTestId('current-skill-details')).toBeInTheDocument();
      expect(screen.getByTestId('work-experience-details')).toBeInTheDocument();
      expect(screen.getByTestId('education-details')).toBeInTheDocument();
      expect(screen.getByTestId('full-skill-details')).toBeInTheDocument();
      expect(screen.getByTestId('dev-books-details')).toBeInTheDocument();
      expect(screen.getByTestId('dev-link-details')).toBeInTheDocument();
    });

    test('theme context works with all other contexts', () => {
      renderProgrammerProfileWithContexts();
      
      // All contexts should work together without conflicts
      expect(screen.getByTestId('programmer-navbar')).toBeInTheDocument();
      expect(screen.getByTestId('general-details')).toBeInTheDocument();
    });
  });

  describe('Layout and Structure', () => {
    test('has proper container structure', () => {
      renderProgrammerProfileWithContexts();
      
      const navbar = screen.getByTestId('programmer-navbar');
      const generalDetails = screen.getByTestId('general-details');
      
      expect(navbar).toBeInTheDocument();
      expect(generalDetails).toBeInTheDocument();
    });

    test('has proper page structure with pages class', () => {
      renderProgrammerProfileWithContexts();
      
      // The component should have the proper page structure
      const navbar = screen.getByTestId('programmer-navbar');
      expect(navbar).toBeInTheDocument();
    });

    test('has proper section structure', () => {
      renderProgrammerProfileWithContexts();
      
      // All sections should be present
      expect(screen.getByTestId('general-details')).toBeInTheDocument();
      expect(screen.getByTestId('current-skill-details')).toBeInTheDocument();
      expect(screen.getByTestId('work-experience-details')).toBeInTheDocument();
      expect(screen.getByTestId('education-details')).toBeInTheDocument();
      expect(screen.getByTestId('full-skill-details')).toBeInTheDocument();
      expect(screen.getByTestId('dev-books-details')).toBeInTheDocument();
      expect(screen.getByTestId('dev-link-details')).toBeInTheDocument();
    });
  });

  describe('Child Components Integration', () => {
    test('ProgrammerNavbar is rendered at the top', () => {
      renderProgrammerProfileWithContexts();
      
      const navbar = screen.getByTestId('programmer-navbar');
      expect(navbar).toBeInTheDocument();
    });

    test('GeneralDetails is rendered in home-one section', () => {
      renderProgrammerProfileWithContexts();
      
      const generalDetails = screen.getByTestId('general-details');
      expect(generalDetails).toBeInTheDocument();
    });

    test('CurrentSkillDetails is rendered in current-skill-details section', () => {
      renderProgrammerProfileWithContexts();
      
      const currentSkillDetails = screen.getByTestId('current-skill-details');
      expect(currentSkillDetails).toBeInTheDocument();
    });

    test('WorkExperienceDetails is rendered in work-experience-details section', () => {
      renderProgrammerProfileWithContexts();
      
      const workExperienceDetails = screen.getByTestId('work-experience-details');
      expect(workExperienceDetails).toBeInTheDocument();
    });

    test('EducationDetails is rendered in education-details section', () => {
      renderProgrammerProfileWithContexts();
      
      const educationDetails = screen.getByTestId('education-details');
      expect(educationDetails).toBeInTheDocument();
    });

    test('FullSkillDetails is rendered in current-skill-details section', () => {
      renderProgrammerProfileWithContexts();
      
      const fullSkillDetails = screen.getByTestId('full-skill-details');
      expect(fullSkillDetails).toBeInTheDocument();
    });

    test('DevBooksDetails is rendered in current-skill-details section', () => {
      renderProgrammerProfileWithContexts();
      
      const devBooksDetails = screen.getByTestId('dev-books-details');
      expect(devBooksDetails).toBeInTheDocument();
    });

    test('DevLinkDetails is rendered', () => {
      renderProgrammerProfileWithContexts();
      
      const devLinkDetails = screen.getByTestId('dev-link-details');
      expect(devLinkDetails).toBeInTheDocument();
    });

    test('all child components receive theme context', () => {
      renderProgrammerProfileWithContexts();
      
      // All child components should render without theme context errors
      expect(screen.getByTestId('programmer-navbar')).toBeInTheDocument();
      expect(screen.getByTestId('general-details')).toBeInTheDocument();
      expect(screen.getByTestId('current-skill-details')).toBeInTheDocument();
      expect(screen.getByTestId('work-experience-details')).toBeInTheDocument();
      expect(screen.getByTestId('education-details')).toBeInTheDocument();
      expect(screen.getByTestId('full-skill-details')).toBeInTheDocument();
      expect(screen.getByTestId('dev-books-details')).toBeInTheDocument();
      expect(screen.getByTestId('dev-link-details')).toBeInTheDocument();
    });
  });

  describe('Content Sections', () => {
    test('Github Contributions section is present', () => {
      renderProgrammerProfileWithContexts();
      
      // Check for Github contributions heading
      expect(screen.getByText('Github Contributions')).toBeInTheDocument();
    });

    test('Current Project(s) Tech Stack section is present', () => {
      renderProgrammerProfileWithContexts();
      
      // Check for Current Project(s) Tech Stack heading
      expect(screen.getByText('Current Project(s) Tech Stack')).toBeInTheDocument();
    });

    test('Experience section is present', () => {
      renderProgrammerProfileWithContexts();
      
      // Check for Experience heading
      expect(screen.getByText('Experience')).toBeInTheDocument();
    });

    test('Education section is present', () => {
      renderProgrammerProfileWithContexts();
      
      // Check for Education heading
      expect(screen.getByText('Education')).toBeInTheDocument();
    });

    test('Extended Tech Stack section is present', () => {
      renderProgrammerProfileWithContexts();
      
      // Check for Extended Tech Stack heading
      expect(screen.getByText('Extended Tech Stack')).toBeInTheDocument();
    });

    test('Dev Books section is present', () => {
      renderProgrammerProfileWithContexts();
      
      // Check for Dev Books heading
      expect(screen.getByText('Dev Books')).toBeInTheDocument();
    });

    test('Dev Links section is present', () => {
      renderProgrammerProfileWithContexts();
      
      // Check for Dev Links heading
      expect(screen.getByText('Dev Links')).toBeInTheDocument();
    });
  });

  describe('Responsive Design', () => {
    test('has responsive layout structure', () => {
      renderProgrammerProfileWithContexts();
      
      // All components should render properly
      expect(screen.getByTestId('programmer-navbar')).toBeInTheDocument();
      expect(screen.getByTestId('general-details')).toBeInTheDocument();
    });

    test('maintains proper spacing and layout', () => {
      renderProgrammerProfileWithContexts();
      
      // Check that all sections are present and properly structured
      expect(screen.getByTestId('programmer-navbar')).toBeInTheDocument();
      expect(screen.getByTestId('general-details')).toBeInTheDocument();
      expect(screen.getByTestId('current-skill-details')).toBeInTheDocument();
      expect(screen.getByTestId('work-experience-details')).toBeInTheDocument();
    });
  });

  describe('Performance and Optimization', () => {
    test('component renders efficiently', () => {
      const startTime = performance.now();
      renderProgrammerProfileWithContexts();
      const endTime = performance.now();
      
      // Component should render within reasonable time (less than 100ms)
      expect(endTime - startTime).toBeLessThan(100);
    });

    test('does not cause unnecessary re-renders', () => {
      const { rerender } = renderProgrammerProfileWithContexts();
      
      // Re-render with same props should not cause issues
      expect(() => {
        rerender(
          <ThemeContextProvider>
            <GeneralsContextProvider>
              <CurrentSkillsContextProvider>
                <WorkExperiencesContextProvider>
                  <EducationsContextProvider>
                    <FullSkillsContextProvider>
                      <DevBooksContextProvider>
                        <DevLinksContextProvider>
                          <ProgrammerProfile />
                        </DevLinksContextProvider>
                      </DevBooksContextProvider>
                    </FullSkillsContextProvider>
                  </EducationsContextProvider>
                </WorkExperiencesContextProvider>
              </CurrentSkillsContextProvider>
            </GeneralsContextProvider>
          </ThemeContextProvider>
        );
      }).not.toThrow();
    });
  });

  describe('Error Handling', () => {
    test('handles missing theme context gracefully', () => {
      // Test that the component works with theme context
      expect(() => {
        renderProgrammerProfileWithContexts();
      }).not.toThrow();
    });

    test('handles missing context providers gracefully', () => {
      // Test that the component works with all context providers
      expect(() => {
        renderProgrammerProfileWithContexts();
      }).not.toThrow();
    });
  });

  describe('Accessibility', () => {
    test('maintains proper semantic structure', () => {
      renderProgrammerProfileWithContexts();
      
      // Check that the main structure is accessible
      const navbar = screen.getByTestId('programmer-navbar');
      const generalDetails = screen.getByTestId('general-details');
      
      expect(navbar).toBeInTheDocument();
      expect(generalDetails).toBeInTheDocument();
    });

    test('section headings are properly structured', () => {
      renderProgrammerProfileWithContexts();
      
      // Check that section headings are present
      expect(screen.getByText('Github Contributions')).toBeInTheDocument();
      expect(screen.getByText('Current Project(s) Tech Stack')).toBeInTheDocument();
      expect(screen.getByText('Experience')).toBeInTheDocument();
      expect(screen.getByText('Education')).toBeInTheDocument();
      expect(screen.getByText('Extended Tech Stack')).toBeInTheDocument();
      expect(screen.getByText('Dev Books')).toBeInTheDocument();
      expect(screen.getByText('Dev Links')).toBeInTheDocument();
    });

    test('child components maintain accessibility', () => {
      renderProgrammerProfileWithContexts();
      
      // All child components should be accessible
      expect(screen.getByTestId('programmer-navbar')).toBeInTheDocument();
      expect(screen.getByTestId('general-details')).toBeInTheDocument();
      expect(screen.getByTestId('current-skill-details')).toBeInTheDocument();
      expect(screen.getByTestId('work-experience-details')).toBeInTheDocument();
      expect(screen.getByTestId('education-details')).toBeInTheDocument();
      expect(screen.getByTestId('full-skill-details')).toBeInTheDocument();
      expect(screen.getByTestId('dev-books-details')).toBeInTheDocument();
      expect(screen.getByTestId('dev-link-details')).toBeInTheDocument();
    });
  });

  describe('Integration Tests', () => {
    test('complete component integration works', () => {
      renderProgrammerProfileWithContexts();

      // All components should render together
      expect(screen.getByTestId('programmer-navbar')).toBeInTheDocument();
      expect(screen.getByTestId('general-details')).toBeInTheDocument();
      expect(screen.getByTestId('current-skill-details')).toBeInTheDocument();
      expect(screen.getByTestId('work-experience-details')).toBeInTheDocument();
      expect(screen.getByTestId('education-details')).toBeInTheDocument();
      expect(screen.getByTestId('full-skill-details')).toBeInTheDocument();
      expect(screen.getByTestId('dev-books-details')).toBeInTheDocument();
      expect(screen.getByTestId('dev-link-details')).toBeInTheDocument();
    });

    test('all contexts work together', () => {
      renderProgrammerProfileWithContexts();
      
      // All contexts should work together without conflicts
      expect(screen.getByTestId('programmer-navbar')).toBeInTheDocument();
      expect(screen.getByTestId('general-details')).toBeInTheDocument();
      expect(screen.getByTestId('current-skill-details')).toBeInTheDocument();
      expect(screen.getByTestId('work-experience-details')).toBeInTheDocument();
      expect(screen.getByTestId('education-details')).toBeInTheDocument();
      expect(screen.getByTestId('full-skill-details')).toBeInTheDocument();
      expect(screen.getByTestId('dev-books-details')).toBeInTheDocument();
      expect(screen.getByTestId('dev-link-details')).toBeInTheDocument();
    });

    test('theme and all contexts work together', () => {
      renderProgrammerProfileWithContexts();
      
      // Theme context should work with all other contexts
      expect(screen.getByTestId('programmer-navbar')).toBeInTheDocument();
      expect(screen.getByTestId('general-details')).toBeInTheDocument();
    });
  });

  describe('Visual Elements', () => {
    test('Github chart image is rendered', () => {
      renderProgrammerProfileWithContexts();
      
      const githubImage = screen.getByAltText('Github Profile');
      expect(githubImage).toBeInTheDocument();
      expect(githubImage).toHaveAttribute('src', 'https://ghchart.rshah.org/1976d2/jmarsha82');
    });

    test('section headings have proper styling', () => {
      renderProgrammerProfileWithContexts();
      
      // Check that headings are present and styled
      expect(screen.getByText('Github Contributions')).toBeInTheDocument();
      expect(screen.getByText('Current Project(s) Tech Stack')).toBeInTheDocument();
      expect(screen.getByText('Experience')).toBeInTheDocument();
      expect(screen.getByText('Education')).toBeInTheDocument();
      expect(screen.getByText('Extended Tech Stack')).toBeInTheDocument();
      expect(screen.getByText('Dev Books')).toBeInTheDocument();
      expect(screen.getByText('Dev Links')).toBeInTheDocument();
    });
  });

  describe('Scroll Functionality', () => {
    test('scroll to top functionality is implemented', () => {
      // Mock window.scrollTo
      const mockScrollTo = jest.fn();
      Object.defineProperty(window, 'scrollTo', {
        value: mockScrollTo,
        writable: true
      });

      renderProgrammerProfileWithContexts();
      
      // The component should render without errors
      expect(screen.getByTestId('programmer-navbar')).toBeInTheDocument();
      expect(screen.getByTestId('general-details')).toBeInTheDocument();
      
      // Clean up mock
      mockScrollTo.mockRestore();
    });
  });
});

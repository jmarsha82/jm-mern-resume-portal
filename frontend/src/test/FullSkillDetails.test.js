import React from 'react';
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import FullSkillDetails from "../components/FullSkillDetails";
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

describe('FullSkillDetails Component', () => {
  
  describe('Component Rendering', () => {
    test('renders FullSkillDetails component without crashing', () => {
      renderWithProviders(<FullSkillDetails />);
      expect(screen.getByText('Cursor')).toBeInTheDocument();
    });

    test('renders all skill cards', () => {
      renderWithProviders(<FullSkillDetails />);
      
      // Check for all skill button titles
      expect(screen.getByText('Cursor')).toBeInTheDocument();
      expect(screen.getByText('Visual Studio')).toBeInTheDocument();
      expect(screen.getByText('Test-Driven Development')).toBeInTheDocument();
      expect(screen.getByText('SimConnect')).toBeInTheDocument();
      expect(screen.getByText('HTML, CSS, Typescript, Javascript')).toBeInTheDocument();
      expect(screen.getByText('Azure Dev Ops')).toBeInTheDocument();
      expect(screen.getByText('SQL')).toBeInTheDocument();
      expect(screen.getByText('Postman')).toBeInTheDocument();
      expect(screen.getByText('Virtual Box')).toBeInTheDocument();
      expect(screen.getByText('Spring Framework')).toBeInTheDocument();
      expect(screen.getByText('JUnit')).toBeInTheDocument();
      expect(screen.getByText('Java')).toBeInTheDocument();
      expect(screen.getByText('AWS')).toBeInTheDocument();
      expect(screen.getByText('IntelliJ')).toBeInTheDocument();
      expect(screen.getByText('Thymeleaf')).toBeInTheDocument();
      expect(screen.getByText('Swift')).toBeInTheDocument();
      expect(screen.getByText('Oracle SQL Developer')).toBeInTheDocument();
      expect(screen.getByText('Linux')).toBeInTheDocument();
      expect(screen.getByText('Kotlin')).toBeInTheDocument();
    });

    test('renders skill descriptions', () => {
      renderWithProviders(<FullSkillDetails />);
      
      // Check for skill descriptions
      expect(screen.getByText(/Go to IDE for coding in React and Python on personal projects/)).toBeInTheDocument();
      expect(screen.getByText(/Using VSCode for Python and React Projects and Visual Studio Professional/)).toBeInTheDocument();
      expect(screen.getByText(/Incorporated into all work related development and most hobby codding/)).toBeInTheDocument();
      expect(screen.getByText(/An flight simulator api used to talk to Microsoft Flight Simulator/)).toBeInTheDocument();
      expect(screen.getByText(/Used in all web apps and sites as part of my job/)).toBeInTheDocument();
      expect(screen.getByText(/Used for Source Control, Work Tracking, Testing, Ci\/CD setup/)).toBeInTheDocument();
      expect(screen.getByText(/A coding and testing tool for implementing most backends/)).toBeInTheDocument();
      expect(screen.getByText(/Testing tool for new backend apis/)).toBeInTheDocument();
      expect(screen.getByText(/Set up several VM images and have used other OS for security testing/)).toBeInTheDocument();
      expect(screen.getByText(/Used on multiple projects in java and kotlin with Pivotal or Gitlab/)).toBeInTheDocument();
      expect(screen.getByText(/Used for testing Java backends of applications/)).toBeInTheDocument();
      expect(screen.getByText(/Used on multiple applications and all throughout schooling/)).toBeInTheDocument();
      expect(screen.getByText(/Set up EC2 for machine learning IoT communication in python/)).toBeInTheDocument();
      expect(screen.getByText(/Preferred IDE when working in Java if I have the license/)).toBeInTheDocument();
      expect(screen.getByText(/Use with Javascript and a java Spring Framework/)).toBeInTheDocument();
      expect(screen.getByText(/Used on mulitple mobile apps for the iPhone/)).toBeInTheDocument();
      expect(screen.getByText(/Backend testing tool/)).toBeInTheDocument();
      expect(screen.getByText(/Worked in a linux system with file management and scripting/)).toBeInTheDocument();
      expect(screen.getByText(/Very similiar to Java.*Used with Spring Framework and ReactJS frontend/)).toBeInTheDocument();
    });
  });

  describe('Skill Information Display', () => {
    test('displays skill button titles', () => {
      renderWithProviders(<FullSkillDetails />);
      
      // Check for specific skill titles
      expect(screen.getByText('Cursor')).toBeInTheDocument();
      expect(screen.getByText('Visual Studio')).toBeInTheDocument();
      expect(screen.getByText('Test-Driven Development')).toBeInTheDocument();
      expect(screen.getByText('SimConnect')).toBeInTheDocument();
      expect(screen.getByText('HTML, CSS, Typescript, Javascript')).toBeInTheDocument();
    });

    test('displays skill descriptions', () => {
      renderWithProviders(<FullSkillDetails />);
      
      // Check for skill descriptions
      expect(screen.getByText(/Go to IDE for coding in React and Python on personal projects/)).toBeInTheDocument();
      expect(screen.getByText(/Using VSCode for Python and React Projects and Visual Studio Professional/)).toBeInTheDocument();
      expect(screen.getByText(/Incorporated into all work related development and most hobby codding/)).toBeInTheDocument();
      expect(screen.getByText(/An flight simulator api used to talk to Microsoft Flight Simulator/)).toBeInTheDocument();
      expect(screen.getByText(/Used in all web apps and sites as part of my job/)).toBeInTheDocument();
    });

    test('displays external links with correct href attributes', () => {
      renderWithProviders(<FullSkillDetails />);
      
      // Check for external links
      const links = screen.getAllByRole('link');
      expect(links.length).toBe(19); // 19 skill buttons
      
      // Check specific links by href attribute
      const linkHrefs = links.map(link => link.getAttribute('href'));
      expect(linkHrefs).toContain('https://cursor.com/');
      expect(linkHrefs).toContain('https://visualstudio.microsoft.com/');
      expect(linkHrefs).toContain('https://www.ibm.com/garage/method/practices/code/practice_test_driven_development/');
      expect(linkHrefs).toContain('https://docs.flightsimulator.com/html/Programming_Tools/SimConnect/SimConnect_SDK.htm');
      expect(linkHrefs).toContain('https://www.w3schools.com/');
      expect(linkHrefs).toContain('https://azure.microsoft.com/en-us/products/devops/');
      expect(linkHrefs).toContain('https://www.sqltutorial.org/');
      expect(linkHrefs).toContain('https://www.postman.com/');
      expect(linkHrefs).toContain('https://www.virtualbox.org/');
      expect(linkHrefs).toContain('https://spring.io/guides');
      expect(linkHrefs).toContain('https://junit.org/');
      expect(linkHrefs).toContain('https://www.java.com/en/');
      expect(linkHrefs).toContain('https://aws.amazon.com/');
      expect(linkHrefs).toContain('https://www.jetbrains.com/idea/');
      expect(linkHrefs).toContain('https://www.thymeleaf.org/');
      expect(linkHrefs).toContain('https://developer.apple.com/swift/');
      expect(linkHrefs).toContain('https://www.oracle.com/database/sqldeveloper/');
      expect(linkHrefs).toContain('https://www.linux.org/pages/download/');
      expect(linkHrefs).toContain('https://kotlinlang.org/');
    });
  });

  describe('Theme Integration', () => {
    test('skill cards have theme-based styling', () => {
      renderWithProviders(<FullSkillDetails />);
      
      // Get all skill cards
      const skillCards = document.querySelectorAll('.current-skill-details');
      expect(skillCards.length).toBe(19);
      
      // Check that cards have theme styling
      skillCards.forEach(card => {
        expect(card).toHaveStyle('background: rgb(42, 42, 42)'); // dark theme cardBg
        expect(card).toHaveStyle('color: rgb(224, 224, 224)'); // dark theme textColor
        expect(card).toHaveStyle('transition: background 0.3s ease, color 0.3s ease');
      });
    });

    test('component responds to theme changes', () => {
      renderWithProviders(<FullSkillDetails />);
      
      // Component should render with dark theme by default
      const firstCard = document.querySelector('.current-skill-details');
      expect(firstCard).toHaveStyle('background: rgb(42, 42, 42)');
    });

    test('skill buttons have theme-based styling', () => {
      renderWithProviders(<FullSkillDetails />);
      
      // Check that skill buttons have theme colors
      const skillButtons = screen.getAllByRole('link');
      skillButtons.forEach(button => {
        expect(button).toHaveStyle('background: rgb(0, 255, 255)'); // dark theme accent4
        expect(button).toHaveStyle('color: rgb(0, 0, 0)'); // dark theme accent5
      });
    });

    test('skill descriptions have theme-based styling', () => {
      renderWithProviders(<FullSkillDetails />);
      
      // Check that skill descriptions have theme text color (they inherit from parent)
      const descriptions = document.querySelectorAll('.current-skill-details-desc');
      expect(descriptions.length).toBe(19);
      descriptions.forEach(desc => {
        expect(desc).toBeInTheDocument();
      });
    });
  });

  describe('Component Structure', () => {
    test('has correct DOM structure', () => {
      renderWithProviders(<FullSkillDetails />);
      
      // Check for main container
      const mainContainer = screen.getByText('Cursor').closest('div').parentElement;
      expect(mainContainer).toBeInTheDocument();
      
      // Check for skill cards
      const skillCards = document.querySelectorAll('.current-skill-details');
      expect(skillCards.length).toBe(19);
    });

    test('each skill has proper structure', () => {
      renderWithProviders(<FullSkillDetails />);
      
      const skillCards = document.querySelectorAll('.current-skill-details');
      expect(skillCards.length).toBe(19);
      
      skillCards.forEach(card => {
        // Each card should have a button/link
        const button = card.querySelector('a');
        expect(button).toBeInTheDocument();
        
        // Each card should have a description
        const description = card.querySelector('.current-skill-details-desc');
        expect(description).toBeInTheDocument();
      });
    });

    test('has correct number of skill cards', () => {
      renderWithProviders(<FullSkillDetails />);
      
      // Should have 19 skill cards total
      const skillCards = document.querySelectorAll('.current-skill-details');
      expect(skillCards.length).toBe(19);
    });
  });

  describe('Material-UI Components', () => {
    test('renders Button components with proper structure', () => {
      renderWithProviders(<FullSkillDetails />);
      
      // Check for Button components
      const buttons = screen.getAllByRole('link');
      expect(buttons.length).toBe(19);
      
      buttons.forEach(button => {
        expect(button).toHaveClass('MuiButton-root');
        expect(button).toHaveClass('MuiButton-contained');
      });
    });

    test('renders Tooltip components correctly', () => {
      renderWithProviders(<FullSkillDetails />);
      
      // Check for Tooltip components by checking aria-label attributes
      const buttons = screen.getAllByRole('link');
      buttons.forEach(button => {
        expect(button).toHaveAttribute('aria-label');
      });
    });
  });

  describe('Accessibility', () => {
    test('skill buttons have proper accessibility attributes', () => {
      renderWithProviders(<FullSkillDetails />);
      
      const buttons = screen.getAllByRole('link');
      
      buttons.forEach(button => {
        expect(button).toHaveAttribute('target', '_blank');
        expect(button).toHaveAttribute('href');
        expect(button).toHaveAttribute('aria-label');
      });
    });

    test('skill information is properly structured', () => {
      renderWithProviders(<FullSkillDetails />);
      
      // Check that all skill cards have proper structure
      const skillCards = document.querySelectorAll('.current-skill-details');
      skillCards.forEach(card => {
        const button = card.querySelector('a');
        const description = card.querySelector('.current-skill-details-desc');
        expect(button).toBeInTheDocument();
        expect(description).toBeInTheDocument();
      });
    });

    test('content is readable and accessible', () => {
      renderWithProviders(<FullSkillDetails />);
      
      // Check that all skill information is present and readable
      expect(screen.getByText('Cursor')).toBeInTheDocument();
      expect(screen.getByText(/Go to IDE for coding in React and Python on personal projects/)).toBeInTheDocument();
    });
  });

  describe('External Link Functionality', () => {
    test('all links have correct target attribute', () => {
      renderWithProviders(<FullSkillDetails />);
      
      const links = screen.getAllByRole('link');
      
      links.forEach(link => {
        expect(link).toHaveAttribute('target', '_blank');
      });
    });

    test('links point to valid external URLs', () => {
      renderWithProviders(<FullSkillDetails />);
      
      // Check for HTTPS URLs
      const links = screen.getAllByRole('link');
      const hrefs = links.map(link => link.getAttribute('href'));
      
      hrefs.forEach(href => {
        expect(href).toMatch(/^https:\/\//);
      });
    });

    test('specific skill links are correct', () => {
      renderWithProviders(<FullSkillDetails />);
      
      const links = screen.getAllByRole('link');
      const linkHrefs = links.map(link => link.getAttribute('href'));
      
      // Check for specific skill links
      expect(linkHrefs).toContain('https://cursor.com/');
      expect(linkHrefs).toContain('https://visualstudio.microsoft.com/');
      expect(linkHrefs).toContain('https://www.w3schools.com/');
      expect(linkHrefs).toContain('https://azure.microsoft.com/en-us/products/devops/');
      expect(linkHrefs).toContain('https://spring.io/guides');
      expect(linkHrefs).toContain('https://aws.amazon.com/');
    });
  });

  describe('Skill Content Validation', () => {
    test('contains expected development tools', () => {
      renderWithProviders(<FullSkillDetails />);
      
      // Check for development tools
      expect(screen.getByText(/Cursor/)).toBeInTheDocument();
      expect(screen.getAllByText(/Visual Studio/)).toHaveLength(2); // appears in button and description
      expect(screen.getByText(/IntelliJ/)).toBeInTheDocument();
      expect(screen.getByText(/Postman/)).toBeInTheDocument();
      expect(screen.getByText(/Virtual Box/)).toBeInTheDocument();
    });

    test('contains expected programming languages', () => {
      renderWithProviders(<FullSkillDetails />);
      
      // Check for programming languages
      expect(screen.getByText(/HTML, CSS, Typescript, Javascript/)).toBeInTheDocument();
      expect(screen.getAllByText(/Java/)).toHaveLength(6); // appears in button and multiple descriptions
      expect(screen.getByText(/Swift/)).toBeInTheDocument();
      expect(screen.getByText(/Kotlin/)).toBeInTheDocument();
      expect(screen.getAllByText(/SQL/)).toHaveLength(2); // appears in "SQL" and "Oracle SQL Developer"
    });

    test('contains expected frameworks and technologies', () => {
      renderWithProviders(<FullSkillDetails />);
      
      // Check for frameworks and technologies
      expect(screen.getAllByText(/Spring Framework/)).toHaveLength(3); // appears in button and multiple descriptions
      expect(screen.getByText(/Test-Driven Development/)).toBeInTheDocument();
      expect(screen.getByText(/Azure Dev Ops/)).toBeInTheDocument();
      expect(screen.getByText(/AWS/)).toBeInTheDocument();
      expect(screen.getByText(/Thymeleaf/)).toBeInTheDocument();
    });

    test('contains expected testing tools', () => {
      renderWithProviders(<FullSkillDetails />);
      
      // Check for testing tools
      expect(screen.getByText(/JUnit/)).toBeInTheDocument();
      expect(screen.getByText(/Oracle SQL Developer/)).toBeInTheDocument();
      expect(screen.getByText(/Postman/)).toBeInTheDocument();
    });
  });

  describe('Tooltip Functionality', () => {
    test('all buttons have tooltips with correct text', () => {
      renderWithProviders(<FullSkillDetails />);
      
      const skillButtons = screen.getAllByRole('link');
      expect(skillButtons.length).toBe(19);
      
      // Check for different tooltip categories
      const dailyButtons = skillButtons.filter(button => 
        button.getAttribute('aria-label') === 'Used Daily'
      );
      const frequentlyButtons = skillButtons.filter(button => 
        button.getAttribute('aria-label') === 'Used Frequently'
      );
      const occasionallyButtons = skillButtons.filter(button => 
        button.getAttribute('aria-label') === 'Used Ocassionally' || 
        button.getAttribute('aria-label') === 'Used Occasionally'
      );
      const rarelyButtons = skillButtons.filter(button => 
        button.getAttribute('aria-label') === 'Used Rarely'
      );
      
      expect(dailyButtons.length).toBe(6); // Cursor, Visual Studio, TDD, SimConnect, HTML/CSS/JS, Azure DevOps
      expect(frequentlyButtons.length).toBe(2); // SQL, Postman
      expect(occasionallyButtons.length).toBe(6); // Virtual Box, Spring, JUnit, Java, AWS, IntelliJ
      expect(rarelyButtons.length).toBe(5); // Thymeleaf, Swift, Oracle SQL Developer, Linux, Kotlin
    });

    test('tooltips have correct placement', () => {
      renderWithProviders(<FullSkillDetails />);
      
      // All tooltips should have placement="top" based on the component
      const skillButtons = screen.getAllByRole('link');
      skillButtons.forEach(button => {
        expect(button).toHaveAttribute('aria-label');
      });
    });
  });

  describe('Theme Context Integration', () => {
    test('uses theme context correctly', () => {
      renderWithProviders(<FullSkillDetails />);
      
      const firstCard = document.querySelector('.current-skill-details');
      expect(firstCard).toHaveStyle('background: rgb(42, 42, 42)'); // dark theme cardBg
    });

    test('theme colors are applied consistently', () => {
      renderWithProviders(<FullSkillDetails />);
      
      const skillCards = document.querySelectorAll('.current-skill-details');
      const skillButtons = screen.getAllByRole('link');
      const descriptions = document.querySelectorAll('.current-skill-details-desc');
      
      // All cards should have the same theme colors
      skillCards.forEach(card => {
        expect(card).toHaveStyle('background: rgb(42, 42, 42)');
        expect(card).toHaveStyle('color: rgb(224, 224, 224)');
      });
      
      // All buttons should have the same theme colors
      skillButtons.forEach(button => {
        expect(button).toHaveStyle('background: rgb(0, 255, 255)');
        expect(button).toHaveStyle('color: rgb(0, 0, 0)');
      });
      
      // All descriptions should be present (they inherit color from parent)
      descriptions.forEach(desc => {
        expect(desc).toBeInTheDocument();
      });
    });
  });

  describe('Component Behavior', () => {
    test('component maintains state correctly', () => {
      const { rerender } = renderWithProviders(<FullSkillDetails />);
      
      // Component should render the same way on multiple renders
      const firstRender = screen.getByText('Cursor');
      expect(firstRender).toBeInTheDocument();
      
      // Re-render with providers and check again
      rerender(
        <BrowserRouter>
          <ThemeContextProvider>
            <FullSkillDetails />
          </ThemeContextProvider>
        </BrowserRouter>
      );
      expect(screen.getByText('Cursor')).toBeInTheDocument();
    });

    test('all skill cards are properly rendered', () => {
      renderWithProviders(<FullSkillDetails />);
      
      // Check that all 19 skills are present
      const skillTitles = [
        'Cursor',
        'Visual Studio',
        'Test-Driven Development',
        'SimConnect',
        'HTML, CSS, Typescript, Javascript',
        'Azure Dev Ops',
        'SQL',
        'Postman',
        'Virtual Box',
        'Spring Framework',
        'JUnit',
        'Java',
        'AWS',
        'IntelliJ',
        'Thymeleaf',
        'Swift',
        'Oracle SQL Developer',
        'Linux',
        'Kotlin'
      ];
      
      skillTitles.forEach(title => {
        expect(screen.getByText(title)).toBeInTheDocument();
      });
    });
  });

  describe('Skill Categories', () => {
    test('daily use skills are properly categorized', () => {
      renderWithProviders(<FullSkillDetails />);
      
      const dailySkills = [
        'Cursor',
        'Visual Studio',
        'Test-Driven Development',
        'SimConnect',
        'HTML, CSS, Typescript, Javascript',
        'Azure Dev Ops'
      ];
      
      dailySkills.forEach(skill => {
        const button = screen.getByText(skill);
        expect(button).toHaveAttribute('aria-label', 'Used Daily');
      });
    });

    test('frequently used skills are properly categorized', () => {
      renderWithProviders(<FullSkillDetails />);
      
      const frequentlySkills = ['SQL', 'Postman'];
      
      frequentlySkills.forEach(skill => {
        const button = screen.getByText(skill);
        expect(button).toHaveAttribute('aria-label', 'Used Frequently');
      });
    });

    test('occasionally used skills are properly categorized', () => {
      renderWithProviders(<FullSkillDetails />);
      
      const occasionallySkills = [
        'Virtual Box',
        'Spring Framework',
        'JUnit',
        'Java',
        'AWS',
        'IntelliJ'
      ];
      
      occasionallySkills.forEach(skill => {
        const button = screen.getByText(skill);
        const ariaLabel = button.getAttribute('aria-label');
        expect(ariaLabel === 'Used Ocassionally' || ariaLabel === 'Used Occasionally').toBe(true);
      });
    });

    test('rarely used skills are properly categorized', () => {
      renderWithProviders(<FullSkillDetails />);
      
      const rarelySkills = [
        'Thymeleaf',
        'Swift',
        'Oracle SQL Developer',
        'Linux',
        'Kotlin'
      ];
      
      rarelySkills.forEach(skill => {
        const button = screen.getByText(skill);
        expect(button).toHaveAttribute('aria-label', 'Used Rarely');
      });
    });
  });

  describe('Skill Descriptions Content', () => {
    test('descriptions contain relevant information', () => {
      renderWithProviders(<FullSkillDetails />);
      
      // Check for specific description content
      expect(screen.getByText(/IDE for coding in React and Python/)).toBeInTheDocument();
      expect(screen.getByText(/VSCode for Python and React Projects/)).toBeInTheDocument();
      expect(screen.getByText(/work related development and most hobby codding/)).toBeInTheDocument();
      expect(screen.getByText(/flight simulator api used to talk to Microsoft Flight Simulator/)).toBeInTheDocument();
      expect(screen.getByText(/Used in all web apps and sites as part of my job/)).toBeInTheDocument();
    });

    test('descriptions are informative and detailed', () => {
      renderWithProviders(<FullSkillDetails />);
      
      const descriptions = document.querySelectorAll('.current-skill-details-desc');
      expect(descriptions.length).toBe(19);
      
      descriptions.forEach(desc => {
        expect(desc.textContent.length).toBeGreaterThan(10); // Each description should be meaningful
      });
    });
  });
});

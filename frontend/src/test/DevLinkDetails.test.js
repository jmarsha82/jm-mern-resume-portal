import React from 'react';
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import DevLinkDetails from "../components/DevLinkDetails";
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

describe('DevLinkDetails Component', () => {
  
  describe('Component Rendering', () => {
    test('renders DevLinkDetails component without crashing', () => {
      renderWithProviders(<DevLinkDetails />);
      expect(screen.getByText('CodinGame')).toBeInTheDocument();
    });

    test('renders all developer link cards', () => {
      renderWithProviders(<DevLinkDetails />);
      
      // Check for all developer link titles
      expect(screen.getByText('CodinGame')).toBeInTheDocument();
      expect(screen.getByText("O'Reilly")).toBeInTheDocument();
      expect(screen.getByText('Data Structure Visualizations')).toBeInTheDocument();
      expect(screen.getByText('JSON Placeholder')).toBeInTheDocument();
      expect(screen.getByText('Replit')).toBeInTheDocument();
      expect(screen.getByText('W3 Schools')).toBeInTheDocument();
      expect(screen.getByText('NinjaMock')).toBeInTheDocument();
      expect(screen.getByText('Trello')).toBeInTheDocument();
      expect(screen.getByText('HackerRank')).toBeInTheDocument();
      expect(screen.getByText('Spring')).toBeInTheDocument();
      expect(screen.getByText('React')).toBeInTheDocument();
      expect(screen.getByText('Angular')).toBeInTheDocument();
      expect(screen.getByText('LeetCode')).toBeInTheDocument();
      expect(screen.getByText('Claude AI')).toBeInTheDocument();
    });

    test('renders developer link images', () => {
      renderWithProviders(<DevLinkDetails />);
      
      // Check for CardMedia components (link images)
      const cardMediaElements = screen.getAllByRole('img');
      expect(cardMediaElements.length).toBeGreaterThan(0);
    });
  });

  describe('Developer Link Information Display', () => {
    test('displays link titles', () => {
      renderWithProviders(<DevLinkDetails />);
      
      // Check for specific link titles
      expect(screen.getByText('CodinGame')).toBeInTheDocument();
      expect(screen.getByText("O'Reilly")).toBeInTheDocument();
      expect(screen.getByText('Data Structure Visualizations')).toBeInTheDocument();
      expect(screen.getByText('JSON Placeholder')).toBeInTheDocument();
    });

    test('displays link descriptions', () => {
      renderWithProviders(<DevLinkDetails />);
      
      // Check for link descriptions
      expect(screen.getByText(/Great way to build your skills and a lot of fun/)).toBeInTheDocument();
      expect(screen.getByText(/Great resource for training if you have an account/)).toBeInTheDocument();
      expect(screen.getByText(/Helpful way to understand how certain algorithms work/)).toBeInTheDocument();
      expect(screen.getByText(/Really good way to fake a backend for testing/)).toBeInTheDocument();
      expect(screen.getByText(/Online taylored IDEs with built in development tools/)).toBeInTheDocument();
      expect(screen.getByText(/All around good aid for simple web dev issues/)).toBeInTheDocument();
      expect(screen.getByText(/Great tool if you find yourself as your own UX Designer/)).toBeInTheDocument();
      expect(screen.getByText(/Free online WIP board for organizing projects/)).toBeInTheDocument();
      expect(screen.getByText(/Varitey of coding challenges for different languages/)).toBeInTheDocument();
      expect(screen.getByText(/Starting point for implementing Spring Framework/)).toBeInTheDocument();
      expect(screen.getByText(/Starting point for implementing React Framework/)).toBeInTheDocument();
      expect(screen.getByText(/Starting point for implementing Angular Framework/)).toBeInTheDocument();
      expect(screen.getByText(/Great way to practice coding problems and interview questions/)).toBeInTheDocument();
      expect(screen.getByText(/Great AI tool for answering coding questions/)).toBeInTheDocument();
    });

    test('displays external links with correct href attributes', () => {
      renderWithProviders(<DevLinkDetails />);
      
      // Check for external links
      const links = screen.getAllByRole('link');
      expect(links.length).toBe(14); // 14 developer links
      
      // Check specific links by href attribute since links don't have accessible names
      const codinGameLink = links.find(link => link.getAttribute('href') === 'https://www.codingame.com/start');
      expect(codinGameLink).toHaveAttribute('href', 'https://www.codingame.com/start');
      
      // Get all links and check their hrefs
      const linkHrefs = links.map(link => link.getAttribute('href'));
      expect(linkHrefs).toContain('https://www.codingame.com/start');
      expect(linkHrefs).toContain('https://learning.oreilly.com/home/');
      expect(linkHrefs).toContain('https://www.cs.usfca.edu/~galles/visualization/');
      expect(linkHrefs).toContain('https://jsonplaceholder.typicode.com/');
      expect(linkHrefs).toContain('https://replit.com/');
      expect(linkHrefs).toContain('https://www.w3schools.com/default.asp');
      expect(linkHrefs).toContain('https://ninjamock.com/');
      expect(linkHrefs).toContain('https://trello.com/en');
      expect(linkHrefs).toContain('https://www.hackerrank.com/dashboard');
      expect(linkHrefs).toContain('https://spring.io/guides');
      expect(linkHrefs).toContain('https://react.dev/');
      expect(linkHrefs).toContain('https://angular.io/');
      expect(linkHrefs).toContain('https://leetcode.com/');
      expect(linkHrefs).toContain('https://claude.ai/');
    });
  });

  describe('Theme Integration', () => {
    test('link cards have theme-based styling', () => {
      renderWithProviders(<DevLinkDetails />);
      
      // Get all styled items
      const styledItems = document.querySelectorAll('[class*="MuiPaper-root"]');
      expect(styledItems.length).toBeGreaterThan(0);
      
      // Check that cards have theme styling
      styledItems.forEach(item => {
        expect(item).toHaveStyle('background-color: rgb(42, 42, 42)'); // dark theme cardBg
        expect(item).toHaveStyle('color: rgb(224, 224, 224)'); // dark theme textColor
        expect(item).toHaveStyle('transition: background-color 0.3s ease,color 0.3s ease');
      });
    });

    test('component responds to theme changes', () => {
      renderWithProviders(<DevLinkDetails />);
      
      // Component should render with dark theme by default
      const firstCard = document.querySelector('[class*="MuiPaper-root"]');
      expect(firstCard).toHaveStyle('background-color: rgb(42, 42, 42)');
    });

    test('typography elements have theme-based styling', () => {
      renderWithProviders(<DevLinkDetails />);
      
      // Check that typography elements have theme colors
      const typographyElements = document.querySelectorAll('[class*="MuiTypography-h6"]');
      typographyElements.forEach(element => {
        expect(element).toHaveStyle('color: rgb(224, 224, 224)'); // dark theme textColor
      });
    });
  });

  describe('Component Structure', () => {
    test('has correct DOM structure', () => {
      renderWithProviders(<DevLinkDetails />);
      
      // Check for main container
      const mainContainer = screen.getByText('CodinGame').closest('div');
      expect(mainContainer).toBeInTheDocument();
      
      // Check for Grid containers
      const gridContainers = document.querySelectorAll('[class*="MuiGrid-container"]');
      expect(gridContainers.length).toBeGreaterThan(0);
      
      // Check for Grid items
      const gridItems = document.querySelectorAll('[class*="MuiGrid-item"]');
      expect(gridItems.length).toBeGreaterThan(0);
    });

    test('each link has proper structure', () => {
      renderWithProviders(<DevLinkDetails />);
      
      const styledItems = document.querySelectorAll('[class*="MuiPaper-root"]');
      
      // Filter out the outer Paper containers, only check the inner ones that contain cards
      const cardContainers = Array.from(styledItems).filter(item => 
        item.querySelector('[class*="MuiCard-root"]')
      );
      
      expect(cardContainers.length).toBe(14); // Should have 14 link containers
      
      cardContainers.forEach(item => {
        // Each item should have a card
        const card = item.querySelector('[class*="MuiCard-root"]');
        expect(card).toBeInTheDocument();
        
        // Each card should have a link
        const link = card.querySelector('a');
        expect(link).toBeInTheDocument();
        
        // Each card should have CardMedia
        const cardMedia = card.querySelector('[class*="MuiCardMedia-root"]');
        expect(cardMedia).toBeInTheDocument();
        
        // Each card should have CardContent
        const cardContent = card.querySelector('[class*="MuiCardContent-root"]');
        expect(cardContent).toBeInTheDocument();
      });
    });

    test('has correct number of link cards', () => {
      renderWithProviders(<DevLinkDetails />);
      
      // Should have 14 link cards total (filter for cards only, not outer containers)
      const cardContainers = Array.from(document.querySelectorAll('[class*="MuiPaper-root"]')).filter(item => 
        item.querySelector('[class*="MuiCard-root"]')
      );
      expect(cardContainers.length).toBe(14);
    });
  });

  describe('Grid Layout', () => {
    test('renders Grid components correctly', () => {
      renderWithProviders(<DevLinkDetails />);
      
      // Check for Grid containers (7 rows of 2 links each)
      const gridContainers = document.querySelectorAll('[class*="MuiGrid-container"]');
      expect(gridContainers.length).toBe(7); // 7 rows of links
      
      gridContainers.forEach(container => {
        expect(container).toHaveAttribute('class');
        expect(container).toBeVisible();
      });
    });

    test('Grid items have correct spacing', () => {
      renderWithProviders(<DevLinkDetails />);
      
      const gridItems = document.querySelectorAll('[class*="MuiGrid-item"]');
      expect(gridItems.length).toBeGreaterThan(0);
      
      gridItems.forEach(item => {
        expect(item).toBeVisible();
        expect(item).toHaveAttribute('class');
      });
    });
  });

  describe('Material-UI Components', () => {
    test('renders Card components with proper structure', () => {
      renderWithProviders(<DevLinkDetails />);
      
      // Check for Card components
      const cards = document.querySelectorAll('[class*="MuiCard-root"]');
      expect(cards.length).toBe(14); // 14 links
      
      cards.forEach(card => {
        expect(card).toHaveClass('MuiCard-root');
      });
    });

    test('renders CardMedia components correctly', () => {
      renderWithProviders(<DevLinkDetails />);
      
      // Check for CardMedia components
      const cardMediaElements = document.querySelectorAll('[class*="MuiCardMedia-root"]');
      expect(cardMediaElements.length).toBe(14); // 14 link images
      
      cardMediaElements.forEach(media => {
        expect(media).toHaveClass('MuiCardMedia-root');
        expect(media).toHaveStyle('width: 200px');
        expect(media).toHaveStyle('height: 60px');
      });
    });

    test('renders CardContent components correctly', () => {
      renderWithProviders(<DevLinkDetails />);
      
      // Check for CardContent components
      const cardContentElements = document.querySelectorAll('[class*="MuiCardContent-root"]');
      expect(cardContentElements.length).toBe(14); // 14 link contents
      
      cardContentElements.forEach(content => {
        expect(content).toHaveClass('MuiCardContent-root');
      });
    });

    test('renders Typography components for link information', () => {
      renderWithProviders(<DevLinkDetails />);
      
      // Check for Typography components
      const typographyElements = document.querySelectorAll('[class*="MuiTypography"]');
      expect(typographyElements.length).toBeGreaterThan(0);
      
      // Check for h6 headings (link titles)
      const h6Elements = document.querySelectorAll('[class*="MuiTypography-h6"]');
      expect(h6Elements.length).toBe(14); // 14 link titles
    });
  });

  describe('Accessibility', () => {
    test('link images have proper attributes', () => {
      renderWithProviders(<DevLinkDetails />);
      
      const images = screen.getAllByRole('img');
      expect(images.length).toBe(14);
      
      images.forEach(image => {
        // CardMedia uses background-image style, not src attribute
        const backgroundImage = image.style.backgroundImage;
        expect(backgroundImage).toBeTruthy();
        expect(image).toHaveAttribute('role', 'img');
      });
    });

    test('external links have proper accessibility attributes', () => {
      renderWithProviders(<DevLinkDetails />);
      
      const links = screen.getAllByRole('link');
      
      links.forEach(link => {
        expect(link).toHaveAttribute('target', '_blank');
        expect(link).toHaveAttribute('href');
      });
    });

    test('link information is properly structured', () => {
      renderWithProviders(<DevLinkDetails />);
      
      // Check for proper heading structure
      const headings = document.querySelectorAll('[class*="MuiTypography-h6"]');
      headings.forEach(heading => {
        expect(heading.tagName).toBe('DIV'); // Typography renders as div with h6 styling
      });
    });

    test('content is readable and accessible', () => {
      renderWithProviders(<DevLinkDetails />);
      
      // Check that all link information is present and readable
      expect(screen.getByText('CodinGame')).toBeInTheDocument();
      expect(screen.getByText(/Great way to build your skills and a lot of fun/)).toBeInTheDocument();
    });
  });

  describe('Responsive Design', () => {
    test('component renders without layout issues', () => {
      renderWithProviders(<DevLinkDetails />);
      
      const mainContainer = screen.getByText('CodinGame').closest('div');
      expect(mainContainer).toBeVisible();
    });

    test('Grid layout is properly structured', () => {
      renderWithProviders(<DevLinkDetails />);
      
      const gridContainers = document.querySelectorAll('[class*="MuiGrid-container"]');
      gridContainers.forEach(container => {
        expect(container).toBeVisible();
      });
    });

    test('link cards maintain proper spacing', () => {
      renderWithProviders(<DevLinkDetails />);
      
      const styledItems = document.querySelectorAll('[class*="MuiPaper-root"]');
      styledItems.forEach(item => {
        expect(item).toBeVisible();
      });
    });
  });

  describe('Link Content Validation', () => {
    test('contains expected development tools', () => {
      renderWithProviders(<DevLinkDetails />);
      
      // Check for development-related content
      expect(screen.getByText(/CodinGame/)).toBeInTheDocument();
      expect(screen.getAllByText(/React/)).toHaveLength(2); // appears in title and description
      expect(screen.getAllByText(/Angular/)).toHaveLength(2); // appears in title and description
      expect(screen.getAllByText(/Spring/)).toHaveLength(2); // appears in title and description
      expect(screen.getByText(/LeetCode/)).toBeInTheDocument();
    });

    test('contains expected learning resources', () => {
      renderWithProviders(<DevLinkDetails />);
      
      // Check for learning resources
      expect(screen.getByText(/O'Reilly/)).toBeInTheDocument();
      expect(screen.getByText(/Data Structure Visualizations/)).toBeInTheDocument();
      expect(screen.getByText(/W3 Schools/)).toBeInTheDocument();
      expect(screen.getByText(/HackerRank/)).toBeInTheDocument();
    });

    test('contains expected development tools', () => {
      renderWithProviders(<DevLinkDetails />);
      
      // Check for development tools
      expect(screen.getByText(/JSON Placeholder/)).toBeInTheDocument();
      expect(screen.getByText(/Replit/)).toBeInTheDocument();
      expect(screen.getByText(/NinjaMock/)).toBeInTheDocument();
      expect(screen.getByText(/Trello/)).toBeInTheDocument();
      expect(screen.getByText(/Claude AI/)).toBeInTheDocument();
    });
  });

  describe('Theme Context Integration', () => {
    test('uses theme context correctly', () => {
      renderWithProviders(<DevLinkDetails />);
      
      const firstCard = document.querySelector('[class*="MuiPaper-root"]');
      expect(firstCard).toHaveStyle('background-color: rgb(42, 42, 42)'); // dark theme cardBg
    });

    test('theme colors are applied consistently', () => {
      renderWithProviders(<DevLinkDetails />);
      
      const styledItems = document.querySelectorAll('[class*="MuiPaper-root"]');
      const typographyElements = document.querySelectorAll('[class*="MuiTypography-h6"]');
      
      // All cards should have the same theme colors
      styledItems.forEach(item => {
        expect(item).toHaveStyle('background-color: rgb(42, 42, 42)');
        expect(item).toHaveStyle('color: rgb(224, 224, 224)');
      });
      
      // All typography should have the same theme colors
      typographyElements.forEach(element => {
        expect(element).toHaveStyle('color: rgb(224, 224, 224)');
      });
    });
  });

  describe('Component Behavior', () => {
    test('component maintains state correctly', () => {
      const { rerender } = renderWithProviders(<DevLinkDetails />);
      
      // Component should render the same way on multiple renders
      const firstRender = screen.getByText('CodinGame');
      expect(firstRender).toBeInTheDocument();
      
      // Re-render with providers and check again
      rerender(
        <BrowserRouter>
          <ThemeContextProvider>
            <DevLinkDetails />
          </ThemeContextProvider>
        </BrowserRouter>
      );
      expect(screen.getByText('CodinGame')).toBeInTheDocument();
    });

    test('all link cards are properly rendered', () => {
      renderWithProviders(<DevLinkDetails />);
      
      // Check that all 14 links are present
      const linkTitles = [
        'CodinGame',
        "O'Reilly",
        'Data Structure Visualizations',
        'JSON Placeholder',
        'Replit',
        'W3 Schools',
        'NinjaMock',
        'Trello',
        'HackerRank',
        'Spring',
        'React',
        'Angular',
        'LeetCode',
        'Claude AI'
      ];
      
      linkTitles.forEach(title => {
        expect(screen.getByText(title)).toBeInTheDocument();
      });
    });
  });

  describe('External Link Functionality', () => {
    test('all links have correct target attribute', () => {
      renderWithProviders(<DevLinkDetails />);
      
      const links = screen.getAllByRole('link');
      
      links.forEach(link => {
        expect(link).toHaveAttribute('target', '_blank');
      });
    });

    test('links point to valid external URLs', () => {
      renderWithProviders(<DevLinkDetails />);
      
      // Check for HTTPS URLs
      const links = screen.getAllByRole('link');
      const hrefs = links.map(link => link.getAttribute('href'));
      
      hrefs.forEach(href => {
        expect(href).toMatch(/^https:\/\//);
      });
    });
  });

  describe('Image Sources', () => {
    test('link images have correct source paths', () => {
      renderWithProviders(<DevLinkDetails />);
      
      const images = screen.getAllByRole('img');
      expect(images.length).toBe(14);
      
      // Check that images have the expected background-image pattern
      images.forEach(image => {
        const backgroundImage = image.style.backgroundImage;
        expect(backgroundImage).toContain('/img/developer/');
        expect(backgroundImage).toContain('.jpg');
      });
    });

    test('specific link images are present', () => {
      renderWithProviders(<DevLinkDetails />);
      
      const images = screen.getAllByRole('img');
      const imageSources = images.map(img => img.style.backgroundImage);
      
      // Check for specific link images
      expect(imageSources.some(src => src && src.includes('codin_game.jpg'))).toBe(true);
      expect(imageSources.some(src => src && src.includes('o_reilly.jpg'))).toBe(true);
      expect(imageSources.some(src => src && src.includes('data_stuct_visual.jpg'))).toBe(true);
      expect(imageSources.some(src => src && src.includes('json_placeholder.jpg'))).toBe(true);
      expect(imageSources.some(src => src && src.includes('replit.jpg'))).toBe(true);
      expect(imageSources.some(src => src && src.includes('w3_schools.jpg'))).toBe(true);
      expect(imageSources.some(src => src && src.includes('ninjamock.jpg'))).toBe(true);
      expect(imageSources.some(src => src && src.includes('trello.jpg'))).toBe(true);
      expect(imageSources.some(src => src && src.includes('hackerrank.jpg'))).toBe(true);
      expect(imageSources.some(src => src && src.includes('spring.jpg'))).toBe(true);
      expect(imageSources.some(src => src && src.includes('react.jpg'))).toBe(true);
      expect(imageSources.some(src => src && src.includes('angular.jpg'))).toBe(true);
      expect(imageSources.some(src => src && src.includes('leetcode.jpg'))).toBe(true);
      expect(imageSources.some(src => src && src.includes('claudeai.jpg'))).toBe(true);
    });
  });
});

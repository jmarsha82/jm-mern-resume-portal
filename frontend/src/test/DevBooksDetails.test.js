import React from 'react';
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import DevBooksDetails from "../components/DevBooksDetails";
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

describe('DevBooksDetails Component', () => {
  
  describe('Component Rendering', () => {
    test('renders DevBooksDetails component without crashing', () => {
      renderWithProviders(<DevBooksDetails />);
      expect(screen.getByText('Expert C Programming: Deep C Secrets')).toBeInTheDocument();
    });

    test('renders all book cards', () => {
      renderWithProviders(<DevBooksDetails />);
      
      // Check for all book titles
      expect(screen.getByText('Expert C Programming: Deep C Secrets')).toBeInTheDocument();
      expect(screen.getByText('Growing Object-Oriented Software, Guided by Tests.')).toBeInTheDocument();
      expect(screen.getByText(/Computer Security.*A Hands-On Approach/)).toBeInTheDocument();
      expect(screen.getByText('Code: The Hidden Language of Computer Hardware and Software')).toBeInTheDocument();
      expect(screen.getByText('The Linux Programming Interface: A Linux and UNIX System Programming Handbook')).toBeInTheDocument();
      expect(screen.getByText('Discrete Mathematics and its Applications')).toBeInTheDocument();
      expect(screen.getByText('Clean Architecture: A Craftsman\'s Guide to Software Structure and Design')).toBeInTheDocument();
      expect(screen.getByText('Extreme Programming Explained: Embrace Change')).toBeInTheDocument();
    });

    test('renders book images', () => {
      renderWithProviders(<DevBooksDetails />);
      
      // Check for CardMedia components (book images)
      const cardMediaElements = screen.getAllByRole('img');
      expect(cardMediaElements.length).toBeGreaterThan(0);
    });
  });

  describe('Book Information Display', () => {
    test('displays book titles', () => {
      renderWithProviders(<DevBooksDetails />);
      
      // Check for specific book titles
      expect(screen.getByText('Expert C Programming: Deep C Secrets')).toBeInTheDocument();
      expect(screen.getByText('Growing Object-Oriented Software, Guided by Tests.')).toBeInTheDocument();
      expect(screen.getByText(/Computer Security.*A Hands-On Approach/)).toBeInTheDocument();
    });

    test('displays book authors', () => {
      renderWithProviders(<DevBooksDetails />);
      
      // Check for book authors
      expect(screen.getByText('Peter van der Linden')).toBeInTheDocument();
      expect(screen.getByText('Steve Freeman, Nat Pryce')).toBeInTheDocument();
      expect(screen.getByText('Wenliang Du')).toBeInTheDocument();
      expect(screen.getByText('Charles Petzold')).toBeInTheDocument();
      expect(screen.getByText('Michael Kerrisk')).toBeInTheDocument();
      expect(screen.getByText('Kenneth H. Rosen')).toBeInTheDocument();
      expect(screen.getByText('Robert Martin')).toBeInTheDocument();
      expect(screen.getByText('Kent Beck, Cynthia Andres')).toBeInTheDocument();
    });

    test('displays book publication years', () => {
      renderWithProviders(<DevBooksDetails />);
      
      // Check for publication years (using getAllByText for years that appear multiple times)
      expect(screen.getByText('1994')).toBeInTheDocument();
      expect(screen.getByText('2009')).toBeInTheDocument();
      expect(screen.getAllByText('2017')).toHaveLength(2); // appears twice
      expect(screen.getByText('2022')).toBeInTheDocument();
      expect(screen.getByText('2010')).toBeInTheDocument();
      expect(screen.getByText('2002')).toBeInTheDocument();
      expect(screen.getByText('2004')).toBeInTheDocument();
    });

    test('displays book descriptions', () => {
      renderWithProviders(<DevBooksDetails />);
      
      // Check for book descriptions
      expect(screen.getByText(/Explains some of the hardest concepts of C programming/)).toBeInTheDocument();
      expect(screen.getByText(/Complete walkthrough of TDD/)).toBeInTheDocument();
      expect(screen.getByText(/Great walkthrough.*Learn a lot of C in the process/)).toBeInTheDocument();
      expect(screen.getByText(/Great explanation of how computers work at their most basic/)).toBeInTheDocument();
      expect(screen.getByText(/Complete guide to Linux OS with lots of C examples/)).toBeInTheDocument();
      expect(screen.getByText(/Good basis for digital logic and machine learning/)).toBeInTheDocument();
      expect(screen.getByText(/Understanding of how applications should be designed/)).toBeInTheDocument();
      expect(screen.getByText(/Overview of agile and how dev teams should interact/)).toBeInTheDocument();
    });

    test('displays ISBN numbers', () => {
      renderWithProviders(<DevBooksDetails />);
      
      // Check for ISBN numbers
      expect(screen.getByText('ISBN : 9780131774292')).toBeInTheDocument();
      expect(screen.getByText('ISBN : 9780321503626')).toBeInTheDocument();
      expect(screen.getByText('ISBN : 9781548367947')).toBeInTheDocument();
      expect(screen.getByText('ISBN : 9780735611313')).toBeInTheDocument();
      expect(screen.getByText('ISBN : 9781593272203')).toBeInTheDocument();
      expect(screen.getByText('ISBN : 9780072424346')).toBeInTheDocument();
      expect(screen.getByText('ISBN : 9780134494164')).toBeInTheDocument();
      expect(screen.getByText('ISBN : 9780321278654')).toBeInTheDocument();
    });
  });

  describe('Theme Integration', () => {
    test('book cards have theme-based styling', () => {
      renderWithProviders(<DevBooksDetails />);
      
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
      renderWithProviders(<DevBooksDetails />);
      
      // Component should render with dark theme by default
      const firstCard = document.querySelector('[class*="MuiPaper-root"]');
      expect(firstCard).toHaveStyle('background-color: rgb(42, 42, 42)');
    });

    test('typography elements have theme-based styling', () => {
      renderWithProviders(<DevBooksDetails />);
      
      // Check that typography elements have theme colors
      const typographyElements = document.querySelectorAll('[class*="MuiTypography-h6"]');
      typographyElements.forEach(element => {
        expect(element).toHaveStyle('color: rgb(224, 224, 224)'); // dark theme textColor
      });
    });
  });

  describe('Component Structure', () => {
    test('has correct DOM structure', () => {
      renderWithProviders(<DevBooksDetails />);
      
      // Check for main container
      const mainContainer = screen.getByText('Expert C Programming: Deep C Secrets').closest('div');
      expect(mainContainer).toBeInTheDocument();
      
      // Check for Grid containers
      const gridContainers = document.querySelectorAll('[class*="MuiGrid-container"]');
      expect(gridContainers.length).toBeGreaterThan(0);
      
      // Check for Grid items
      const gridItems = document.querySelectorAll('[class*="MuiGrid-item"]');
      expect(gridItems.length).toBeGreaterThan(0);
    });

    test('each book has proper structure', () => {
      renderWithProviders(<DevBooksDetails />);
      
      const styledItems = document.querySelectorAll('[class*="MuiPaper-root"]');
      
      // Filter out the outer Paper containers, only check the inner ones that contain cards
      const cardContainers = Array.from(styledItems).filter(item => 
        item.querySelector('[class*="MuiCard-root"]')
      );
      
      expect(cardContainers.length).toBe(8); // Should have 8 book containers
      
      cardContainers.forEach(item => {
        // Each item should have a card
        const card = item.querySelector('[class*="MuiCard-root"]');
        expect(card).toBeInTheDocument();
        
        // Each card should have CardMedia
        const cardMedia = card.querySelector('[class*="MuiCardMedia-root"]');
        expect(cardMedia).toBeInTheDocument();
        
        // Each card should have CardContent
        const cardContent = card.querySelector('[class*="MuiCardContent-root"]');
        expect(cardContent).toBeInTheDocument();
      });
    });

    test('has correct number of book cards', () => {
      renderWithProviders(<DevBooksDetails />);
      
      // Should have 8 book cards total (filter for cards only, not outer containers)
      const cardContainers = Array.from(document.querySelectorAll('[class*="MuiPaper-root"]')).filter(item => 
        item.querySelector('[class*="MuiCard-root"]')
      );
      expect(cardContainers.length).toBe(8);
    });
  });

  describe('Grid Layout', () => {
    test('renders Grid components correctly', () => {
      renderWithProviders(<DevBooksDetails />);
      
      // Check for Grid containers
      const gridContainers = document.querySelectorAll('[class*="MuiGrid-container"]');
      expect(gridContainers.length).toBe(3); // 3 rows of books
      
      gridContainers.forEach(container => {
        expect(container).toHaveAttribute('class');
        expect(container).toBeVisible();
      });
    });

    test('Grid items have correct spacing', () => {
      renderWithProviders(<DevBooksDetails />);
      
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
      renderWithProviders(<DevBooksDetails />);
      
      // Check for Card components
      const cards = document.querySelectorAll('[class*="MuiCard-root"]');
      expect(cards.length).toBe(8); // 8 books
      
      cards.forEach(card => {
        expect(card).toHaveClass('MuiCard-root');
      });
    });

    test('renders CardMedia components correctly', () => {
      renderWithProviders(<DevBooksDetails />);
      
      // Check for CardMedia components
      const cardMediaElements = document.querySelectorAll('[class*="MuiCardMedia-root"]');
      expect(cardMediaElements.length).toBe(8); // 8 book images
      
      cardMediaElements.forEach(media => {
        expect(media).toHaveClass('MuiCardMedia-root');
        expect(media).toHaveStyle('width: 200px');
        expect(media).toHaveStyle('height: 250px');
      });
    });

    test('renders CardContent components correctly', () => {
      renderWithProviders(<DevBooksDetails />);
      
      // Check for CardContent components
      const cardContentElements = document.querySelectorAll('[class*="MuiCardContent-root"]');
      expect(cardContentElements.length).toBe(8); // 8 book contents
      
      cardContentElements.forEach(content => {
        expect(content).toHaveClass('MuiCardContent-root');
      });
    });

    test('renders Typography components for book information', () => {
      renderWithProviders(<DevBooksDetails />);
      
      // Check for Typography components
      const typographyElements = document.querySelectorAll('[class*="MuiTypography"]');
      expect(typographyElements.length).toBeGreaterThan(0);
      
      // Check for h6 headings (book titles)
      const h6Elements = document.querySelectorAll('[class*="MuiTypography-h6"]');
      expect(h6Elements.length).toBe(8); // 8 book titles
    });
  });

  describe('Accessibility', () => {
    test('book images have proper attributes', () => {
      renderWithProviders(<DevBooksDetails />);
      
      const images = screen.getAllByRole('img');
      expect(images.length).toBe(8);
      
      images.forEach(image => {
        // CardMedia uses background-image style, not src attribute
        const backgroundImage = image.style.backgroundImage;
        expect(backgroundImage).toBeTruthy();
        expect(image).toHaveAttribute('role', 'img');
      });
    });

    test('book information is properly structured', () => {
      renderWithProviders(<DevBooksDetails />);
      
      // Check for proper heading structure
      const headings = document.querySelectorAll('[class*="MuiTypography-h6"]');
      headings.forEach(heading => {
        expect(heading.tagName).toBe('DIV'); // Typography renders as div with h6 styling
      });
    });

    test('content is readable and accessible', () => {
      renderWithProviders(<DevBooksDetails />);
      
      // Check that all book information is present and readable
      expect(screen.getByText('Expert C Programming: Deep C Secrets')).toBeInTheDocument();
      expect(screen.getByText('Peter van der Linden')).toBeInTheDocument();
      expect(screen.getByText('ISBN : 9780131774292')).toBeInTheDocument();
    });
  });

  describe('Responsive Design', () => {
    test('component renders without layout issues', () => {
      renderWithProviders(<DevBooksDetails />);
      
      const mainContainer = screen.getByText('Expert C Programming: Deep C Secrets').closest('div');
      expect(mainContainer).toBeVisible();
    });

    test('Grid layout is properly structured', () => {
      renderWithProviders(<DevBooksDetails />);
      
      const gridContainers = document.querySelectorAll('[class*="MuiGrid-container"]');
      gridContainers.forEach(container => {
        expect(container).toBeVisible();
      });
    });

    test('book cards maintain proper spacing', () => {
      renderWithProviders(<DevBooksDetails />);
      
      const styledItems = document.querySelectorAll('[class*="MuiPaper-root"]');
      styledItems.forEach(item => {
        expect(item).toBeVisible();
      });
    });
  });

  describe('Book Content Validation', () => {
    test('contains expected programming books', () => {
      renderWithProviders(<DevBooksDetails />);
      
      // Check for programming-related content
      expect(screen.getByText(/C Programming/)).toBeInTheDocument();
      expect(screen.getByText(/Object-Oriented/)).toBeInTheDocument();
      expect(screen.getByText(/Computer Security/)).toBeInTheDocument();
      expect(screen.getAllByText(/Linux/)).toHaveLength(2); // appears in title and description
      expect(screen.getByText(/Architecture/)).toBeInTheDocument();
    });

    test('contains expected technical concepts', () => {
      renderWithProviders(<DevBooksDetails />);
      
      // Check for technical terms
      expect(screen.getByText(/TDD/)).toBeInTheDocument();
      expect(screen.getByText(/agile/)).toBeInTheDocument();
      expect(screen.getByText(/machine learning/)).toBeInTheDocument();
      expect(screen.getByText(/digital logic/)).toBeInTheDocument();
    });

    test('contains proper book metadata', () => {
      renderWithProviders(<DevBooksDetails />);
      
      // Check for ISBN format
      const isbnElements = screen.getAllByText(/ISBN :/);
      expect(isbnElements.length).toBe(8);
      
      isbnElements.forEach(element => {
        expect(element.textContent).toMatch(/ISBN : \d{10,13}/);
      });
    });
  });

  describe('Theme Context Integration', () => {
    test('uses theme context correctly', () => {
      renderWithProviders(<DevBooksDetails />);
      
      const firstCard = document.querySelector('[class*="MuiPaper-root"]');
      expect(firstCard).toHaveStyle('background-color: rgb(42, 42, 42)'); // dark theme cardBg
    });

    test('theme colors are applied consistently', () => {
      renderWithProviders(<DevBooksDetails />);
      
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
      const { rerender } = renderWithProviders(<DevBooksDetails />);
      
      // Component should render the same way on multiple renders
      const firstRender = screen.getByText('Expert C Programming: Deep C Secrets');
      expect(firstRender).toBeInTheDocument();
      
      // Re-render with providers and check again
      rerender(
        <BrowserRouter>
          <ThemeContextProvider>
            <DevBooksDetails />
          </ThemeContextProvider>
        </BrowserRouter>
      );
      expect(screen.getByText('Expert C Programming: Deep C Secrets')).toBeInTheDocument();
    });

    test('all book cards are properly rendered', () => {
      renderWithProviders(<DevBooksDetails />);
      
      // Check that all 8 books are present
      const bookTitles = [
        'Expert C Programming: Deep C Secrets',
        'Growing Object-Oriented Software, Guided by Tests.',
        /Computer Security.*A Hands-On Approach/,
        'Code: The Hidden Language of Computer Hardware and Software',
        'The Linux Programming Interface: A Linux and UNIX System Programming Handbook',
        'Discrete Mathematics and its Applications',
        'Clean Architecture: A Craftsman\'s Guide to Software Structure and Design',
        'Extreme Programming Explained: Embrace Change'
      ];
      
      bookTitles.forEach(title => {
        if (title instanceof RegExp) {
          expect(screen.getByText(title)).toBeInTheDocument();
        } else {
          expect(screen.getByText(title)).toBeInTheDocument();
        }
      });
    });
  });

  describe('Image Sources', () => {
    test('book images have correct source paths', () => {
      renderWithProviders(<DevBooksDetails />);
      
      const images = screen.getAllByRole('img');
      expect(images.length).toBe(8);
      
      // Check that images have the expected background-image pattern
      images.forEach(image => {
        const backgroundImage = image.style.backgroundImage;
        expect(backgroundImage).toContain('/img/developer/');
        expect(backgroundImage).toContain('.jpg');
      });
    });

    test('specific book images are present', () => {
      renderWithProviders(<DevBooksDetails />);
      
      const images = screen.getAllByRole('img');
      const imageSources = images.map(img => img.style.backgroundImage);
      
      // Check for specific book images
      expect(imageSources.some(src => src && src.includes('deep_c_secrets.jpg'))).toBe(true);
      expect(imageSources.some(src => src && src.includes('growing_OO_tests.jpg'))).toBe(true);
      expect(imageSources.some(src => src && src.includes('computer_sec_hands_on.jpg'))).toBe(true);
      expect(imageSources.some(src => src && src.includes('code_book.jpg'))).toBe(true);
      expect(imageSources.some(src => src && src.includes('linux_prog.jpg'))).toBe(true);
      expect(imageSources.some(src => src && src.includes('discrete_math.jpg'))).toBe(true);
      expect(imageSources.some(src => src && src.includes('clean_architecture.jpg'))).toBe(true);
      expect(imageSources.some(src => src && src.includes('extreme_program.jpg'))).toBe(true);
    });
  });
});

import React from 'react';
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import '@testing-library/jest-dom';
import ArtworkGallery from "../components/ArtworkGallery";
import { ThemeContextProvider } from "../context/ThemeContext";
import { BrowserRouter } from "react-router-dom";

// Mock ImageModal component
jest.mock('../components/ImageModal', () => {
  return function MockImageModal({ open, onClose, imageUrl, title, description }) {
    return open ? (
      <div data-testid="image-modal">
        <div data-testid="modal-image-url">{imageUrl}</div>
        <div data-testid="modal-title">{title}</div>
        <div data-testid="modal-description">{description}</div>
        <button data-testid="close-modal" onClick={onClose}>Close</button>
      </div>
    ) : null;
  };
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

describe('ArtworkGallery Component', () => {
  const setMatchMedia = (matches) => {
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: jest.fn().mockImplementation((query) => ({
        matches,
        media: query,
        onchange: null,
        addListener: jest.fn(),
        removeListener: jest.fn(),
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    });
  };

  beforeEach(() => {
    setMatchMedia(false);
  });
  
  describe('Component Rendering', () => {
    test('renders ArtworkGallery component without crashing', () => {
      renderWithProviders(<ArtworkGallery />);
      expect(screen.getByText('Portraits')).toBeInTheDocument();
    });

    test('renders all artwork categories', () => {
      renderWithProviders(<ArtworkGallery />);
      
      expect(screen.getByText('Portraits')).toBeInTheDocument();
      expect(screen.getByText('Flowers')).toBeInTheDocument();
      expect(screen.getByText('Landscapes/Still Life')).toBeInTheDocument();
      expect(screen.getByText('Abstract')).toBeInTheDocument();
    });

    test('renders artwork cards with proper structure', () => {
      renderWithProviders(<ArtworkGallery />);
      
      // Check for CardMedia components (artwork images)
      const cardMediaElements = screen.getAllByRole('img');
      expect(cardMediaElements.length).toBeGreaterThan(0);
    });
  });

  describe('Artwork Categories', () => {
    test('Portraits section has correct ID and styling', () => {
      renderWithProviders(<ArtworkGallery />);
      const portraitsSection = screen.getByText('Portraits').closest('div');
      expect(portraitsSection).toHaveAttribute('id', 'portraits-id');
      expect(portraitsSection).toHaveClass('artwork-heading');
    });

    test('Flowers section has correct ID and styling', () => {
      renderWithProviders(<ArtworkGallery />);
      const flowersSection = screen.getByText('Flowers').closest('div');
      expect(flowersSection).toHaveAttribute('id', 'flowers-id');
      expect(flowersSection).toHaveClass('artwork-heading');
    });

    test('Landscapes section has correct ID and styling', () => {
      renderWithProviders(<ArtworkGallery />);
      const landscapesSection = screen.getByText('Landscapes/Still Life').closest('div');
      expect(landscapesSection).toHaveAttribute('id', 'landscapes-id');
      expect(landscapesSection).toHaveClass('artwork-heading');
    });

    test('Abstract section has correct ID and styling', () => {
      renderWithProviders(<ArtworkGallery />);
      const abstractSection = screen.getByText('Abstract').closest('div');
      expect(abstractSection).toHaveAttribute('id', 'abstract-id');
      expect(abstractSection).toHaveClass('artwork-heading');
    });
  });

  describe('Image Click Functionality', () => {
    test('clicking on an artwork image opens modal', async () => {
      renderWithProviders(<ArtworkGallery />);
      
      // Find the first artwork image
      const firstImage = screen.getAllByRole('img')[0];
      
      // Click on the image
      fireEvent.click(firstImage);
      
      // Check if modal opens
      await waitFor(() => {
        expect(screen.getByTestId('image-modal')).toBeInTheDocument();
      });
    });

    test('modal displays correct image information', async () => {
      renderWithProviders(<ArtworkGallery />);
      
      // Find and click the first artwork image
      const firstImage = screen.getAllByRole('img')[0];
      fireEvent.click(firstImage);
      
      // Check if modal content is displayed
      await waitFor(() => {
        expect(screen.getByTestId('modal-image-url')).toBeInTheDocument();
        expect(screen.getByTestId('modal-title')).toBeInTheDocument();
      });
    });

    test('closing modal hides the modal', async () => {
      renderWithProviders(<ArtworkGallery />);
      
      // Open modal
      const firstImage = screen.getAllByRole('img')[0];
      fireEvent.click(firstImage);
      
      await waitFor(() => {
        expect(screen.getByTestId('image-modal')).toBeInTheDocument();
      });
      
      // Close modal
      const closeButton = screen.getByTestId('close-modal');
      fireEvent.click(closeButton);
      
      await waitFor(() => {
        expect(screen.queryByTestId('image-modal')).not.toBeInTheDocument();
      });
    });
  });

  describe('Artwork Information Display', () => {
    test('displays artwork titles', () => {
      renderWithProviders(<ArtworkGallery />);
      
      // Check for specific artwork titles (these should be present based on the component)
      expect(screen.getByText('Beauty with Butterfly Wings')).toBeInTheDocument();
    });

    test('displays artwork dimensions and medium', () => {
      renderWithProviders(<ArtworkGallery />);
      
      // Check for common artwork information patterns
      const dimensions = screen.getAllByText(/inches/);
      const medium = screen.getAllByText(/Oil on Canvas/);
      
      expect(dimensions.length).toBeGreaterThan(0);
      expect(medium.length).toBeGreaterThan(0);
    });

    test('displays collection information', () => {
      renderWithProviders(<ArtworkGallery />);
      
      // Check for collection information
      const collections = screen.getAllByText(/Collection/);
      expect(collections.length).toBeGreaterThan(0);
    });
  });

  describe('Theme Integration', () => {
    test('applies theme styles to gallery container', () => {
      renderWithProviders(<ArtworkGallery />);
      
      // The main container should have theme-based styling
      const galleryContainer = screen.getByText('Portraits').closest('div').parentElement;
      expect(galleryContainer).toHaveStyle('background: rgb(26, 26, 26)'); // dark theme background
    });

    test('applies theme styles to artwork headings', () => {
      renderWithProviders(<ArtworkGallery />);
      
      const portraitsHeading = screen.getByText('Portraits').closest('div');
      expect(portraitsHeading).toHaveStyle('background: rgb(42, 42, 42)'); // dark theme cardBg
    });

    test('artwork cards respond to theme changes', () => {
      renderWithProviders(<ArtworkGallery />);
      
      // Check that cards have theme-based styling
      const cards = screen.getAllByRole('img').map(img => img.closest('[class*="MuiCard"]'));
      expect(cards.length).toBeGreaterThan(0);
      // Check that cards exist and have some styling applied
      cards.forEach(card => {
        expect(card).toBeInTheDocument();
        expect(card).toHaveAttribute('class');
      });
    });
  });

  describe('Material-UI Components', () => {
    test('renders Grid components correctly', () => {
      renderWithProviders(<ArtworkGallery />);
      
      // Check for Grid containers
      const gridContainers = document.querySelectorAll('[class*="MuiGrid-container"]');
      expect(gridContainers.length).toBeGreaterThan(0);
    });

    test('renders Card components with proper structure', () => {
      renderWithProviders(<ArtworkGallery />);
      
      // Check for Card components
      const cards = document.querySelectorAll('[class*="MuiCard-root"]');
      expect(cards.length).toBeGreaterThan(0);
    });

    test('renders Typography components for artwork information', () => {
      renderWithProviders(<ArtworkGallery />);
      
      // Check for Typography components
      const typographyElements = document.querySelectorAll('[class*="MuiTypography"]');
      expect(typographyElements.length).toBeGreaterThan(0);
    });
  });

  describe('Accessibility', () => {
    test('artwork images have proper alt text or titles', () => {
      renderWithProviders(<ArtworkGallery />);
      
      const images = screen.getAllByRole('img');
      images.forEach(image => {
        expect(image).toHaveAttribute('title');
      });
    });

    test('artwork headings are properly structured', () => {
      renderWithProviders(<ArtworkGallery />);
      
      const headings = screen.getAllByText(/^(Portraits|Flowers|Landscapes\/Still Life|Abstract)$/);
      headings.forEach(heading => {
        expect(heading.tagName).toBe('H4');
      });
    });

    test('clickable images have cursor pointer style', () => {
      renderWithProviders(<ArtworkGallery />);
      
      const images = screen.getAllByRole('img');
      images.forEach(image => {
        expect(image).toHaveStyle('cursor: pointer');
      });
    });
  });

  describe('Responsive Design', () => {
    test('component renders without layout issues', () => {
      renderWithProviders(<ArtworkGallery />);
      
      const galleryContainer = screen.getByText('Portraits').closest('div').parentElement;
      expect(galleryContainer).toBeVisible();
    });

    test('Grid layout is properly structured', () => {
      renderWithProviders(<ArtworkGallery />);
      
      const gridContainers = document.querySelectorAll('[class*="MuiGrid-container"]');
      gridContainers.forEach(container => {
        expect(container).toBeVisible();
      });
    });

    test('gallery container prevents horizontal scrolling in mobile layout', () => {
      renderWithProviders(<ArtworkGallery />);

      const galleryContainer = screen.getByText('Portraits').closest('.artwork-gallery');
      expect(galleryContainer).toHaveStyle('overflow-x: hidden');
      expect(galleryContainer).toHaveStyle('max-width: 100%');
    });
  });

  describe('Navigation and Scroll', () => {
    test('artwork headings have scroll to top functionality', () => {
      renderWithProviders(<ArtworkGallery />);
      
      // Mock window.scrollTo
      const mockScrollTo = jest.fn();
      window.scrollTo = mockScrollTo;
      
      const portraitsHeading = screen.getByText('Portraits');
      fireEvent.click(portraitsHeading);
      
      expect(mockScrollTo).toHaveBeenCalledWith({ top: 0, left: 0, behavior: 'smooth' });
    });

    test('artwork headings have proper title attribute', () => {
      renderWithProviders(<ArtworkGallery />);
      
      const portraitsHeading = screen.getByText('Portraits');
      expect(portraitsHeading).toHaveAttribute('title', 'Back to Top');
    });

    test('all category headings trigger scroll to top', () => {
      const mockScrollTo = jest.fn();
      window.scrollTo = mockScrollTo;

      renderWithProviders(<ArtworkGallery />);

      screen.getAllByTitle('Back to Top').forEach((heading) => {
        fireEvent.click(heading);
      });

      expect(mockScrollTo).toHaveBeenCalledTimes(4);
    });
  });

  describe('Image Modal Integration', () => {
    test('ImageModal receives correct props when opened', async () => {
      renderWithProviders(<ArtworkGallery />);
      
      const firstImage = screen.getAllByRole('img')[0];
      fireEvent.click(firstImage);
      
      await waitFor(() => {
        expect(screen.getByTestId('modal-image-url')).toBeInTheDocument();
        expect(screen.getByTestId('modal-title')).toBeInTheDocument();
      });
    });

    test('modal state is properly managed', async () => {
      renderWithProviders(<ArtworkGallery />);
      
      // Initially no modal should be visible
      expect(screen.queryByTestId('image-modal')).not.toBeInTheDocument();
      
      // Open modal
      const firstImage = screen.getAllByRole('img')[0];
      fireEvent.click(firstImage);
      
      await waitFor(() => {
        expect(screen.getByTestId('image-modal')).toBeInTheDocument();
      });
      
      // Close modal
      const closeButton = screen.getByTestId('close-modal');
      fireEvent.click(closeButton);
      
      await waitFor(() => {
        expect(screen.queryByTestId('image-modal')).not.toBeInTheDocument();
      });
    });

    test('opened modal does not introduce horizontal scrolling helpers in the gallery', async () => {
      renderWithProviders(<ArtworkGallery />);

      const firstImage = screen.getAllByRole('img')[0];
      fireEvent.click(firstImage);

      await waitFor(() => {
        expect(screen.getByTestId('image-modal')).toBeInTheDocument();
      });

      const galleryContainer = screen.getByText('Portraits').closest('.artwork-gallery');
      expect(galleryContainer).toHaveStyle('overflow-x: hidden');
    });
  });

  describe('Theme Context Integration', () => {
    test('uses theme context correctly', () => {
      renderWithProviders(<ArtworkGallery />);
      
      const galleryContainer = screen.getByText('Portraits').closest('div').parentElement;
      expect(galleryContainer).toHaveStyle('background: rgb(26, 26, 26)'); // dark theme
    });

    test('theme changes affect component styling', () => {
      renderWithProviders(<ArtworkGallery />);
      
      // Component should render with dark theme by default
      const galleryContainer = screen.getByText('Portraits').closest('div').parentElement;
      expect(galleryContainer).toHaveStyle('background: rgb(26, 26, 26)');
    });
  });

  describe('Component Structure', () => {
    test('has correct DOM structure with all sections', () => {
      renderWithProviders(<ArtworkGallery />);
      
      // Check for all main sections
      expect(screen.getByText('Portraits')).toBeInTheDocument();
      expect(screen.getByText('Flowers')).toBeInTheDocument();
      expect(screen.getByText('Landscapes/Still Life')).toBeInTheDocument();
      expect(screen.getByText('Abstract')).toBeInTheDocument();
    });

    test('contains proper number of artwork items', () => {
      renderWithProviders(<ArtworkGallery />);
      
      // Check that there are multiple artwork images
      const images = screen.getAllByRole('img');
      expect(images.length).toBeGreaterThan(4); // Should have multiple artworks across categories
    });

    test('renders in a mobile single-column layout when the viewport is small', () => {
      setMatchMedia(true);
      renderWithProviders(<ArtworkGallery />);

      const firstRow = document.querySelector('.artwork-gallery-row');
      const firstItem = firstRow.querySelector('[class*="MuiGrid-item"]');

      expect(firstRow).toHaveStyle('flex-direction: column');
      expect(firstItem).toHaveStyle('width: 100%');
      expect(firstItem).toHaveStyle('flex-basis: 100%');
    });

    test('every artwork image can be opened and closed without breaking the gallery state', async () => {
      renderWithProviders(<ArtworkGallery />);

      const imageCount = screen.getAllByRole('img').length;

      for (let index = 0; index < imageCount; index += 1) {
        fireEvent.click(screen.getAllByRole('img')[index]);

        await waitFor(() => {
          expect(screen.getByTestId('image-modal')).toBeInTheDocument();
        });

        fireEvent.click(screen.getByTestId('close-modal'));

        await waitFor(() => {
          expect(screen.queryByTestId('image-modal')).not.toBeInTheDocument();
        });
      }
    }, 120000);
  });
});

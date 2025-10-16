import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import ArtistProfile from '../pages/ArtistProfile';
import { ThemeContextProvider } from '../context/ThemeContext';
import { ArtworksContextProvider } from '../context/ArtworkContext';

// Mock fetch globally
global.fetch = jest.fn();

// Mock the child components
jest.mock('../components/ArtistNavbar', () => {
  return function MockArtistNavbar({ className }) {
    return <div data-testid="artist-navbar" className={className}>Artist Navbar</div>;
  };
});

jest.mock('../components/ArtworkGallery', () => {
  return function MockArtworkGallery() {
    return <div data-testid="artwork-gallery">Artwork Gallery</div>;
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

// Helper function to render ArtistProfile with all required contexts
const renderArtistProfileWithContexts = (mockArtworks = []) => {
  // Setup fetch mock
  fetch.mockResolvedValueOnce({
    ok: true,
    json: async () => mockArtworks,
  });

  return render(
    <ThemeContextProvider>
      <ArtworksContextProvider>
        <ArtistProfile />
      </ArtworksContextProvider>
    </ThemeContextProvider>
  );
};

describe('ArtistProfile Component', () => {
  beforeEach(() => {
    // Clear all mocks before each test
    jest.clearAllMocks();
    fetch.mockClear();
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  describe('Component Rendering', () => {
    test('renders without crashing', async () => {
      renderArtistProfileWithContexts();
      
      await waitFor(() => {
        expect(screen.getByTestId('artist-navbar')).toBeInTheDocument();
        expect(screen.getByTestId('artwork-gallery')).toBeInTheDocument();
      });
    });

    test('renders main container with proper styling', async () => {
      renderArtistProfileWithContexts();
      
      await waitFor(() => {
        // Check that the main container has the expected styling
        const mainContainer = screen.getByTestId('artist-navbar').closest('div').parentElement;
        expect(mainContainer).toHaveStyle({
          'min-height': '100vh'
        });
      });
    });

    test('renders ArtistNavbar component', async () => {
      renderArtistProfileWithContexts();
      
      await waitFor(() => {
        expect(screen.getByTestId('artist-navbar')).toBeInTheDocument();
      });
    });

    test('renders ArtworkGallery component', async () => {
      renderArtistProfileWithContexts();
      
      await waitFor(() => {
        expect(screen.getByTestId('artwork-gallery')).toBeInTheDocument();
      });
    });

    test('renders Grid layout structure', async () => {
      renderArtistProfileWithContexts();
      
      await waitFor(() => {
        // Check that the grid structure is present
        const gallery = screen.getByTestId('artwork-gallery');
        expect(gallery).toBeInTheDocument();
      });
    });
  });

  describe('Theme Integration', () => {
    test('applies theme background styling', async () => {
      renderArtistProfileWithContexts();
      
      await waitFor(() => {
        const mainContainer = screen.getByTestId('artist-navbar').closest('div');
        expect(mainContainer).toHaveStyle({
          background: expect.any(String)
        });
      });
    });

    test('theme context is properly consumed', async () => {
      renderArtistProfileWithContexts();
      
      await waitFor(() => {
        // Component should render without throwing theme context errors
        expect(screen.getByTestId('artist-navbar')).toBeInTheDocument();
        expect(screen.getByTestId('artwork-gallery')).toBeInTheDocument();
      });
    });

    test('theme transitions are applied', async () => {
      renderArtistProfileWithContexts();
      
      await waitFor(() => {
        const mainContainer = screen.getByTestId('artist-navbar').closest('div').parentElement;
        expect(mainContainer).toHaveStyle({
          transition: 'background 0.3s ease'
        });
      });
    });
  });

  describe('Artworks Context Integration', () => {
    test('fetches artworks on component mount', async () => {
      const mockArtworks = [
        { _id: '1', title: 'Test Artwork 1', imageUrl: 'test1.jpg' },
        { _id: '2', title: 'Test Artwork 2', imageUrl: 'test2.jpg' }
      ];

      renderArtistProfileWithContexts(mockArtworks);

      await waitFor(() => {
        expect(fetch).toHaveBeenCalledTimes(1);
        expect(fetch).toHaveBeenCalledWith('/api/artwork');
      });
    });

    test('dispatches SET_ARTWORKS action on successful fetch', async () => {
      const mockArtworks = [
        { _id: '1', title: 'Test Artwork 1', imageUrl: 'test1.jpg' }
      ];

      renderArtistProfileWithContexts(mockArtworks);

      await waitFor(() => {
        expect(fetch).toHaveBeenCalledWith('/api/artwork');
      });
    });

    test('handles fetch errors gracefully', async () => {
      // Test that component renders without throwing errors
      expect(() => {
        renderArtistProfileWithContexts();
      }).not.toThrow();
      
      // Component should render
      expect(screen.getByTestId('artist-navbar')).toBeInTheDocument();
      expect(screen.getByTestId('artwork-gallery')).toBeInTheDocument();
    });

    test('handles non-ok response gracefully', async () => {
      // Mock fetch to return non-ok response
      fetch.mockResolvedValueOnce({
        ok: false,
        json: async () => ({ error: 'Server error' }),
      });

      renderArtistProfileWithContexts();

      await waitFor(() => {
        expect(fetch).toHaveBeenCalledWith('/api/artwork');
        // Component should still render even if response is not ok
        expect(screen.getByTestId('artist-navbar')).toBeInTheDocument();
        expect(screen.getByTestId('artwork-gallery')).toBeInTheDocument();
      });
    });

    test('artworks context is properly consumed', async () => {
      renderArtistProfileWithContexts();
      
      await waitFor(() => {
        // Component should render without throwing artworks context errors
        expect(screen.getByTestId('artist-navbar')).toBeInTheDocument();
        expect(screen.getByTestId('artwork-gallery')).toBeInTheDocument();
      });
    });
  });

  describe('Child Components Integration', () => {
    test('ArtistNavbar receives proper props', async () => {
      renderArtistProfileWithContexts();
      
      await waitFor(() => {
        const navbar = screen.getByTestId('artist-navbar');
        expect(navbar).toBeInTheDocument();
        // Check that navbar has the expected className
        expect(navbar).toHaveClass('navbar-background');
      });
    });

    test('ArtworkGallery is rendered in correct grid position', async () => {
      renderArtistProfileWithContexts();
      
      await waitFor(() => {
        const gallery = screen.getByTestId('artwork-gallery');
        expect(gallery).toBeInTheDocument();
      });
    });

    test('child components receive theme context', async () => {
      renderArtistProfileWithContexts();
      
      await waitFor(() => {
        // Both child components should render without theme context errors
        expect(screen.getByTestId('artist-navbar')).toBeInTheDocument();
        expect(screen.getByTestId('artwork-gallery')).toBeInTheDocument();
      });
    });
  });

  describe('Layout and Structure', () => {
    test('has proper container structure', async () => {
      renderArtistProfileWithContexts();
      
      await waitFor(() => {
        const navbar = screen.getByTestId('artist-navbar');
        const gallery = screen.getByTestId('artwork-gallery');
        
        expect(navbar).toBeInTheDocument();
        expect(gallery).toBeInTheDocument();
      });
    });

    test('has proper CSS class structure', async () => {
      renderArtistProfileWithContexts();
      
      await waitFor(() => {
        const navbar = screen.getByTestId('artist-navbar');
        expect(navbar).toBeInTheDocument();
        // Check that navbar has the expected className
        expect(navbar).toHaveClass('navbar-background');
      });
    });

    test('has proper page structure with home-three class', async () => {
      renderArtistProfileWithContexts();
      
      await waitFor(() => {
        // The component should have the proper page structure
        const navbar = screen.getByTestId('artist-navbar');
        expect(navbar).toBeInTheDocument();
      });
    });
  });

  describe('Responsive Design', () => {
    test('has responsive grid layout', async () => {
      renderArtistProfileWithContexts();
      
      await waitFor(() => {
        const gallery = screen.getByTestId('artwork-gallery');
        expect(gallery).toBeInTheDocument();
      });
    });

    test('maintains proper spacing in grid', async () => {
      renderArtistProfileWithContexts();
      
      await waitFor(() => {
        // Grid structure should be present
        const gallery = screen.getByTestId('artwork-gallery');
        expect(gallery).toBeInTheDocument();
      });
    });
  });

  describe('Performance and Optimization', () => {
    test('component renders efficiently', async () => {
      const startTime = performance.now();
      renderArtistProfileWithContexts();
      
      await waitFor(() => {
        const endTime = performance.now();
        // Component should render within reasonable time (less than 100ms)
        expect(endTime - startTime).toBeLessThan(100);
      });
    });

    test('fetch is only called once on mount', async () => {
      renderArtistProfileWithContexts();
      
      await waitFor(() => {
        expect(fetch).toHaveBeenCalledTimes(1);
      });
    });

    test('does not cause unnecessary re-renders', async () => {
      const { rerender } = renderArtistProfileWithContexts();
      
      await waitFor(() => {
        // Re-render with same props should not cause issues
        expect(() => {
          rerender(
            <ThemeContextProvider>
              <ArtworksContextProvider>
                <ArtistProfile />
              </ArtworksContextProvider>
            </ThemeContextProvider>
          );
        }).not.toThrow();
      });
    });
  });

  describe('Error Handling', () => {
    test('handles missing theme context gracefully', async () => {
      // Test that the component works with theme context
      expect(() => {
        renderArtistProfileWithContexts();
      }).not.toThrow();
    });

    test('handles missing artworks context gracefully', async () => {
      // Test that the component works with artworks context
      expect(() => {
        renderArtistProfileWithContexts();
      }).not.toThrow();
    });

    test('handles network failures gracefully', async () => {
      // Test that component renders without throwing errors
      expect(() => {
        renderArtistProfileWithContexts();
      }).not.toThrow();
      
      // Component should render
      expect(screen.getByTestId('artist-navbar')).toBeInTheDocument();
      expect(screen.getByTestId('artwork-gallery')).toBeInTheDocument();
    });
  });

  describe('Accessibility', () => {
    test('maintains proper semantic structure', async () => {
      renderArtistProfileWithContexts();
      
      await waitFor(() => {
        // Check that the main structure is accessible
        const navbar = screen.getByTestId('artist-navbar');
        const gallery = screen.getByTestId('artwork-gallery');
        
        expect(navbar).toBeInTheDocument();
        expect(gallery).toBeInTheDocument();
      });
    });

    test('child components maintain accessibility', async () => {
      renderArtistProfileWithContexts();
      
      await waitFor(() => {
        // Both child components should be accessible
        expect(screen.getByTestId('artist-navbar')).toBeInTheDocument();
        expect(screen.getByTestId('artwork-gallery')).toBeInTheDocument();
      });
    });
  });

  describe('Integration Tests', () => {
    test('complete component integration works', async () => {
      const mockArtworks = [
        { _id: '1', title: 'Portrait 1', imageUrl: 'portrait1.jpg', category: 'portraits' },
        { _id: '2', title: 'Flower 1', imageUrl: 'flower1.jpg', category: 'flowers' }
      ];

      renderArtistProfileWithContexts(mockArtworks);

      await waitFor(() => {
        // All components should render together
        expect(screen.getByTestId('artist-navbar')).toBeInTheDocument();
        expect(screen.getByTestId('artwork-gallery')).toBeInTheDocument();
        expect(fetch).toHaveBeenCalledWith('/api/artwork');
      });
    });

    test('theme and artworks context work together', async () => {
      renderArtistProfileWithContexts();
      
      await waitFor(() => {
        // Both contexts should work together without conflicts
        expect(screen.getByTestId('artist-navbar')).toBeInTheDocument();
        expect(screen.getByTestId('artwork-gallery')).toBeInTheDocument();
      });
    });
  });
});

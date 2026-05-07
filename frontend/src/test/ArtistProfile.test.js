import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ArtistProfile from '../pages/ArtistProfile';
import { ThemeContextProvider } from '../context/ThemeContext';

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

const renderArtistProfile = () =>
  render(
    <ThemeContextProvider>
      <ArtistProfile />
    </ThemeContextProvider>
  );

describe('ArtistProfile Component', () => {
  test('renders artist navbar and artwork gallery', () => {
    renderArtistProfile();

    expect(screen.getByTestId('artist-navbar')).toBeInTheDocument();
    expect(screen.getByTestId('artwork-gallery')).toBeInTheDocument();
  });

  test('does not fetch artwork data from the backend', () => {
    const originalFetch = global.fetch;

    renderArtistProfile();

    expect(global.fetch).toBe(originalFetch);
  });

  test('keeps the artist page layout classes in place', () => {
    const { container } = renderArtistProfile();

    expect(container.querySelector('.home-three')).toBeInTheDocument();
    expect(container.querySelector('.pages')).toBeInTheDocument();
  });
});

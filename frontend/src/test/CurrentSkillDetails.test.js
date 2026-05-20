import React from 'react';
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import CurrentSkillDetails from "../components/CurrentSkillDetails";
import { ThemeContextProvider } from "../context/ThemeContext";
import { BrowserRouter } from "react-router-dom";

const SKILLS = [
  {
    name: 'ReactJS',
    href: 'https://github.com/jmarsha82/jm-mern-resume-portal',
    description: /website and implementation using java Spring Framework/i,
  },
  {
    name: 'Python',
    href: 'https://github.com/jmarsha82/cse-511a-pacman-ai',
    description: /Machine learning projects and neural network research/i,
  },
  {
    name: 'C++',
    href: 'https://isocpp.org/std/the-standard',
    description: /Executable and Webassembly projects using a SimConnect API/i,
  },
  {
    name: 'Jest',
    href: 'https://github.com/jmarsha82/jm-mern-resume-portal/tree/master/frontend/src/test',
    description: /Used to test javascript code in both work and personal projects/i,
  },
  {
    name: 'Codex',
    href: 'https://openai.com/codex/',
    description: /CLI for coding assitance/i,
  },
];

const renderWithProviders = (component) => render(
  <BrowserRouter>
    <ThemeContextProvider>
      {component}
    </ThemeContextProvider>
  </BrowserRouter>
);

describe('CurrentSkillDetails Component', () => {
  test('renders all current skills and descriptions', () => {
    renderWithProviders(<CurrentSkillDetails />);

    SKILLS.forEach(({ name, description }) => {
      expect(screen.getByText(name)).toBeInTheDocument();
      expect(screen.getByText(description)).toBeInTheDocument();
    });
  });

  test('renders five skill cards', () => {
    renderWithProviders(<CurrentSkillDetails />);
    expect(document.querySelectorAll('.current-skill-details')).toHaveLength(5);
    expect(document.querySelectorAll('.current-skill-details-desc')).toHaveLength(5);
  });

  test('renders the expected external links', () => {
    renderWithProviders(<CurrentSkillDetails />);

    const links = screen.getAllByRole('link');
    expect(links).toHaveLength(5);

    SKILLS.forEach(({ name, href }) => {
      const link = screen.getByText(name).closest('a');
      expect(link).toHaveAttribute('href', href);
      expect(link).toHaveAttribute('target', '_blank');
      expect(link).toHaveAttribute('aria-label', 'Used Daily');
      expect(link).toHaveClass('MuiButton-root');
      expect(link).toHaveClass('MuiButton-contained');
    });
  });

  test('applies dark theme styling by default', () => {
    renderWithProviders(<CurrentSkillDetails />);

    document.querySelectorAll('.current-skill-details').forEach((card) => {
      expect(card).toHaveStyle('background: rgb(42, 42, 42)');
      expect(card).toHaveStyle('color: rgb(224, 224, 224)');
    });

    screen.getAllByRole('link').forEach((link) => {
      expect(link).toHaveStyle('background: rgb(0, 255, 255)');
      expect(link).toHaveStyle('color: rgb(0, 0, 0)');
    });
  });

  test('renders without layout or accessibility issues', () => {
    renderWithProviders(<CurrentSkillDetails />);

    screen.getAllByRole('link').forEach((link) => {
      expect(link).toBeVisible();
      expect(link).toHaveAttribute('tabindex', '0');
    });

    document.querySelectorAll('.current-skill-details-desc').forEach((description) => {
      expect(description.textContent.length).toBeGreaterThan(10);
    });
  });

  test('renders Codex as the final current skill', () => {
    renderWithProviders(<CurrentSkillDetails />);

    const links = screen.getAllByRole('link');
    expect(links[links.length - 1]).toHaveTextContent('Codex');
    expect(links[links.length - 1]).toHaveAttribute('href', 'https://openai.com/codex/');
  });
});

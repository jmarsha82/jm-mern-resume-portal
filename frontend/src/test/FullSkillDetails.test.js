import React from 'react';
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import FullSkillDetails from "../components/FullSkillDetails";
import { ThemeContextProvider } from "../context/ThemeContext";
import { BrowserRouter } from "react-router-dom";

const SKILLS = [
  { name: 'Codex', href: 'https://openai.com/codex/', aria: 'Used Daily', description: /CLI for coding assitance/i },
  { name: 'Kiro', href: 'https://kiro.dev/', aria: 'Used Daily', description: /built in features for work projects/i },
  { name: 'Visual Studio', href: 'https://visualstudio.microsoft.com/', aria: 'Used Daily', description: /VSCode for Python and React Projects/i },
  { name: 'Test-Driven Development', href: 'https://www.ibm.com/garage/method/practices/code/practice_test_driven_development/', aria: 'Used Daily', description: /work related development and most hobby codding/i },
  { name: 'SimConnect', href: 'https://docs.flightsimulator.com/html/Programming_Tools/SimConnect/SimConnect_SDK.htm', aria: 'Used Daily', description: /flight simulator api/i },
  { name: 'HTML, CSS, Typescript, Javascript', href: 'https://www.w3schools.com/', aria: 'Used Daily', description: /Used in all web apps and sites as part of my job/i },
  { name: 'Azure Dev Ops', href: 'https://azure.microsoft.com/en-us/products/devops/', aria: 'Used Daily', description: /Source Control, Work Tracking, Testing, Ci\/CD/i },
  { name: 'SQL', href: 'https://www.sqltutorial.org/', aria: 'Used Frequently', description: /implementing most backends/i },
  { name: 'Postman', href: 'https://www.postman.com/', aria: 'Used Frequently', description: /new backend apis/i },
  { name: 'Virtual Box', href: 'https://www.virtualbox.org/', aria: 'Used Ocassionally', description: /VM images/i },
  { name: 'Spring Framework', href: 'https://spring.io/guides', aria: 'Used Ocassionally', description: /java and kotlin/i },
  { name: 'JUnit', href: 'https://junit.org/', aria: 'Used Ocassionally', description: /testing Java backends/i },
  { name: 'Java', href: 'hhttps://github.com/jmarsha82/cse-530s-databases', aria: 'Used Occasionally', description: /Like riding a bike/i },
  { name: 'AWS', href: 'https://aws.amazon.com/', aria: 'Used Occasionally', description: /EC2 for machine learning IoT/i },
  { name: 'IntelliJ', href: 'https://www.jetbrains.com/idea/', aria: 'Used Occasionally', description: /Preferred IDE when working in Java/i },
  { name: 'Thymeleaf', href: 'https://www.thymeleaf.org/', aria: 'Used Rarely', description: /Use with Javascript and a java Spring Framework/i },
  { name: 'Swift', href: 'https://github.com/jmarsha82/smart-shopper-mobile-app', aria: 'Used Rarely', description: /mulitple mobile apps/i },
  { name: 'Oracle SQL Developer', href: 'https://www.oracle.com/database/sqldeveloper/', aria: 'Used Rarely', description: /Backend testing tool/i },
  { name: 'Linux', href: 'https://www.linux.org/pages/download/', aria: 'Used Rarely', description: /file management and scripting/i },
  { name: 'Kotlin', href: 'https://kotlinlang.org/', aria: 'Used Rarely', description: /Used with Spring Framework and ReactJS frontend/i },
];

const renderWithProviders = (component) => render(
  <BrowserRouter>
    <ThemeContextProvider>
      {component}
    </ThemeContextProvider>
  </BrowserRouter>
);

describe('FullSkillDetails Component', () => {
  test('renders every skill title and description', () => {
    renderWithProviders(<FullSkillDetails />);

    SKILLS.forEach(({ name, description }) => {
      expect(screen.getByText(name)).toBeInTheDocument();
      expect(screen.getByText(description)).toBeInTheDocument();
    });
  });

  test('renders the expected number of skill cards and descriptions', () => {
    renderWithProviders(<FullSkillDetails />);
    expect(document.querySelectorAll('.current-skill-details')).toHaveLength(20);
    expect(document.querySelectorAll('.current-skill-details-desc')).toHaveLength(20);
  });

  test('renders skill buttons with the current link targets and tooltip labels', () => {
    renderWithProviders(<FullSkillDetails />);

    const links = screen.getAllByRole('link');
    expect(links).toHaveLength(20);

    SKILLS.forEach(({ name, href, aria }) => {
      const link = screen.getByText(name).closest('a');
      expect(link).toHaveAttribute('href', href);
      expect(link).toHaveAttribute('target', '_blank');
      expect(link).toHaveAttribute('aria-label', aria);
      expect(link).toHaveClass('MuiButton-root');
      expect(link).toHaveClass('MuiButton-contained');
    });
  });

  test('applies dark theme styling by default', () => {
    renderWithProviders(<FullSkillDetails />);

    document.querySelectorAll('.current-skill-details').forEach((card) => {
      expect(card).toHaveStyle('background: rgb(42, 42, 42)');
      expect(card).toHaveStyle('color: rgb(224, 224, 224)');
    });

    screen.getAllByRole('link').forEach((link) => {
      expect(link).toHaveStyle('background: rgb(0, 255, 255)');
      expect(link).toHaveStyle('color: rgb(0, 0, 0)');
    });
  });

  test('keeps tooltip category counts aligned with the component data', () => {
    renderWithProviders(<FullSkillDetails />);

    const labels = screen.getAllByRole('link').map((link) => link.getAttribute('aria-label'));
    expect(labels.filter((label) => label === 'Used Daily')).toHaveLength(7);
    expect(labels.filter((label) => label === 'Used Frequently')).toHaveLength(2);
    expect(labels.filter((label) => label === 'Used Ocassionally')).toHaveLength(3);
    expect(labels.filter((label) => label === 'Used Occasionally')).toHaveLength(3);
    expect(labels.filter((label) => label === 'Used Rarely')).toHaveLength(5);
  });

  test('renders readable content with valid external-style links', () => {
    renderWithProviders(<FullSkillDetails />);

    screen.getAllByRole('link').forEach((link, index) => {
      expect(link).toBeVisible();
      expect(link.getAttribute('href')).toBe(SKILLS[index].href);
    });

    document.querySelectorAll('.current-skill-details-desc').forEach((description) => {
      expect(description.textContent.length).toBeGreaterThan(10);
    });
  });
});

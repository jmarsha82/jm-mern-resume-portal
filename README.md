# Justin Marshall Personal Website
### App Tech Stack
- React(.js) - a client-side JavaScript framework
- EmailJS - browser-based email delivery for the contact form

## Testing
Unit tests live in one unified location: `frontend/src/test`.

Navigate to `jm-mern-resume-portal/frontend` and run:

```bash
npm run test:all
```

For a faster local run without coverage, use:

```bash
npm test
```

The coverage command runs Jest against `src/test` and writes coverage output to `frontend/coverage`.

## GitHub Actions Pipeline
The CI workflow runs on pushes to `master` and `dev`, and on pull requests targeting `master` or `dev`.

### Unit Tests
- Installs frontend dependencies with `npm ci`.
- Runs `npm run test:all -- --watchAll=false`.
- Uploads the Jest coverage folder as a workflow artifact.

### Code Scanning: Quality
- Builds the frontend with `npm run build` to catch React/Webpack compilation problems.
- Runs Super-Linter as a free GitHub Actions quality gate for workflow, JSON, YAML, and Markdown files.
- Keeps unrelated default Super-Linter scanners disabled so the quality job only checks tooling that this repo has configured.

### Code Scanning: Security
- Runs GitHub CodeQL for JavaScript/TypeScript with the security and quality query suites.
- Runs Dependency Review on pull requests so dependency additions are checked for known vulnerabilities and license risk.

### Dependency Automation
- Dependabot is configured for weekly npm updates in `frontend`.
- Dependabot is configured for weekly GitHub Actions updates.
- GitHub-native Dependabot alerts, security updates, and secret scanning may also be enabled in repository settings when available for the repo plan/visibility.

## Local Development
- Navigate to `jm-mern-resume-portal/frontend`
- Build the static app

```bash
npm run build
```

- Serve the static build locally

```bash
npm run serve
```

- Or build and serve with one command

```bash
npm run dev
```

This project intentionally uses a build-and-serve workflow instead of a hot-reload development server. After changing source files, stop the server if it is running, rerun `npm run build`, then rerun `npm run serve`.

## App Structure
### Programmer Persona
- General Information
- Current Skill List
- Experience
- Education
- Full Skill List
- Dev Books
- Dev Links

### Artist Persona
- Portraits
- Flowers
- Landscapes/Still Life
- Abstract

### About
- A section of the website that talks about development and art history.

### Contact Me
- A frontend-only contact form powered by EmailJS.

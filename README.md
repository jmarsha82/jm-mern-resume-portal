# Justin Marshall Personal Website
### App Tech Stack
- React(.js) - a client-side JavaScript framework
- EmailJS - browser-based email delivery for the contact form

## Testing
- Navigate to `jm-mern-resume-portal/frontend`
- Run the following command

```bash
npm run test:all
```

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

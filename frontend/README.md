# Justin Marshall Frontend

This React app is built as static files and served locally without a hot-reload development server.

## Available Scripts

In the project directory, you can run:

### `npm run build`

Builds the app for production to the `build` folder.

### `npm run serve`

Serves the existing `build` folder at [http://127.0.0.1:3000](http://127.0.0.1:3000).

### `npm run dev`

Runs `npm run build` and then `npm run serve`.

This project intentionally uses a build-and-serve workflow instead of a hot-reload development server. After changing source files, stop the server if it is running, rerun `npm run build`, then rerun `npm run serve`.

### `npm test`

Runs the Jest test suite.

### `npm run test:all`

Runs the Jest test suite with coverage using the repository's test path pattern.

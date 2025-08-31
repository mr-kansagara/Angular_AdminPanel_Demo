# AdminPanel_Demo

A scalable, maintainable Angular admin panel built with strict TypeScript and Angular best practices.

## Features

- **Standalone Components:** All components are standalone by default, simplifying structure and improving modularity.
- **Lazy Loading:** Feature routes (`auth`, `dashboard`, `products`) are lazy-loaded for optimal performance.
- **Signals for State Management:** Local and derived state are managed using Angular signals and `computed()` functions for predictable, efficient updates.
- **Reactive Forms:** All forms use Angular’s reactive forms for robust validation and state handling.
- **Change Detection:** Components use `ChangeDetectionStrategy.OnPush` for efficient rendering.
- **Routing:** Angular Router is configured with feature-based route configuration and guards for protected routes.
- **Centralized Providers & Imports:** Common Angular modules and providers are managed centrally for clean code organization.
- **Strict TypeScript:** Strict type checking is enforced, with type inference preferred and `any` avoided.
- **Accessibility & Performance:** Static images use `NgOptimizedImage` for fast loading, and templates use native control flow for clarity.
- **Constants & Enums:** Route paths and endpoints are managed via centralized constants and enums for maintainability.
- **Guards:** Route guards protect sensitive routes and enforce authentication.

## Coding Standards

This project follows these standards:

- **TypeScript**
  - Strict type checking
  - Prefer type inference
  - Avoid `any`; use `unknown` if type is uncertain

- **Angular**
  - Standalone components only (no NgModules)
  - No `standalone: true` in decorators (default)
  - Signals for state management
  - Lazy loading for feature routes
  - Host bindings via `host` object, not decorators
  - Use `NgOptimizedImage` for static images (not for inline base64)
  - Small, focused components
  - Use `input()` and `output()` functions
  - Use `computed()` for derived state
  - Inline templates for small components
  - Reactive forms only
  - Use `class` and `style` bindings, not `ngClass`/`ngStyle`
  - Native control flow (`@if`, `@for`, `@switch`) in templates
  - Async pipe for observables
  - Pure, predictable state transformations
  - No `mutate` on signals; use `update` or `set`
  - Services with single responsibility, `providedIn: 'root'`
  - Use `inject()` for dependency injection

## Structure

- **src/app**: Root application setup and route configuration
- **src/features/auth**: Authentication feature (login, register, guards)
- **src/features/dashboard**: Dashboard feature
- **src/features/products**: Products feature
- **src/constants**: Centralized route and endpoint constants/enums
- **src/shared/imports**: Centralized imports and providers

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```
2. Run the development server:
   ```bash
   ng serve
   ```
3. Open [http://localhost:4200](http://localhost:4200) in your browser.

## Contributing

Contributions are welcome! Please follow the coding standards outlined above.
---------------------------------------------------------------------------------------------------------------------------------------------------

# AdminPanelDemo

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.2.1.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

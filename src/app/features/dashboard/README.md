# Dashboard Feature

The dashboard follows a simple feature boundary:

```text
page/components -> DashboardStore -> DashboardApi -> HTTP backend
```

## Responsibilities

- `models/` contains application-facing types.
- `services/dashboard-api.ts` defines HTTP resources and their default values.
- `state/dashboard.store.ts` exposes dashboard signals, derived loading/error state, and refresh actions.
- `pages/` composes the feature and consumes the store.
- `components/` renders data from the store. Components should not read seed data or call the API directly.
- `app-data.ts` uses `services/dashboard-data.ts` as in-memory backend seed data for local development. It is not a component data source.

When adding a dashboard data set, add its model and `httpResource` to the API, expose it from the store, and then bind the consuming component to the store. Keep backend seed data in `DashboardData` until a real backend replaces the in-memory API.

The feature has no child routes. Add a `dashboard.routes.ts` file only when dashboard-specific child pages are introduced.

## Copy This Feature

1. Copy the feature folders: `models/`, `services/`, `state/`, `pages/`, and `components/`.
2. Rename `Dashboard` in filenames, classes, selectors, and imports to the new feature name.
3. Replace the API resource types, URLs, and default values in the feature API service.
4. Move local backend seed data into a new `[feature]-data.ts` file and register it in `app-data.ts`.
5. Expose each API resource from the feature store as a readonly signal.
6. Keep feature state and user actions in the store, such as filters, selected ranges, save methods, and refresh methods.
7. Inject the store in the page and feature components. Do not inject the API into components.
8. Add the feature route to `app.routes.ts`; create a feature routes file only when child routes are needed.
9. Copy the tests, then replace the dashboard-specific fixtures and assert loading, error, empty, and success states.
10. Add a feature README describing its API endpoints, store state, and local seed data.

The smallest useful feature has one model, one API service, one store, one page, and one page test. Add child components only when they have an independent rendering or interaction responsibility.

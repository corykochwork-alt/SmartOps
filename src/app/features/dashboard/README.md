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
- `components/` renders data passed from the store. Components should not read seed data or call the API directly.
- `app-data.ts` uses `services/dashboard-data.ts` as in-memory backend seed data for local development. It is not a component data source.

When adding a dashboard data set, add its model and `httpResource` to the API, expose it from the store, and then bind the consuming component to the store. Keep backend seed data in `DashboardData` until a real backend replaces the in-memory API.

The feature has no child routes. Add a `dashboard.routes.ts` file only when dashboard-specific child pages are introduced.

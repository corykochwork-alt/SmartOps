# Dashboard Feature

The dashboard has one data boundary:

```text
Dashboard page/components -> DashboardStore -> DashboardApi -> HTTP backend
						   ^
				      AppData local development backend
```

## Structure

- `models/` contains types returned by dashboard resources.
- `services/dashboard-api.ts` owns resource URLs, request timeouts, and safe default values. It uses Angular `httpResource` so consumers read signals rather than subscribe to HTTP calls.
- `services/dashboard-data.ts` contains seed collections for the in-memory development backend. It is registered by `app-data.ts`; components must not import it.
- `state/dashboard.store.ts` is the feature facade. It exposes readonly resource values, aggregate loading/error state, the selected trend duration, and the refresh action.
- `pages/dashboard/` composes the page and passes KPI values to the KPI cards.
- `components/` owns focused rendering and interaction. Components consume the store and do not inject `DashboardApi`.

## Resources

`DashboardApi` currently maps these requests under `api/dashboard/`:

| Resource | Response | Consumer |
| --- | --- | --- |
| `kpis` | `DashboardMetrics` | Dashboard page |
| `top-alarm-sources` | `{ Name: string; Percentage: number }[]` | Alarm trend component |
| `alarms` | `DashboardAlarm[]` | Recent alarms component |
| `totalAlarms` | `number[]` | Alarm trend component |
| `criticalAlarms` | `number[]` | Alarm trend component |
| `warningAlarms` | `number[]` | Alarm trend component |

The in-memory adapter removes the feature segment before resolving these URLs. A real backend should preserve the `api/dashboard/...` paths or the adapter should be removed with the corresponding provider in `app.config.ts`.

## Extending The Feature

1. Add or update a model in `models/` when a response has a reusable application shape.
2. Add the resource and its default value to `DashboardApi`.
3. Expose its value and any feature-level loading/error state from `DashboardStore`.
4. Bind a page or focused component to the store. Keep filtering and user actions in the store when they affect more than one view.
5. Add matching seed data to `DashboardData` and register it in `AppData` while the in-memory backend is enabled.
6. Add tests for success, loading, error, empty, and interaction states relevant to the new resource.

The feature has no child routes. Add a `dashboard.routes.ts` file only when dashboard-specific child pages are introduced; keep the top-level route lazy-loaded in `app.routes.ts`.

## Verification

Dashboard test files cover the page, store, API service, KPI cards, recent alarms, and alarm trend behavior. Run the test suite with:

```text
npm test
```

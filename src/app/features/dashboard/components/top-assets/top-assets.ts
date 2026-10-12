import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { DashboardStore } from '../../state/dashboard.store';

@Component({
  selector: 'app-top-assets',
  imports: [RouterLink],
  templateUrl: './top-assets.html',
  styleUrl: './top-assets.css',
})
export class TopAssets {
  private readonly dashboardStore = inject(DashboardStore);

  readonly assets = this.dashboardStore.topAssets;
  readonly isLoading = this.dashboardStore.isAssetsLoading;
  readonly error = this.dashboardStore.assetsError;
}

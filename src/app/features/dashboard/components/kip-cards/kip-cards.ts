import { Component, input } from '@angular/core';

@Component({
  selector: 'app-kip-cards',
  imports: [],
  templateUrl: './kip-cards.html',
  styleUrl: './kip-cards.css',
})
export class KipCards {
  kpiName = input.required<string>();
  kpiNumber = input.required<number>();
}

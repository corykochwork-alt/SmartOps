import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopAssets } from './top-assets';

describe('TopAssets', () => {
  let component: TopAssets;
  let fixture: ComponentFixture<TopAssets>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopAssets],
    }).compileComponents();

    fixture = TestBed.createComponent(TopAssets);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

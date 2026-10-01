import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideLayout } from './side-layout';

describe('SideLayout', () => {
  let component: SideLayout;
  let fixture: ComponentFixture<SideLayout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SideLayout],
    }).compileComponents();

    fixture = TestBed.createComponent(SideLayout);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Assets } from './assets';

describe('Assets', () => {
  let component: Assets;
  let fixture: ComponentFixture<Assets>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Assets],
    }).compileComponents();

    fixture = TestBed.createComponent(Assets);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the assets page content', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('assets works!');
  });
});

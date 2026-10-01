import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { TopNav } from './top-nav';

describe('TopNav', () => {
  let component: TopNav;
  let fixture: ComponentFixture<TopNav>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopNav],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(TopNav);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the brand and primary navigation links', () => {
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.querySelector('.brand')?.textContent).toContain('SmartOps Monitor');
    expect(compiled.querySelectorAll('li').length).toBe(6);
    expect(compiled.textContent).toContain('Dashboard');
    expect(compiled.textContent).toContain('Assets');
    expect(compiled.textContent).toContain('Admin');
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KipCards } from './kip-cards';

describe('KipCards', () => {
  let component: KipCards;
  let fixture: ComponentFixture<KipCards>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KipCards],
    }).compileComponents();

    fixture = TestBed.createComponent(KipCards);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('kpiName', 'Assets Online');
    fixture.componentRef.setInput('kpiNumber', 1428);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the KPI title and value', () => {
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.querySelector('h1')?.textContent).toBe('Assets Online');
    expect(compiled.querySelector('p')?.textContent).toBe('1428');
  });
});

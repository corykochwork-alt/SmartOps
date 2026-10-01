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
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

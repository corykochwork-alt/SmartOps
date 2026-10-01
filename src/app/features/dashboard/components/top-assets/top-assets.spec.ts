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
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the top assets page text', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('top-assets works!');
  });
});

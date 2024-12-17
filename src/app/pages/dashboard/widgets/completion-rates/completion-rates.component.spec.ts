import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletionRatesComponent } from './completion-rates.component';

describe('CompletionRatesComponent', () => {
  let component: CompletionRatesComponent;
  let fixture: ComponentFixture<CompletionRatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompletionRatesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompletionRatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

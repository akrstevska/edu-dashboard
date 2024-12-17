import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveEnrollmentsComponent } from './active-enrollments.component';

describe('ActiveEnrollmentsComponent', () => {
  let component: ActiveEnrollmentsComponent;
  let fixture: ComponentFixture<ActiveEnrollmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActiveEnrollmentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActiveEnrollmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

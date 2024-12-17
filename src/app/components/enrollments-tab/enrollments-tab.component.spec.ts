import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrollmentsTabComponent } from './enrollments-tab.component';

describe('EnrollmentsTabComponent', () => {
  let component: EnrollmentsTabComponent;
  let fixture: ComponentFixture<EnrollmentsTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnrollmentsTabComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnrollmentsTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEnrollmentsStudentDialogComponent } from './view-enrollments-student-dialog.component';

describe('ViewEnrollmentsStudentDialogComponent', () => {
  let component: ViewEnrollmentsStudentDialogComponent;
  let fixture: ComponentFixture<ViewEnrollmentsStudentDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewEnrollmentsStudentDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewEnrollmentsStudentDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

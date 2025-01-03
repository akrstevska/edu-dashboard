import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateStudentDialogComponent } from './create-student-dialog.component';

describe('CreateStudentDialogComponent', () => {
  let component: CreateStudentDialogComponent;
  let fixture: ComponentFixture<CreateStudentDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateStudentDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateStudentDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

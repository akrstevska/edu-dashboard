import {Component, Inject, OnInit} from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogContent,
  MatDialogModule,
  MatDialogRef,
  MatDialogTitle
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { CommonModule } from '@angular/common';
import {MatButton} from '@angular/material/button';
import {MatIcon} from '@angular/material/icon';
import {StudentService} from '../../services/student.service';
import {MatOption} from '@angular/material/select';
import {EnrollmentService} from '../../services/enrollment.service';

@Component({
  selector: 'app-enroll-student-dialog',
  imports: [
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    CommonModule,
    MatButton,
    MatIcon,
    MatOption
  ],
  templateUrl: './enroll-student-dialog.component.html',
  styleUrl: './enroll-student-dialog.component.css'
})
export class EnrollStudentDialogComponent {
  enrollmentForm: FormGroup;
  students: any[] = [];
  selectedStudent: any;

  constructor(
    private fb: FormBuilder,
    private studentService: StudentService,
    private enrollmentService: EnrollmentService,
    public dialogRef: MatDialogRef<EnrollStudentDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.enrollmentForm = this.fb.group({
      student: [null, Validators.required],
      enrollmentDate: [null, Validators.required]
    });
  }

  ngOnInit() {
    this.studentService.fetchStudents().subscribe(
      (students) => {
        this.students = students;
      },
      (error) => {
        console.error('Error loading students:', error);
      }
    );
  }

  selectStudent(student: any) {
    this.selectedStudent = student.id; // Update selected student
    this.enrollmentForm.controls['student'].setValue(student.id); // Set selected student to form control
  }

  onEnroll() {
    if (this.enrollmentForm.valid) {
      const enrollmentData = this.enrollmentForm.value;
      this.enrollmentService.enrollStudent(enrollmentData).subscribe(
        (response) => {
          this.dialogRef.close(response);
        },
        (error) => {
          console.error('Error enrolling student:', error);
        }
      );
    }
  }
}

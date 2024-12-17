import {Component, OnInit} from '@angular/core';
import {MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {CommonModule} from '@angular/common';
import {MatIcon} from '@angular/material/icon';
import {SwalService} from '../../services/swal.service';
import {StudentService} from '../../services/student.service';
import {Student} from '../../../models/student';

@Component({
  selector: 'app-create-student-dialog',
  imports: [
    MatDialogModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule, CommonModule, MatIcon
  ],
  templateUrl: './create-student-dialog.component.html',
  styleUrl: './create-student-dialog.component.css'
})
export class CreateStudentDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<CreateStudentDialogComponent>,
    private fb: FormBuilder,
    private swalService: SwalService,
    private studentService: StudentService
  ) {
  }

  studentForm!: FormGroup;

  ngOnInit() {
    this.studentForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      age: ['', [Validators.required, Validators.min(18), Validators.max(100)]],
      currentYear: ['', [Validators.required, Validators.min(1), Validators.max(4)]]
    });
  }

  onCreate() {
    if (this.studentForm.valid) {
      const studentData: Student = this.studentForm.value;

      this.studentService.createStudent(studentData).subscribe({
        next: (createdStudent) => {
          this.swalService.success('Student created successfully!');
          this.dialogRef.close(createdStudent);
        },
        error: (error) => {
          console.error('Error creating student', error);
          this.swalService.error('Failed to create student. Please try again.');
        }
      });
    } else {
      this.swalService.error('Please fill out all required fields correctly!');

      Object.keys(this.studentForm.controls).forEach(key => {
        const control = this.studentForm.get(key);
        control?.markAsTouched();
      });
    }
  }

  onCancel() {
    this.dialogRef.close();
  }
}

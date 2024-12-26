import { Component, Inject, OnInit } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MatIcon } from '@angular/material/icon';
import { SwalService } from '../../services/swal.service';
import { StudentService } from '../../services/student.service';
import { Student } from '../../../models/student';

@Component({
  selector: 'app-create-student-dialog',
  imports: [
    MatDialogModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    CommonModule,
    MatIcon,
  ],
  templateUrl: './create-student-dialog.component.html',
  styleUrl: './create-student-dialog.component.css',
})
export class CreateStudentDialogComponent implements OnInit {
  studentForm!: FormGroup;
  isEditMode = false;
  studentToEdit: Student | null = null;

  constructor(
    public dialogRef: MatDialogRef<CreateStudentDialogComponent>,
    private fb: FormBuilder,
    private swalService: SwalService,
    private studentService: StudentService,
    @Inject(MAT_DIALOG_DATA) public data: { student?: Student }
  ) {}

  ngOnInit() {
    this.initForm();

    if (this.data?.student) {
      this.isEditMode = true;
      this.studentToEdit = this.data.student;
      this.populateForm(this.studentToEdit);
    }
  }
  initForm() {
    this.studentForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      age: ['', [Validators.required, Validators.min(1)]],
      currentYear: ['', Validators.required],
    });
  }
  populateForm(student: Student) {
    this.studentForm.patchValue({
      firstName: student.firstName,
      lastName: student.lastName,
      email: student.email,
      age: student.age,
      currentYear: student.currentYear,
    });
  }
  onCreate() {
    if (this.studentForm.valid) {
      const studentData: Student = this.studentForm.value;

      if (this.isEditMode && this.studentToEdit) {
        const updatedStudent = {
          ...this.studentToEdit,
          ...studentData,
        };

        this.studentService.updateStudent(updatedStudent).subscribe({
          next: (student) => {
            this.swalService.success('Student updated successfully!');
            this.dialogRef.close(student);
          },
          error: (error) => {
            console.error('Error updating student', error);
            this.swalService.error(
              'Failed to update student. Please try again.'
            );
          },
        });
      } else {
        this.studentService.createStudent(studentData).subscribe({
          next: (student) => {
            this.swalService.success('Student created successfully!');
            this.dialogRef.close(student);
          },
          error: (error) => {
            console.error('Error creating student', error);
            this.swalService.error(
              'Failed to create student. Please try again.'
            );
          },
        });
      }
    } else {
      this.swalService.error('Please fill out all required fields correctly!');
      Object.keys(this.studentForm.controls).forEach((key) => {
        this.studentForm.get(key)?.markAsTouched();
      });
    }
  }

  onCancel() {
    this.dialogRef.close();
  }
}

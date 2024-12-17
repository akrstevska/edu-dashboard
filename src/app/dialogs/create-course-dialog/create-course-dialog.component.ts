import { Component, OnInit } from '@angular/core';
import {MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { CommonModule } from '@angular/common';
import {MatButton} from '@angular/material/button';
import {MatIcon} from '@angular/material/icon';

@Component({
  selector: 'app-create-course-dialog',
  standalone: true,
  imports: [
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    CommonModule,
    MatButton,
    MatIcon
  ],
  templateUrl: './create-course-dialog.component.html',
  styleUrl: './create-course-dialog.component.css'
})
export class CreateCourseDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<CreateCourseDialogComponent>,
    private fb: FormBuilder
  ) {}
  courseForm!: FormGroup;
  ngOnInit() {
    this.courseForm = this.fb.group({
      title: ['', Validators.required],
      semester: ['', Validators.required],
      description: ['', [Validators.required, Validators.maxLength(500)]],  // Fixed email validator
      instructor: ['', [Validators.required]],  // Removed min(18) as it doesn't make sense for instructor
      enrollmentDeadline: ['', Validators.required],
    });
  }
  onCreate() {
    if (this.courseForm.valid) {
      this.dialogRef.close(this.courseForm.value);
    }
  }

  onCancel() {
    this.dialogRef.close();
  }
}

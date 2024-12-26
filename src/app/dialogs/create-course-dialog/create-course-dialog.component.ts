import { Component, Inject, OnInit } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { SwalService } from '../../services/swal.service';
import { Course } from '../../../models/course';
import { CourseService } from '../../services/course.service';
import { InstructorService } from '../../services/instructor.service';
import { Instructor } from '../../../models/instructor';
import { MatOption, MatSelect } from '@angular/material/select';

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
    MatIcon,
    MatSelect,
    MatOption,
  ],
  templateUrl: './create-course-dialog.component.html',
  styleUrl: './create-course-dialog.component.css',
})
export class CreateCourseDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<CreateCourseDialogComponent>,
    private fb: FormBuilder,
    private swalService: SwalService,
    private courseService: CourseService,
    @Inject(MAT_DIALOG_DATA) public data: { course?: Course },
    private instructorService: InstructorService
  ) {}
  courseForm!: FormGroup;
  isEditMode = false;
  courseToEdit: Course | null = null;
  instructors: Instructor[] = [];
  initForm() {
    this.courseForm = this.fb.group({
      title: ['', Validators.required],
      semester: ['', Validators.required],
      description: ['', [Validators.required, Validators.maxLength(990)]],
      instructor: ['', [Validators.required]],
      enrollmentDeadline: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.initForm();
    this.loadInstructors();
    if (this.data?.course) {
      this.isEditMode = true;
      this.courseToEdit = this.data.course;
      this.populateForm(this.courseToEdit);
    }
  }
  loadInstructors() {
    this.instructorService.getAllInstructors().subscribe({
      next: (instructors) => {
        this.instructors = instructors;
      },
      error: (error) => {
        console.error('Error fetching instructors', error);
        this.swalService.error('Failed to load instructors.');
      },
    });
  }
  populateForm(course: Course) {
    this.courseForm.patchValue({
      title: course.title,
      semester: course.semester,
      description: course.description,
      instructor: course.instructor?.id,
      enrollmentDeadline: course.enrollmentDeadline,
    });
  }

  onCreate() {
    if (this.courseForm.valid) {
      const courseData: Course = {
        ...this.courseForm.value,
        instructor: this.instructors.find(
          (inst) => inst.id === this.courseForm.value.instructor
        ),
      };

      if (this.isEditMode && this.courseToEdit) {
        const updatedCourse = {
          ...this.courseToEdit,
          ...courseData,
        };

        this.courseService.updateCourse(updatedCourse).subscribe({
          next: (course) => {
            this.swalService.success('Course updated successfully!');
            this.dialogRef.close(course);
          },
          error: (error) => {
            console.error('Error updating course', error);
            this.swalService.error(
              'Failed to update course. Please try again.'
            );
          },
        });
      } else {
        this.courseService.createCourse(courseData).subscribe({
          next: (course) => {
            this.swalService.success('Course created successfully!');
            this.dialogRef.close(course);
          },
          error: (error) => {
            console.error('Error creating course', error);
            this.swalService.error(
              'Failed to create course. Please try again.'
            );
          },
        });
      }
    } else {
      this.swalService.error('Please fill out all required fields correctly!');
      Object.keys(this.courseForm.controls).forEach((key) => {
        this.courseForm.get(key)?.markAsTouched();
      });
    }
  }

  onCancel() {
    this.dialogRef.close();
  }
}

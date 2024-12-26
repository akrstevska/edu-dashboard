import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { CommonModule } from '@angular/common';
import {MatButton} from '@angular/material/button';
import {MatIcon} from '@angular/material/icon';
import {SwalService} from '../../services/swal.service';
import {MatOption, MatSelect} from '@angular/material/select';
import {LessonService} from '../../services/lesson.service';
import {Lesson} from '../../../models/lesson';
import {Course} from '../../../models/course';

@Component({
  selector: 'app-create-lesson-dialog',
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
    MatOption
  ],
  templateUrl: './create-lesson-dialog.component.html',
  styleUrl: './create-lesson-dialog.component.css'
})
export class CreateLessonDialogComponent implements OnInit {
  course: Course | undefined;
  lessonForm!: FormGroup;
  isEditMode = false;
  lessonToEdit: Lesson | null = null;

  constructor(
    public dialogRef: MatDialogRef<CreateLessonDialogComponent>,
    private fb: FormBuilder,
    private swalService: SwalService,
    private lessonService: LessonService,
    @Inject(MAT_DIALOG_DATA) public data: { course: Course, lesson?: Lesson }
  ) {}

  ngOnInit() {
    this.course = this.data.course;
    this.initForm();

    if (this.data.lesson) {
      this.isEditMode = true;
      this.lessonToEdit = this.data.lesson;
      this.populateForm(this.lessonToEdit);
    }
  }

  initForm() {
    this.lessonForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', [Validators.required, Validators.maxLength(255)]],
      content: ['', [Validators.required, Validators.maxLength(900)]],
    });
  }

  populateForm(lesson: Lesson) {
    this.lessonForm.patchValue({
      title: lesson.title,
      description: lesson.description,
      content: lesson.content,
    });
  }

  onCreate() {
    if (this.lessonForm.valid) {
      const lessonData: Lesson = {
        ...this.lessonForm.value,
        course: this.course
      };

      if (this.isEditMode && this.lessonToEdit) {
        const updatedLesson = {
          ...this.lessonToEdit,
          ...lessonData
        };

        this.lessonService.updateLesson(updatedLesson).subscribe({
          next: (lesson) => {
            this.swalService.success('Lesson updated successfully!');
            this.dialogRef.close(lesson);
          },
          error: (error) => {
            console.error('Error updating lesson', error);
            this.swalService.error('Failed to update lesson. Please try again.');
          }
        });
      } else {
        this.lessonService.createLesson(lessonData).subscribe({
          next: (lesson) => {
            this.swalService.success('Lesson created successfully!');
            this.dialogRef.close(lesson);
          },
          error: (error) => {
            console.error('Error creating lesson', error);
            this.swalService.error('Failed to create lesson. Please try again.');
          }
        });
      }
    } else {
      this.swalService.error('Please fill out all required fields correctly!');
      Object.keys(this.lessonForm.controls).forEach(key => {
        this.lessonForm.get(key)?.markAsTouched();
      });
    }
  }

  onCancel() {
    this.dialogRef.close();
  }
}

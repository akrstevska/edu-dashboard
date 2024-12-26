import {
  Component,
  AfterViewInit,
  Input,
  ViewChild,
  OnInit,
  ChangeDetectorRef,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { Lesson } from '../../../models/lesson';
import { LessonService } from '../../services/lesson.service';
import { MatButton, MatMiniFabButton } from '@angular/material/button';
import { MatTooltip } from '@angular/material/tooltip';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { NgForOf, NgIf, SlicePipe } from '@angular/common';
import {
  MatCard,
  MatCardContent,
  MatCardHeader,
  MatCardTitle,
} from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { Course } from '../../../models/course';
import { CreateLessonDialogComponent } from '../../dialogs/create-lesson-dialog/create-lesson-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { SwalService } from '../../services/swal.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-lessons-tab',
  templateUrl: './lessons-tab.component.html',
  imports: [
    MatButton,
    MatTooltip,
    MatLabel,
    MatFormField,
    MatInput,
    NgForOf,
    MatCard,
    MatCardHeader,
    MatCardTitle,
    MatMiniFabButton,
    MatCardContent,
    MatIcon,
    NgIf,
    MatPaginator,
    MatProgressSpinner,
  ],
  styleUrls: ['./lessons-tab.component.css'],
})
export class LessonsTabComponent implements AfterViewInit, OnInit {
  @Input({ required: true }) course: Course | undefined;
  lessons: Lesson[] = [];
  filteredLessons: Lesson[] = [];
  paginatedLessons: Lesson[] = [];
  pageSize = 2;
  pageIndex = 0;
  loading = false;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private lessonService: LessonService,
    private dialog: MatDialog,
    private swalService: SwalService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.fetchLessons();
  }
  fetchLessons(): void {
    if (!this.course?.id) {
      console.error('Course ID is undefined.');
      this.loading = false;
      return;
    }

    this.loading = true;
    this.lessonService.getLessonsByCourseId(this.course.id).subscribe({
      next: (data) => {
        this.lessons = data.map((lesson) => ({
          ...lesson,
          isExpanded: false,
        }));
        console.log(this.lessons);
        this.filteredLessons = [...this.lessons];
        this.updatePaginatedLessons();
        this.loading = false;
      },
      error: (err) => {
        console.error('Failed to fetch lessons:', err);
        this.loading = false;
      },
    });
  }

  ngAfterViewInit() {
    this.updatePaginatedLessons();
  }

  updatePaginatedLessons() {
    const startIndex = this.pageIndex * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.paginatedLessons = this.filteredLessons.slice(startIndex, endIndex);
  }

  onPageChange(event: any) {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.updatePaginatedLessons();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value
      .trim()
      .toLowerCase();
    this.filteredLessons = this.lessons.filter((lesson) =>
      lesson?.title.toLowerCase().includes(filterValue)
    );
    this.pageIndex = 0;
    this.updatePaginatedLessons();
  }

  toggleContent(index: number): void {
    const lesson = this.paginatedLessons[index];
    const originalIndex = this.lessons.findIndex((l) => l.id === lesson.id);
    if (originalIndex !== -1) {
      this.lessons[originalIndex].isExpanded =
        !this.lessons[originalIndex].isExpanded;
      this.updatePaginatedLessons();
      this.cdr.detectChanges();
    }
  }
  trackByLesson(index: number, lesson: Lesson): number {
    return lesson.id;
  }
  openCreateLessonDialog() {
    const dialogRef = this.dialog.open(CreateLessonDialogComponent, {
      width: '800px',
      data: { course: this.course },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.fetchLessons();
      }
    });
  }

  openEditLessonDialog(lesson: Lesson) {
    if (!lesson) {
      this.swalService.error('No lesson selected');
      return;
    }

    const dialogRef = this.dialog.open(CreateLessonDialogComponent, {
      width: '600px',
      data: { lesson, course: this.course },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.fetchLessons();
      }
    });
  }

  deleteLesson(lessonId: number | undefined) {
    if (!lessonId) {
      this.swalService.error('Lesson ID not found');
      return;
    }

    Swal.fire({
      title: 'Are you sure?',
      text: 'Do you want to delete this lesson?',
      icon: 'warning',
      showCancelButton: true,
      background: '#111B34',
      color: '#efefef',
      confirmButtonColor: '#3532B2',
      cancelButtonColor: '#e57272',
      confirmButtonText: 'Yes, delete it!',
      customClass: {
        container: 'swal2-theme-material-ui',
      },
    }).then((result) => {
      if (result.isConfirmed) {
        this.lessonService.deleteLesson(lessonId).subscribe({
          next: () => {
            this.swalService.success('Lesson deleted successfully!');
            this.fetchLessons();
          },
          error: (error) => {
            this.swalService.error('Failed to delete lesson');
            console.error('Delete error', error);
          },
        });
      }
    });
  }
}

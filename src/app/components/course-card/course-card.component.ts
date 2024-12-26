import { Component, Input } from '@angular/core';

import { MatIcon } from '@angular/material/icon';
import { MatMiniFabButton } from '@angular/material/button';

import { MatTooltip } from '@angular/material/tooltip';
import { Course } from '../../../models/course';
import { DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatCard } from '@angular/material/card';
import { SwalService } from '../../services/swal.service';
import Swal from 'sweetalert2';
import { CourseService } from '../../services/course.service';
import { Student } from '../../../models/student';
import { CreateStudentDialogComponent } from '../../dialogs/create-student-dialog/create-student-dialog.component';
import { CreateCourseDialogComponent } from '../../dialogs/create-course-dialog/create-course-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-course-card',
  imports: [
    MatIcon,
    MatMiniFabButton,
    MatTooltip,
    DatePipe,
    RouterLink,
    MatCard,
  ],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css',
})
export class CourseCardComponent {
  @Input({ required: true })
  course: Course | undefined;
  constructor(
    private swalService: SwalService,
    private courseService: CourseService,
    private dialog: MatDialog
  ) {}

  deleteCourse(courseId: number | undefined) {
    if (!courseId) {
      this.swalService.error('Course ID not found');
      return;
    }

    Swal.fire({
      title: 'Are you sure?',
      text: 'Do you want to delete this course?',
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
        this.courseService.deleteCourse(courseId).subscribe({
          next: () => {
            this.swalService.success('Course deleted successfully!');
          },
          error: (error) => {
            this.swalService.error('Failed to delete course');
            console.error('Delete error', error);
          },
        });
      }
    });
  }
  openEditCourseDialog(course: Course | undefined) {
    if (!course) {
      this.swalService.error('No course selected');
      return;
    }
    const dialogRef = this.dialog.open(CreateCourseDialogComponent, {
      width: '600px',
      data: { course: course },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.courseService.fetchCourses().subscribe();
      }
    });
  }
}

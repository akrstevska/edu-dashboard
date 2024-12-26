import {Component, OnInit} from '@angular/core';
import {CourseCardComponent} from "../course-card/course-card.component";
import {MatButton, MatMiniFabButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";
import {DatePipe, NgForOf, NgIf} from '@angular/common';
import {MatCard, MatCardContent, MatCardHeader, MatCardSubtitle, MatCardTitle} from '@angular/material/card';
import {MatProgressBar} from '@angular/material/progress-bar';
import {MatTooltip} from '@angular/material/tooltip';
import {MatTab, MatTabGroup} from '@angular/material/tabs';
import {MatFormField, MatLabel} from '@angular/material/form-field';
import {MatInput} from '@angular/material/input';
import {LessonsTabComponent} from '../lessons-tab/lessons-tab.component';
import {EnrollmentsTabComponent} from '../enrollments-tab/enrollments-tab.component';
import {Course} from '../../../models/course';
import {ActivatedRoute} from '@angular/router';
import {CourseService} from '../../services/course.service';
import {MatProgressSpinner} from '@angular/material/progress-spinner';
import {CreateStudentDialogComponent} from '../../dialogs/create-student-dialog/create-student-dialog.component';
import {EnrollStudentDialogComponent} from '../../dialogs/enroll-student-dialog/enroll-student-dialog.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-course-details',
  imports: [
    CourseCardComponent,
    MatButton,
    MatIcon,
    DatePipe,
    MatCard,
    MatCardContent,
    MatCardHeader,
    MatCardTitle,
    MatCardSubtitle,
    MatProgressBar,
    NgForOf,
    MatMiniFabButton,
    MatTooltip,
    MatTabGroup,
    MatTab,
    MatFormField,
    MatInput,
    MatLabel,
    LessonsTabComponent,
    EnrollmentsTabComponent,
    NgIf,
    MatProgressSpinner
  ],
  templateUrl: './course-details.component.html',
  styleUrl: './course-details.component.css'
})
export class CourseDetailsComponent implements OnInit {
  course: Course | null = null;
  isLoading = true;
  errorMessage: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private courseService: CourseService,
    private dialog: MatDialog,
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const courseId = params.get('id');
      if (courseId) {
        this.loadCourseById(Number(courseId));
      } else {
        this.errorMessage = 'Invalid course ID';
        this.isLoading = false;
      }
    });
  }

  loadCourseById(courseId: number): void {
    this.courseService.getCourseById(courseId).subscribe({
      next: (course) => {
        this.course = course;
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error fetching course by ID:', error);
        this.errorMessage = 'Failed to load course';
        this.isLoading = false;
      }
    });
  }

  openEnrollStudentDialog(course: Course) {
    const dialogRef = this.dialog.open(EnrollStudentDialogComponent, {
      width: '600px',
      data: { course: course }
    });
  }
}

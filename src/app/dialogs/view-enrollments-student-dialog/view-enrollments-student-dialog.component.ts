import {Component, ViewChild, AfterViewInit, Inject} from '@angular/core';
import { MatPaginator } from "@angular/material/paginator";
import {Enrollment} from '../../../models/enrollment';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef
} from '@angular/material/dialog';
import {MatFormField, MatLabel} from '@angular/material/form-field';
import {DatePipe, NgClass, NgForOf, NgIf} from '@angular/common';
import {MatCard, MatCardContent, MatCardHeader, MatCardTitle} from '@angular/material/card';
import {MatInput} from '@angular/material/input';
import {MatTooltip} from '@angular/material/tooltip';
import {MatProgressBar} from '@angular/material/progress-bar';
import {MatButton} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import {MatButtonToggle, MatButtonToggleGroup} from '@angular/material/button-toggle';
import {Router, RouterLink} from '@angular/router';
import {EnrollmentDetailsComponent} from '../../components/enrollment-details/enrollment-details.component';
import {EnrollmentService} from '../../services/enrollment.service';
import {MatProgressSpinner} from '@angular/material/progress-spinner';

@Component({
  selector: 'app-view-enrollments-student-dialog',
  templateUrl: './view-enrollments-student-dialog.component.html',
  styleUrls: ['./view-enrollments-student-dialog.component.css'],
  imports: [
    MatDialogContent,
    MatFormField,
    NgForOf,
    MatCard,
    MatInput,
    MatCardHeader,
    NgClass,
    MatTooltip,
    MatCardContent,
    MatProgressBar,
    MatButton,
    DatePipe,
    MatPaginator,
    MatLabel,
    MatCardTitle,
    FormsModule,
    MatButtonToggle,
    MatButtonToggleGroup,
    MatDialogActions,
    MatDialogClose,
    RouterLink,
    EnrollmentDetailsComponent,
    NgIf,
    MatProgressSpinner
  ]
})
export class ViewEnrollmentsStudentDialogComponent implements AfterViewInit {
  constructor(public dialogRef: MatDialogRef<ViewEnrollmentsStudentDialogComponent>, private router: Router,private enrollmentService: EnrollmentService, @Inject(MAT_DIALOG_DATA) public data: { studentId: number }) {}

  // enrollments: Enrollment[] = [
  //   {
  //     "id": 3,
  //     "student": {
  //       "id": 2,
  //       "firstName": "Alice",
  //       "lastName": "Smith",
  //       "email": "student2@example.com",
  //       "age": 21,
  //       "currentYear": 3,
  //     },
  //     "course": {
  //       "id": 2,
  //       "title": "Angela",
  //       "description": "Calculus I",
  //       "enrollmentDeadline": "2024-06-30T23:59:59.000+00:00",
  //       "semester": "Spring 2024",
  //     },
  //     "enrollmentDate": "2024-05-20T21:29:45.675+00:00",
  //     "grade": 0,
  //     "completionStatus": true,
  //     "progress": {
  //       "id": 3,
  //       "completedLessons": [],
  //       "currentLesson": null,
  //       "lastAccess": "2024-05-25T10:17:35.480+00:00",
  //       "overallProgress": 20,
  //     },
  //   },
  //   {
  //     "id": 3,
  //     "student": {
  //       "id": 2,
  //       "firstName": "Alice",
  //       "lastName": "Smith",
  //       "email": "student2@example.com",
  //       "age": 21,
  //       "currentYear": 3,
  //     },
  //     "course": {
  //       "id": 2,
  //       "title": "MATH101",
  //       "description": "Calculus I",
  //       "enrollmentDeadline": "2024-06-30T23:59:59.000+00:00",
  //       "semester": "Spring 2024",
  //     },
  //     "enrollmentDate": "2024-05-20T21:29:45.675+00:00",
  //     "grade": 0,
  //     "completionStatus": false,
  //     "progress": {
  //       "id": 3,
  //       "completedLessons": [],
  //       "currentLesson": null,
  //       "lastAccess": "2024-05-25T10:17:35.480+00:00",
  //       "overallProgress": 20,
  //     },
  //   },
  //   {
  //     "id": 3,
  //     "student": {
  //       "id": 2,
  //       "firstName": "Alice",
  //       "lastName": "Smith",
  //       "email": "student2@example.com",
  //       "age": 21,
  //       "currentYear": 3,
  //     },
  //     "course": {
  //       "id": 2,
  //       "title": "MATH101",
  //       "description": "Calculus I",
  //       "enrollmentDeadline": "2024-06-30T23:59:59.000+00:00",
  //       "semester": "Spring 2024",
  //     },
  //     "enrollmentDate": "2024-05-20T21:29:45.675+00:00",
  //     "grade": 0,
  //     "completionStatus": false,
  //     "progress": {
  //       "id": 3,
  //       "completedLessons": [],
  //       "currentLesson": null,
  //       "lastAccess": "2024-05-25T10:17:35.480+00:00",
  //       "overallProgress": 20,
  //     },
  //   },
  //   {
  //     "id": 3,
  //     "student": {
  //       "id": 2,
  //       "firstName": "Alice",
  //       "lastName": "Smith",
  //       "email": "student2@example.com",
  //       "age": 21,
  //       "currentYear": 3,
  //     },
  //     "course": {
  //       "id": 2,
  //       "title": "MATH101",
  //       "description": "Calculus I",
  //       "enrollmentDeadline": "2024-06-30T23:59:59.000+00:00",
  //       "semester": "Spring 2024",
  //     },
  //     "enrollmentDate": "2024-05-20T21:29:45.675+00:00",
  //     "grade": 0,
  //     "completionStatus": false,
  //     "progress": {
  //       "id": 3,
  //       "completedLessons": [],
  //       "currentLesson": null,
  //       "lastAccess": "2024-05-25T10:17:35.480+00:00",
  //       "overallProgress": 20,
  //     },
  //   },
  //   {
  //     "id": 3,
  //     "student": {
  //       "id": 2,
  //       "firstName": "Alice",
  //       "lastName": "Smith",
  //       "email": "student2@example.com",
  //       "age": 21,
  //       "currentYear": 3,
  //     },
  //     "course": {
  //       "id": 2,
  //       "title": "MATH101",
  //       "description": "Calculus I",
  //       "enrollmentDeadline": "2024-06-30T23:59:59.000+00:00",
  //       "semester": "Spring 2024",
  //     },
  //     "enrollmentDate": "2024-05-20T21:29:45.675+00:00",
  //     "grade": 0,
  //     "completionStatus": false,
  //     "progress": {
  //       "id": 3,
  //       "completedLessons": [],
  //       "currentLesson": null,
  //       "lastAccess": "2024-05-25T10:17:35.480+00:00",
  //       "overallProgress": 20,
  //     },
  //   },
  //   {
  //     "id": 3,
  //     "student": {
  //       "id": 2,
  //       "firstName": "Alice",
  //       "lastName": "Smith",
  //       "email": "student2@example.com",
  //       "age": 21,
  //       "currentYear": 3,
  //     },
  //     "course": {
  //       "id": 2,
  //       "title": "MATH101",
  //       "description": "Calculus I",
  //       "enrollmentDeadline": "2024-06-30T23:59:59.000+00:00",
  //       "semester": "Spring 2024",
  //     },
  //     "enrollmentDate": "2024-05-20T21:29:45.675+00:00",
  //     "grade": 0,
  //     "completionStatus": false,
  //     "progress": {
  //       "id": 3,
  //       "completedLessons": [],
  //       "currentLesson": null,
  //       "lastAccess": "2024-05-25T10:17:35.480+00:00",
  //       "overallProgress": 20,
  //     },
  //   },
  //   {
  //     "id": 3,
  //     "student": {
  //       "id": 2,
  //       "firstName": "Alice",
  //       "lastName": "Smith",
  //       "email": "student2@example.com",
  //       "age": 21,
  //       "currentYear": 3,
  //     },
  //     "course": {
  //       "id": 2,
  //       "title": "MATH101",
  //       "description": "Calculus I",
  //       "enrollmentDeadline": "2024-06-30T23:59:59.000+00:00",
  //       "semester": "Spring 2024",
  //     },
  //     "enrollmentDate": "2024-05-20T21:29:45.675+00:00",
  //     "grade": 0,
  //     "completionStatus": false,
  //     "progress": {
  //       "id": 3,
  //       "completedLessons": [],
  //       "currentLesson": null,
  //       "lastAccess": "2024-05-25T10:17:35.480+00:00",
  //       "overallProgress": 20,
  //     },
  //   },
  //   {
  //     "id": 3,
  //     "student": {
  //       "id": 2,
  //       "firstName": "Alice",
  //       "lastName": "Smith",
  //       "email": "student2@example.com",
  //       "age": 21,
  //       "currentYear": 3,
  //     },
  //     "course": {
  //       "id": 2,
  //       "title": "MATH101",
  //       "description": "Calculus I",
  //       "enrollmentDeadline": "2024-06-30T23:59:59.000+00:00",
  //       "semester": "Spring 2024",
  //     },
  //     "enrollmentDate": "2024-05-20T21:29:45.675+00:00",
  //     "grade": 0,
  //     "completionStatus": false,
  //     "progress": {
  //       "id": 3,
  //       "completedLessons": [],
  //       "currentLesson": null,
  //       "lastAccess": "2024-05-25T10:17:35.480+00:00",
  //       "overallProgress": 20,
  //     },
  //   },
  // ];
  enrollments: Enrollment[] = [];
  filteredEnrollments: Enrollment[] = [...this.enrollments];
  paginatedEnrollments: Enrollment[] = [];
  pageSize = 2;
  pageIndex = 0;
  loading = true
  completionStatus: 'completed' | 'uncompleted' = 'completed';

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {

    this.loadEnrollments();

    if (this.paginator) {
      this.paginator.page.subscribe((event) => {
        this.onPageChange(event);
      });
    }
  }
  loadEnrollments() {
    this.loading = true;
    this.enrollmentService.getEnrollmentsByStudentId(this.data.studentId).subscribe(
      (enrollments: Enrollment[]) => {
        this.loading = false;
        this.enrollments = enrollments;
        this.filteredEnrollments = [...this.enrollments];
        this.updatePaginatedEnrollments();
      },
      (error) => {
        this.loading = false;
        console.error('Error fetching enrollments:', error);
      }
    );
  }
  updatePaginatedEnrollments() {
    const startIndex = this.pageIndex * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.paginatedEnrollments = this.filteredEnrollments.slice(startIndex, endIndex);
  }

  onPageChange(event: any) {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.updatePaginatedEnrollments();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value.trim().toLowerCase();
    this.filteredEnrollments = this.enrollments.filter(enrollment =>
      enrollment.course?.title.toLowerCase().includes(filterValue)
    );

    this.pageIndex = 0; // Reset to the first page
    this.updatePaginatedEnrollments();
  }


  onDelete($event: number) {

  }
}

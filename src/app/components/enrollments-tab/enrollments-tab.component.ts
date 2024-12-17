import {Component, Input, ViewChild} from '@angular/core';
import {Enrollment} from '../../../models/enrollment';
import {NgForOf} from '@angular/common';
import {EnrollmentDetailsComponent} from '../enrollment-details/enrollment-details.component';
import {MatFormField, MatLabel} from '@angular/material/form-field';
import {MatInput} from '@angular/material/input';
import {MatPaginator} from '@angular/material/paginator';
import {Lesson} from '../../../models/lesson';

@Component({
  selector: 'app-enrollments-tab',
  imports: [
    NgForOf,
    EnrollmentDetailsComponent,
    MatFormField,
    MatInput,
    MatLabel,
    MatPaginator
  ],
  templateUrl: './enrollments-tab.component.html',
  styleUrl: './enrollments-tab.component.css'
})
export class EnrollmentsTabComponent {
  @Input({required: true})
  course_id: number = 0;
  enrollments: Enrollment[] = [
    {
      "id": 3,
      "student": {
        "id": 2,
        "firstName": "Alice",
        "lastName": "Smith",
        "email": "student2@example.com",
        "age": 21,
        "currentYear": 3,
      },
      "course": {
        "id": 2,
        "title": "Angela",
        "description": "Calculus I",
        "enrollmentDeadline": "2024-06-30T23:59:59.000+00:00",
        "semester": "Spring 2024",
      },
      "enrollmentDate": "2024-05-20T21:29:45.675+00:00",
      "grade": 0,
      "completionStatus": true,
      "progress": {
        "id": 3,
        "completedLessons": [],
        "currentLesson": null,
        "lastAccess": "2024-05-25T10:17:35.480+00:00",
        "overallProgress": 20,
      },
    },
    {
      "id": 3,
      "student": {
        "id": 2,
        "firstName": "Alice",
        "lastName": "Smith",
        "email": "student2@example.com",
        "age": 21,
        "currentYear": 3,
      },
      "course": {
        "id": 2,
        "title": "MATH101",
        "description": "Calculus I",
        "enrollmentDeadline": "2024-06-30T23:59:59.000+00:00",
        "semester": "Spring 2024",
      },
      "enrollmentDate": "2024-05-20T21:29:45.675+00:00",
      "grade": 0,
      "completionStatus": false,
      "progress": {
        "id": 3,
        "completedLessons": [],
        "currentLesson": null,
        "lastAccess": "2024-05-25T10:17:35.480+00:00",
        "overallProgress": 20,
      },
    },
    {
      "id": 3,
      "student": {
        "id": 2,
        "firstName": "angela",
        "lastName": "Smith",
        "email": "student2@example.com",
        "age": 21,
        "currentYear": 3,
      },
      "course": {
        "id": 2,
        "title": "MATH101",
        "description": "Calculus I",
        "enrollmentDeadline": "2024-06-30T23:59:59.000+00:00",
        "semester": "Spring 2024",
      },
      "enrollmentDate": "2024-05-20T21:29:45.675+00:00",
      "grade": 0,
      "completionStatus": false,
      "progress": {
        "id": 3,
        "completedLessons": [],
        "currentLesson": null,
        "lastAccess": "2024-05-25T10:17:35.480+00:00",
        "overallProgress": 20,
      },
    },
    {
      "id": 3,
      "student": {
        "id": 2,
        "firstName": "Alice",
        "lastName": "Smith",
        "email": "student2@example.com",
        "age": 21,
        "currentYear": 3,
      },
      "course": {
        "id": 2,
        "title": "MATH101",
        "description": "Calculus I",
        "enrollmentDeadline": "2024-06-30T23:59:59.000+00:00",
        "semester": "Spring 2024",
      },
      "enrollmentDate": "2024-05-20T21:29:45.675+00:00",
      "grade": 0,
      "completionStatus": false,
      "progress": {
        "id": 3,
        "completedLessons": [],
        "currentLesson": null,
        "lastAccess": "2024-05-25T10:17:35.480+00:00",
        "overallProgress": 20,
      },
    },
    {
      "id": 3,
      "student": {
        "id": 2,
        "firstName": "Alice",
        "lastName": "Smith",
        "email": "student2@example.com",
        "age": 21,
        "currentYear": 3,
      },
      "course": {
        "id": 2,
        "title": "MATH101",
        "description": "Calculus I",
        "enrollmentDeadline": "2024-06-30T23:59:59.000+00:00",
        "semester": "Spring 2024",
      },
      "enrollmentDate": "2024-05-20T21:29:45.675+00:00",
      "grade": 0,
      "completionStatus": false,
      "progress": {
        "id": 3,
        "completedLessons": [],
        "currentLesson": null,
        "lastAccess": "2024-05-25T10:17:35.480+00:00",
        "overallProgress": 20,
      },
    },
    {
      "id": 3,
      "student": {
        "id": 2,
        "firstName": "Alice",
        "lastName": "Smith",
        "email": "student2@example.com",
        "age": 21,
        "currentYear": 3,
      },
      "course": {
        "id": 2,
        "title": "MATH101",
        "description": "Calculus I",
        "enrollmentDeadline": "2024-06-30T23:59:59.000+00:00",
        "semester": "Spring 2024",
      },
      "enrollmentDate": "2024-05-20T21:29:45.675+00:00",
      "grade": 0,
      "completionStatus": false,
      "progress": {
        "id": 3,
        "completedLessons": [],
        "currentLesson": null,
        "lastAccess": "2024-05-25T10:17:35.480+00:00",
        "overallProgress": 20,
      },
    },
    {
      "id": 3,
      "student": {
        "id": 2,
        "firstName": "Alice",
        "lastName": "Smith",
        "email": "student2@example.com",
        "age": 21,
        "currentYear": 3,
      },
      "course": {
        "id": 2,
        "title": "MATH101",
        "description": "Calculus I",
        "enrollmentDeadline": "2024-06-30T23:59:59.000+00:00",
        "semester": "Spring 2024",
      },
      "enrollmentDate": "2024-05-20T21:29:45.675+00:00",
      "grade": 0,
      "completionStatus": false,
      "progress": {
        "id": 3,
        "completedLessons": [],
        "currentLesson": null,
        "lastAccess": "2024-05-25T10:17:35.480+00:00",
        "overallProgress": 20,
      },
    },
    {
      "id": 3,
      "student": {
        "id": 2,
        "firstName": "Alice",
        "lastName": "Smith",
        "email": "student2@example.com",
        "age": 21,
        "currentYear": 3,
      },
      "course": {
        "id": 2,
        "title": "MATH101",
        "description": "Calculus I",
        "enrollmentDeadline": "2024-06-30T23:59:59.000+00:00",
        "semester": "Spring 2024",
      },
      "enrollmentDate": "2024-05-20T21:29:45.675+00:00",
      "grade": 0,
      "completionStatus": false,
      "progress": {
        "id": 3,
        "completedLessons": [],
        "currentLesson": null,
        "lastAccess": "2024-05-25T10:17:35.480+00:00",
        "overallProgress": 20,
      },
    },
  ];

  filteredEnrollments: Enrollment[] = [...this.enrollments];
  paginatedEnrollments: Enrollment[] = [];
  pageSize = 2;
  pageIndex = 0;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.updatePaginatedEnrollments();
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
      enrollment?.student?.firstName.toLowerCase().includes(filterValue) ||
      enrollment?.student?.lastName.toLowerCase().includes(filterValue)
    );

    this.pageIndex = 0; // Reset to the first page
    this.updatePaginatedEnrollments();
  }

  onDelete($event: number) {

  }
}

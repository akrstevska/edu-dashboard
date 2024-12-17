import {Component} from '@angular/core';
import {MatButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";
import {CoursesTableComponent} from '../../components/courses-table/courses-table.component';
import {MatDialog} from '@angular/material/dialog';
import {CreateCourseDialogComponent} from '../../dialogs/create-course-dialog/create-course-dialog.component';
import {MatCard, MatCardContent} from '@angular/material/card';

@Component({
  selector: 'app-courses',
  imports: [
    MatButton,
    MatIcon,
    CoursesTableComponent,
    MatCard,
    MatCardContent
  ],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent {
  courses = [
    {
      "id": 1,
      "title": "CS101",
      "description": "Introduction to Programming",
      "enrollmentDeadline": "2024-08-30T23:59:59.000+00:00",
      "semester": "Spring 2024"
    },
    {
      "id": 2,
      "title": "MATH101",
      "description": "Calculus I",
      "enrollmentDeadline": "2024-10-30T23:59:59.000+00:00",
      "semester": "Spring 2024"
    },
    {
      "id": 3,
      "title": "PHYS101",
      "description": "Classical Mechanics",
      "enrollmentDeadline": "2024-06-20T23:59:59.000+00:00",
      "semester": "Spring 2024"
    },
    {
      "id": 4,
      "title": "HIST101",
      "description": "World History",
      "enrollmentDeadline": "2024-06-30T23:59:59.000+00:00",
      "semester": "Spring 2024"
    },
    {
      "id": 5,
      "title": "BIO101",
      "description": "Introduction to Biology",
      "enrollmentDeadline": "2024-06-30T23:59:59.000+00:00",
      "semester": "Spring 2024"
    },
    {
      "id": 6,
      "title": "BIO101",
      "description": "Introduction to Biology",
      "enrollmentDeadline": "2024-06-30T23:59:59.000+00:00",
      "semester": "Spring 2024"
    },
    {
      "id": 7,
      "title": "BIO101",
      "description": "Introduction to Biology",
      "enrollmentDeadline": "2024-06-30T23:59:59.000+00:00",
      "semester": "Spring 2024"
    },
    {
      "id": 8,
      "title": "BIO101",
      "description": "Introduction to Biology",
      "enrollmentDeadline": "2024-06-30T23:59:59.000+00:00",
      "semester": "Spring 2024"
    },
    {
      "id": 9,
      "title": "BIO101",
      "description": "Introduction to Biology",
      "enrollmentDeadline": "2024-06-30T23:59:59.000+00:00",
      "semester": "Fall 2025"
    },
    {
      "id": 10,
      "title": "BIO101",
      "description": "Introduction to Biology",
      "enrollmentDeadline": "2024-06-30T23:59:59.000+00:00",
      "semester": "Spring 2024"
    }
  ];
  constructor(private dialog: MatDialog) {}

  openCreateCourseDialog() {
    const dialogRef = this.dialog.open(CreateCourseDialogComponent, {
      width: '600px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const newCourse = {
          ...result,
        };
        // this.students.push(newStudent);
        // this.dataSource.data = this.students; // Update the data source
      }
    });
  }
}

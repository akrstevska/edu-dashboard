import {Component, OnInit, ViewChild} from '@angular/core';
import {MatButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";
import {CourseCardComponent} from '../../components/course-card/course-card.component';
import {MatDialog} from '@angular/material/dialog';
import {CreateCourseDialogComponent} from '../../dialogs/create-course-dialog/create-course-dialog.component';
import {MatCard, MatCardContent} from '@angular/material/card';
import {MatPaginator} from '@angular/material/paginator';
import {Course} from '../../../models/course';
import {MatFormField, MatLabel} from '@angular/material/form-field';
import {MatInput} from '@angular/material/input';
import {MatProgressSpinner} from '@angular/material/progress-spinner';
import {NgIf} from '@angular/common';
import {CourseService} from '../../services/course.service';

@Component({
  selector: 'app-courses',
  imports: [
    MatButton,
    MatIcon,
    CourseCardComponent,
    MatCard,
    MatCardContent,
    MatPaginator,
    MatFormField,
    MatInput,
    MatLabel,
    MatProgressSpinner,
    NgIf,
  ],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent implements OnInit {
  courses: Course[] | null = null;
  filteredCourses: Course[] = [];  // Initialize as empty array
  paginatedCourses: Course[] = [];
  loading = true;
  pageSize = 4;
  pageIndex = 0;

  constructor(private dialog: MatDialog, private courseService: CourseService) {}

  ngOnInit() {
    this.loading = true;

    this.courseService.courses$.subscribe(courses => {
      this.courses = courses;
      this.filteredCourses = courses || []; // Set filteredCourses when courses update
      this.updatePaginatedCourses(); // Update pagination when data changes
      this.loading = courses.length === 0;
    });

    this.courseService.fetchCourses().subscribe({
      next: () => {
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }


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

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.updatePaginatedCourses();
  }

  updatePaginatedCourses() {
    const startIndex = this.pageIndex * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.paginatedCourses = this.filteredCourses.slice(startIndex, endIndex);
  }

  onPageChange(event: any) {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.updatePaginatedCourses();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value.trim().toLowerCase();
    if (this.courses) {
      this.filteredCourses = this.courses.filter(course =>
        course?.title.toLowerCase().includes(filterValue)
        || course?.semester.toLowerCase().includes(filterValue)
      );

      this.pageIndex = 0;
      this.updatePaginatedCourses();
    }
  }
}

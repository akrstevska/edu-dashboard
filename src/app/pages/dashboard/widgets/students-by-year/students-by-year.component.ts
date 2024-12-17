import {Component, OnInit} from '@angular/core';
import {StudentService} from '../../../../services/student.service';
import {Student} from '../../../../../models/student';
import {NgForOf, NgIf} from '@angular/common';
import {MatProgressSpinner} from '@angular/material/progress-spinner';
import {filter, Observable, tap} from 'rxjs';
import {DashboardService} from '../../../../services/dashboard.service';

@Component({
  selector: 'app-students-by-year',
  imports: [
    NgForOf,
    MatProgressSpinner,
    NgIf
  ],
  templateUrl: './students-by-year.component.html',
  styleUrl: './students-by-year.component.css'
})
export class StudentsByYearComponent implements OnInit {
  studentsByYear: { [key: string]: number } = {}; // Object to hold the count of students by year

  loading: boolean = true; // Loading state
  student$: Observable<Student[] | null>;

  constructor(private dashboardService: DashboardService) {
    this.student$ = this.dashboardService.student$;
  }

  ngOnInit(): void {
    this.student$.pipe(
      filter(students => students !== null),
      tap(students => {
        this.loading = false;
        if (students)  this.groupStudentsByYear(students);
      })
    ).subscribe();
  }

  private groupStudentsByYear(students: Student[]): void {
    this.studentsByYear = {}; // Reset the object

    students.forEach(student => {
      const year = student.currentYear; // Assuming 'year' is a property in the IStudent interface
      if (this.studentsByYear[year]) {
        this.studentsByYear[year]++;
      } else {
        this.studentsByYear[year] = 1;
      }
    });
  }
  getYears(): string[] {
    return Object.keys(this.studentsByYear);
  }
}

import { Component, OnInit } from '@angular/core';
import { Student } from '../../../../../models/student';
import { NgForOf, NgIf } from '@angular/common';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { filter, Observable, tap } from 'rxjs';
import { DashboardService } from '../../../../services/dashboard.service';

@Component({
  selector: 'app-students-by-year',
  imports: [NgForOf, MatProgressSpinner, NgIf],
  templateUrl: './students-by-year.component.html',
  styleUrl: './students-by-year.component.css',
})
export class StudentsByYearComponent implements OnInit {
  studentsByYear: { [key: string]: number } = {};

  loading: boolean = true;
  student$: Observable<Student[] | null>;

  constructor(private dashboardService: DashboardService) {
    this.student$ = this.dashboardService.student$;
  }

  ngOnInit(): void {
    this.student$
      .pipe(
        filter((students) => students !== null),
        tap((students) => {
          this.loading = false;
          if (students) this.groupStudentsByYear(students);
        })
      )
      .subscribe();
  }

  private groupStudentsByYear(students: Student[]): void {
    this.studentsByYear = {};

    students.forEach((student) => {
      const year = student.currentYear;
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

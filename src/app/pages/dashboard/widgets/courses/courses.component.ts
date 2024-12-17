import { Component, OnInit } from '@angular/core';
import { MatIcon } from "@angular/material/icon";
import {CourseStats, DashboardService} from '../../../../services/dashboard.service';
import {filter, Observable, tap} from 'rxjs';

@Component({
  selector: 'app-courses',
  imports: [
    MatIcon
  ],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent implements OnInit {
  totalCourses: number | null = null;
  courseStats$: Observable<CourseStats[] | null>;

  constructor(private dashboardService: DashboardService) {
    this.courseStats$ = this.dashboardService.courseStats$;
  }

  ngOnInit(): void {
    this.courseStats$.pipe(
      filter(stats => stats !== null),
      tap(stats => {
        if (stats)  this.totalCourses = stats.length;
      })
    ).subscribe();
  }

}

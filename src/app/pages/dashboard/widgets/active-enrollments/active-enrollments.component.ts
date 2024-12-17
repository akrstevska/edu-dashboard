import {Component, OnInit} from '@angular/core';
import {filter, Observable, tap} from 'rxjs';
import {CourseStats, DashboardService} from '../../../../services/dashboard.service';
import {MatIcon} from '@angular/material/icon';

@Component({
  selector: 'app-active-enrollments',
  imports: [
    MatIcon
  ],
  templateUrl: './active-enrollments.component.html',
  styleUrl: './active-enrollments.component.css'
})
export class ActiveEnrollmentsComponent implements OnInit {
  totalActiveEnrollments = 0;
  courseStats$: Observable<CourseStats[] | null>;

  constructor(private dashboardService: DashboardService) {
    this.courseStats$ = this.dashboardService.courseStats$;
  }

  ngOnInit(): void {
    this.courseStats$.pipe(
      filter(stats => stats !== null),
      tap(stats => {
        if (stats) {
          // Sum the activeEnrollments for each course
          this.totalActiveEnrollments = stats.reduce((total, stat) => {
            return total + (stat.activeEnrollments || 0); // Ensure to handle undefined values
          }, 0);
        }
      })
    ).subscribe();
  }
}

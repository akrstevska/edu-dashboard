import { Component, OnInit } from '@angular/core';
import {
  CourseStats,
  DashboardService,
} from '../../../../services/dashboard.service';
import { DatePipe, NgForOf, NgIf} from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatButton } from '@angular/material/button';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { filter, Observable, tap } from 'rxjs';

@Component({
  selector: 'app-upcoming-deadlines',
  imports: [
    RouterLink,
    DatePipe,
    NgForOf,
    MatButton,
    MatProgressSpinner,
    NgIf,
  ],
  templateUrl: './upcoming-deadlines.component.html',
  styleUrls: ['./upcoming-deadlines.component.css'],
})
export class UpcomingDeadlinesComponent implements OnInit {
  upcomingDeadlines: CourseStats[] = [];
  loading = true;
  courseStats$: Observable<CourseStats[] | null>;

  constructor(private dashboardService: DashboardService) {
    this.courseStats$ = this.dashboardService.courseStats$;
  }

  ngOnInit(): void {
    this.courseStats$
      .pipe(
        filter((stats) => stats !== null),
        tap((stats) => {
          this.loading = false;
          if (stats) this.filterUpcomingDeadlines(stats);
        })
      )
      .subscribe();
  }

  private filterUpcomingDeadlines(stats: CourseStats[]): void {
    const now = new Date();
    const fourWeeksFromNow = new Date();
    fourWeeksFromNow.setDate(now.getDate() + 28);

    this.upcomingDeadlines = stats.filter((course) => {
      const deadline = new Date(course.enrollmentDeadline);
      return deadline >= now && deadline <= fourWeeksFromNow;
    });
  }
}

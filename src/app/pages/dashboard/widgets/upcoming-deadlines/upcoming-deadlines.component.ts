import { Component, OnInit } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import {CourseStats, DashboardService} from '../../../../services/dashboard.service';
import {DatePipe, NgForOf, NgIf, PercentPipe} from '@angular/common';
import {RouterLink} from '@angular/router';
import {MatList, MatListItem, MatListSubheaderCssMatStyler} from '@angular/material/list';
import {MatLine} from '@angular/material/core';
import {MatButton} from '@angular/material/button';
import {MatDivider} from '@angular/material/divider';
import {MatProgressSpinner} from '@angular/material/progress-spinner';
import {filter, Observable, tap} from 'rxjs';

@Component({
  selector: 'app-upcoming-deadlines',
  imports: [
    MatIcon,
    PercentPipe,
    RouterLink,
    DatePipe,
    NgForOf,
    MatList,
    MatListItem,
    MatLine,
    MatButton, MatDivider, MatListSubheaderCssMatStyler, MatProgressSpinner, NgIf
  ],
  templateUrl: './upcoming-deadlines.component.html',
  styleUrls: ['./upcoming-deadlines.component.css']
})
export class UpcomingDeadlinesComponent implements OnInit {
  upcomingDeadlines: CourseStats[] = [];
  loading = true;
  courseStats$: Observable<CourseStats[] | null>;

  constructor(private dashboardService: DashboardService) {
    this.courseStats$ = this.dashboardService.courseStats$;
  }

  ngOnInit(): void {
    this.courseStats$.pipe(
      filter(stats => stats !== null),
      tap(stats => {
        this.loading = false;
        if (stats) this.filterUpcomingDeadlines(stats);
      })
    ).subscribe();
  }


  private filterUpcomingDeadlines(stats: CourseStats[]): void {
    const now = new Date();
    const fourWeeksFromNow = new Date();
    fourWeeksFromNow.setDate(now.getDate() + 28);

    this.upcomingDeadlines = stats.filter(course => {
      const deadline = new Date(course.enrollmentDeadline);
      return deadline >= now && deadline <= fourWeeksFromNow;
    });
  }
}

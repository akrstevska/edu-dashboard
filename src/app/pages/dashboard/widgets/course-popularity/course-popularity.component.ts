import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import Chart from 'chart.js/auto';
import { CourseStats, DashboardService } from '../../../../services/dashboard.service';
import zoomPlugin from 'chartjs-plugin-zoom';
import {NgIf} from '@angular/common';
import {filter, Observable, tap} from 'rxjs';

@Component({
  selector: 'app-course-popularity',
  imports: [
    MatButton,
    MatProgressSpinner,
    NgIf
  ],
  templateUrl: './course-popularity.component.html',
  styleUrls: ['./course-popularity.component.css']
})
export class CoursePopularityComponent implements OnInit {
  @ViewChild('chart', { static: true }) chart!: ElementRef;
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
        if (stats) this.createChart(stats);
      })
    ).subscribe();
  }

  private createChart(stats: CourseStats[]): void {
    const sortedStats = stats.sort((a, b) => b.popularity - a.popularity);

    new Chart(this.chart.nativeElement, {
      type: 'bar',
      data: {
        labels: sortedStats.map(stat => stat.courseName),
        datasets: [{
          label: 'Course Popularity',
          data: sortedStats.map(stat => stat.popularity),
          borderColor: '#3532B2',
          backgroundColor: '#7673ea',
        }]
      },
      options: {
        maintainAspectRatio: false,
        plugins: {
          legend: {
            labels: {
              color: 'white'
            }
          }
        },
        scales: {
          x: {
            display: false,
            ticks: {
              color: 'white'
            }
          },
          y: {
            ticks: {
              color: 'white'
            },
          }
        }
      }
    });
  }
}

import {Component, ElementRef, OnInit, ViewChild, viewChild} from '@angular/core';
import Chart from 'chart.js/auto';
import {CourseStats, DashboardService} from '../../../../services/dashboard.service';
import {MatProgressSpinner} from '@angular/material/progress-spinner';
import {NgIf} from '@angular/common';
import {filter, Observable, tap} from 'rxjs';

@Component({
  selector: 'app-completion-rates',
  imports: [
    MatProgressSpinner,
    NgIf
  ],
  templateUrl: './completion-rates.component.html',
  styleUrl: './completion-rates.component.css'
})
export class CompletionRatesComponent implements OnInit {
  @ViewChild('chart', { static: true }) chart!: ElementRef; // Correct usage of ViewChild
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
    const sortedStats = stats.sort((a, b) => b.completionRate - a.completionRate);

    new Chart(this.chart.nativeElement, {
      type: 'bar',
      data: {
        labels: sortedStats.map(stat => stat.courseName),
        datasets: [{
          label: 'Course Completion Rates',
          data: sortedStats.map(stat => stat.completionRate),
          borderColor: '#00BCD4',
          backgroundColor: '#a8e6e8',
        }]
      },
      options: {
        indexAxis: 'y', // Make the bar chart horizontal
        maintainAspectRatio: false,
        scales: {
          x: {
            ticks: {
              color: 'white' // Text color for x-axis
            },
            title: {
              display: true,
              text: 'Completion Rate (%)',
              color: 'white' // Title color for x-axis
            }
          },
          y: {
            display: false,
            ticks: {
              color: 'white' // Text color for y-axis
            },
            title: {
              display: true,
              text: 'Courses',
              color: 'white' // Title color for y-axis
            }
          }
        },
        plugins: {
          legend: {
            labels: {
              color: 'white' // Legend text color
            }
          }
        }
      }
    });
  }

}

import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {
  MatFormField,
  MatLabel,
  MatOption,
  MatSelect,
  MatSelectChange,
} from '@angular/material/select';
import Chart from 'chart.js/auto';
import { NgForOf, NgIf } from '@angular/common';
import { filter, Observable, tap } from 'rxjs';
import {
  CourseStats,
  DashboardService,
} from '../../../../services/dashboard.service';
import { MatProgressSpinner } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-progress-by-course',
  templateUrl: './progress-by-course.component.html',
  imports: [
    MatOption,
    MatSelect,
    MatLabel,
    MatFormField,
    NgForOf,
    MatProgressSpinner,
    NgIf,
  ],
  styleUrls: ['./progress-by-course.component.css'],
})
export class ProgressByCourseComponent implements OnInit {
  private colors: string[] = [
    '#3532B2',
    '#92185E',
    '#FFCE56',
    '#4BC0C0',
    '#9966FF',
  ];

  selectedCourse: string = '';
  courseList: string[] = [];
  courseData: Record<string, number[]> = {};
  chartInstance: Chart | null = null;
  @ViewChild('chart', { static: true }) chart!: ElementRef;
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
          if (stats) {
            this.populateCourseData(stats);
            this.courseList = Object.keys(this.courseData);
            this.selectedCourse = this.courseList[0];
            this.createChart(this.courseData[this.selectedCourse]);
          }
        })
      )
      .subscribe();
  }

  populateCourseData(stats: CourseStats[]): void {
    stats.forEach((stat) => {
      const grades = [
        stat.grades.A,
        stat.grades.B,
        stat.grades.C,
        stat.grades.D,
        stat.grades.F,
      ];

      console.log(`Processing course: ${stat.courseName}, Grades:`, grades);

      if (grades.some((grade) => grade > 0)) {
        this.courseData[stat.courseName] = grades;
        console.log(`Added course: ${stat.courseName} with grades:`, grades);
      } else {
        console.log(`Skipped course: ${stat.courseName} (no grades)`);
      }
    });

    this.courseList = Object.keys(this.courseData);
    console.log('Courses with grades:', this.courseList);
  }

  createChart(data: number[]): void {
    if (this.chartInstance) {
      this.chartInstance.destroy();
    }

    this.chartInstance = new Chart(this.chart.nativeElement, {
      type: 'doughnut',
      data: {
        labels: ['A', 'B', 'C', 'D', 'F'],
        datasets: [
          {
            label: 'Grade Distribution',
            data: data,
            backgroundColor: this.colors,
            borderWidth: 0,
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
            labels: {
              color: '#f5f8ff',
            },
          },
          tooltip: {
            callbacks: {
              label: (tooltipItem) => {
                const percentage = tooltipItem.raw;
                return `${percentage}%`;
              },
            },
          },
        },
        cutout: '70%',
      },
    });
  }

  onCourseChange(event: MatSelectChange): void {
    this.selectedCourse = event.value;
    const data = this.courseData[this.selectedCourse];
    if (data) {
      this.createChart(data);
    }
  }
}

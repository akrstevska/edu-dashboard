import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {MatFormField, MatLabel, MatOption, MatSelect, MatSelectChange} from '@angular/material/select';
import Chart from 'chart.js/auto';
import {NgForOf, NgIf} from '@angular/common';
import {filter, Observable, tap} from 'rxjs';
import {CourseStats, DashboardService} from '../../../../services/dashboard.service';
import {MatProgressSpinner} from '@angular/material/progress-spinner';

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
    NgIf
  ],
  styleUrls: ['./progress-by-course.component.css']
})
export class ProgressByCourseComponent implements OnInit {
  private colors: string[] = ['#3532B2', '#92185E', '#FFCE56', '#4BC0C0', '#9966FF'];

  selectedCourse: string = ''; // Selected course from dropdown
  courseList: string[] = []; // List of course names for dropdown
  courseData: Record<string, number[]> = {}; // Holds data for the chart
  chartInstance: Chart | null = null; // Reference to the Chart.js instance
  @ViewChild('chart', { static: true }) chart!: ElementRef; // Access canvas element
  loading = true; // Spinner visibility control
  courseStats$: Observable<CourseStats[] | null>; // Observable for course stats

  constructor(private dashboardService: DashboardService) {
    this.courseStats$ = this.dashboardService.courseStats$; // Injected service for data
  }

  ngOnInit(): void {
    // Subscribe to course stats observable
    this.courseStats$.pipe(
      filter(stats => stats !== null), // Ensure stats are available
      tap(stats => {
        this.loading = false; // Hide spinner
        if (stats) {
          this.populateCourseData(stats); // Populate chart data
          this.courseList = Object.keys(this.courseData); // Extract course names
          this.selectedCourse = this.courseList[0];
          this.createChart(this.courseData[this.selectedCourse]); // Create chart for default course
        }
      })
    ).subscribe();
  }

  populateCourseData(stats: CourseStats[]): void {
    stats.forEach(stat => {
      const grades = [
        stat.grades.A,
        stat.grades.B,
        stat.grades.C,
        stat.grades.D,
        stat.grades.F
      ];

      // Log the grades for debugging
      console.log(`Processing course: ${stat.courseName}, Grades:`, grades);

      // Only add courses that have at least one grade greater than zero
      if (grades.some(grade => grade > 0)) {
        this.courseData[stat.courseName] = grades;
        console.log(`Added course: ${stat.courseName} with grades:`, grades);
      } else {
        console.log(`Skipped course: ${stat.courseName} (no grades)`);
      }
    });

    // Ensure all courses with grades are added to the dropdown list
    this.courseList = Object.keys(this.courseData);
    console.log('Courses with grades:', this.courseList);
  }


  // Create or update the chart
  createChart(data: number[]): void {
    if (this.chartInstance) {
      this.chartInstance.destroy();
    }

    // Determine if all grades are zero and adjust the colors accordingly
    this.chartInstance = new Chart(this.chart.nativeElement, {
      type: 'doughnut',
      data: {
        labels: ['A', 'B', 'C', 'D', 'F'],
        datasets: [{
          label: 'Grade Distribution',
          data: data,
          backgroundColor: this.colors, // Use dynamic colors
          borderWidth: 0
        }]
      },
      options: {
        maintainAspectRatio: false,
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
            labels: {
              color: '#000'
            }
          },
          tooltip: {
            callbacks: {
              label: (tooltipItem) => {
                const percentage = tooltipItem.raw;
                return `${percentage}%`;
              }
            }
          }
        },
        cutout: '70%'
      }
    });
  }

  // Handle course selection change
  onCourseChange(event: MatSelectChange): void {
    this.selectedCourse = event.value;
    const data = this.courseData[this.selectedCourse];
    if (data) {
      this.createChart(data); // Update chart for the selected course
    }
  }
}


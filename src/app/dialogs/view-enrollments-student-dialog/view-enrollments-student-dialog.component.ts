import { Component, ViewChild, AfterViewInit, Inject } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { Enrollment } from '../../../models/enrollment';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
} from '@angular/material/dialog';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { NgForOf, NgIf } from '@angular/common';
import { MatInput } from '@angular/material/input';
import { MatButton } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { EnrollmentDetailsComponent } from '../../components/enrollment-details/enrollment-details.component';
import { EnrollmentService } from '../../services/enrollment.service';
import { MatProgressSpinner } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-view-enrollments-student-dialog',
  templateUrl: './view-enrollments-student-dialog.component.html',
  styleUrls: ['./view-enrollments-student-dialog.component.css'],
  imports: [
    MatDialogContent,
    MatFormField,
    NgForOf,
    MatInput,
    MatButton,
    MatPaginator,
    MatLabel,
    FormsModule,
    MatDialogActions,
    MatDialogClose,
    EnrollmentDetailsComponent,
    NgIf,
    MatProgressSpinner,
  ],
})
export class ViewEnrollmentsStudentDialogComponent implements AfterViewInit {
  constructor(
    public dialogRef: MatDialogRef<ViewEnrollmentsStudentDialogComponent>,
    private router: Router,
    private enrollmentService: EnrollmentService,
    @Inject(MAT_DIALOG_DATA) public data: { studentId: number }
  ) {}
  enrollments: Enrollment[] = [];
  filteredEnrollments: Enrollment[] = [...this.enrollments];
  paginatedEnrollments: Enrollment[] = [];
  pageSize = 2;
  pageIndex = 0;
  loading = true;
  completionStatus: 'completed' | 'uncompleted' = 'completed';

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.loadEnrollments();

    if (this.paginator) {
      this.paginator.page.subscribe((event) => {
        this.onPageChange(event);
      });
    }
  }
  loadEnrollments() {
    this.loading = true;
    this.enrollmentService
      .getEnrollmentsByStudentId(this.data.studentId)
      .subscribe(
        (enrollments: Enrollment[]) => {
          this.loading = false;
          this.enrollments = enrollments;
          this.filteredEnrollments = [...this.enrollments];
          this.updatePaginatedEnrollments();
        },
        (error) => {
          this.loading = false;
          console.error('Error fetching enrollments:', error);
        }
      );
  }
  updatePaginatedEnrollments() {
    const startIndex = this.pageIndex * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.paginatedEnrollments = this.filteredEnrollments.slice(
      startIndex,
      endIndex
    );
  }

  onPageChange(event: any) {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.updatePaginatedEnrollments();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value
      .trim()
      .toLowerCase();
    this.filteredEnrollments = this.enrollments.filter((enrollment) =>
      enrollment.course?.title.toLowerCase().includes(filterValue)
    );

    this.pageIndex = 0;
    this.updatePaginatedEnrollments();
  }

  onDelete($event: number) {}
}

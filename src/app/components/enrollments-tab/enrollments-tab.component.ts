import { Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Enrollment } from '../../../models/enrollment';
import { NgForOf, NgIf } from '@angular/common';
import { EnrollmentDetailsComponent } from '../enrollment-details/enrollment-details.component';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatPaginator } from '@angular/material/paginator';
import { Course } from '../../../models/course';
import { MatDialog } from '@angular/material/dialog';
import { SwalService } from '../../services/swal.service';
import Swal from 'sweetalert2';
import { EnrollmentService } from '../../services/enrollment.service';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-enrollments-tab',
  imports: [
    NgForOf,
    EnrollmentDetailsComponent,
    MatFormField,
    MatInput,
    MatLabel,
    MatPaginator,
    MatProgressSpinner,
    NgIf,
  ],
  templateUrl: './enrollments-tab.component.html',
  styleUrl: './enrollments-tab.component.css',
})
export class EnrollmentsTabComponent implements OnInit, OnDestroy {
  @Input({ required: true }) course: Course | undefined;
  enrollments: Enrollment[] = [];
  filteredEnrollments: Enrollment[] = [];
  paginatedEnrollments: Enrollment[] = [];
  pageSize = 2;
  pageIndex = 0;
  loading = false;
  private subscription = new Subscription();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private enrollmentService: EnrollmentService,
    private dialog: MatDialog,
    private swalService: SwalService
  ) {}

  ngOnInit(): void {
    if (this.course?.id) {
      this.loading = true;

      this.subscription.add(
        this.enrollmentService.enrollments$.subscribe((enrollments) => {
          this.enrollments = enrollments;
          this.filteredEnrollments = [...this.enrollments];
          this.updatePaginatedEnrollments();
          this.loading = false;
        })
      );

      this.enrollmentService
        .getEnrollmentsByCourseId(this.course.id)
        .subscribe({
          error: (err) => {
            console.error('Failed to fetch enrollments:', err);
            this.loading = false;
          },
        });
    }
  }

  ngAfterViewInit() {
    this.updatePaginatedEnrollments();
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
    this.filteredEnrollments = this.enrollments.filter(
      (enrollment) =>
        enrollment?.student?.firstName.toLowerCase().includes(filterValue) //add morre
    );
    this.pageIndex = 0;
    this.updatePaginatedEnrollments();
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  deleteEnrollment(enrollmentId: number | undefined) {
    if (!enrollmentId) {
      this.swalService.error('Enrollment ID not found');
      return;
    }

    Swal.fire({
      title: 'Are you sure?',
      text: 'Do you want to delete this enrollment?',
      icon: 'warning',
      showCancelButton: true,
      background: '#111B34',
      color: '#efefef',
      confirmButtonColor: '#3532B2',
      cancelButtonColor: '#e57272',
      confirmButtonText: 'Yes, delete it!',
      customClass: {
        container: 'swal2-theme-material-ui',
      },
    }).then((result) => {
      if (result.isConfirmed) {
        this.enrollmentService.deleteEnrollment(enrollmentId).subscribe({
          next: () => {
            this.swalService.success('Enrollment deleted successfully!');
          },
          error: (error) => {
            this.swalService.error('Failed to delete enrollment');
            console.error('Delete error', error);
          },
        });
      }
    });
  }
}

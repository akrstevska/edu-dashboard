import {
  AfterViewInit,
  Component,
  Input,
  OnChanges,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatNoDataRow,
  MatRow,
  MatRowDef,
  MatTable,
  MatTableDataSource,
} from '@angular/material/table';
import { Student } from '../../../models/student';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, MatSortHeader, Sort } from '@angular/material/sort';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatDialog } from '@angular/material/dialog';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatMiniFabButton } from '@angular/material/button';
import { MatTooltip } from '@angular/material/tooltip';
import { MatIcon } from '@angular/material/icon';
import { ViewEnrollmentsStudentDialogComponent } from '../../dialogs/view-enrollments-student-dialog/view-enrollments-student-dialog.component';
import { StudentService } from '../../services/student.service';
import { SwalService } from '../../services/swal.service';
import Swal from 'sweetalert2';
import { CreateStudentDialogComponent } from '../../dialogs/create-student-dialog/create-student-dialog.component';

@Component({
  selector: 'app-students-table',
  templateUrl: './students-table.component.html',
  imports: [
    MatFormField,
    MatInput,
    MatTable,
    MatColumnDef,
    MatHeaderCell,
    MatHeaderCellDef,
    MatSortHeader,
    MatSort,
    MatCell,
    MatCellDef,
    MatMiniFabButton,
    MatTooltip,
    MatHeaderRowDef,
    MatHeaderRow,
    MatRow,
    MatRowDef,
    MatNoDataRow,
    MatPaginator,
    MatLabel,
    MatIcon,
  ],
  styleUrls: ['./students-table.component.css'],
})
export class StudentsTableComponent implements AfterViewInit, OnChanges {
  @Input({ required: true }) students: Student[] = [];
  displayedColumns = [
    'id',
    'firstName',
    'lastName',
    'email',
    'age',
    'currentYear',
    'action',
  ];
  dataSource = new MatTableDataSource<Student>([]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private dialog: MatDialog,
    private _liveAnnouncer: LiveAnnouncer,
    private swalService: SwalService,
    private studentService: StudentService
  ) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['students']) {
      this.dataSource.data = this.students;
    }
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  openViewEnrollmentsDialog(studentId: number) {
    const dialogRef = this.dialog.open(ViewEnrollmentsStudentDialogComponent, {
      width: '60vw',
      maxWidth: 'none',
      autoFocus: false,
      height: 'auto',
      data: { studentId: studentId },
    });
  }
  openEditStudentDialog(student: Student) {
    const dialogRef = this.dialog.open(CreateStudentDialogComponent, {
      width: '600px',
      data: { student: student },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.studentService.fetchStudents().subscribe();
      }
    });
  }

  deleteStudent(studentId: number) {
    Swal.fire({
      title: 'Are you sure?',
      text: 'Do you want to delete this student?',
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
        this.studentService.deleteStudent(studentId).subscribe({
          next: () => {
            this.swalService.success('Student deleted successfully!');
          },
          error: (error) => {
            this.swalService.error('Failed to delete student');
            console.error('Delete error', error);
          },
        });
      }
    });
  }
  getSuffix(year: number): string {
    if (year === 1) return 'st';
    if (year === 2) return 'nd';
    if (year === 3) return 'rd';
    return 'th';
  }
}

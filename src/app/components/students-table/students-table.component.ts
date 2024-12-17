import { AfterViewInit, Component, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import {
  MatCell, MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef, MatHeaderRow, MatHeaderRowDef, MatNoDataRow, MatRow, MatRowDef,
  MatTable,
  MatTableDataSource
} from '@angular/material/table';
import { Student } from '../../../models/student';
import { MatPaginator } from '@angular/material/paginator';
import {MatSort, MatSortHeader, Sort} from '@angular/material/sort';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatDialog } from '@angular/material/dialog';
import {MatFormField, MatLabel} from '@angular/material/form-field';
import {MatInput} from '@angular/material/input';
import {MatMiniFabButton} from '@angular/material/button';
import {MatTooltip} from '@angular/material/tooltip';
import {MatIcon} from '@angular/material/icon';
import {
  ViewEnrollmentsStudentDialogComponent
} from '../../dialogs/view-enrollments-student-dialog/view-enrollments-student-dialog.component';
import {StudentService} from '../../services/student.service';

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
    MatPaginator, MatLabel, MatIcon
  ],
  styleUrls: ['./students-table.component.css']
})
export class StudentsTableComponent implements AfterViewInit, OnChanges {
  @Input({ required: true }) students: Student[] = [];
  displayedColumns = ['id', 'firstName', 'lastName', 'email', 'age', 'currentYear', 'action'];
  dataSource = new MatTableDataSource<Student>([]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private dialog: MatDialog, private _liveAnnouncer: LiveAnnouncer) {}

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
      data: { studentId: studentId }  // Pass studentId as data
    });

  }
}

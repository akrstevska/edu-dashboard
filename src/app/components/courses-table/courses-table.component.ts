import {AfterViewInit, Component, inject, Input, ViewChild} from '@angular/core';
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell, MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef, MatNoDataRow,
  MatRow, MatRowDef, MatTable, MatTableDataSource
} from "@angular/material/table";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatIcon} from "@angular/material/icon";
import {MatInput} from "@angular/material/input";
import {MatMiniFabButton} from "@angular/material/button";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort, MatSortHeader, Sort} from "@angular/material/sort";
import {MatTooltip} from "@angular/material/tooltip";
import {LiveAnnouncer} from '@angular/cdk/a11y';
import {Course} from '../../../models/course';
import {DatePipe} from '@angular/common';
import {RouterLink} from '@angular/router';
import {MatCard, MatCardContent} from '@angular/material/card';

@Component({
  selector: 'app-courses-table',
  imports: [
    MatCell,
    MatCellDef,
    MatColumnDef,
    MatFormField,
    MatHeaderCell,
    MatHeaderRow,
    MatHeaderRowDef,
    MatIcon,
    MatInput,
    MatLabel,
    MatMiniFabButton,
    MatPaginator,
    MatRow,
    MatRowDef,
    MatSort,
    MatSortHeader,
    MatTable,
    MatTooltip,
    MatHeaderCellDef,
    MatNoDataRow,
    DatePipe,
    RouterLink,
    MatCard,
    MatCardContent
  ],
  templateUrl: './courses-table.component.html',
  styleUrl: './courses-table.component.css'
})
export class CoursesTableComponent implements AfterViewInit{

  @Input({required: true})
  courses: Course[] = [];

  private _liveAnnouncer = inject(LiveAnnouncer);
  displayedColumns = ['id', 'title', 'semester', 'instructor', 'description', 'enrollmentDeadline', 'action'];
  dataSource = new MatTableDataSource<Course>([]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit() {
    this.dataSource.data = this.courses;
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
}

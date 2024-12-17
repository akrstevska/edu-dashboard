import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Student } from '../../../models/student';
import { CreateStudentDialogComponent } from '../../dialogs/create-student-dialog/create-student-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatOption, MatSelect } from '@angular/material/select';
import { MatInput } from '@angular/material/input';
import { StudentsTableComponent } from '../../components/students-table/students-table.component';
import { MatCard, MatCardContent } from '@angular/material/card';
import { StudentService } from '../../services/student.service';
import {NgIf} from '@angular/common';
import {MatProgressSpinner} from '@angular/material/progress-spinner';

@Component({
  selector: 'app-students',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule,
    CreateStudentDialogComponent,
    MatFormField,
    MatSelect,
    MatOption,
    MatInput, MatLabel, StudentsTableComponent, MatCard, MatCardContent, NgIf, MatProgressSpinner
  ],
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css'],
})
export class StudentsComponent implements OnInit {
  students: Student[] | null = null;
  loading = true;
  constructor(private dialog: MatDialog, private studentService: StudentService) {}

  openCreateStudentDialog() {
    const dialogRef = this.dialog.open(CreateStudentDialogComponent, {
      width: '600px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.studentService.fetchStudents().subscribe();
      }
    });
  }

  ngOnInit() {
    this.loading = true;

    this.studentService.students$.subscribe(students => {
      this.students = students;
      this.loading = students.length === 0;
    });

    this.studentService.fetchStudents().subscribe({
      next: () => {
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }
}

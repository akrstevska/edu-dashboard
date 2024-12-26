import { Component, Inject, OnInit } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogContent,
  MatDialogModule,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatOption } from '@angular/material/select';
import { StudentService } from '../../services/student.service';
import { EnrollmentService } from '../../services/enrollment.service';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { Course } from '../../../models/course';
import { Student } from '../../../models/student';
import { Enrollment } from '../../../models/enrollment';
import { SwalService } from '../../services/swal.service';

interface DialogData {
  course: Course;
}

@Component({
  selector: 'app-enroll-student-dialog',
  imports: [
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    CommonModule,
    MatButton,
    MatIcon,
    MatOption,
    MatAutocompleteModule,
  ],
  templateUrl: './enroll-student-dialog.component.html',
  styleUrl: './enroll-student-dialog.component.css',
})
export class EnrollStudentDialogComponent implements OnInit {
  enrollmentForm: FormGroup;
  students: Student[] = [];
  filteredStudents: Observable<Student[]>;
  selectedStudent: Student | null = null;
  isValidSelection: boolean = false;

  constructor(
    private fb: FormBuilder,
    private studentService: StudentService,
    private enrollmentService: EnrollmentService,
    public dialogRef: MatDialogRef<EnrollStudentDialogComponent>,
    private swalService: SwalService,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {
    this.enrollmentForm = this.fb.group({
      student: ['', Validators.required],
      enrollmentDate: [null, Validators.required],
    });

    this.enrollmentForm.get('student')?.valueChanges.subscribe((value) => {
      this.isValidSelection = value && typeof value === 'object';
    });

    this.filteredStudents = this.enrollmentForm
      .get('student')!
      .valueChanges.pipe(
        startWith(''),
        map((value) => this._filter(value || ''))
      );
  }

  ngOnInit() {
    this.studentService.fetchStudents().subscribe(
      (students) => {
        this.students = students;
      },
      (error) => {
        console.error('Error loading students:', error);
      }
    );
  }

  private _filter(value: string | Student): Student[] {
    const filterValue = typeof value === 'string' ? value.toLowerCase() : '';
    return this.students.filter(
      (student) =>
        student.firstName.toLowerCase().includes(filterValue) ||
        student.id.toString().includes(filterValue)
    );
  }

  displayFn(student: Student): string {
    return student ? `${student.firstName} (ID: ${student.id})` : '';
  }

  onStudentSelected(event: any) {
    this.selectedStudent = event.option.value;
    this.isValidSelection = true;
  }

  isFormValid(): boolean {
    return this.enrollmentForm.valid && this.isValidSelection;
  }

  onEnroll() {
    if (this.isFormValid() && this.selectedStudent) {
      const enrollment: Enrollment = {
        id: 0,
        student: this.selectedStudent,
        course: this.data.course,
        enrollmentDate: this.enrollmentForm
          .get('enrollmentDate')
          ?.value.toISOString()
          .split('T')[0],
        grade: 0,
        completionStatus: false,
        progress: null,
      };
      this.enrollmentService.enrollStudent(enrollment).subscribe({
        next: (enrollment) => {
          this.swalService.success('Student Enrolled Successfully!');
          this.dialogRef.close(enrollment);
        },
        error: (error) => {
          console.error('Error enrolling student', error);
          this.swalService.error('Failed to enroll student. Please try again.');
        },
      });
    }
  }
}

import {Component, OnInit} from '@angular/core';
import {MatIcon} from '@angular/material/icon';
import {StudentService} from '../../../../services/student.service';
import {CourseStats, DashboardService} from '../../../../services/dashboard.service';
import {filter, Observable, tap} from 'rxjs';
import {Student} from '../../../../../models/student';

@Component({
  selector: 'app-students',
  imports: [
    MatIcon
  ],
  templateUrl: './students.component.html',
  styleUrl: './students.component.css'
})
export class StudentsComponent implements OnInit {
  totalStudents: number | null = null;
  student$: Observable<Student[] | null>;

  constructor(private dashboardService: DashboardService) {
    this.student$ = this.dashboardService.student$;
  }

  ngOnInit(): void {
    this.student$.pipe(
      filter(students => students !== null),
      tap(students => {
        if (students)  this.totalStudents = students.length;
      })
    ).subscribe();
  }
}

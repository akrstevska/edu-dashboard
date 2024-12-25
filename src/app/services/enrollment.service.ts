import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, catchError, Observable, tap} from 'rxjs';
import {Enrollment} from '../../models/enrollment';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {
  private baseUrl = 'https://edudashboard-hqc2bxe4aabhgvb8.eastus-01.azurewebsites.net/enrollment';
  private enrollmentSubject = new BehaviorSubject<Enrollment[]>([]);
  enrollments$ = this.enrollmentSubject.asObservable();

  constructor(private http: HttpClient) {}

  getEnrollmentsByStudentId(studentId: number): Observable<Enrollment[]> {
    return this.http.get<Enrollment[]>(`${this.baseUrl}/getByStudent/${studentId}`);
  }
  enrollStudent(enrollment: Enrollment): Observable<Enrollment> {

    return this.http.post<Enrollment>(this.baseUrl, enrollment).pipe(
      tap(createdEnrollment => {
        const currentEnrollments = this.enrollmentSubject.value;
        this.enrollmentSubject.next([...currentEnrollments, createdEnrollment]);
      }),
      catchError(error => {
        console.error('Error creating enrrollment', error);
        throw error;
      })
    );
  }
}

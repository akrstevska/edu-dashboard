import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, catchError, Observable, tap } from 'rxjs';
import { Enrollment } from '../../models/enrollment';

@Injectable({
  providedIn: 'root',
})
export class EnrollmentService {
  private baseUrl =
    'https://edudashboard-hqc2bxe4aabhgvb8.azurewebsites.net/enrollment';
  private enrollmentSubject = new BehaviorSubject<Enrollment[]>([]);
  enrollments$ = this.enrollmentSubject.asObservable();
  private currentCourseId: number | null = null;

  constructor(private http: HttpClient) {}

  getEnrollmentsByStudentId(studentId: number): Observable<Enrollment[]> {
    return this.http.get<Enrollment[]>(
      `${this.baseUrl}/getByStudent/${studentId}`
    );
  }

  getEnrollmentsByCourseId(courseId: number): Observable<Enrollment[]> {
    this.currentCourseId = courseId;
    this.enrollmentSubject.next([]);
    return this.http
      .get<Enrollment[]>(`${this.baseUrl}/getByCourse/${courseId}`)
      .pipe(
        tap((enrollments) => {
          this.enrollmentSubject.next(enrollments);
        })
      );
  }
  refreshCurrentEnrollments() {
    if (this.currentCourseId) {
      this.getEnrollmentsByCourseId(this.currentCourseId).subscribe();
    }
  }

  enrollStudent(enrollment: Enrollment): Observable<Enrollment> {
    return this.http
      .post<Enrollment>(`${this.baseUrl}/enroll`, enrollment)
      .pipe(
        tap(() => {
          this.refreshCurrentEnrollments();
        }),
        catchError((error) => {
          console.error('Error creating enrollment', error);
          throw error;
        })
      );
  }

  deleteEnrollment(enrollmentId: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${enrollmentId}`).pipe(
      tap(() => {
        this.refreshCurrentEnrollments();
      }),
      catchError((error) => {
        console.error('Error deleting enrollment', error);
        throw error;
      })
    );
  }
}

import {inject, Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { BehaviorSubject, catchError, Observable, of, tap } from 'rxjs';
import {Course} from '../../models/course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private courseSubject = new BehaviorSubject<Course[]>([]);
  courses$ = this.courseSubject.asObservable();

  private http = inject(HttpClient);
  private apiUrl = 'https://edudashboard-hqc2bxe4aabhgvb8.eastus-01.azurewebsites.net/course';

  fetchCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(this.apiUrl).pipe(
      tap(response => {
        this.courseSubject.next(response);
      }),
      catchError(error => {
        console.error('Error fetching courses', error);
        this.courseSubject.next([]);
        return of([]);
      })
    );
  }

  createCourse(course: Course): Observable<Course> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.post<Course>(this.apiUrl, course, { headers }).pipe(
      tap(createdCourse => {
        const currentCourses = this.courseSubject.value;
        this.courseSubject.next([...currentCourses, createdCourse]);
      }),
      catchError(error => {
        console.error('Error creating course', error);
        throw error;
      })
    );
  }
  deleteCourse(courseId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${courseId}`).pipe(
      tap(() => {
        const currentCourses = this.courseSubject.value;
        const updatedCourses = currentCourses.filter(course => course.id !== courseId);
        this.courseSubject.next(updatedCourses);
      }),
      catchError(error => {
        console.error('Error deleting course', error);
        throw error;
      })
    );
  }
  updateCourse(course: Course): Observable<Course> {
    return this.http.put<Course>(`${this.apiUrl}/${course.id}`, course);
  }
  getCourseById(courseId: number): Observable<Course> {
    return this.http.get<Course>(`${this.apiUrl}/${courseId}`).pipe(
      catchError(error => {
        console.error('Error getting course by ID', error);
        throw error;
      })
    );
  }
  getCurrentCourses(): Course[] {
    return this.courseSubject.value;
  }
}

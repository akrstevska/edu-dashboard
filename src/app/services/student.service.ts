import {inject, Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student } from '../../models/student';
import { BehaviorSubject, catchError, Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private studentsSubject = new BehaviorSubject<Student[]>([]);
  students$ = this.studentsSubject.asObservable();

  private http = inject(HttpClient);
  private apiUrl = 'https://edudashboard-hqc2bxe4aabhgvb8.eastus-01.azurewebsites.net/student';

  fetchStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(this.apiUrl).pipe(
      tap(response => {
        this.studentsSubject.next(response);
      }),
      catchError(error => {
        console.error('Error fetching students', error);
        this.studentsSubject.next([]);
        return of([]);
      })
    );
  }

  createStudent(student: Student): Observable<Student> {
    return this.http.post<Student>(`${this.apiUrl}`, student).pipe(
      tap(createdStudent => {
        const currentStudents = this.studentsSubject.value;
        this.studentsSubject.next([...currentStudents, createdStudent]);
      })
    );
  }

  getCurrentStudents(): Student[] {
    return this.studentsSubject.value;
  }
}
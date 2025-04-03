import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student } from '../../models/student';
import { BehaviorSubject, catchError, Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  private studentsSubject = new BehaviorSubject<Student[]>([]);
  students$ = this.studentsSubject.asObservable();

  private http = inject(HttpClient);
  private apiUrl =
    'https://edudashboard-hqc2bxe4aabhgvb8.azurewebsites.net/student';

  fetchStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(this.apiUrl).pipe(
      tap((response) => {
        this.studentsSubject.next(response);
      }),
      catchError((error) => {
        console.error('Error fetching students', error);
        this.studentsSubject.next([]);
        return of([]);
      })
    );
  }

  createStudent(student: Student): Observable<Student> {
    return this.http.post<Student>(`${this.apiUrl}`, student).pipe(
      tap((createdStudent) => {
        const currentStudents = this.studentsSubject.value;
        this.studentsSubject.next([...currentStudents, createdStudent]);
      })
    );
  }
  deleteStudent(studentId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${studentId}`).pipe(
      tap(() => {
        const currentStudents = this.studentsSubject.value;
        const updatedStudents = currentStudents.filter(
          (student) => student.id !== studentId
        );
        this.studentsSubject.next(updatedStudents);
      }),
      catchError((error) => {
        console.error('Error deleting student', error);
        throw error;
      })
    );
  }
  updateStudent(student: Student): Observable<Student> {
    return this.http.put<Student>(`${this.apiUrl}/${student.id}`, student);
  }

  getCurrentStudents(): Student[] {
    return this.studentsSubject.value;
  }
}

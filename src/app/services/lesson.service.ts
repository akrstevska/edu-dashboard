import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, catchError, Observable, tap } from 'rxjs';
import { Lesson } from '../../models/lesson';

@Injectable({
  providedIn: 'root',
})
export class LessonService {
  private baseUrl =
    'https://edudashboard-hqc2bxe4aabhgvb8.azurewebsites.net/lesson';
  private lessonSubject = new BehaviorSubject<Lesson[]>([]);
  lessons$ = this.lessonSubject.asObservable();

  constructor(private http: HttpClient) {}

  getLessonsByCourseId(courseId: number): Observable<Lesson[]> {
    return this.http.get<Lesson[]>(`${this.baseUrl}/getByCourse/${courseId}`);
  }

  createLesson(lesson: Lesson): Observable<Lesson> {
    return this.http.post<Lesson>(this.baseUrl, lesson).pipe(
      tap((createdLesson) => {
        const currentLessons = this.lessonSubject.value;
        this.lessonSubject.next([...currentLessons, createdLesson]);
      }),
      catchError((error) => {
        console.error('Error creating lesson', error);
        throw error;
      })
    );
  }
  updateLesson(lesson: Lesson): Observable<Lesson> {
    return this.http.put<Lesson>(`${this.baseUrl}/${lesson.id}`, lesson);
  }
  deleteLesson(lessonId: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${lessonId}`).pipe(
      tap(() => {
        const currentLessons = this.lessonSubject.value;
        const updatedLessons = currentLessons.filter(
          (lesson) => lesson.id !== lessonId
        );
        this.lessonSubject.next(updatedLessons);
      }),
      catchError((error) => {
        console.error('Error deleting lesson', error);
        throw error;
      })
    );
  }
}

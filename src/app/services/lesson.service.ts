import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Lesson} from '../../models/lesson';

@Injectable({
  providedIn: 'root'
})
export class LessonService {
  private baseUrl = 'https://edudashboard-hqc2bxe4aabhgvb8.eastus-01.azurewebsites.net/lesson';

  constructor(private http: HttpClient) {}

  getLessonsByCourseId(courseId: number): Observable<Lesson[]> {
    return this.http.get<Lesson[]>(`${this.baseUrl}/getByCourse/${courseId}`);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Instructor } from '../../models/instructor';

@Injectable({
  providedIn: 'root',
})
export class InstructorService {
  private baseUrl =
    'https://edudashboard-hqc2bxe4aabhgvb8.eastus-01.azurewebsites.net/instructor';

  constructor(private http: HttpClient) {}

  getAllInstructors(): Observable<Instructor[]> {
    return this.http.get<Instructor[]>(this.baseUrl);
  }
}

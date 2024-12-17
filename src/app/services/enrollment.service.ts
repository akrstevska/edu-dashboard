import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Enrollment} from '../../models/enrollment';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {
  constructor(private http: HttpClient) {}

  getEnrollmentsByStudentId(studentId: number): Observable<Enrollment[]> {
    return this.http.get<Enrollment[]>(`https://edudashboard-hqc2bxe4aabhgvb8.eastus-01.azurewebsites.net/enrollment/getByStudent/${studentId}`);
  }
}

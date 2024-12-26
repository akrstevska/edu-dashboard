import { ActivatedRouteSnapshot, Resolve, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Course } from '../../models/course';
import { CourseService } from '../services/course.service';
import { catchError, EMPTY, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CourseResolver implements Resolve<Course> {
  constructor(private courseService: CourseService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Course> {
    const id = Number(route.paramMap.get('id'));

    if (isNaN(id)) {
      this.router.navigate(['/dashboard']);
      return EMPTY;
    }

    return this.courseService.getCourseById(id).pipe(
      catchError(() => {
        this.router.navigate(['/dashboard']);
        return EMPTY;
      })
    );
  }
}

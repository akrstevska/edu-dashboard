import { Routes } from '@angular/router';
import {DashboardComponent} from './pages/dashboard/dashboard.component';
import {StudentsComponent} from './pages/students/students.component';
import {CoursesComponent} from './pages/courses/courses.component';
import {CourseDetailsComponent} from './components/course-details/course-details.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard',
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'students',
    component: StudentsComponent,
  },
  {
    path: 'courses',
    component: CoursesComponent,
  },
  {
    path: 'courses/:id',
    component: CourseDetailsComponent
  },

];

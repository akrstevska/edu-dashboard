import { computed, effect, Injectable, signal } from '@angular/core';
import { Widget } from '../../models/widget';
import { StudentsComponent } from '../pages/dashboard/widgets/students/students.component';
import { CoursesComponent } from '../pages/dashboard/widgets/courses/courses.component';
import { ActiveEnrollmentsComponent } from '../pages/dashboard/widgets/active-enrollments/active-enrollments.component';
import { StudentsByYearComponent } from '../pages/dashboard/widgets/students-by-year/students-by-year.component';
import { CoursePopularityComponent } from '../pages/dashboard/widgets/course-popularity/course-popularity.component';
import { CompletionRatesComponent } from '../pages/dashboard/widgets/completion-rates/completion-rates.component';
import { ProgressByCourseComponent } from '../pages/dashboard/widgets/progress-by-course/progress-by-course.component';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, catchError, Observable, of, tap } from 'rxjs';
import { UpcomingDeadlinesComponent } from '../pages/dashboard/widgets/upcoming-deadlines/upcoming-deadlines.component';
import { Student } from '../../models/student';

export type CourseStats = {
  courseName: string;
  enrollmentDeadline: string;
  popularity: number;
  completionRate: number;
  courseId: number;
  grades: {
    A: number;
    B: number;
    C: number;
    D: number;
    F: number;
  };
  activeEnrollments: number;
};
@Injectable()
export class DashboardService {
  private courseStatsSubject = new BehaviorSubject<CourseStats[] | null>(null);
  courseStats$ = this.courseStatsSubject.asObservable();

  private studentSubject = new BehaviorSubject<Student[] | null>(null);
  student$ = this.studentSubject.asObservable();

  constructor(private http: HttpClient) {
    this.fetchCourseStats().subscribe();
    this.fetchStudents().subscribe();
    this.fetchWidgets();
  }

  widgets = signal<Widget[]>([
    {
      id: 1,
      label: 'Students',
      content: StudentsComponent,
      rows: 1,
      columns: 1,
      background: '#3532B2',
    },
    {
      id: 2,
      label: 'Courses',
      content: CoursesComponent,
      rows: 1,
      columns: 1,
      background: '#3532B2',
    },
    {
      id: 8,
      label: 'Upcoming Enrollment Deadlines',
      content: UpcomingDeadlinesComponent,
      rows: 2,
      columns: 2,
      background: '#90195E',
    },
    {
      id: 3,
      label: 'Active Enrollments',
      content: ActiveEnrollmentsComponent,
      rows: 1,
      columns: 1,
      background: '#3532B2',
    },
    {
      id: 4,
      label: 'Students By Year',
      content: StudentsByYearComponent,
      rows: 2,
      columns: 2,
      background: '#3532B2',
    },
    {
      id: 6,
      label: 'Completion Rates By Course',
      content: CompletionRatesComponent,
      rows: 3,
      columns: 2,
    },
    {
      id: 5,
      label: 'Course Popularity',
      content: CoursePopularityComponent,
      rows: 3,
      columns: 2,
    },

    {
      id: 7,
      label: 'Progress By Course',
      content: ProgressByCourseComponent,
      rows: 3,
      columns: 2,
    },
  ]);

  addedWidgets = signal<Widget[]>([
    {
      id: 1,
      label: 'Students',
      content: StudentsComponent,
      rows: 1,
      columns: 1,
      background: '#3532B2',
    },
    {
      id: 2,
      label: 'Courses',
      content: CoursesComponent,
      rows: 1,
      columns: 1,
      background: '#3532B2',
    },
    {
      id: 8,
      label: 'Upcoming Enrollment Deadlines',
      content: UpcomingDeadlinesComponent,
      rows: 2,
      columns: 2,
      background: '#90195E',
    },
    {
      id: 7,
      label: 'Progress By Course',
      content: ProgressByCourseComponent,
      rows: 3,
      columns: 2,
    },

    {
      id: 5,
      label: 'Course Popularity',
      content: CoursePopularityComponent,
      rows: 3,
      columns: 2,
    },
    {
      id: 4,
      label: 'Students By Year',
      content: StudentsByYearComponent,
      rows: 2,
      columns: 2,
      background: '#3532B2',
    },
  ]);

  fetchCourseStats(): Observable<{ stats: CourseStats[] }> {
    return this.http
      .get<{ stats: CourseStats[] }>(
        'https://edudashboard-hqc2bxe4aabhgvb8.azurewebsites.net/course/statistics'
      )
      .pipe(
        tap((response) => {
          this.courseStatsSubject.next(response.stats);
        }),
        catchError((error) => {
          console.error('Error fetching course stats', error);
          this.courseStatsSubject.next(null);
          return of({ stats: [] });
        })
      );
  }

  fetchStudents(): Observable<Student[]> {
    return this.http
      .get<Student[]>(
        'https://edudashboard-hqc2bxe4aabhgvb8.azurewebsites.net/student'
      )
      .pipe(
        tap((students) => {
          this.studentSubject.next(students);
        }),
        catchError((error) => {
          console.error('Error fetching students', error);
          this.studentSubject.next([]);
          return of([]);
        })
      );
  }

  widgetsToAdd = computed(() => {
    const addedIds = this.addedWidgets().map((w) => w.id);
    return this.widgets().filter((w) => !addedIds.includes(w.id));
  });

  addWidget(w: Widget) {
    this.addedWidgets.set([...this.addedWidgets(), { ...w }]);
  }

  updateWidget(id: number, widget: Partial<Widget>) {
    const index = this.addedWidgets().findIndex((w) => w.id === id);
    if (index !== -1) {
      const newWidgets = [...this.addedWidgets()];
      newWidgets[index] = { ...newWidgets[index], ...widget };
      this.addedWidgets.set(newWidgets);
    }
  }
  moveWidgetToRight(id: number) {
    const index = this.addedWidgets().findIndex((w) => w.id === id);
    if (index === this.addedWidgets().length - 1) {
      return;
    }

    const newWidgets = [...this.addedWidgets()];
    [newWidgets[index], newWidgets[index + 1]] = [
      { ...newWidgets[index + 1] },
      { ...newWidgets[index] },
    ];
    this.addedWidgets.set(newWidgets);
  }

  moveWidgetToLeft(id: number) {
    const index = this.addedWidgets().findIndex((w) => w.id === id);
    if (index === 0) {
      return;
    }

    const newWidgets = [...this.addedWidgets()];
    [newWidgets[index], newWidgets[index - 1]] = [
      { ...newWidgets[index - 1] },
      { ...newWidgets[index] },
    ];
    this.addedWidgets.set(newWidgets);
  }
  removeWidget(id: number) {
    this.addedWidgets.set(this.addedWidgets().filter((w) => w.id !== id));
  }

  fetchWidgets() {
    const widgetsAsString = localStorage.getItem('dashboardWidgets');
    if (widgetsAsString) {
      const widgets = JSON.parse(widgetsAsString) as Widget[];
      widgets.forEach((widget) => {
        const content = this.widgets().find((w) => w.id === widget.id)?.content;
        if (content) {
          widget.content = content;
        }
      });
      this.addedWidgets.set(widgets);
    }
  }

  saveWidgets = effect(() => {
    const widgetsWithoutContent: Partial<Widget>[] = this.addedWidgets().map(
      (w) => ({ ...w })
    );
    widgetsWithoutContent.forEach((w) => {
      delete w.content;
    });
    localStorage.setItem(
      'dashboardWidgets',
      JSON.stringify(widgetsWithoutContent)
    );
  });
}

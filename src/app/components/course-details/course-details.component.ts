import { Component } from '@angular/core';
import {CoursesTableComponent} from "../courses-table/courses-table.component";
import {MatButton, MatMiniFabButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";
import {DatePipe, NgForOf} from '@angular/common';
import {MatCard, MatCardContent, MatCardHeader, MatCardSubtitle, MatCardTitle} from '@angular/material/card';
import {MatProgressBar} from '@angular/material/progress-bar';
import {MatTooltip} from '@angular/material/tooltip';
import {MatTab, MatTabGroup} from '@angular/material/tabs';
import {MatFormField, MatLabel} from '@angular/material/form-field';
import {MatInput} from '@angular/material/input';
import {LessonsTabComponent} from '../lessons-tab/lessons-tab.component';
import {EnrollmentsTabComponent} from '../enrollments-tab/enrollments-tab.component';

@Component({
  selector: 'app-course-details',
  imports: [
    CoursesTableComponent,
    MatButton,
    MatIcon,
    DatePipe,
    MatCard,
    MatCardContent,
    MatCardHeader,
    MatCardTitle,
    MatCardSubtitle,
    MatProgressBar,
    NgForOf,
    MatMiniFabButton,
    MatTooltip,
    MatTabGroup,
    MatTab,
    MatFormField,
    MatInput,
    MatLabel,
    LessonsTabComponent,
    EnrollmentsTabComponent
  ],
  templateUrl: './course-details.component.html',
  styleUrl: './course-details.component.css'
})
export class CourseDetailsComponent {
  course =
    {
      "id": 1,
      "title": "CS101",
      "description": "Introduction to Programming Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      "enrollmentDeadline": "2024-08-30T23:59:59.000+00:00",
      "semester": "Spring 2024"
    }
}

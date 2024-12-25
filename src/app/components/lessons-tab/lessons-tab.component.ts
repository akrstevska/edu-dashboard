import { Component, AfterViewInit, Input, ViewChild, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { Lesson } from '../../../models/lesson';
import {LessonService} from '../../services/lesson.service';
import {MatButton, MatMiniFabButton} from '@angular/material/button';
import {MatTooltip} from '@angular/material/tooltip';
import {MatFormField, MatLabel} from '@angular/material/form-field';
import {MatInput} from '@angular/material/input';
import {NgForOf, NgIf, SlicePipe} from '@angular/common';
import {MatCard, MatCardContent, MatCardHeader, MatCardTitle} from '@angular/material/card';
import {MatIcon} from '@angular/material/icon';
import {MatProgressSpinner} from '@angular/material/progress-spinner';
import {Course} from '../../../models/course';

@Component({
  selector: 'app-lessons-tab',
  templateUrl: './lessons-tab.component.html',
  imports: [
    MatButton,
    MatTooltip,
    MatLabel,
    MatFormField,
    MatInput,
    NgForOf,
    MatCard,
    MatCardHeader,
    MatCardTitle,
    MatMiniFabButton,
    MatCardContent,
    MatIcon,
    NgIf,
    SlicePipe,
    MatPaginator,
    MatProgressSpinner
  ],
  styleUrls: ['./lessons-tab.component.css']
})
export class LessonsTabComponent implements AfterViewInit, OnInit {
  @Input({ required: true }) course: Course | undefined;
  lessons: Lesson[] = [];
  filteredLessons: Lesson[] = [];
  paginatedLessons: Lesson[] = [];
  pageSize = 2;
  pageIndex = 0;
  loading = false;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private lessonService: LessonService) {}

  ngOnInit(): void {
    this.fetchLessons();
  }

  fetchLessons(): void {
    if (!this.course?.id) {
      console.error('Course ID is undefined.');
      this.loading = false;
      return;
    }

    this.loading = true;
    this.lessonService.getLessonsByCourseId(this.course.id).subscribe({
      next: (data) => {
        this.lessons = data;
        this.filteredLessons = [...this.lessons];
        this.updatePaginatedLessons();
        this.loading = false;
      },
      error: (err) => {
        console.error('Failed to fetch lessons:', err);
        this.loading = false;
      }
    });
  }



  ngAfterViewInit() {
    this.updatePaginatedLessons();
  }

  updatePaginatedLessons() {
    const startIndex = this.pageIndex * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.paginatedLessons = this.filteredLessons.slice(startIndex, endIndex);
  }

  onPageChange(event: any) {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.updatePaginatedLessons();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value.trim().toLowerCase();
    this.filteredLessons = this.lessons.filter(lesson =>
      lesson?.title.toLowerCase().includes(filterValue)
    );
    this.pageIndex = 0;
    this.updatePaginatedLessons();
  }

  toggleContent(index: number): void {
    const lessonIndex = this.lessons.findIndex((_, i) => i === index);
    this.lessons[lessonIndex].isExpanded = !this.lessons[lessonIndex].isExpanded;
  }
}

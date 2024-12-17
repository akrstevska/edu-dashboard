import {AfterViewInit, Component, Input, ViewChild} from '@angular/core';
import {MatCard, MatCardContent, MatCardHeader, MatCardSubtitle, MatCardTitle} from '@angular/material/card';
import {MatButton, MatMiniFabButton} from '@angular/material/button';
import {MatTooltip} from '@angular/material/tooltip';
import {MatIcon} from '@angular/material/icon';
import {Lesson} from '../../../models/lesson';
import {NgForOf, NgIf, SlicePipe} from '@angular/common';
import {MatFormField, MatLabel} from '@angular/material/form-field';
import {MatInput} from '@angular/material/input';
import {MatPaginator} from '@angular/material/paginator';

@Component({
  selector: 'app-lessons-tab',
  imports: [
    MatCard,
    MatCardHeader,
    MatMiniFabButton,
    MatCardContent,
    MatTooltip, MatIcon,
    MatCardTitle, MatCardSubtitle, NgForOf, NgIf, SlicePipe, MatButton, MatFormField, MatInput, MatLabel, MatPaginator
  ],
  templateUrl: './lessons-tab.component.html',
  styleUrl: './lessons-tab.component.css'
})
export class LessonsTabComponent implements AfterViewInit{
  @Input({required: true})
  course_id: number = 0;

  lessons = [
    {
      "id": 1,
      "title": "Variables and Data Types",
      "description": "Introduction to variables and data types in programming",
      "content": "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
      "isExpanded": false,
      "course": null,
    },
    {
      "id": 7,
      "title": "Lesson 3: Control Structures",
      "description": "This lesson explains control structures such as if statements and loops.",
      "content": "Control Structures",
      "isExpanded": false,
      "course": null,

    },
    {
      "id": 8,
      "title": "Lesson 4: Functions and Methods",
      "description": "This lesson introduces functions and methods, explaining their purpose and how to use them.",
      "content": "Functions and Methods",
      "isExpanded": false,
      "course": null,

    }
  ] ;
  toggleContent(index: number): void {
    this.lessons[index].isExpanded = !this.lessons[index].isExpanded;
  }

  filteredLessons: Lesson[] = [...this.lessons];
  paginatedLessons: Lesson[] = [];
  pageSize = 2;
  pageIndex = 0;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

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

    this.pageIndex = 0; // Reset to the first page
    this.updatePaginatedLessons();
  }
}

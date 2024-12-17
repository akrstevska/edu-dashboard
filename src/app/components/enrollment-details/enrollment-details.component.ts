import {Component, EventEmitter, Input, Output} from '@angular/core';
import {MatCard, MatCardContent, MatCardHeader, MatCardSubtitle, MatCardTitle} from '@angular/material/card';
import {MatProgressBar} from '@angular/material/progress-bar';
import {DatePipe, NgClass, NgIf} from '@angular/common';
import {MatButton} from '@angular/material/button';
import {RouterLink} from '@angular/router';
import {Enrollment} from '../../../models/enrollment';
import {MatTooltip} from '@angular/material/tooltip';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-enrollment-details',
  imports: [
    MatCardContent,
    MatCardHeader,
    MatCard,
    MatProgressBar,
    NgIf,
    MatButton,
    RouterLink,
    NgClass,
    MatTooltip,
    DatePipe,
    MatCardSubtitle, MatCardTitle
  ],
  templateUrl: './enrollment-details.component.html',
  styleUrl: './enrollment-details.component.css'
})
export class EnrollmentDetailsComponent {

  @Input() enrollment?: Enrollment;

  @Input() showViewDetails: boolean = true;
  @Input() showDelete: boolean = false;
  @Input() dialogRef: MatDialogRef<any> | null = null; // Optional dialogRef

  onViewCourse(): void {
    if (this.dialogRef) {
      this.dialogRef.close(); // Close the modal if it's open
    }
  }
  @Output() delete = new EventEmitter<number>();

  onDelete(): void {
    this.delete.emit(this.enrollment!.course?.id);
  }

}

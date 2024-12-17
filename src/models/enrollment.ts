import {Student} from './student';
import {Course} from './course';
import {Progress} from './progress';

export type Enrollment = {
  id: number;
  student: Student | null;
  course: Course | null;
  enrollmentDate: string;
  grade: number;
  completionStatus: boolean;
  progress: Progress | null;
}

export const Enrollment = {
  default: Object.freeze({
    id: 0,
    student: null,
    course: null,
    enrollmentDate: '',
    grade: 0,
    completionStatus: false,
    progress: null,
  })
};


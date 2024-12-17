import {Instructor} from './instructor';

export type Course = {
  id: number;
  title: string;
  description: string;
  enrollmentDeadline: string;
  semester: string;
}

export const Course = {
  default: Object.freeze({
    id: 0,
    title: '',
    description: '',
    enrollmentDeadline: '',
    semester: '',
  })
};


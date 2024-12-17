import {Course} from './course';

export type Lesson = {
  id: number;
  title: string;
  description: string;
  content: string;
  course: Course | null;
  isExpanded?: boolean;
}

export const Lesson = {
  default: Object.freeze({
    id: 0,
    title: '',
    description: '',
    content: '',
    course: null,
    isExpanded: false,
  })
};


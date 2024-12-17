import {Lesson} from './lesson';

export type Progress = {
  id: number;
  completedLessons: Lesson[];
  currentLesson: Lesson | null;
  lastAccess: string;
  overallProgress: number;
}

export const Progress = {
  default: Object.freeze({
    id: 0,
    completedLessons: [],
    currentLesson: null,
    lastAccess: new Date().toISOString(),
    overallProgress: 0,
  })
};

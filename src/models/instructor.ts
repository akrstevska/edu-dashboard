export type Instructor = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  department: string;
}

export const Instructor = {
  default: Object.freeze({
    id: 0,
    firstName: '',
    lastName: '',
    email: '',
    department: '',
  })
};


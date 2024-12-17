export type Student = {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  email: string;
  currentYear: number;
}

export const Student = {
  default: Object.freeze({
    id: 0,
    firstName: '',
    lastName: '',
    age: 0,
    email: '',
    currentYear: 0
  })
};

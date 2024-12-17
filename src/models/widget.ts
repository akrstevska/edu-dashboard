import {Type} from '@angular/core';

export type Widget = {
  id: number,
  label: string,
  content: Type<unknown>,
  rows?: number,
  columns?: number,
  background?: string,
  color?: string,
}

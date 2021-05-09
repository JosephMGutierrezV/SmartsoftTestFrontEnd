import { Columna } from './columns.interface';

export interface Tabla {
  id: number;
  name: string;
  columns?: Columna[];
}

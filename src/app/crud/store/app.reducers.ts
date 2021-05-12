import { ActionReducerMap } from '@ngrx/store';
import * as reducers from './reducer';

export interface AppState {
  tablas: reducers.TablasState;
  tablasDetalles: reducers.ColumnsState;
  datos: reducers.DatosState;
}

export const appReducers: ActionReducerMap<AppState> = {
  tablas: reducers.reducerTablas,
  tablasDetalles: reducers.reducerColumns,
  datos: reducers.reducerDatos,
};

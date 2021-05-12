import { ActionReducerMap } from '@ngrx/store';
import * as reducers from './reducer';

export interface AppState {
  tablas: reducers.TablasState;
}

export const appReducers: ActionReducerMap<AppState> = {
  tablas: reducers.reducerTablas,
};

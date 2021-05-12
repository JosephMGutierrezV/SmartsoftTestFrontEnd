import { Action, createReducer, on } from '@ngrx/store';
import { Tabla } from '../../interfaces/table.interface';
import {
  loadTablass,
  loadTablassSuccess,
  loadTablassFailure,
} from '../actions';

export const tablasFeatureKey = 'tablas';
export interface TablasState {
  loaded: boolean;
  loading: boolean;
  error: any;
  listaTablas: Tabla[];
}

export const initialTableState: TablasState = {
  loaded: false,
  loading: false,
  error: null,
  listaTablas: [],
};

const _reducerTablas = createReducer(
  initialTableState,
  on(loadTablass, (state) => ({
    ...state,
    loading: true,
    loaded: false,
    error: null,
    listaTablas: [],
  })),
  on(loadTablassSuccess, (state, { data }) => ({
    ...state,
    loading: false,
    loaded: true,
    listaTablas: [...data],
    error: null,
  })),
  on(loadTablassFailure, (state, { error }) => ({
    ...state,
    loaded: false,
    loading: false,
    listaTablas: [],
    error: error,
  }))
);

export function reducerTablas(state, action) {
  return _reducerTablas(state, action);
}

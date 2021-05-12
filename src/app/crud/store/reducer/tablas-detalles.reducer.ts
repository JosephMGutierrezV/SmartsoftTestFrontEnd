import { Action, createReducer, on } from '@ngrx/store';
import { Columna } from '../../interfaces/columns.interface';
import { loadTablasDetallessFailure } from '../actions/tablas-detalles.actions';
import {
  loadTablasDetalless,
  loadTablasDetallessSuccess,
} from '../actions/tablas-detalles.actions';

export const tablasDetallesFeatureKey = 'tablasDetalles';
export interface ColumnsState {
  id: string;
  loaded: boolean;
  loading: boolean;
  error: any;
  listaColumnas: Columna[];
}

export const initialColumnsState: ColumnsState = {
  id: '',
  loaded: false,
  loading: false,
  error: null,
  listaColumnas: [],
};

const _reducerColumns = createReducer(
  initialColumnsState,
  on(loadTablasDetalless, (state, { id }) => ({
    ...state,
    id: id,
    loading: true,
    loaded: false,
    error: null,
    listaColumnas: [],
  })),
  on(loadTablasDetallessSuccess, (state, { data }) => ({
    ...state,
    id: state.id,
    loaded: true,
    loading: false,
    error: null,
    listaColumnas: [...data],
  })),
  on(loadTablasDetallessFailure, (state, { error }) => ({
    ...state,
    id: '',
    error: error,
    loaded: false,
    loading: false,
    listaColumnas: [],
  }))
);

export function reducerColumns(state, action) {
  return _reducerColumns(state, action);
}

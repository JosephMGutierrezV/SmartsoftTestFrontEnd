import { Action, createReducer, on } from '@ngrx/store';
import {
  deleteDatoss,
  deleteDatossSuccess,
  deleteDatossFailure,
} from '../actions/datos.actions';
import {
  loadDatoss,
  loadDatossSuccess,
  loadDatossFailure,
  postDatoss,
  postDatossSuccess,
  postDatossFailure,
  putDatoss,
  putDatossSuccess,
  putDatossFailure,
} from '../actions';

export const datosFeatureKey = 'datos';

export interface DatosState {
  id: string;
  loaded: boolean;
  loading: boolean;
  updated: boolean;
  updating: boolean;
  created: boolean;
  creating: boolean;
  deleted: boolean;
  deleting: boolean;
  error: any;
  listaDatos: any[];
}

export const initialDatosState: DatosState = {
  id: '',
  loaded: false,
  loading: false,
  updated: false,
  updating: false,
  created: false,
  creating: false,
  deleted: false,
  deleting: false,
  error: null,
  listaDatos: [],
};

const _reducerDatos = createReducer(
  initialDatosState,
  on(loadDatoss, (state, { id }) => ({
    ...state,
    loading: true,
    id: id,
    loaded: false,
    error: null,
    listaDatos: [],
  })),
  on(loadDatossSuccess, (state, { data }) => ({
    ...state,
    id: state.id,
    loaded: true,
    loading: false,
    error: null,
    listaDatos: [...data],
  })),
  on(loadDatossFailure, (state, { error }) => ({
    ...state,
    id: '',
    loaded: false,
    loading: false,
    error: error,
    listaDatos: [],
  })),
  on(postDatoss, (state, { id, data }) => ({
    ...state,
    id: id,
    creating: true,
    created: false,
    listaDatos: [...state.listaDatos],
    error: null,
  })),
  on(postDatossSuccess, (state, { data }) => ({
    ...state,
    id: state.id,
    creating: false,
    created: true,
    listaDatos: [...data],
    error: null,
  })),
  on(postDatossFailure, (state, { error }) => ({
    ...state,
    id: '',
    created: false,
    creating: false,
    listaDatos: [...state.listaDatos],
    error: error,
  })),
  on(putDatoss, (state, { data, id }) => ({
    ...state,
    id: id,
    updating: true,
    updated: false,
    error: null,
    listaDatos: [...state.listaDatos],
  })),
  on(putDatossSuccess, (state, { data }) => ({
    ...state,
    id: state.id,
    updated: true,
    updating: false,
    error: null,
    listaDatos: [...data],
  })),
  on(putDatossFailure, (state, { error }) => ({
    ...state,
    id: state.id,
    error: error,
    updated: false,
    updating: false,
    listaDatos: [...state.listaDatos],
  })),
  on(deleteDatoss, (state, { id }) => ({
    ...state,
    id: id,
    deleting: true,
    deleted: false,
    error: null,
    listaDatos: [...state.listaDatos],
  })),
  on(deleteDatossSuccess, (state, { data }) => ({
    ...state,
    id: state.id,
    deleted: true,
    deleting: false,
    error: null,
    listaDatos: [...data],
  })),
  on(deleteDatossFailure, (state, { error }) => ({
    ...state,
    id: state.id,
    deleted: false,
    deleting: false,
    error: error,
    listaDatos: [...state.listaDatos],
  }))
);

export function reducerDatos(state, action) {
  return _reducerDatos(state, action);
}

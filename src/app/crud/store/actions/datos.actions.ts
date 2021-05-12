import { createAction, props } from '@ngrx/store';

export const loadDatoss = createAction(
  '[Datos] Load Datoss'
);

export const loadDatossSuccess = createAction(
  '[Datos] Load Datoss Success',
  props<{ data: any }>()
);

export const loadDatossFailure = createAction(
  '[Datos] Load Datoss Failure',
  props<{ error: any }>()
);

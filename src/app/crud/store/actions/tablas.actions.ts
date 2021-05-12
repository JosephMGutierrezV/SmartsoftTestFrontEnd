import { createAction, props } from '@ngrx/store';

export const loadTablass = createAction('[Tablas] Load Tablass');

export const loadTablassSuccess = createAction(
  '[Tablas] Load Tablass Success',
  props<{ data: any }>()
);

export const loadTablassFailure = createAction(
  '[Tablas] Load Tablass Failure',
  props<{ error: any }>()
);

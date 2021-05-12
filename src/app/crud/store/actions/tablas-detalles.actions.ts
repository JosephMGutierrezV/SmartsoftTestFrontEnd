import { createAction, props } from '@ngrx/store';

export const loadTablasDetalless = createAction(
  '[TablasDetalles] Load TablasDetalless'
);

export const loadTablasDetallessSuccess = createAction(
  '[TablasDetalles] Load TablasDetalless Success',
  props<{ data: any }>()
);

export const loadTablasDetallessFailure = createAction(
  '[TablasDetalles] Load TablasDetalless Failure',
  props<{ error: any }>()
);

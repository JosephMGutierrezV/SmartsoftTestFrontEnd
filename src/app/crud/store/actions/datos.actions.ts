import { createAction, props } from '@ngrx/store';

// GET BLOCK

export const loadDatoss = createAction(
  '[Datos] Load Datoss',
  props<{ id: any }>()
);

export const loadDatossSuccess = createAction(
  '[Datos] Load Datoss Success',
  props<{ data: any }>()
);

export const loadDatossFailure = createAction(
  '[Datos] Load Datoss Failure',
  props<{ error: any }>()
);

// POST BLOCK

export const postDatoss = createAction(
  '[Datos] Create Datoss',
  props<{ id: any; data: any }>()
);

export const postDatossSuccess = createAction(
  '[Datos] Create Datoss Success',
  props<{ data: any[] }>()
);

export const postDatossFailure = createAction(
  '[Datos] Create Datoss Failure',
  props<{ error: any }>()
);

// PUT BLOCK

export const putDatoss = createAction(
  '[Datos] Update Datoss',
  props<{ id: any; data: any[] }>()
);

export const putDatossSuccess = createAction(
  '[Datos] Update Datoss Success',
  props<{ data: any }>()
);

export const putDatossFailure = createAction(
  '[Datos] Update Datoss Failure',
  props<{ error: any }>()
);

// DELETE BLOCK

export const deleteDatoss = createAction(
  '[Datos] Delete Datoss',
  props<{ id: any }>()
);

export const deleteDatossSuccess = createAction(
  '[Datos] Delete Datoss Success',
  props<{ data: any }>()
);

export const deleteDatossFailure = createAction(
  '[Datos] Delete Datoss Failure',
  props<{ error: any }>()
);

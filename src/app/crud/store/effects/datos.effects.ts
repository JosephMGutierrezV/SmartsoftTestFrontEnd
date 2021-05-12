import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as datosActions from '../actions';
import { mergeMap, map } from 'rxjs/operators';
import { CrudService } from '../../services/crud.service';

@Injectable()
export class DatosEffects {
  constructor(private actions$: Actions, private crudServices: CrudService) {}

  cargarDatos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(datosActions.loadDatoss),
      mergeMap(({ id }) =>
        this.crudServices
          .getDatos(id)
          .pipe(map((resp) => datosActions.loadDatossSuccess({ data: resp })))
      )
    )
  );

  agregarUsuario$ = createEffect(() =>
    this.actions$.pipe(
      ofType(datosActions.postDatoss),
      mergeMap(({ id, data }) =>
        this.crudServices
          .postDatos(id, data)
          .pipe(map((resp) => datosActions.postDatossSuccess({ data: resp })))
      )
    )
  );

  deleteDatoss$ = createEffect(() =>
    this.actions$.pipe(
      ofType(datosActions.deleteDatoss),
      mergeMap(({ id }) =>
        this.crudServices
          .deleteDatos(id)
          .pipe(map((resp) => datosActions.deleteDatossSuccess({ data: resp })))
      )
    )
  );

  putDatos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(datosActions.putDatoss),
      mergeMap(({ id, data }) =>
        this.crudServices
          .putDatos(id, data)
          .pipe(map((resp) => datosActions.putDatossSuccess({ data: resp })))
      )
    )
  );
}

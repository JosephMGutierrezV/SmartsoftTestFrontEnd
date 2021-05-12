import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as datosActios from '../actions';
import { tap, mergeMap, map } from 'rxjs/operators';
import { CrudService } from '../../services/crud.service';

@Injectable()
export class DatosEffects {
  constructor(private actions$: Actions, private crudServices: CrudService) {}

  cargarDatos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(datosActios.loadDatoss),
      tap((data) => console.log(`effect tap: ${JSON.stringify(data)}`)),
      mergeMap(({ id }) =>
        this.crudServices
          .getDatos(id)
          .pipe(map((resp) => datosActios.loadDatossSuccess({ data: resp })))
      )
    )
  );
}

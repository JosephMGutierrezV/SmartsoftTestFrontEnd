import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as tablasDetallesActions from '../actions';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { CrudService } from '../../services/crud.service';
import { of } from 'rxjs';

@Injectable()
export class TablasDetallesEffects {
  constructor(private actions$: Actions, private crudServices: CrudService) {}

  cargarTablasDetalles$ = createEffect(() =>
    this.actions$.pipe(
      ofType(tablasDetallesActions.loadTablasDetalless),
      mergeMap((action) =>
        this.crudServices.getTablesDetails(action.id).pipe(
          map((resp) =>
            tablasDetallesActions.loadTablasDetallessSuccess({ data: resp })
          ),
          catchError((err) =>
            of(tablasDetallesActions.loadTablasDetallessFailure({ error: err }))
          )
        )
      )
    )
  );
}

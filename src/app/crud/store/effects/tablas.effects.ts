import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as tablasActions from '../actions';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { CrudService } from '../../services/crud.service';
import { of } from 'rxjs';

@Injectable()
export class TablasEffects {
  constructor(private actions$: Actions, private crudServices: CrudService) {}

  cargarTablas$ = createEffect(() =>
    this.actions$.pipe(
      ofType(tablasActions.loadTablass),
      mergeMap(() =>
        this.crudServices.getTables().pipe(
          map((resp) => tablasActions.loadTablassSuccess({ data: resp })),
          catchError((err) =>
            of(tablasActions.loadTablassFailure({ error: err }))
          )
        )
      )
    )
  );
}

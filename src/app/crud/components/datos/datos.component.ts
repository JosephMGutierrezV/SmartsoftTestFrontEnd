import { Component, OnInit } from '@angular/core';
import { Columna } from '../../interfaces/columns.interface';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.reducers';

@Component({
  selector: 'app-datos',
  templateUrl: './datos.component.html',
  styleUrls: ['./datos.component.css'],
})
export class DatosComponent implements OnInit {
  datos: any[] = [];
  columns: Columna[] = [];

  constructor(private store: Store<AppState>) {
    this.store.select('tablasDetalles').subscribe((tablas) => {
      this.columns = tablas.listaColumnas;
    });
    this.store.select('datos').subscribe((datos) => {
      this.datos = datos.listaDatos;
    });
  }

  ngOnInit(): void {}

  createNew() {}
}

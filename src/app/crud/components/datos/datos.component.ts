import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { Columna } from '../../interfaces/columns.interface';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.reducers';
import { environment } from '../../../../environments/environment';
import {
  postDatoss,
  deleteDatoss,
  putDatoss,
} from '../../store/actions/datos.actions';

@Component({
  selector: 'app-datos',
  templateUrl: './datos.component.html',
  styleUrls: ['./datos.component.css'],
})
export class DatosComponent implements OnInit {
  datos: any[] = [];
  columns: Columna[] = [];
  id: string = '';

  private editedRowIndex: number;
  public formGroup: FormGroup;

  constructor(private store: Store<AppState>) {
    this.store.select('tablasDetalles').subscribe((tablas) => {
      this.columns = tablas.listaColumnas;
    });
    this.store.select('datos').subscribe((datos) => {
      this.datos = datos.listaDatos;
      this.id = datos.id;
    });
  }

  ngOnInit(): void {}

  addHandler({ sender }) {
    console.log(`Hola add: ${sender}`);
    this.closeEditor(sender);
    this.getModel();
    sender.addRow(this.formGroup);
  }

  saveHandler({ sender, rowIndex, formGroup, isNew }) {
    const product: any = formGroup.value;

    this.store.dispatch(postDatoss({ id: this.id, data: product }));

    this.editedRowIndex = rowIndex;
    this.closeEditor(sender, rowIndex);
  }

  removeHandler({ sender, dataItem, rowIndex }) {
    console.log(dataItem);
    const { _id } = dataItem;
    this.store.dispatch(deleteDatoss({ id: _id }));
    this.editedRowIndex = rowIndex;
    sender.closeRow(rowIndex);
  }

  editHandler({ sender, rowIndex, dataItem }) {
    this.closeEditor(sender);

    this.getModel();

    this.editedRowIndex = rowIndex;

    sender.editRow(rowIndex, this.formGroup);

    this.store.dispatch(putDatoss({ id: this.id, data: dataItem }));
  }

  public cancelHandler({ sender, rowIndex }) {
    this.editedRowIndex = rowIndex;
    this.closeEditor(sender, rowIndex);
  }

  private closeEditor(grid, rowIndex = this.editedRowIndex) {
    grid.closeRow(rowIndex);
    this.editedRowIndex = undefined;
    this.formGroup = undefined;
  }

  private getModel(): any {
    if (this.id == environment.tabla1) {
      this.formGroup = new FormGroup({
        T1C1: new FormControl(),
        T1C2: new FormControl(),
        T1C3: new FormControl(),
        T1C4: new FormControl(),
      });
    } else if (this.id == environment.tabla2) {
      this.formGroup = new FormGroup({
        T2C1: new FormControl(),
        T2C2: new FormControl(),
        T2C3: new FormControl(),
        T2C4: new FormControl(),
        T2C5: new FormControl(),
      });
    } else if (this.id == environment.tabla3) {
      this.formGroup = new FormGroup({
        T3C1: new FormControl(),
        T3C2: new FormControl(),
        T3C3: new FormControl(),
      });
    }
  }
}

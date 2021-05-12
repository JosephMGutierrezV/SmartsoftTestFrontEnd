import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.reducers';
import { loadTablass } from '../../store/actions/tablas.actions';
import { loadTablasDetalless } from '../../store/actions/tablas-detalles.actions';
import { loadDatoss } from '../../store/actions/datos.actions';

@Component({
  selector: 'app-configuracion',
  templateUrl: './configuracion.component.html',
  styleUrls: ['./configuracion.component.css'],
})
export class ConfiguracionComponent implements OnInit {
  listItems: any[] = [];
  idList: any[] = [];
  selectedValue: any = '';
  selectedid: any = '';
  constructor(private store: Store<AppState>) {
    this.store.dispatch(loadTablass());

    let tempNames = [],
      tempId = [];
    this.store.select('tablas').subscribe((tablas) => {
      if (tablas.listaTablas.length != 0) {
        tablas.listaTablas.forEach((names) => {
          tempNames.push(names.name);
          tempId.push(names._id);
        });
        this.listItems = tempNames;
        this.idList = tempId;
        this.selectedValue = tempNames[0];
        this.selectedid = tempId[0];
        this.store.dispatch(loadTablasDetalless({ id: this.selectedid }));
        this.store.dispatch(loadDatoss({ id: this.selectedid }));
      }
    });
  }

  ngOnInit(): void {}

  selectionChange(value: any): void {
    let id: string = this.idList[this.listItems.indexOf(value)];
    this.store.dispatch(loadTablasDetalless({ id }));
    this.store.dispatch(loadDatoss({ id }));
  }
}

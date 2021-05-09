import { Component, OnInit } from '@angular/core';
import { Columna } from '../../interfaces/columns.interface';

@Component({
  selector: 'app-datos',
  templateUrl: './datos.component.html',
  styleUrls: ['./datos.component.css'],
})
export class DatosComponent implements OnInit {
  datos: any[] = [];
  columns: Columna[] = [];

  constructor() {}

  ngOnInit(): void {}

  createNew() {}
}

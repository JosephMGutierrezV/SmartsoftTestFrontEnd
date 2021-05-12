import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CrudService {
  constructor(private http: HttpClient) {
    this.getTables().subscribe((data) =>
      console.log(`Peticion resuelta: ${JSON.stringify(data)}`)
    );
  }

  public getTables() {
    return this.http
      .get(`${environment.wsUrl}/api/Configuration/getTables`)
      .pipe(map((resp) => resp['columnas']));
  }
  public getTablesDetails(id: string) {
    return this.http
      .get(
        `${environment.wsUrl}/api/Configuration/getTableDetail?idTabla=${id}`
      )
      .pipe(map((resp) => resp['tablaDetalles']));
  }

  public getDatos(id: string) {
    return this.http
      .get(`${environment.wsUrl}/api/Data/getTableData?idTabla=${id}`)
      .pipe(map((resp) => resp['data']));
  }

  public postDatos(id: string, datos: any) {
    const body = this.getModel(id, datos);
    return this.http
      .post(`${environment.wsUrl}/api/Data/create-item`, body)
      .pipe(map((resp) => resp['tabla']));
  }

  public deleteDatos(id: string) {
    return this.http
      .delete(`${environment.wsUrl}/api/Data/delete-item/${id}`)
      .pipe(map((resp) => resp['tabla']));
  }

  private getModel(id: string, data: any) {
    let object: any;
    if (id == environment.tabla1) {
      return (object = {
        tableTypeId: id,
        T1C1: data.T1C1,
        T1C2: data.T1C2,
        T1C3: data.T1C3,
        T1C4: data.T1C4,
      });
    } else if (id == environment.tabla2) {
      return (object = {
        tableTypeId: id,
        T2C1: data.T2C1,
        T2C2: data.T2C2,
        T2C3: data.T2C3,
        T2C4: data.T2C4,
        T2C5: data.T2C5,
      });
    } else if (id == environment.tabla3) {
      return (object = {
        tableTypeId: id,
        T3C1: data.T3C1,
        T3C2: data.T3C2,
        T3C3: data.T3C3,
      });
    }
  }
}

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
}

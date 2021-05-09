import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrincipalPagesComponent } from './pages/principal-pages/principal-pages.component';
import { ConfiguracionComponent } from './components/configuracion/configuracion.component';
import { DatosComponent } from './components/datos/datos.component';
import { FooterComponent } from './pages/footer/footer.component';

@NgModule({
  declarations: [
    PrincipalPagesComponent,
    ConfiguracionComponent,
    DatosComponent,
    FooterComponent,
  ],
  imports: [CommonModule],
  exports: [PrincipalPagesComponent],
})
export class CrudModule {}

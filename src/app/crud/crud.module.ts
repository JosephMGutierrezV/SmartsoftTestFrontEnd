import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrincipalPagesComponent } from './pages/principal-pages/principal-pages.component';
import { ConfiguracionComponent } from './components/configuracion/configuracion.component';
import { DatosComponent } from './components/datos/datos.component';
import { FooterComponent } from './pages/footer/footer.component';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { GridModule } from '@progress/kendo-angular-grid';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PrincipalPagesComponent,
    ConfiguracionComponent,
    DatosComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    DropDownsModule,
    GridModule,
    FormsModule,
    BrowserAnimationsModule,
  ],
  exports: [PrincipalPagesComponent],
})
export class CrudModule {}

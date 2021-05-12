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
import { StoreModule } from '@ngrx/store';
import { appReducers } from './store/app.reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { EffectsArray } from './store/effects/index';
import { HttpClientModule } from '@angular/common/http';

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
    HttpClientModule,
    BrowserAnimationsModule,
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot(EffectsArray),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
  ],
  exports: [PrincipalPagesComponent],
})
export class CrudModule {}

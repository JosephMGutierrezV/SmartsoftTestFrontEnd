import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CrudModule } from './crud/crud.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgbModule, CrudModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

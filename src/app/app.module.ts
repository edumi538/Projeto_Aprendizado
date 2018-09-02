import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CursosComponent } from './cursos/cursos.component';
import { CursosModule } from 'src/app/cursos/cursos.module';

@NgModule({
  declarations: [
    AppComponent,
    CursosComponent
  ],
  imports: [
    BrowserModule,
    //CursosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

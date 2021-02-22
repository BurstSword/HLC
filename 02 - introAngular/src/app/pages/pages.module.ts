import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio/inicio.component';
import { ErrorComponent } from './error/error.component';
import { AccesoComponent } from './acceso/acceso.component';
import { CrearComponent } from './crear/crear.component';
import { ReporterosComponent } from './reporteros/reporteros.component';



@NgModule({
  declarations: [
    InicioComponent,
    ErrorComponent,
    AccesoComponent,
    CrearComponent,
    ReporterosComponent,
  ],
  imports: [
    CommonModule
  ],
  exports:[
      InicioComponent,
  ]
})
export class PagesModule { }

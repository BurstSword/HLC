import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio/inicio.component';
import { SugerenciasComponent } from './sugerencias/sugerencias.component';
import { ArticulosComponent } from './articulos/articulos.component';



@NgModule({
  declarations: [
    InicioComponent,
    SugerenciasComponent,
    ArticulosComponent,
  ],
  imports: [
    CommonModule
  ],
  exports:[
    
      InicioComponent,
      SugerenciasComponent,
      ArticulosComponent,
  ]
})
export class PagesModule { }

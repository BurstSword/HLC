import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaginaBaresPageRoutingModule } from './pagina-bares-routing.module';

import { PaginaBaresPage } from './pagina-bares.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaginaBaresPageRoutingModule
  ],
  declarations: [PaginaBaresPage]
})
export class PaginaBaresPageModule {}

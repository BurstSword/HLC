import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaginaQRPageRoutingModule } from './pagina-qr-routing.module';

import { PaginaQRPage } from './pagina-qr.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaginaQRPageRoutingModule
  ],
  declarations: [PaginaQRPage]
})
export class PaginaQRPageModule {}

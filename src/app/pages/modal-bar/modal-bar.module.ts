import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalBarPageRoutingModule } from './modal-bar-routing.module';

import { ModalBarPage } from './modal-bar.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalBarPageRoutingModule
  ],
  declarations: [ModalBarPage]
})
export class ModalBarPageModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalBarPage } from './modal-bar.page';

const routes: Routes = [
  {
    path: '',
    component: ModalBarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalBarPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaginaQRPage } from './pagina-qr.page';

const routes: Routes = [
  {
    path: '',
    component: PaginaQRPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaginaQRPageRoutingModule {}

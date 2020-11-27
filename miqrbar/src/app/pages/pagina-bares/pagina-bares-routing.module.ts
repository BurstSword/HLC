import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaginaBaresPage } from './pagina-bares.page';

const routes: Routes = [
  {
    path: '',
    component: PaginaBaresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaginaBaresPageRoutingModule {}

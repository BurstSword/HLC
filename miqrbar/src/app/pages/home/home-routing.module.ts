import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path:'',
    redirectTo:'/home/pagina-bares',
    pathMatch:'full'
  },
  {
    path: '',
    component: HomePage,
    children:[
      {
        path: 'pagina-bares',
        loadChildren: () => import('../pagina-bares/pagina-bares.module').then(m => m.PaginaBaresPageModule)
      },
      {
        path: 'pagina-qr',
        loadChildren: () => import('../pagina-qr/pagina-qr.module').then(m => m.PaginaQRPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}

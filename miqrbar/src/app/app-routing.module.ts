import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'pagina-bares',
    loadChildren: () => import('./pages/pagina-bares/pagina-bares.module').then( m => m.PaginaBaresPageModule)
  },
  {
    path: 'pagina-qr',
    loadChildren: () => import('./pages/pagina-qr/pagina-qr.module').then( m => m.PaginaQRPageModule)
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

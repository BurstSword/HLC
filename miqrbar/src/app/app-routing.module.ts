import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'pagina-bares',
    loadChildren: () => import('./pages/pagina-bares/pagina-bares.module').then( m => m.PaginaBaresPageModule)
  },
  {
    path: '',
    redirectTo: 'pagina-bares',
    pathMatch: 'full'
  },
  {
    path: 'pagina-bares',
    loadChildren: () => import('./pages/pagina-bares/pagina-bares.module').then( m => m.PaginaBaresPageModule)
  },
  {
    path: 'modal-bar',
    loadChildren: () => import('./pages/modal-bar/modal-bar.module').then( m => m.ModalBarPageModule)
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { SugerenciasComponent } from './pages/sugerencias/sugerencias.component';
import { NoticiasComponent } from './pages/noticias/noticias.component';
import { MenuComponent } from './components/menu/menu.component';
import { ArticulosComponent } from './pages/articulos/articulos.component';

const routes: Routes=[


  {
    path:'inicio',
    component: InicioComponent
  },
  {
    path:'noticias',
    component: NoticiasComponent
  },
  {
    path:'sugerencias',
    component: SugerenciasComponent
  },
  {
    path:'menu',
    component: MenuComponent
  },
  {
    path:'articulos',
    component: ArticulosComponent
  },
  {
    path:'**',
    redirectTo:'inicio'
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }

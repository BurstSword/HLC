import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { MenuComponent } from './components/menu/menu.component';
import { ErrorComponent } from './pages/error/error.component';
import { AccesoComponent } from './pages/acceso/acceso.component';
import { CrearComponent } from './pages/crear/crear.component';
import { ReporterosComponent } from './pages/reporteros/reporteros.component';


const routes: Routes=[


  {
    path:'inicio',
    component: InicioComponent
  },
  {
    path:'noticias',
    loadChildren:()=>import('./pages/noticias/noticias.module').then(miModulo=>miModulo.NoticiasModule)
  },
  {
    path:'menu',
    component: MenuComponent
  },
  {
    path:'error',
    component: ErrorComponent
  },
  {
    path:'acceso',
    component: AccesoComponent
  },
  {
    path:'crear',
    component: CrearComponent
  },
  {
    path:'reporteros',
    component: ReporterosComponent
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

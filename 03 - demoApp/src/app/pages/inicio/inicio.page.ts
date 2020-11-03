import { Component, OnInit } from '@angular/core';
import { Componente } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  componentes: Componente[] = [
    {
      nombre: "Action-sheet",
      ruta: "/action-sheet",
      icono: "list-outline",
      color: "primary"
    },
    {
      nombre: "Alert",
      ruta: "/alert",
      icono: "alert-circle-outline",
      color: "primary"
    }

  ]
  constructor() {

  }

  ngOnInit() {

  }

}

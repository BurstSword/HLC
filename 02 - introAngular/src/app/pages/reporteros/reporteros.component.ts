import { Component, OnInit } from '@angular/core';
import { Persona } from 'app/interfaces/interfaces';

@Component({
  selector: 'app-reporteros',
  templateUrl: './reporteros.component.html',
  styleUrls: ['./reporteros.component.css']
})
export class ReporterosComponent implements OnInit {

  constructor() { }
  public reporteros: Persona[] = [
    {
      foto: "../../../assets/mininagordi.jpeg",
      description: "Es la mejor minina del mundo",
      nombre: "Minina Gordi",
      longDescription:"Es la mejor minina del mundo porque es gordita"
    },
    {
      foto: "../../../assets/yo.jpeg",
      description: "Es el mejor del mundo",
      nombre: "Miguel Espigares",
      longDescription:"Es el mejor del mundo, aunque es calvo y feo"
    },
    {
      foto: "../../../assets/goku.jpg",
      description: "Es el mejor del mundo",
      nombre: "Goku",
      longDescription:"Es el mejor del mundo, este sí lo es de verdad"
    },
    {
      foto: "../../../assets/minibebe.jpeg",
      description: "Es la mejor minina del mundo",
      nombre: "Minina pequeña",
      longDescription:"Es la mejor minina del mundo, y quien diga lo contrario puñetazo en la cabeza"
    },
    {
      foto: "../../../assets/pinto.jpeg",
      description: "Es el mejor del mundo",
      nombre: "Pinto Jesús",
      longDescription:"Es el mejor del mundo, aunque tiene pelo y es feo"
    },
    {
      foto: "../../../assets/olga.jpeg",
      description: "Es la mejor del mundo",
      nombre: "Olga García",
      longDescription:"Es el mejor del mundo, aunque es un poco borde"
    }
  ]
  ngOnInit(): void {
  }

}

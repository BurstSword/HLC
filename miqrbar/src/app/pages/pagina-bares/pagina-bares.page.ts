import { Component, OnInit } from '@angular/core';
import { Bar } from '../../interfaces/interfaces';

@Component({
  selector: 'app-pagina-bares',
  templateUrl: './pagina-bares.page.html',
  styleUrls: ['./pagina-bares.page.scss'],
})
export class PaginaBaresPage implements OnInit {

  constructor() { }
  public haybares: boolean;
  public bares: Bar[] = [
    {
      nombre: "Casa pepe",
      carta: "Holi",
      foto: "https://dam.ngenespanol.com/wp-content/uploads/2019/10/datos-sobre-el-cafe.jpg",
      color: "primary",
      descripcion:"fbhsdjfsdjfjsdjfsdfd"
    },
    {
      nombre: "Casa Loli",
      carta: "Holi3",
      foto: "https://dam.ngenespanol.com/wp-content/uploads/2019/10/datos-sobre-el-cafe.jpg",
      color: "danger",
      descripcion:"fbhsdjfsdjfjsdjfsdfd"
    },
    {
      nombre: "Casa Paco",
      carta: "Holi8",
      foto: "https://dam.ngenespanol.com/wp-content/uploads/2019/10/datos-sobre-el-cafe.jpg",
      color: "warning",
      descripcion:"fbhsdjfsdjfjsdjfsdfd"
    },

  ];
  ngOnInit() {
    if (this.bares == []) {
      this.haybares = false;
    } else {
      this.haybares = true;
    }
  }

}

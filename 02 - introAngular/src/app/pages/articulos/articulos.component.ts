import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-articulos',
  templateUrl: './articulos.component.html',
  styleUrls: ['./articulos.component.css']
})
export class ArticulosComponent implements OnInit {

  constructor() { }
  public oculto: boolean = false;
  
  headers=["Articulo","Talla", "Precio"];

  public articulos: any = [
    {
      nombre: 'Camiseta',
      talla: 'XL',
      precio: 35.99,
      oculto: false,
    },
    {
      nombre: 'Jersey',
      talla: 'XL',
      precio: 32.99,
      oculto: false,
    },
    {
      nombre: 'Pantalon',
      talla: 'XL',
      precio: 999.99,
      oculto: false,
    },

  ]
ngOnInit(): void {
}

}





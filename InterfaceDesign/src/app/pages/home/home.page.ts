import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Articulo } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor() { }
  public listaArticulos:Articulo[]=[
    {
      nombre:"Articulo 1",
      cantidad:2,
      img:"https://live.staticflickr.com/65535/48787808826_b798a565e5_b.jpg" 
    },
    {
      nombre:"Articulo 2",
      cantidad:6,
      img:"https://live.staticflickr.com/65535/48787808826_b798a565e5_b.jpg" 
    },
    {
      nombre:"Articulo 3",
      cantidad:9,
      img:"https://live.staticflickr.com/65535/48787808826_b798a565e5_b.jpg" 
    },
    {
      nombre:"Articulo 4",
      cantidad:12,
      img:"https://live.staticflickr.com/65535/48787808826_b798a565e5_b.jpg" 
    },
    {
      nombre:"Articulo 5",
      cantidad:146,
      img:"https://live.staticflickr.com/65535/48787808826_b798a565e5_b.jpg" 
    },
  ]

  ngOnInit() {
  }

 
}

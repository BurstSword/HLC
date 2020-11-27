import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-pagina-qr',
  templateUrl: './pagina-qr.page.html',
  styleUrls: ['./pagina-qr.page.scss'],
})
export class PaginaQRPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  escanear(){
    /* this.barcodeScanner.scan().then(barcodeData => {
      console.log('Barcode data', barcodeData);
     }).catch(err => {
         console.log('Error', err);
     }); */
     console.log("Hola");
  }
}

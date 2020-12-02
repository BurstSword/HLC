import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Bar } from '../../interfaces/interfaces';
import { ModalBarPage } from '../modal-bar/modal-bar.page';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { URL } from 'url';

@Component({
  selector: 'app-pagina-bares',
  templateUrl: './pagina-bares.page.html',
  styleUrls: ['./pagina-bares.page.scss'],
})
export class PaginaBaresPage implements OnInit {

  constructor(private modalController: ModalController, private barcodeScanner: BarcodeScanner, private iab: InAppBrowser) { }
  public haybares: boolean;
  public bar: Bar;
  public bares: Bar[] = [
    {
      nombre: "Casa Pepe",
      carta: "Holi",
      foto: "https://www.thoughtco.com/thmb/Yg92CRBhQ66tEoyks18uy94y9qc=/1500x1000/filters:fill(auto,1)/french-bar-58c2365f5f9b58af5ce3fe9c.jpg",
      color: "primary",
      descripcion: "fbhsdjfsdjfjsdjfsdfd",
      valoracion: 4.5,
      numeroBar: 0,
      url: "https://www.google.com/",
      pulsado: false
    },
    {
      nombre: "Casa Loli",
      carta: "Holi3",
      foto: "https://dam.ngenespanol.com/wp-content/uploads/2019/10/datos-sobre-el-cafe.jpg",
      color: "danger",
      descripcion: "fbhsdjfsdjfjsdjfsdfd",
      valoracion: 2.5,
      numeroBar: 1,
      url: "https://www.google.com/",
      pulsado: false
    },
    {
      nombre: "Casa Paco",
      carta: "Holi8",
      foto: "https://images.alphacoders.com/247/thumb-1920-247333.jpg",
      color: "warning",
      descripcion: "fbhsdjfsdjfjsdjfsdfd",
      valoracion: 2.5,
      numeroBar: 2,
      url: "https://www.google.com/",
      pulsado: false
    },
    {
      nombre: "Casa Sonia",
      carta: "Holi8",
      foto: "https://dam.ngenespanol.com/wp-content/uploads/2019/10/datos-sobre-el-cafe.jpg",
      color: "warning",
      descripcion: "fbhsdjfsdjfjsdjfsdfd",
      valoracion: 2.5,
      numeroBar: 3,
      url: "https://www.google.com/",
      pulsado: false
    },

  ];
  ngOnInit() {
    if (this.bares == []) {
      this.haybares = false;
    } else {
      this.haybares = true;
    }
  }

  async mostrarModal(numeroBar: number) {
    const modal = await this.modalController.create({
      component: ModalBarPage,
      cssClass: 'my-custom-modal-css',
      componentProps: {
        bar: {
          nombre: this.bares[numeroBar].nombre,
          carta: this.bares[numeroBar].carta,
          foto: this.bares[numeroBar].foto,
          color: this.bares[numeroBar].color,
          descripcion: this.bares[numeroBar].descripcion,
          valoracion: this.bares[numeroBar].valoracion,
          numeroBar: this.bares[numeroBar].numeroBar
        }
      }
    })
    await modal.present();
    const { data } = await modal.onDidDismiss();
    if (data) {
      this.bares[numeroBar] = data;
    }

  }

  escanearCarta() {
    this.barcodeScanner.scan().then(barcodeData => {
      const url = new URL(barcodeData.text)

      this.mostrarInAppBrowser(url);
      this.introducirBar(url)
    }).catch(err => {
      console.log('Error', err);
    });
  }

  mostrarInAppBrowser(url: URL) {
    this.iab.create(url.origin, "_blank", {
      location: "yes",
    });
  }

  introducirBar(url: URL) {
    this.bar = {
      nombre: "",
      carta: "Holi",
      foto: "https://www.thoughtco.com/thmb/Yg92CRBhQ66tEoyks18uy94y9qc=/1500x1000/filters:fill(auto,1)/french-bar-58c2365f5f9b58af5ce3fe9c.jpg",
      color: "primary",
      descripcion: "",
      valoracion: 0,
      numeroBar: this.bares.length,
      url: "https://www.google.com/",
      pulsado: false
    }

    this.bares.push(this.bar)
    this.mostrarModal(this.bar.numeroBar);
  }

  cambiarTarjeta(numeroBar: number, event: Event) {
    console.log(document.getElementById("botonEditar"));
    console.log(event.target);
    if (event.target != document.getElementById("botonEditar")) {
      this.bares[numeroBar].pulsado=!this.bares[numeroBar].pulsado;
    }


  }
}

import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { Bar } from '../../interfaces/interfaces';
import { ModalBarPage } from '../modal-bar/modal-bar.page';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { Storage } from '@ionic/storage';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';


@Component({
  selector: 'app-pagina-bares',
  templateUrl: './pagina-bares.page.html',
  styleUrls: ['./pagina-bares.page.scss'],
})
export class PaginaBaresPage implements OnInit {

  constructor(private modalController: ModalController, private barcodeScanner: BarcodeScanner, private iab: InAppBrowser, private storage: Storage, private geolocation: Geolocation, public alertController: AlertController, private socialSharing: SocialSharing) { }
  public noHayBares: boolean;
  public bares: Bar[] = [
  ];


  ngOnInit() {
    this.cargarBares();
    if (this.bares == []) {
      this.noHayBares = true;
    } else {
      this.noHayBares = false;
    }
  }

  async mostrarModal(bar: Bar) {
    let newBar = { ...bar }
    const modal = await this.modalController.create({
      component: ModalBarPage,
      cssClass: 'my-custom-modal-css',
      componentProps: {
        newBar
      }
    })
    await modal.present();
    modal.onDidDismiss().then((resp) => {

      if (resp.data) {

        const index = this.bares.indexOf(bar);
        this.bares.splice(index, 1, resp.data)

      };

      this.guardarBares();

    });

  }

  mostrarInAppBrowser(url: string) {

    if (url = "") {
      this.noLocalizacion();
    } else {
      this.iab.create(url, "_blank", {
        location: "yes",
      });
    }

  }

  abrirGeo(bar:Bar){
    window.open("geo:"+bar.localizacion);
  }

  crearBar(url: string, geolocalizacion: string) {
    this.mostrarInAppBrowser(url);
    this.bares.push({
      nombre: "Nombre generico",
      foto: "https://www.thoughtco.com/thmb/Yg92CRBhQ66tEoyks18uy94y9qc=/1500x1000/filters:fill(auto,1)/french-bar-58c2365f5f9b58af5ce3fe9c.jpg",
      descripcion: "",
      valoracion: 0,
      numeroBar: this.bares.length,
      url: url,
      pulsado: false,
      localizacion: geolocalizacion,
    });
    this.guardarBares();

  }

  cambiarTarjeta(bar: Bar) {
    bar.pulsado = !bar.pulsado;
  }

  escanearCarta(): void {
    this.barcodeScanner.scan().then(barcodeData => {
      console.log(barcodeData.text);
      if (barcodeData.text != "") {
        const geo = this.crearGeolocalizacion();
        this.crearBar(barcodeData.text, geo);
      }

    }).catch(err => {
      console.log('Error', err);
    });
  }

  guardarBares(): void {
    this.storage.set('bares', this.bares);
  }

  cargarBares() {
    this.storage.get('bares').then(bares => {
      if (bares != null) {
        this.bares = bares;
        this.noHayBares = true;
      }
    })
  }
  eliminarBar(bar: Bar): void {
    const index = this.bares.indexOf(bar);
    if (index > -1) {
      this.bares.splice(index, 1);
    }
    this.guardarBares();
    if (this.bares = []) {
      this.noHayBares = false;
    } else {
      this.noHayBares = true;
    }
  }

  crearGeolocalizacion(): string {

    this.geolocation.getCurrentPosition().then((resp) => {

      if (resp.coords.accuracy < 50) {
        const latitud = resp.coords.latitude;
        const longitud = resp.coords.longitude;
        const localizacion = latitud+","+longitud;

        return localizacion;

      }

    }).catch((err) => {

    });
    return '';
  };
  async confirmarEliminacion(bar: Bar) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: '',
      message: '¿Estás seguro que deseas eliminarlo?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: (blah) => {

          }
        }, {
          text: 'Eliminar',
          cssClass: 'secondary',
          handler: () => {
            this.eliminarBar(bar);
          }
        }
      ]
    });

    await alert.present();
  }

  compartir(bar: Bar) {
    this.socialSharing.share("Seguro que te gusta " + bar.nombre, bar.descripcion, "", bar.url)
  }

  async noLocalizacion() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Localización',
      message: 'No hay localización disponible',
      buttons: ['OK']
    });

    await alert.present();
  }
}

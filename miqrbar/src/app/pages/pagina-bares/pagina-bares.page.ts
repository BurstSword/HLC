import { Component, OnInit } from '@angular/core';
import { ActionSheetController, AlertController, ModalController } from '@ionic/angular';
import { Bar } from '../../interfaces/interfaces';
import { ModalBarPage } from '../modal-bar/modal-bar.page';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { Storage } from '@ionic/storage';
import { Plugins } from '@capacitor/core';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';



@Component({
  selector: 'app-pagina-bares',
  templateUrl: './pagina-bares.page.html',
  styleUrls: ['./pagina-bares.page.scss'],
})
export class PaginaBaresPage implements OnInit {

  constructor(private modalController: ModalController, private barcodeScanner: BarcodeScanner, private iab: InAppBrowser, private storage: Storage,  public alertController: AlertController, private socialSharing: SocialSharing, private actionSheetController: ActionSheetController) { }
  public noHayBares: boolean;
  public bares: Bar[] = [
  ];
  public localizacion;


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


    this.iab.create(url, "_blank", {
      location: "yes",
    });


  }

  abrirGeo(bar: Bar) {
    window.open('geo:0,0?q=' + bar.localizacion, '_system');
  }

  crearBar(url: string, geolocalizacion: string) {
    console.log(geolocalizacion+" creación del bar");
    this.mostrarInAppBrowser(url);
    this.bares.unshift({
      nombre: "Nombre",
      foto: "https://www.thoughtco.com/thmb/Yg92CRBhQ66tEoyks18uy94y9qc=/1500x1000/filters:fill(auto,1)/french-bar-58c2365f5f9b58af5ce3fe9c.jpg",
      descripcion: "Esto es una descripción",
      valoracion: 0,
      numeroBar: this.bares.length,
      url: url,
      pulsado: false,
      localizacion: geolocalizacion,
      distancia: 0
    });
    this.guardarBares();

  }

  cambiarTarjeta(bar: Bar) {
    bar.pulsado = !bar.pulsado;
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
    if (this.bares == []) {
      this.noHayBares = false;
    } else {
      this.noHayBares = true;
    }
  }

  crearGeolocalizacion(): string {
    const {Geolocation} = Plugins;
    
    Geolocation.getCurrentPosition().then((resp) => {
      

      if(resp.coords.accuracy<50){
        const latitud = resp.coords.latitude;
        const longitud = resp.coords.longitude;
        this.localizacion = latitud + "," + longitud;
        
        console.log(this.localizacion+" creación de las coordenadas");
        
      }
      

    }).catch((err) => {
      
    });
    return this.localizacion;
  };

  escanearCarta(): void {
    this.barcodeScanner.scan().then(barcodeData => {
      console.log(barcodeData.text);
      if (this.bares.some(elem => elem.url === barcodeData.text)) {
        this.yaExiste();
      } else {
        if (barcodeData.text != "") {
          const geo = this.crearGeolocalizacion();
          console.log(geo);
          this.crearBar(barcodeData.text, geo);
        }

      }

    }).catch(err => {
      console.log('Error', err);
    });
  }
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

  async yaExiste() {
    const alert = await this.alertController.create({
      header: 'Bares',
      message: 'Este bar ya está registrado',
      buttons: ['OK']
    });

    await alert.present();
  }

  async actionSheetOrdenar() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Ordenar',
      buttons: [{
        text: 'Valoracion',
        icon: 'star',
        handler: () => {
          this.ordenarPorValoracion();
        }
      }, {
        text: 'Nombre',
        icon: 'Text',
        handler: () => {

        }
      }, {
        text: 'Distancia',
        icon: 'pin-outline',
        handler: () => {
          this.calcularDistancia();
        }
      },]
    });
    await actionSheet.present();
  }

  ordenarPorValoracion() {
    this.bares.sort((a, b) => b.valoracion - a.valoracion);
    this.guardarBares();
  }

  ordenarPorNombre() {
    this.bares.sort((a, b) => b.valoracion - a.valoracion);
    this.guardarBares();
  }
  ordenarPorDistancia() {
    this.bares.sort((a, b) => a.distancia - b.distancia);
    this.guardarBares();
  }

  calcularDistancia() {
    const geo = this.crearGeolocalizacion();
    var geoYo = geo.split(",");
    const lat2 = parseFloat(geoYo[0]);
    const lon2 = parseFloat(geoYo[1]);

    for (let index = 0; index < this.bares.length; index++) {
      var geoBares = this.bares[index].localizacion.split(",");
      var lat1 = parseFloat(geoBares[0]);
      var lon1 = parseFloat(geoBares[1]);
      var R = 6371; // Radius of the earth in km
      var dLat = this.deg2rad(lat2 - lat1);  // deg2rad below
      var dLon = this.deg2rad(lon2 - lon1);
      var a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(this.deg2rad(lat1)) * Math.cos(this.deg2rad(lat2)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
      var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      var d = R * c; // Distance in km
      this.bares[index].distancia = d;
    }

    this.ordenarPorDistancia();

  }

  deg2rad(deg) {
    return deg * (Math.PI / 180)
  }
}

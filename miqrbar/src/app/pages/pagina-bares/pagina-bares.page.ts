import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { Bar } from '../../interfaces/interfaces';
import { ModalBarPage } from '../modal-bar/modal-bar.page';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { Storage } from '@ionic/storage';
import { Geolocation } from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'app-pagina-bares',
  templateUrl: './pagina-bares.page.html',
  styleUrls: ['./pagina-bares.page.scss'],
})
export class PaginaBaresPage implements OnInit {

  constructor(private modalController: ModalController, private barcodeScanner: BarcodeScanner, private iab: InAppBrowser,private storage: Storage, private geolocation: Geolocation, public alertController: AlertController) { }
  public haybares: boolean;
  public bares: Bar[] = [
     {
      nombre: "Nombre generico",
      foto: "https://www.thoughtco.com/thmb/Yg92CRBhQ66tEoyks18uy94y9qc=/1500x1000/filters:fill(auto,1)/french-bar-58c2365f5f9b58af5ce3fe9c.jpg",
      descripcion: " Hola loco",
      valoracion: 0,
      numeroBar: 0,
      url: "https://www.google.es/",
      pulsado: false,
      localizacion:"holi"
    },
    {
      nombre: "Nombre generico",
      foto: "https://www.thoughtco.com/thmb/Yg92CRBhQ66tEoyks18uy94y9qc=/1500x1000/filters:fill(auto,1)/french-bar-58c2365f5f9b58af5ce3fe9c.jpg",
      descripcion: " Hola loco",
      valoracion: 0,
      numeroBar: 1,
      url: "url",
      pulsado: false,
      localizacion :"holi"
    },
    {
      nombre: "Nombre generico",
      foto: "https://www.thoughtco.com/thmb/Yg92CRBhQ66tEoyks18uy94y9qc=/1500x1000/filters:fill(auto,1)/french-bar-58c2365f5f9b58af5ce3fe9c.jpg",
      descripcion: " Hola loco",
      valoracion: 0,
      numeroBar: 2,
      url: "url",
      pulsado: false,
      localizacion :"holi"
    }, 
    
  ];
  ngOnInit() {
    /*this.cargarBares();
       this.bares=[];
    this.guardarBares(); */ 
  }

  async mostrarModal(bar: Bar) {
    let newBar ={... bar}
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

  crearBar(url: string, geolocalizacion:string) {
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

   cambiarTarjeta(numeroBar: number, event: Event) {
    
    if (event.target != document.getElementById("botonEditar")) {
      this.bares[numeroBar].pulsado=!this.bares[numeroBar].pulsado;
    }


  } 

  escanearCarta():void {
    this.barcodeScanner.scan().then(barcodeData => {
      console.log(barcodeData.text);
      if(barcodeData.text!=""){
        const geo = this.crearGeolocalizacion();
        this.crearBar(barcodeData.text,geo);
      }
     
    }).catch(err => {
      console.log('Error', err);
    });
  }
  
  guardarBares():void{
    this.storage.set('bares', this.bares);
  }

  cargarBares(){
    this.storage.get('bares').then(bares=>{
      if(bares!=null){
        this.bares=bares;
        this.haybares=true;
      }
    })
  }
  eliminarBar(bar:Bar):void{
    const index=this.bares.indexOf(bar);
    if(index>-1){
      this.bares.splice(index,1);
    }
    this.guardarBares();
  }
  
  crearGeolocalizacion(): string {

    this.geolocation.getCurrentPosition().then((resp) => {

      if (resp.coords.accuracy < 50) {
        const latitud = resp.coords.latitude
        const longitud = resp.coords.longitude
        const localizacion = `https://maps.google.com/maps?z=25&t=m&q=loc:${latitud}+${longitud}`

        return localizacion;

      }

    }).catch((err) => {

     });
    return '';
  };
  async confirmarEliminacion() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Confirm!',
      message: 'Message <strong>text</strong>!!!',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Okay',
          handler: () => {
            console.log('Confirm Okay');
          }
        }
      ]
    });
  }
}

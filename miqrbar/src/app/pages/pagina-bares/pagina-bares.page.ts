import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Bar } from '../../interfaces/interfaces';
import { ModalBarPage } from '../modal-bar/modal-bar.page';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-pagina-bares',
  templateUrl: './pagina-bares.page.html',
  styleUrls: ['./pagina-bares.page.scss'],
})
export class PaginaBaresPage implements OnInit {

  constructor(private modalController: ModalController, private barcodeScanner: BarcodeScanner, private iab: InAppBrowser,private storage: Storage) { }
  public haybares: boolean;
  public bar: Bar;
  public bares: Bar[] = [];
  ngOnInit() {
    this.cargarBares();
    /* this.bares=[];
    this.guardarBares(); */
  }

  async mostrarModal(numeroBar: number) {
    const modal = await this.modalController.create({
      component: ModalBarPage,
      cssClass: 'my-custom-modal-css',
      componentProps: {
        bar: {
          nombre: this.bares[numeroBar].nombre,
          foto: this.bares[numeroBar].foto,
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
      this.guardarBares();
    }

  }

  mostrarInAppBrowser(url: string) {
    this.iab.create(url, "_system", {
      location: "yes",
    });
  }

  crearBar(url: string) {
    this.bar = {
      nombre: "Nombre generico",
      foto: "https://www.thoughtco.com/thmb/Yg92CRBhQ66tEoyks18uy94y9qc=/1500x1000/filters:fill(auto,1)/french-bar-58c2365f5f9b58af5ce3fe9c.jpg",
      descripcion: "",
      valoracion: 0,
      numeroBar: this.bares.length,
      url: url,
      pulsado: false
    }
      this.bares.push(this.bar);
      this.guardarBares();
      this.mostrarModal(this.bar.numeroBar);
  }

   cambiarTarjeta(numeroBar: number, event: Event) {
    
    if (event.target != document.getElementById("botonEditar")) {
      this.bares[numeroBar].pulsado=!this.bares[numeroBar].pulsado;
    }


  } 

  escanearCarta():void {
    this.barcodeScanner.scan().then(barcodeData => {
      if(barcodeData.text!=""){
        this.crearBar(barcodeData.text);
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
}

import { Injectable } from '@angular/core';
import { LoadingController, ToastController } from '@ionic/angular';
import { stringify } from 'querystring';

@Injectable({
  providedIn: 'root'
})
export class MensajesService {
public miLoading:HTMLIonLoadingElement;
  constructor(public toastController:ToastController, private loadingController:LoadingController) {
  }

  async muestraMensaje(mensaje:string,tiempo?:number ){
    let t = tiempo?tiempo:2000;
    const toast = await this.toastController.create({
      message: mensaje,
      duration:t
    });

    toast.present();
  }

  async muestraLoading(mensaje:string){
    
    this.miLoading = await this.loadingController.create({
      message: mensaje,
    });
    await this.miLoading.present();

  }

  ocultaLoading(){
    
      this.miLoading.dismiss();
    
    
  }
}

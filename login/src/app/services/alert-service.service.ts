import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AlertServiceService {

  constructor(public alertController: AlertController) { }

  async presentAlert(mensaje:string) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      message: mensaje,
      buttons: ['OK']
    });

    await alert.present();
  }
}

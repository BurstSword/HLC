import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Boton } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  botones: Boton[] = [
    {
      nombre: "Informativo",
      numero: 1,
      color: "primary"
    },
    {
      nombre: "Multiples botones",
      numero: 2,
      color: "secondary"
    },
    {
      nombre: "Confirmar",
      numero: 3,
      color: "tertiary"
    },
    {
      nombre: "Prompt",
      numero: 4,
      color: "success"
    },
    {
      nombre: "Radio",
      numero: 5,
      color: "warning"
    },
    {
      nombre: "Checkbox",
      numero: 6,
      color: "dark"
    },

  ]

  constructor(public alertController: AlertController) { }
  ngOnInit() {
  }

  onClick(numero) {
    switch (numero) {
      case 1:
        this.presentAlert();
        break;
      case 2:
        this.presentAlertMultipleButtons();
        break;
      case 3:
        this.presentAlertConfirm();
        break;
      case 4:
        this.presentAlertPrompt();
        break;
      case 5:
        this.presentAlertRadio();
        break;
      case 6:
        this.presentAlertCheckbox();
        break;

    }
  }


  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alerta',
      message: 'Apruébame David por favor',
      buttons: ['OK']
    });

    await alert.present();
  }

  async presentAlertMultipleButtons() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Multiples Botones',
      message: '¿Aprobar a Miguel?',
      buttons: ['Sí', 'Sí', 'Sí++']
    });

    await alert.present();
  }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      header: 'Confirma',
      message: 'Miguel ha aprobado!',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Mal hecho');
          }
        }, {
          text: 'Okay',
          handler: () => {
            console.log('Bien hecho');
          }
        }
      ]
    });

    await alert.present();
  }

  async presentAlertPrompt() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Formulario',
      inputs: [
        {
          name: 'Nombre',
          type: 'text',
          placeholder: 'Nombre'
        },
        
        // multiline input.
        {
          name: 'Apellido',
          type: 'text',
          placeholder: 'Apellido'
        },
        {
          name: 'Fecha de Nacimiento',
          type: 'date'
        }
        
        
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: (data) => {
            console.log(data);
          }
        }
      ]
    });

    await alert.present();
  }

  async presentAlertRadio() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Radio',
      inputs: [
        {
          name: 'radio1',
          type: 'radio',
          label: 'Aprobar',
          value: 'value1',
          checked: true
        },
        {
          name: 'radio2',
          type: 'radio',
          label: 'Aprobar más',
          value: 'value2'
        },
        {
          name: 'radio3',
          type: 'radio',
          label: 'Pedazo de 10',
          value: 'value3'
        },
        {
          name: 'radio4',
          type: 'radio',
          label: 'Esa era',
          value: 'value4'
        },
        {
          name: 'radio5',
          type: 'radio',
          label: 'Aprobadísimo',
          value: 'value5'
        },
        {
          name: 'radio6',
          type: 'radio',
          label: 'Al final has aprobado',
          value: 'value6'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: () => {
            console.log('Confirm Ok');
          }
        }
      ]
    });

    await alert.present();
  }

  async presentAlertCheckbox() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Checkbox',
      inputs: [
        {
          name: 'Sevilla',
          type: 'checkbox',
          label: 'Sevilla',
          value: 'Sevilla',
          checked: true
        },

        {
          name: 'Betis',
          type: 'checkbox',
          label: 'Betis',
          value: 'Betis'
        },

        {
          name: 'Madrid',
          type: 'checkbox',
          label: 'Madrid',
          value: 'Madrid'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: (data) => {
            console.log(data);
          }
        }
      ]
    });

    await alert.present();
  }
}

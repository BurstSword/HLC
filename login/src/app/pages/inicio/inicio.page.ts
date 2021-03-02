import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ActionSheetController, AlertController, ToastController } from '@ionic/angular';
import { Evento, Usuario } from 'src/app/interfaces/RespuestaPost';
import { EventoService } from 'src/app/services/evento.service';
import { UsuariosService } from '../../services/usuarios.service';

const dateFormat = { year: 'numeric', month: 'numeric', day: 'numeric' }

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})

export class InicioPage {

  constructor(private usuarioService: UsuariosService, private router: Router, private eventoService: EventoService, private toastController: ToastController, private alertController: AlertController, private actionSheetController: ActionSheetController) { }

  public data;
  public listaEventos: Evento[] = [];
  user: Usuario;
  ionViewWillEnter() {
    this.traerEventos();
    this.traerUsuario();
  }

  logout() {
    this.usuarioService.clearStorage();
    this.router.navigate(["login"]);
  }

  traerUsuario() {
    this.user = JSON.parse(localStorage.getItem("usuario"));
  }

  traerEventos() {
    this.eventoService.traerEventos().then(async resp => {

      if (resp.status == "ok") {
        this.listaEventos = resp.eventos
      } else {
        this.presentToast("No se han podido traer los eventos");
      }
    })
  }

  async presentToast(mensaje: string) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 2000
    });
    toast.present();
  }


  async crearEvento() {
    const date = new Date()

    const alert = await this.alertController.create({
      backdropDismiss: false,
      header: 'Crear nuevo Evento',
      inputs: [
        {
          name: 'nombre',
          type: 'text',
          placeholder: 'Nombre',
        },
        {
          name: 'fecha',
          type: 'date',
          min: date.toLocaleDateString('fr-CA', dateFormat),
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
        },
        {
          text: 'Crear Evento',
          handler: async (data) => {
            if (data.nombre.length == 0 || data.fecha.length == 0) {
              this.presentToast("Los campos son obligatorios");
            } else {
              const event: Evento = {
                nombre: data.nombre,
                fecha: new Date(data.fecha),
              }
              this.eventoService.crearEvento(event).then(resp => {
                if (resp.status === "ok") {
                  this.presentToast("Evento creado con éxito");
                  this.traerEventos();
                } else {
                  this.presentToast("Ha habido un error en la creación");
                }
              })
            }
          }
        }
      ]
    })
    alert.present();
  };

  async editarEvento(event: Evento) {
    const tempEvent: Evento = JSON.parse(JSON.stringify(event))

    const alert = await this.alertController.create({
      backdropDismiss: false,
      header: 'Crear nuevo Evento',
      inputs: [
        {
          name: 'nombre',
          type: 'text',
          placeholder: 'Nombre',
          value: tempEvent.nombre
        },
        {
          name: 'fecha',
          type: 'date',
          min: new Date().toLocaleDateString('fr-CA', dateFormat)
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
        },
        {
          text: 'Editar Evento',
          handler: async (data) => {
            if (data.nombre.length == 0 || data.fecha.length == 0) {
              this.presentToast("Los campos son obligatorios");
            } else {
              this.presentToast("Actualizado con éxito el evento");
              tempEvent.nombre = data.nombre
              tempEvent.fecha = new Date(data.fecha)
              this.actualizarEventos(tempEvent);
            };
          }
        }
      ]
    })
    alert.present();
  };

  unirseAEvento(event: Evento) {
    const tempEvent: Evento = JSON.parse(JSON.stringify(event))

    if (tempEvent.asistentes.length < 4) {
      const index = tempEvent.asistentes.findIndex(name => name === this.user.nombre);
      if (index == -1) {
        tempEvent.asistentes.push(this.user.nombre);
        this.actualizarEventos(tempEvent);
        this.presentToast("Te has unido con éxito");
      };
    } else {
      const index = tempEvent.asistentes.findIndex(name => name === this.user.nombre);
      if (index > -1) {
        this.presentToast("Ya estabas apuntado a este evento");
      } else {
        this.presentToast("El evento está lleno");
      }
    }
  };

  async abandonarEvento(event: Evento) {

    const tempEvent: Evento = JSON.parse(JSON.stringify(event))
    const index = tempEvent.asistentes.findIndex(name => name === this.user.nombre);
    if (index > -1) {
      const alert = await this.alertController.create({
        backdropDismiss: true,
        header: 'Abandonar evento',
        message: '¿Seguro que quieres abandonar el evento?',
        buttons: [
          {
            text: 'Cancelar',
            role: 'cancel'
          },
          {
            text: 'Salir',
            handler: () => {
              tempEvent.asistentes.splice(index, 1);
              this.actualizarEventos(tempEvent);
              this.presentToast("Desapuntado del evento");
            }
          }
        ]
      })
      alert.present()
    } else {
      this.presentToast("No estás inscrito en este evento");
    }
  };

  actualizarEventos(event: Evento) {
    this.eventoService.actualizarEventos(event).then(async resp => {
      if (resp.status === "ok") {
        this.presentToast("Actualizado con éxito en la lista");
        this.traerEventos()
      } else {
        this.presentToast("Ha habido un error");
        this.traerEventos();
      };
    });
  }

  async opcionesEvento(event: Evento) {
    const actionSheet = await this.actionSheetController.create({
      header: 'Opciones',
      buttons: [
        {
          text: 'Unirme',
          icon: 'arrow-forward-circle',
          handler: () => {
            this.unirseAEvento(event)
          }
        }, {
          text: 'Abandonar',
          icon: 'arrow-back-circle',
          handler: () => {
            this.abandonarEvento(event)
          }
        },
        {
          text: 'Cerrar',
          icon: 'close',
          role: 'cancel',
        }
      ]
    });
    await actionSheet.present();
  }
  async misEventos(event: Evento) {
    const actionSheet = await this.actionSheetController.create({
      header: 'Opciones',
      backdropDismiss: false,
      buttons: [
        {
          text: 'Editar',
          icon: 'create',
          handler: () => {
            this.editarEvento(event)
          }
        },
        {
          text: 'Cerrar',
          icon: 'close',
          role: 'cancel',
        }
      ]
    });
    await actionSheet.present();
  }
  
}

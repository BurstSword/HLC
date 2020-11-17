import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { MensajesService } from '../../services/mensajes.service';
import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.page.html',
  styleUrls: ['./loading.page.scss'],
})
export class LoadingPage implements OnInit {

  constructor(public loadingController: LoadingController, private _mensajesService: MensajesService, private _usuariosService: UsuariosService) { }

  ngOnInit() {
  }

  onClick() {
    this.mostrarCarga();
    setTimeout(() => {
      this.loadingController.dismiss();
    }, 1500);
  }
  async onClick2() {
    this._mensajesService.muestraLoading("Cargando");
    let data = await this._usuariosService.getUsuarios();
    data = await this._usuariosService.getUsuarios();
    data = await this._usuariosService.getUsuarios();
    this._mensajesService.ocultaLoading();
  }
  async mostrarCarga() {
    const loading = await this.loadingController.create({
      message: 'Please wait...',
    });
    await loading.present();
  }
}

import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonInfiniteScroll, IonRefresher } from '@ionic/angular';
import { Usuario } from 'src/app/interfaces/interfaces';
import { MensajesService } from 'src/app/services/mensajes.service';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.page.html',
  styleUrls: ['./usuarios.page.scss'],
})
export class UsuariosPage implements OnInit {


  @ViewChild('miRefresher') refresher: IonRefresher;
  @ViewChild('miInfinite') infinite: IonInfiniteScroll;
  constructor(private _mensajeService: MensajesService, private _usuariosService: UsuariosService, private router: Router) { }

  public usuarios: Usuario[] = [];
  public numeroPagina: number;
  public cargador: boolean;

  ngOnInit() {
    this.cargador = true;
  }



  async refresca() {
    const datos = await this._usuariosService.getUsuarios();

    if (datos.total_pages > 0) {
      this.usuarios.unshift(...datos.data);
    }
    this.refresher.complete();
  }

  limpiar() {
    this._usuariosService.numero = 1;
    this.usuarios = [];
    this._mensajeService.muestraMensaje("Usuarios eliminados con éxito");
  }

  async loadData() {
    const datos = await this._usuariosService.getUsuarios();
    setTimeout(() => {

      if (datos.total_pages > 0) {
        this.usuarios.push(...datos.data);
      } else {
        this.infinite.disabled = true;
      }
      this.infinite.complete();
    }, 1500);
  }
}

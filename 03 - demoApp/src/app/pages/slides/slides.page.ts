import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/interfaces/interfaces';
import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'app-slides',
  templateUrl: './slides.page.html',
  styleUrls: ['./slides.page.scss'],
})
export class SlidesPage implements OnInit {

 constructor(private _usuariosService: UsuariosService) { }

  public usuarios: Usuario[] = [];
  async ngOnInit() {
    const datos = await this._usuariosService.getUsuarios();
    this.usuarios.unshift(...datos.data);
  }

  
}

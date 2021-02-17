import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  constructor(private usuarioService: UsuariosService) { }

  public nombre: string;
  public edad: string;
  public email: string;
  public password: string;

  ngOnInit() {
  }

  async registro() {
    const data = {
      edad: this.edad,
      nombre: this.nombre,
      email: this.email,
      password: this.password,
    }

    const resultado = await this.usuarioService.registro(data);
    console.log(resultado);
  }
}

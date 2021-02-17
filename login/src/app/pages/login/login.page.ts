import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private usuariosService : UsuariosService) { }
  public usuario: string;
  public password: string;
  ngOnInit() {
  }

  async login(){
    const datos={
      usuario:this.usuario,
      password:this.password
    }

    const resultado = await this.usuariosService.login(datos);
    console.log(resultado);
  }
  
}

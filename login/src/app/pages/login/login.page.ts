import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private usuariosService : UsuariosService) { }

  ngOnInit() {
  }

  pruebaServidor(){
    const repuesta = this.usuariosService.getSaludo();
  }
  
}

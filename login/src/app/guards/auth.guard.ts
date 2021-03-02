import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UsuariosService } from '../services/usuarios.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private usuarioService: UsuariosService, private router: Router) { }

  canActivate() {
    if (this.usuarioService.compruebaSiLoggado()) {
      return true;
    } else {
      this.usuarioService.clearStorage();
      this.router.navigate(["/login"]);
      return false;
    }
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Decode, RespuestaPost, Usuario } from '../interfaces/RespuestaPost';
import jwtDecode from 'jwt-decode';

@Injectable({ providedIn: 'root' })

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  public usuarioActual: any;
  constructor(private _http: HttpClient) {

  }

  registro(data: Usuario) {
    return new Promise<RespuestaPost>(resolve => {
      this._http.post<RespuestaPost>(environment.urlUsuario + "usuario/registro", data).subscribe(resp => {
        resolve(resp);

      });
    });

  }

  login(data: Usuario) {
    return new Promise<RespuestaPost>(resolve => {
      this._http.post<RespuestaPost>(environment.urlUsuario + "usuario/login", data).subscribe(resp => {
        if (resp.status == "ok" && resp.token) {
          localStorage.setItem('token', resp.token);
          localStorage.setItem('usuario',JSON.stringify(resp.usuario));
        }
        resolve(resp);
      });
    });
  }


  clearStorage(){
    localStorage.clear();
  }
  getToken() {
    return localStorage.getItem('token');

  }

  compruebaSiLoggado(): boolean {
    const token = this.getToken()
    if (!token) return false

    const decoded: Decode = jwtDecode(token)
    const time = new Date().getTime()

    if (decoded.exp > Math.floor(time / 1000)) {
      return true;
    } else {
      return false;
    }
  }
}

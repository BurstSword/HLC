import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { Evento, RespuestaPost } from '../interfaces/RespuestaPost';

@Injectable({
  providedIn: 'root'
})
export class EventoService {

  constructor(private httpClient: HttpClient) { }

  crearEvento(event: Evento): Promise<RespuestaPost> {
    return new Promise<RespuestaPost>(resolve => {
      this.httpClient.post<RespuestaPost>(environment.urlUsuario+"evento/crear", event).subscribe(resp => resolve(resp))
    })
  }

  traerEventos(): Promise<RespuestaPost> {
    return new Promise<RespuestaPost>(resolve => {
      this.httpClient.get<RespuestaPost>(environment.urlUsuario+"evento/traer").subscribe(resp => resolve(resp))
    })
  }

  actualizarEventos(event: Evento): Promise<RespuestaPost> {
    return new Promise<RespuestaPost>(resolve => {
      this.httpClient.post<RespuestaPost>(environment.urlUsuario+"evento/actualizar", event).subscribe(resp => resolve(resp))
    })
  }

}
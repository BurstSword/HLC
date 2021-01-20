import { Injectable } from '@angular/core';
import { RespuestaUsuarios } from '../interfaces/interfaces';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn: 'root'})

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  public numero:number =1;
  constructor(private _http:HttpClient) { 
    
  }

  getUsuarios(){
    return new Promise<RespuestaUsuarios>(resolve=>{
      this._http.get<RespuestaUsuarios>("https://reqres.in/api/users?page="+this.numero+"").subscribe(resp=>{
        resolve(resp);
        
      });
      this.numero++;
    });
    
  }
}

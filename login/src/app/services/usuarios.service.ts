import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({providedIn: 'root'})

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  
  constructor(private _http:HttpClient) { 
    
  }

  getSaludo(){
    return new Promise<any>(resolve=>{
      this._http.get<any>(environment.urlUsuario+"getGreeting").subscribe(resp=>{
        console.log(resp);
        resolve(resp);
        
      });
    });
    
  }
}

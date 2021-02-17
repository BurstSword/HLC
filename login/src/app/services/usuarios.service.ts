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

  registro(data:any){
    return new Promise<any>(resolve=>{
      this._http.get<any>(environment.urlUsuario+"registro").subscribe(resp=>{
        console.log(resp);
        resolve(resp);
        
      });
    });
    
  }

  login(data:any){
    return new Promise<any>(resolve=>{
      this._http.get<any>(environment.urlUsuario+"login").subscribe(resp=>{
        console.log(resp);
        resolve(resp);
        
      });
    });
    
  }
}

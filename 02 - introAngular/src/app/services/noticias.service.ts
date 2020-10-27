import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';

 import { RespuestaNoticias } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private _http:HttpClient) { }

getNoticias(){
  return new Promise<RespuestaNoticias>(resolve=>{
    this._http.get<RespuestaNoticias>(`${environment.apiUrl}top-headlines?country=us&apiKey=${environment.apiKey}`).subscribe(resp=>{
      resolve(resp);
    });
  });

}

}

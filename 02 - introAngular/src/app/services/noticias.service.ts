import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { resolve } from 'dns';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private _http:HttpClient) { }

getNoticias(){
  return new Promise<any>(resolve=>{
    this._http.get<any>("http://newsapi.org/v2/everything?q=bitcoin&from=2020-09-16&sortBy=publishedAt&apiKey=de0bac749b8d47bfae5499bda3aa9518").subscribe(resp=>{
      resolve(resp);
    })
  })

}

}

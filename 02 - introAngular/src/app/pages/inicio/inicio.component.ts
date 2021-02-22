import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Article } from 'app/interfaces/interfaces';
import { NewsService } from 'app/services/noticias.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor(private _noticiasService:NewsService, private router:Router) { }
  public articulos: Article[]=[];
  async ngOnInit() {
    
    const datos = await this._noticiasService.getNoticias();
    if(datos.status=="ok"){
      for (let index = 0; index < 4; index++) {
        this.articulos.push(datos.articles[index]);
      }
      
    }else{
      this.router.navigate(['/error']);
    }
    
  }
}

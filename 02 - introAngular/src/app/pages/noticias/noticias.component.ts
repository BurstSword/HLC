
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewsService } from '../../services/noticias.service';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit {

  
  constructor(private _noticiasService:NewsService, private router:Router) { }
  public articulos: Article []=[];
  async ngOnInit() {
    
    const noticias = await this._noticiasService.getNoticias();
    if(noticias.status=="ok"){
      this.articulos=noticias.articles;
      
    }else{
      this.router.navigate(['/error']);
    }
    
  }

}

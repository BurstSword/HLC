import { not } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../services/noticias.service';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit {

  constructor(private _noticiasService:NewsService) { }

  async ngOnInit() {
    const noticias = await this._noticiasService.getNoticias();
    console.log(noticias);
  }

}

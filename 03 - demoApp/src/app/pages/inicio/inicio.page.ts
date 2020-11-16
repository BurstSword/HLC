import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Componente } from 'src/app/interfaces/interfaces';
import { DatosComponentesService } from '../../services/datos-componentes.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  constructor(private _datos:DatosComponentesService) {

  }
  public componentes:Componente[]=[];
  
  async ngOnInit() {
   this.componentes= await this._datos.getDatos();
  }
  
}

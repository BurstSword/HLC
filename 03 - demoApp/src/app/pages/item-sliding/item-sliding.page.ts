import { Component, OnInit, ViewChild } from '@angular/core';
import { IonList } from '@ionic/angular';

@Component({
  selector: 'app-item-sliding',
  templateUrl: './item-sliding.page.html',
  styleUrls: ['./item-sliding.page.scss'],
})
export class ItemSlidingPage implements OnInit {

  constructor() { }
  @ViewChild('miLista') miLista:IonList
  public lista:string[]=["David","Rafael","Raúl","Lucía"];
  ngOnInit() {
  }

  favorite(id:number){
    
    this.miLista.closeSlidingItems();
  }
  share(id:number){
    
    this.miLista.closeSlidingItems();
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
   componentes: any = [
    {
      path: "/action-sheet",
      name: "Action-sheet"
    },
    {
      path: "/alert",
      name: "Alert"
    }
    
  ]
  constructor() {
    
  }

  ngOnInit() {
    
  }

}

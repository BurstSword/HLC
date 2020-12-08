import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Bar } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-modal-bar',
  templateUrl: './modal-bar.page.html',
  styleUrls: ['./modal-bar.page.scss'],
})
export class ModalBarPage implements OnInit {

  constructor(private ModalController: ModalController) { }
  @Input() newBar: Bar

  ngOnInit() {

  }

  cancelar() {
    this.ModalController.dismiss();
  }
  modificar() {
    this.ModalController.dismiss(this.newBar);
  }

  ratingFilter(rating) {
    return this.newBar.valoracion = Math.round(rating * 10) / 10;
  }
}

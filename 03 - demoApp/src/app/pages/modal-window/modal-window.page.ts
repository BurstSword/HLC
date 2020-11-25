import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-window',
  templateUrl: './modal-window.page.html',
  styleUrls: ['./modal-window.page.scss'],
})
export class ModalWindowPage implements OnInit {

  constructor(private ModalController: ModalController) { }
  @Input() dato: any;
  ngOnInit() {
  }

  cancelar() {
    this.ModalController.dismiss();
  }
  modificar() {
    this.ModalController.dismiss(this.dato);
  }
}

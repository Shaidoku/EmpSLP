import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BaseExProvider } from '../../providers/base-ex/base-ex';


@IonicPage()
@Component({
  selector: 'page-contactos',
  templateUrl: 'contactos.html',
})
export class ContactosPage {
  conts
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public proveedor:BaseExProvider) {
  }

  ionViewDidLoad() {
     this.proveedor.usuDatos()
    .subscribe(
      (data)=>{this.conts = data;}
      )
  }
  goMenu() {
    this.navCtrl.setRoot('MenuPage');
  }
}

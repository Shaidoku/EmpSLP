import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-contactos',
  templateUrl: 'contactos.html',
})
export class ContactosPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactosPage');
  }
  goMenu() {
    this.navCtrl.setRoot('MenuPage');
  }
}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }

  goPer() {
    this.navCtrl.setRoot('PerfilPage');
  }
  goNew() {
    this.navCtrl.setRoot('NewsPage');
  }
  goCal() {
    this.navCtrl.setRoot('CalPage');
  }
  goBus() {
    this.navCtrl.setRoot('BusquedaPage');
  }
  goCon() {
    this.navCtrl.setRoot('ContactosPage');
  }
  goMen() {
    this.navCtrl.setRoot('MensajesPage');
  }
  goConf() {
    this.navCtrl.setRoot('ConfigPage');
  }
}

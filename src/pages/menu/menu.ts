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

  goPerf() {
    this.navCtrl.setRoot('PerfilPage');
  }
  goNews() {
    this.navCtrl.setRoot('NewsPage');
  }
  goCal() {
    this.navCtrl.setRoot('CalPage');
  }

}

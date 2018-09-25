import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GlobalProvider } from "../../providers/global/global";

@IonicPage()
@Component({
  selector: 'page-config',
  templateUrl: 'config.html',
})
export class ConfigPage {

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
   public global: GlobalProvider) {
  this.myfunction1();
  }

  myfunction1(){
    if(this.global.email == '0'){
      this.navCtrl.setRoot('LoginPage');}
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfigPage');
  }
  goMenu() {
    this.navCtrl.setRoot('MenuPage');
  }
}

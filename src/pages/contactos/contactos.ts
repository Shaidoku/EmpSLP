import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BaseExProvider } from '../../providers/base-ex/base-ex';
import { GlobalProvider } from "../../providers/global/global";

@IonicPage()
@Component({
  selector: 'page-contactos',
  templateUrl: 'contactos.html',
})
export class ContactosPage {
  conts
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public proveedor:BaseExProvider,
   public global: GlobalProvider) {
  this.myfunction1();
  }

  myfunction1(){
    if(this.global.email == '0'){
      this.navCtrl.setRoot('LoginPage');}
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

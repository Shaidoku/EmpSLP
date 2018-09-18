import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BaseExProvider } from '../../providers/base-ex/base-ex';
import { GlobalProvider } from "../../providers/global/global";

@IonicPage()
@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
})
export class PerfilPage {
  account: any;
  users
  constructor(public navCtrl: NavController,
   public navParams: NavParams,
   public proveedor:BaseExProvider,
   public global: GlobalProvider) {}

  ionViewDidLoad() {
    this.proveedor.usuDatos()
    .subscribe(
      (data)=>{this.users = data;}
      )
  }
  goMenu() {
    this.navCtrl.setRoot('MenuPage');
  }

}

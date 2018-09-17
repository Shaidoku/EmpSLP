import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BaseExProvider } from '../../providers/base-ex/base-ex';

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
   public proveedor:BaseExProvider) {
     this.account = navParams.get('account');
  }

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

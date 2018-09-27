import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BaseExProvider } from '../../providers/base-ex/base-ex';
import { GlobalProvider } from "../../providers/global/global";

@IonicPage()
@Component({
  selector: 'page-validacion',
  templateUrl: 'validacion.html',
})

export class ValidacionPage {
 users
 user1
 account
  constructor(
    public navCtrl: NavController, 
  	public navParams: NavParams,
    public proveedor:BaseExProvider,
    public global: GlobalProvider){
      this.account = navParams.get('account');
      this.users = navParams.get('users');
      this.myfunction1();
    }

  Fun1(user) {
  	this.navCtrl.setRoot('PerfilPage',{account:this.account,user:user});
  }
  Fun2() {
  this.navCtrl.setRoot('LoginPage');
  }
  myfunction1(){

    if(this.account != null){
       this.global.email = this.account.email;
       this.global.password = this.account.password;
    }

    if(this.global.email == '0'){
      this.navCtrl.setRoot('LoginPage');
    }

    }

}

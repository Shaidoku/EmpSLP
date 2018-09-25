import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GlobalProvider } from "../../providers/global/global";

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

    account: { email: string, password: string } = {
    email: null,
    password: null
    };

  constructor(public navCtrl: NavController,
   public navParams: NavParams,
   public global: GlobalProvider) {this.logout();}

  logout(){
    if(this.account != null){
       this.global.email = '0';
       this.global.password= '0';
    }
  }
  
  signup() {
    this.navCtrl.push('SignupPage');
  }

  enter(account) {
    if(account.email != null){
      this.navCtrl.setRoot('PerfilPage',{account:account})
    }else{this.navCtrl.setRoot('LoginPage');}
    ;
  }
}

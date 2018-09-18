import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
   public navParams: NavParams) {}
  
  signup() {
    this.navCtrl.push('SignupPage');
  }

  enter(account) {
    if(account.email != null){
      this.navCtrl.setRoot('../providers/global/GlobalProvider',{account:account})
    }else{this.navCtrl.setRoot('LoginPage');}
    ;
  }
}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

    account: { email: string, password: string } = {
    email: 'JoanOrtizITSLP@outlook.com',
    password: '1'
    };

  constructor(public navCtrl: NavController,
   public navParams: NavParams) {}
  
  signup() {
    this.navCtrl.push('SignupPage');
  }

  enter(account) {
    this.navCtrl.setRoot('PerfilPage',{account:account});
  }
}

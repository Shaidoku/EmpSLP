import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

    account: { email: string, password: string } = {
    email: 'ing.antonio.gutierrezgarcia@outlook.com',
    password: 'ha756STRfa5'
    };

  constructor(public navCtrl: NavController,
   public navParams: NavParams) {}
  
  signup() {
    this.navCtrl.push('SignupPage');
  }

  enter() {
    this.navCtrl.setRoot('CalPage');
  }
}

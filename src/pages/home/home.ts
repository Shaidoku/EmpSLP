import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

intros

  constructor(public navCtrl: NavController) {}

  iraLogin(){this.navCtrl.push("LoginPage");}

}

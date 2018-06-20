import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BaseExProvider } from '../../providers/base-ex/base-ex';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

intros

  constructor(public navCtrl: NavController,public proveedor:BaseExProvider) {}

  iraLogin(){this.navCtrl.push("LoginPage");}

  ionViewDidLoad(){this.proveedor.introDatos().subscribe((data)=>{this.intros = data;})}









}

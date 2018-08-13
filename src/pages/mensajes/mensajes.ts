import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BaseExProvider } from '../../providers/base-ex/base-ex';

@IonicPage()
@Component({
  selector: 'page-mensajes',
  templateUrl: 'mensajes.html',
})
export class MensajesPage {
  users
  constructor(public navCtrl: NavController,
   public navParams: NavParams,
   public proveedor:BaseExProvider) {
  }
  
  ionViewDidLoad() {
  	this.proveedor.usuDatos()
    .subscribe(
    	(data)=>{this.users = data;}
    	)
  }

   openM(cal) {
    this.navCtrl.push('MensajeDetPage');
  }
}

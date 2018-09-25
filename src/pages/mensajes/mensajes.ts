import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BaseExProvider } from '../../providers/base-ex/base-ex';
import { GlobalProvider } from "../../providers/global/global";

@IonicPage()
@Component({
  selector: 'page-mensajes',
  templateUrl: 'mensajes.html',
})
export class MensajesPage {
  chats
  users
  constructor(public navCtrl: NavController,
   public navParams: NavParams,
   public proveedor:BaseExProvider,
   public global: GlobalProvider) {
  this.myfunction1();
  }

  myfunction1(){
    if(this.global.email == '0'){
      this.navCtrl.setRoot('LoginPage');}
  }
  
  ionViewDidLoad() {
  	this.proveedor.chaDatos()
    .subscribe(
    	(data)=>{this.chats = data;}
    	)
    this.proveedor.usuDatos()
    .subscribe(
      (data)=>{this.users = data;}
      )
  }

   openM(chat,user) {
    this.navCtrl.push('MensajeDetPage', {chat:chat,user:user});
  }
}

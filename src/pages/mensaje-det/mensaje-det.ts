import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BaseExProvider } from '../../providers/base-ex/base-ex';


/**
 * Generated class for the MensajeDetPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mensaje-det',
  templateUrl: 'mensaje-det.html',
})
export class MensajeDetPage {
  chat
  user
  messages
  constructor(public navCtrl: NavController, public navParams: NavParams,
   public proveedor:BaseExProvider)
   {
     this.chat = navParams.get('chat');
     this.user = navParams.get('user');
   }

  ionViewDidLoad() {
        this.proveedor.menDatos()
    .subscribe(
    	(data)=>{this.messages = data;}
    	)
  }

}

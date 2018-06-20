import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BaseExProvider } from '../../providers/base-ex/base-ex';

@IonicPage()
@Component({
  selector: 'page-news',
  templateUrl: 'news.html',
})
export class NewsPage {
  newss
  constructor(public navCtrl: NavController,
   public navParams: NavParams,
   public proveedor:BaseExProvider) {
  }

  ionViewDidLoad() {
    this.proveedor.notDatos()
    .subscribe(
    	(data)=>{this.newss = data;}
    	)
  }

  goNews(cal) {
    this.navCtrl.push('PerfilPage',{cal:cal});
  }
  goMenu() {
    this.navCtrl.setRoot('MenuPage');
  }

}

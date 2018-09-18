import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BaseExProvider } from '../../providers/base-ex/base-ex';
import { GlobalProvider } from "../../providers/global/global";


@IonicPage()
@Component({
  selector: 'page-news',
  templateUrl: 'news.html',
})
export class NewsPage {
  newss
  constructor(public navCtrl: NavController,
   public navParams: NavParams,
   public proveedor:BaseExProvider,
   public global: GlobalProvider) {
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

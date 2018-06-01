import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NewssProvider } from '../../providers/newss/newss';

/**
 * Generated class for the NewsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-news',
  templateUrl: 'news.html',
})
export class NewsPage {
  newss
  constructor(public navCtrl: NavController,
   public navParams: NavParams,
   public proveedor:NewssProvider) {}

  ionViewDidLoad() {
    this.proveedor.obNe()
    .subscribe(
    	(data)=>{this.newss = data;}
    	)
  }

}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-cla-cre',
  templateUrl: 'cla-cre.html',
})
export class ClaCrePage {

  constructor(public navCtrl: NavController,
   public navParams: NavParams, 
   public viewCtrl: ViewController) {
  }

  cancel() {
    this.viewCtrl.dismiss();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ClaCrePage');
  }

}

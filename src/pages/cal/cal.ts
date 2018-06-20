import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { BaseExProvider } from '../../providers/base-ex/base-ex';

@IonicPage()
@Component({
  selector: 'page-cal',
  templateUrl: 'cal.html',
})
export class CalPage {
  cals
  constructor(
   public navCtrl: NavController,
   public navParams: NavParams,
   public proveedor:BaseExProvider, 
   public modalCtrl: ModalController) {}

  ionViewDidLoad() {
    this.proveedor.calDatos()
    .subscribe(
    	(data)=>{this.cals = data;}
    	)
  }

  openCal(cal) {
    this.navCtrl.push('CalDetPage',{cal:cal});
  }
  goNews(cal) {
    this.navCtrl.push('NewsPage',{cal:cal});
  }
add() {
    let addModal = this.modalCtrl.create('ClaCrePage');
    addModal.onDidDismiss(item => {
      if (item) {
        this.cals.add(item);
      }
    })
    addModal.present();
  }

}

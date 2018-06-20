import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-cal-det',
  templateUrl: 'cal-det.html',
})
export class CalDetPage {
  cal: any;

  constructor(public navCtrl: NavController,
   public navParams: NavParams) 
  {
    this.cal = navParams.get('cal');
  }

}

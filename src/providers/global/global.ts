import { HttpClient } from '@angular/common/http';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Injectable } from '@angular/core';

/*
  Generated class for the GlobalProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GlobalProvider {

	public myGlobalVar: any;

  constructor(public navCtrl: NavController,
  	public http: HttpClient,
    public navParams: NavParams) {
    console.log('Hello GlobalProvider Provider');

     this.myGlobalVar = navParams.get('account');
     if(this.myGlobalVar == null){
       this.navCtrl.setRoot('LoginPage');
       this.myGlobalVar = 0;
     }else{this.navCtrl.setRoot('PerfilPage');}

}

}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BaseExProvider } from '../../providers/base-ex/base-ex';
import { GlobalProvider } from "../../providers/global/global";

  @IonicPage()
  @Component({
    selector: 'page-login',
    templateUrl: 'login.html',
  })

  export class LoginPage {
    users
    account: { email: string, password: string } = {email: null,password: null};

    constructor(
      public navCtrl: NavController,
      public navParams: NavParams,
      public proveedor:BaseExProvider,
      public global: GlobalProvider){
        this.logout();
      }

    ionViewDidLoad(){
      this.proveedor.usuDatos().subscribe( (data)=>{this.users = data;} )
    }

    logout(){
      if(this.account != null){
        this.global.email = '0';
        this.global.password= '0';
      }
    }
  
    signup(){
      this.navCtrl.push('SignupPage');
    }

    enter(account){
      if(account.email != null){
        this.navCtrl.push('ValidacionPage',{account:account,users:this.users})
      }
      else{
        this.navCtrl.setRoot('LoginPage');
      };
    }
  }

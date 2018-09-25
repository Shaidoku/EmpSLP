import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BaseExProvider } from '../../providers/base-ex/base-ex';
import { GlobalProvider } from "../../providers/global/global";

@IonicPage()
@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
})
export class PerfilPage {
  user
  users
  account
  projects
  constructor(public navCtrl: NavController,
   public navParams: NavParams,
   public proveedor:BaseExProvider,
   public global: GlobalProvider) 
  {this.account = navParams.get('account');
   this.myfunction1();
  }

  ionViewDidLoad() {
    this.proveedor.usuDatos()
    .subscribe(
      (data)=>{this.users = data;}
      )
    this.proveedor.proDatos()
    .subscribe(
      (data)=>{this.projects = data;}
      )
  }

  myfunction1(){
    if(this.account != null){
       this.global.email = this.account.email;
       this.global.password = this.account.password;
    for (var i = 0; i < 1; ++i)
        { this.global.auth = this.users[i].id;
          //this.user = this.users[i];
          //if(this.user.email == this.account.email){this.global.auth = this.user.id;}
        }

    }
    if(this.global.email == '0'){
      this.navCtrl.setRoot('LoginPage');
    }

    }
  goMenu() {
    this.navCtrl.setRoot('MenuPage');
  }

} 
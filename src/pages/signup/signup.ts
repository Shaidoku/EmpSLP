import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';

import { User } from '../../providers';
import { MainPage } from '../';

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {
  // The account fields for the login form.
  // If you're using the username field with or without email, make
  // sure to add it to the type
  account: {
    email: string,
    foto: string,
    name: string,
    app: string,
    apm: string,
    ed: string,
    ocp: string,
    cn: string,
    sx: string,
    tl: string,
   password: string } = {
    email: 'Lic.Areli@example.com',
    foto: '',
    name: 'Areli Lizeth',
    app: 'Orta',
    apm: 'Mata',
    ed: '25',
    ocp: 'Gerente',
    cn: 'Administraccion, relaciones publicas, contaduria...',
    sx: 'F',
    password: 'contraseña',
    tl: '4446783782'
  };

  // Our translated text strings
  private signupErrorString: string;

  constructor(public navCtrl: NavController,
    public user: User,
    public toastCtrl: ToastController,
    public translateService: TranslateService) {

    this.translateService.get('SIGNUP_ERROR').subscribe((value) => {
      this.signupErrorString = value;
    })
  }

  doSignup() {
    // Attempt to login in through our User service
    this.user.signup(this.account).subscribe((resp) => {
      this.navCtrl.push(MainPage);
    }, (err) => {

      this.navCtrl.push(MainPage);

      // Unable to sign up
      let toast = this.toastCtrl.create({
        message: this.signupErrorString,
        duration: 3000,
        position: 'top'
      });
      toast.present();
    });
  }
}

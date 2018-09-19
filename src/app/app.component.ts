import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild('NAV') nav: Nav;
  rootPage:any;

  public pages: Array<{titulo: string, component: any, icon: string}>;

  constructor(platform: Platform, statusBar: StatusBar, 
              splashScreen: SplashScreen) {
    this.rootPage = HomePage;

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  goPer() {
    this.nav.setRoot('PerfilPage');
  }
   goNew() {
    this.nav.setRoot('NewsPage');
  }
  goCal() {
    this.nav.setRoot('CalPage');
  }
  goBus() {
    this.nav.setRoot('BusquedaPage');
  }
  goCon() {
    this.nav.setRoot('ContactosPage');
  }
  goMen() {
    this.nav.setRoot('MensajesPage');
  }
  goConf() {
    this.nav.setRoot('ConfigPage');
  }
  goLogin() {
    this.nav.setRoot('LoginPage');
  }

}


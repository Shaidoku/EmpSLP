import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { PerfilPage }    from '../pages/perfil/perfil';
import { NewsPage }      from '../pages/news/news';
import { CalPage }       from '../pages/cal/cal';
import { BusquedaPage }  from '../pages/busqueda/busqueda';
import { ContactosPage } from '../pages/contactos/contactos';
import { MensajesPage }  from '../pages/mensajes/mensajes';
import { ConfigPage }    from '../pages/config/config';

import { HomePage } from '../pages/home/home';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild('NAV') nav: Nav;
  public rootPage:any;

  public pages: Array<{titulo: string, component: any, icon: string}>;

  constructor(platform: Platform, statusBar: StatusBar, 
              splashScreen: SplashScreen) {
    this.rootPage = HomePage;
    this.pages = [
              {titulo:'Perfil',          component: PerfilPage,    icon:'person'},
              {titulo:'Noticias',        component: NewsPage,      icon:'paper'},
              {titulo:'Calendario',      component: CalPage,       icon:'calendar'},
              {titulo:'Busqueda',        component: BusquedaPage,  icon:'search'},
              {titulo:'Contactos',       component: ContactosPage, icon:'contacts'},
              {titulo:'Mensajes',        component: MensajesPage,  icon:'mail'},
              {titulo:'Configuraciones', component: ConfigPage,    icon:'settings'}
    ];

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

}


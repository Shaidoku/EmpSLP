import { Component } from '@angular/core';
import { IonicPage, MenuController, NavController, Platform } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';

export interface Slide {
  title: string;
  description: string;
  image: string;
}

@IonicPage()
@Component({
  selector: 'page-intro',
  templateUrl: 'intro.html'
})
export class IntroPage {
  slides: Slide[];
  showSkip = true;
  dir: string = 'ltr';

  constructor(public navCtrl: NavController, public menu: MenuController, translate: TranslateService, public platform: Platform) {
    this.dir = platform.dir();
    translate.get([
      "Intro_SLIDE1_TITLE",
      "Intro_SLIDE1_DESCRIPTION",
      "Intro_SLIDE2_TITLE",
      "Intro_SLIDE2_DESCRIPTION",
      "Intro_SLIDE3_TITLE",
      "Intro_SLIDE3_DESCRIPTION",
    ]).subscribe(
      (values) => {
        console.log('Loaded values', values);
        this.slides = [
          {
            title: '¿Quienes somos?',
            description: 'Somos una comunidad en beneficio de los emprendedores potosinos',
            image: 'assets/img/ica-slidebox-img-1.jpg',
          },
          {
            title: '¿Quieres fondear tu proyecto?',
            description: 'Emprendedores S.L.P. te apoya con la difusíon',
            image: 'assets/img/ica-slidebox-img-2.png',
          },
          {
            title: '¿Que hacemos?',
            description: 'Proporcionamos información de utilidad para emprendedores   <p>  </p>',
            image: 'assets/img/ica-slidebox-img-3.png',
          }
        ];
      });
  }

  startApp() {
    this.navCtrl.setRoot('WelcomePage', {}, {
      animate: true,
      direction: 'forward'
    });
  }

  onSlideChangeStart(slider) {
    this.showSkip = !slider.isEnd();
  }

  ionViewDidEnter() {
    // the root left menu should be disabled on the intro page
    this.menu.enable(false);
  }

  ionViewWillLeave() {
    // enable the root left menu when leaving the intro page
    this.menu.enable(true);
  }

}

import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController } from 'ionic-angular';

import { Tab1Root, Tab4Root, Tab5Root } from '../';

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tab1Root: any = Tab1Root;
  tab4Root: any = Tab4Root;
  tab5Root: any = Tab5Root;
  tab1Title = " ";
  tab4Title = " ";
  tab5Title = " ";

  constructor(public navCtrl: NavController,
   public translateService: TranslateService) {
    translateService.get([
     'TAB1_TITLE',
     'TAB4_TITLE',
     'TAB5_TITLE']).subscribe(values => {
      this.tab1Title = values['TAB1_TITLE'];
      this.tab4Title = values['TAB4_TITLE'];
      this.tab5Title = values['TAB5_TITLE'];
    });
  }
}

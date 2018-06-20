import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CalDetPage } from './cal-det';

@NgModule({
  declarations: [
    CalDetPage,
  ],
  imports: [
    IonicPageModule.forChild(CalDetPage),
  ],
})
export class CalDetPageModule {}

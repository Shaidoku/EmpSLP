import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MensajeDetPage } from './mensaje-det';

@NgModule({
  declarations: [
    MensajeDetPage,
  ],
  imports: [
    IonicPageModule.forChild(MensajeDetPage),
  ],
})
export class MensajeDetPageModule {}

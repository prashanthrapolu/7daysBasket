import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LatestHomePage } from './latest-home';

@NgModule({
  declarations: [
    LatestHomePage,
  ],
  imports: [
    IonicPageModule.forChild(LatestHomePage),
  ],
})
export class LatestHomePageModule {}

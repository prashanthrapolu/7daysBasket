import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShoppingTrolleyPage } from './shopping-trolley';

@NgModule({
  declarations: [
    ShoppingTrolleyPage,
  ],
  imports: [
    IonicPageModule.forChild(ShoppingTrolleyPage),
  ],
})
export class ShoppingTrolleyPageModule {}

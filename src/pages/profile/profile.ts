import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UpdateprofilePage } from '../updateprofile/updateprofile';
import { Storage } from '@ionic/storage';
import { WalletPage } from '../wallet/wallet';
import { ShoppingTrolleyPage } from '../shopping-trolley/shopping-trolley';

import { OrderSummaryPage } from '../order-summary/order-summary';
import { WishListPage } from '../wish-list/wish-list';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  names = [];

  constructor(public navCtrl: NavController,
    public storage: Storage,
    public navParams: NavParams) {
    this.getData()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }
  edit() {
    this.navCtrl.push(UpdateprofilePage)
  }
  getData() {
    this.storage.get('name').then((val) => {
      // console.log('Your age is', JSON.parse(val));
      this.names = JSON.parse(val);
      console.log(this.names);

    });

  }
  wallet() {
    this.navCtrl.push(WalletPage);
  }
  referral() {
    // this.navCtrl.push()
  }
  trolley() {
    this.navCtrl.push(ShoppingTrolleyPage)
  }
  order() {
    this.navCtrl.push(OrderSummaryPage)
  }
  wish() {
    this.navCtrl.push(WishListPage)
  }
  feedback() {
    // this.navCtrl.push()
  }
}
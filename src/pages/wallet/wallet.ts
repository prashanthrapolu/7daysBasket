import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the WalletPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-wallet',
  templateUrl: 'wallet.html',
})
export class WalletPage {
  mainCats: any = ['All', 'Pending', 'Recieved', 'Paid'];
  subC: any = ['Referral', 'CashBack'];
  selectedCat: any = '';
  subCategories: any = ['Sunglasses', 'Gym', 'Holiday', 'Work', 'Tech', 'Experiences'];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.selectedCat = this.mainCats[0];
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad WalletPage');
  }
}

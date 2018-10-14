import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { OrderHistoryPage } from '../order-history/order-history';
import { Storage } from '@ionic/storage'
/**
 * Generated class for the OrderSummaryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-order-summary',
  templateUrl: 'order-summary.html',
})
export class OrderSummaryPage {
  rate = [];
  tot_order = [];
  rate1 = [];
  myDate: String = new Date().toLocaleString()
  constructor(public navCtrl: NavController,
    public storage: Storage,
    public navParams: NavParams) {
    this.storage.get('discount').then((val) => {
      // console.log('Your age is', JSON.parse(val));

      // this.rate.push(JSON.parse(val));
      this.rate = JSON.parse(val);
      // let rate1 = [];
      // for (let i = 0; i < this.rate.length; i++) {
      //   this.rate1.push(this.rate[i])
      // }
      // this.rate.push(JSON.parse(val))
      console.log(this.rate);
    });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad OrderSummaryPage');
  }
  order() {
    this.storage.set('date', JSON.stringify(this.myDate));
    this.navCtrl.setRoot(OrderHistoryPage)
  }
}

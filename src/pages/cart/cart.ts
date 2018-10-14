import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { WishListPage } from '../wish-list/wish-list';
import { ShoppingTrolleyPage } from '../shopping-trolley/shopping-trolley';
/**
 * Generated class for the CartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html',
})
export class CartPage {
  array: Array<string> = [];
  count = [];
  price = [];
  constructor(public navCtrl: NavController,
    public storage: Storage,
    public navParams: NavParams) {
    this.array = navParams.get('data');
    // console.log(this.array);
    this.setData()
    // this.getData()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CartPage');
  }
  ionViewWillEnter() {
    this.storage.get('sort').then((val) => {
      // console.log('Your age is', JSON.parse(val));
      this.array = JSON.parse(val);
      console.log(this.array);
    });
  }
  counter(item) {
    this.count.length += item.price;
    this.count = this.array;
    console.log(this.count);
  }
  remove(item) {
    this.count.length -= item.counter
    this.price.length = item.counter
    // this.count =   item.counter;
    //console.log(item.counter);
  }
  increment(item): void {
    item.counter = item.counter + 1;
    item.price = 2 * item.price;
    item.price = item.counter;
    console.log(item.price);
  }

  decrement(item): void {
    item.counter = item.price - 1;
    item.price = item.counter
  }
  setData() {
    this.storage.set('sort', JSON.stringify(this.array));
    console.log(this.array);
  }
  // getData() {
  //   this.storage.get('hi').then((val) => {
  //     // console.log('Your age is', JSON.parse(val));
  //     this.array = JSON.parse(val);
  //     console.log(this.array, '======');

  //   });
  // }
  wish() {
    this.storage.set('sort', JSON.stringify(this.array));
    console.log(this.array);
  }
  // wi(i) {
  //   i = i;
  //   this.navCtrl.push(WishListPage, { data: i })
  // }
  cart() {
    this.navCtrl.push(ShoppingTrolleyPage)
  }
}

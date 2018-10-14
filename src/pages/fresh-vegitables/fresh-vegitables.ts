import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CartPage } from '../cart/cart';
import { Storage } from '@ionic/storage'

/**
 * Generated class for the FreshVegitablesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-fresh-vegitables',
  templateUrl: 'fresh-vegitables.html',
})
export class FreshVegitablesPage {
  color = [];
  //  counter =0;
  count = [];
  price = [];
  total = []
  tot = [];
  tot_count = true
  constructor(public navCtrl: NavController,
    public storage: Storage,
    public navParams: NavParams) {
    this.color = navParams.get('data');
    console.log(this.color);
    console.log(this.count);
    console.log(this.count);
    // this.getData();
    this.setData();
  }

  increment(item): void {
    item.counter = item.counter + 1;
    item.total = item.counter * 10;
    // item.price = item.counter;
    console.log(item.total);
  }

  decrement(item): void {
    item.counter = item.counter - 1;
    item.counter - item.total * 10;
    // item.counter = 0;
  }
  counter(item) {
    // for (var i = 0; i < item.total[i]; i++) {
    //   this.count[i] += item.total[i]
    // }
    // for (let i = 0; i < item.total.lenght; i++) {
    //   this.count += this.count+(item.total[i])
    // }
    // this.count += item.total;
    // this.count = this.count + item.total
    // for (let i = 0; i < item.counter.lenght; i++) {
    //   this.count = this.count + (item.total+ item.counter[i])
    // }
    this.count += (item.total)
    console.log(this.count);
  }

  remove(item) {
    item.counter = item.total - item.counter * 10;
    this.count = item.counter;
    // this.price.length = item.counter
    // this.count =   item.counter;
    //console.log(item.counter);
  }
  // increment(item){
  //   this.counter += 1;
  // }

  // decrement(item){
  //   this.counter -= 1;
  // }

  ionViewDidEnter() {
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad FreshVegitablesPage');
  }
  cart(color) {
    this.storage.set('count', JSON.stringify(this.count));
    this.storage.set('tot_count', JSON.stringify(this.tot_count));
    console.log(this.tot_count);

    this.navCtrl.push(CartPage, { data: color })

  }
  //   getData() {
  //     this.storage.get('sort').then((val) => {
  //       // console.log('Your age is', JSON.parse(val));
  //       this.color = JSON.parse(val);
  //       console.log(this.color,'jdfklfhjdh');

  //     });
  // }
  setData() {
    this.storage.set('hi', JSON.stringify(this.color));
    console.log(this.color, '-----------');

  }
}

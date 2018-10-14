import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { AccountdetailsPage } from '../accountdetails/accountdetails';
import { OrderSummaryPage } from '../order-summary/order-summary';

/**
 * Generated class for the AddressModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-address-modal',
  templateUrl: 'address-modal.html',
})
export class AddressModalPage {
  address = [];
  orders = [];
  edit = false
  rate = [];
  tot_order = []
  constructor(public navCtrl: NavController,
    public storage: Storage,
    public viewCtrl: ViewController,
    public navParams: NavParams) {
    this.getData();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddressModalPage');
  }
  done() {

    this.navCtrl.push(OrderSummaryPage)

  }
  getData() {
    this.storage.get('data').then((val) => {
      // console.log('Your age is', JSON.parse(val));
      this.address = JSON.parse(val);
      console.log(this.address);
      this.storage.get('order').then((val) => {
        // console.log('Your age is', JSON.parse(val));
        this.orders = JSON.parse(val);
        console.log(this.orders, 'order', 'order');

      });

    });

  }
  anotheraddr() {
    this.edit = true;
  }
  another() {
    this.navCtrl.push(AccountdetailsPage)
  }
  close() {

    this.viewCtrl.dismiss();
  }
}
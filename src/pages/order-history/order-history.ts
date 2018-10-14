import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage'
import { LatestHomePage } from '../latest-home/latest-home';

/**
 * Generated class for the OrderHistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-order-history',
  templateUrl: 'order-history.html',
})
export class OrderHistoryPage {
  rate = [];
  tot_order = [];
  date:string;
  Ran: number;
  constructor(public navCtrl: NavController,
    public storage: Storage,
    public navParams: NavParams) {
  }
  ionViewDidEnter() {
    this.storage.get('discount').then((val) => {
      // console.log('Your age is', JSON.parse(val));
      this.rate = JSON.parse(val);
      console.log(this.rate,'rate');

    });
    this.storage.get('cart').then((val) => {
      // console.log('Your age is', JSON.parse(val));
      this.tot_order = JSON.parse(val);
      console.log(this.tot_order);

    });
    this.storage.get('date').then((val) => {
      // console.log('Your age is', JSON.parse(val));
      this.date = JSON.parse(val);
      
      console.log(this.date);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrderHistoryPage');
    this.Ran=this.random();
  }
  random(): number {
    let ran = Math.floor(Math.random()*228989454545)+1;
    return ran;       
 }
 ionViewWillLeave(){
  // this.storage.clear().then(() => {
  //   console.log('Keys have been cleared');
  // });
 }
 home(){
   this.navCtrl.setRoot(LatestHomePage)
 }
}

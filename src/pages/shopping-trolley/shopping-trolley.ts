import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, AlertController, ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage'
import { AddressModalPage } from '../address-modal/address-modal';
import { PromocodeModalPage } from '../promocode-modal/promocode-modal';

/**
 * Generated class for the ShoppingTrolleyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-shopping-trolley',
  templateUrl: 'shopping-trolley.html',
})

export class ShoppingTrolleyPage {
  cart = [];
  Details = [];
  count: number;
  orders: any = true;
  tot_count: any = false;
  key: any;
  grand_total: number;
  apply: any = false;
  discount: number;

  code = "Vega"
  constructor(public navCtrl: NavController,
    public toastCtrl: ToastController,
    public alertCtrl: AlertController,
    public modalCtrl: ModalController,
    public storage: Storage,
    public navParams: NavParams) {
    this.getData()
    this.cart;
    this.loadData();

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShoppingTrolleyPage');
  }
  ionViewWillEnter() {
    this.grand_total = (this.count) + 10;
    console.log(this.grand_total);
  }

  getData() {
    this.storage.get('sort').then((val) => {
      // console.log('Your age is', JSON.parse(val));
      this.cart = JSON.parse(val);
      this.orders = false;
      console.log(this.cart);
      this.storage.set('order', JSON.stringify(this.cart));
      console.log(this.cart, '===');

    });
    this.storage.get('count').then((val) => {
      // console.log('Your age is', JSON.parse(val));
      this.count = JSON.parse(val);
      console.log(this.count, 'count-val');

    });
    this.storage.get('tot_count').then((val) => {
      // console.log('Your age is', JSON.parse(val));
      this.tot_count = JSON.parse(val);
      console.log(this.tot_count);
    });
  }
  order() {
    var modalPage = this.modalCtrl.create(AddressModalPage, { showBackdrop: true }, { cssClass: "mymodal" });
    modalPage.present();
    modalPage.onDidDismiss(data => {
    });
    this.storage.set('cart', JSON.stringify(this.cart));
    console.log(this.cart);
    this.storage.set('rate', JSON.stringify(this.grand_total));
    console.log(this.grand_total);
  }
  loadData() {
    this.storage.get('key').then((val) => {
      console.log('Your age is', val);
      this.Details = JSON.parse(val)
    });
  } 
  promo() {
    // var modalPage = this.modalCtrl.create(PromocodeModalPage, { showBackdrop: true }, { cssClass: "mymodal" });

    // modalPage.present();

    // modalPage.onDidDismiss(data => {
    //   // this.apply = true;


    // });
    let alert = this.alertCtrl.create({
      title: 'Enter Promo Code',
      inputs: [
        {
          name: 'PromoCode',
          placeholder: 'Promo Code'
        },

      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Apply',
          handler: data => {
            console.log(data);

            if (data.PromoCode == this.code) {
              this.discount = ((0.5 / 100) * (this.count)) * 100;
              this.discount = this.discount + 10;
              console.log(this.discount);
              this.storage.set('discount', JSON.stringify(this.discount));
              console.log(this.discount);
              this.apply = true;
              return true;


            }
            else {

              let toast = this.toastCtrl.create({
                message: 'Enter Valid  Promo Code',
                duration: 3000,
                position: 'middle'
              });

              toast.onDidDismiss(() => {
                console.log('Dismissed toast');
              });

              toast.present();
            }

            return false;
          }
        }
      ]
    });
    alert.present();

  }
}

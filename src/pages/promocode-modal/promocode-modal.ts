import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController, ToastController, ViewController } from 'ionic-angular';
import { Storage } from '@ionic/storage'
import { ShoppingTrolleyPage } from '../shopping-trolley/shopping-trolley';
/**
 * Generated class for the PromocodeModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-promocode-modal',
  templateUrl: 'promocode-modal.html',
})
export class PromocodeModalPage {
  referral: any;
  cancel = false;
  applied: any;
  code = false;
  constructor(public navCtrl: NavController,
    public popoverCtrl: PopoverController,
    private toastCtrl: ToastController,
    public viewCtrl: ViewController,
    public storage: Storage,
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReferralModalPage');
  }
  close() {

    this.viewCtrl.dismiss();

  }
  apply(cod) {
    if (this.referral == 'Vega') {
      this.navCtrl.pop();
      console.log('inValid Code');



      
      let toast = this.toastCtrl.create({
        message: 'Sucessfull',

        duration: 1000,
        position: 'top'
      });


      toast.onDidDismiss(() => {
        console.log('Dismissed toast');

      });

      toast.present();

    }

    else {
      console.log('inValid Code');
      let toast = this.toastCtrl.create({
        message: 'Invalid Code Please Try again',
        duration: 1000,
        position: 'top'
      });

      toast.onDidDismiss(() => {
        console.log('Dismissed toast');
      });

      toast.present();
    }
  }
}
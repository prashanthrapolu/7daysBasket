import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { PopoverController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
/**
 * Generated class for the ReferralModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-referral-modal',
  templateUrl: 'referral-modal.html',
  //   template: `
  //   <ion-list>
  //   <ion-item>
  //     <h3>Apply Reffral Code</h3>
  //   </ion-item>
  //     <div class="" text-center><p>VEGA20</p> </div>
  //     <div>
  //   <button ion-button block>Apply</button>
  //     </div>

  //   </ion-list>
  // `
})
export class ReferralModalPage {
  referral: any ;
  constructor(public navCtrl: NavController,
    public popoverCtrl: PopoverController,
    private toastCtrl: ToastController,
    public viewCtrl: ViewController,
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReferralModalPage');
  }
  close() {
    this.viewCtrl.dismiss();
  }
  apply() {
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



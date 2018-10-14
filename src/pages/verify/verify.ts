import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { LatestHomePage } from '../latest-home/latest-home';
import { FormGroup } from '@angular/forms';
import { LoginPage } from '../login/home';
import { UserOptions } from '../../userOptions';
import { UserDataProvider } from '../../providers/userdata/userdata';

/**
 * Generated class for the VerifyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-verify',
  templateUrl: 'verify.html',
})
export class VerifyPage {

  code: any;
  verif: UserOptions = { MNumber: '', Verify: '',name:'',email:'',address:'',street:'',pin:'',lname:'',dob:'' };
  constructor(public navCtrl: NavController,
    public toastCtrl: ToastController,
    public userData: UserDataProvider,
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VerifyPage');
  }
  verify() {
    if (this.code == 'Vega20') {

      this.navCtrl.setRoot(LatestHomePage)
      this.userData.signup(this.verif.Verify);


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
      console.log('Invalid');
      let toast = this.toastCtrl.create({
        message: 'InValid Code Please Try again',
        duration: 1000,
        position: 'top'
      });

      toast.onDidDismiss(() => {
        console.log('Dismissed toast');
      });

      toast.present();
    }

  }
  change() {
    this.navCtrl.setRoot(LoginPage)
  }
  refresh() {
    let toast = this.toastCtrl.create({
      message: 'Refresh',
      duration: 1000,
      position: 'top'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }

}



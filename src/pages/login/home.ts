import { Component } from '@angular/core';
import { NavController, ModalController, MenuController, ToastController } from 'ionic-angular';
import { ReferralModalPage } from '../referral-modal/referral-modal';
import { VerifyPage } from '../verify/verify';
import { NgForm } from '@angular/forms';
import { UserOptions } from '../../userOptions';
import { UserDataProvider } from '../../providers/userdata/userdata';
import { Network } from '@ionic-native/network';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class LoginPage {
  submitted = false;

  login: UserOptions = { MNumber: '', Verify: '', name: '', email: '', address: '', street: '', pin: '', lname: '', dob: '' };

  constructor(public navCtrl: NavController,
    public modalCtrl: ModalController,
    public userData: UserDataProvider,
    private network: Network,
    public toast: ToastController,
    public menuCtrl: MenuController

  ) {
    this.menuCtrl.enable(false, 'myMenu');

  }
  referral() {
    var modalPage = this.modalCtrl.create(ReferralModalPage, { showBackdrop: true }, { cssClass: "mymodal" });
    modalPage.present();
    modalPage.onDidDismiss(data => {
      console.log(data);
    });
  }

  onLogin(form: NgForm) {
    this.submitted = true;
    if (form.valid) {
      this.userData.login(this.login.MNumber);
      this.navCtrl.push(VerifyPage);
      console.log(this.login.MNumber);
    }
  }
  ionViewDidEnter() {
    this.network.onConnect().subscribe(data => {
      console.log(data)
      this.displayNetworkUpdate(data.type);
    }, error => console.error(error));

    this.network.onDisconnect().subscribe(data => {
      console.log(data)
      
      this.displayNetworkUpdate(data.type);
    }, error => console.error(error));
  }

  displayNetworkUpdate(connectionState: string) {
    let networkType = this.network.type;
    this.toast.create({
      message: `You are now ${connectionState} via ${networkType}`,
      duration: 3000
    }).present();
  }
}

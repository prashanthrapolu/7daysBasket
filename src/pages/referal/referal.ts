import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';

/**
 * Generated class for the ReferalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-referal',
  templateUrl: 'referal.html',
})
export class ReferalPage {

  constructor(public navCtrl: NavController,
    private socialSharing: SocialSharing,
    public navParams: NavParams) {
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ReferalPage');
  }
  ref() {
    this.socialSharing.canShareViaEmail().then(() => {
      // Sharing via email is possible
    }).catch(() => {
      // Sharing via email is not possible
    }); 
    // Share via email
    this.socialSharing.shareViaEmail('Body', 'Subject', ['recipient@example.org']).then(() => {
      // Success!
    }).catch(() => {
      // Error!
    });
    this.socialSharing.shareViaWhatsApp('Hi sharing the referral code','http://google.com'  ).then(() => {
    }).catch(() => {
    });
  }
}

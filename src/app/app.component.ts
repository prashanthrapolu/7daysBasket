import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/home';
import { VerifyPage } from '../pages/verify/verify';
import { Storage } from '@ionic/storage';
import { LatestHomePage } from '../pages/latest-home/latest-home';
import { WishListPage } from '../pages/wish-list/wish-list';
import { ShoppingTrolleyPage } from '../pages/shopping-trolley/shopping-trolley';
import { AccountdetailsPage } from '../pages/accountdetails/accountdetails';
import { OrderSummaryPage } from '../pages/order-summary/order-summary';
import { WalletPage } from '../pages/wallet/wallet';
import { ProfilePage } from '../pages/profile/profile';
import { FeedbackPage } from '../pages/feedback/feedback';
import { ReferalPage } from '../pages/referal/referal';
import { AboutPage } from '../pages/about/about';
import { PagingPage } from '../pages/paging/paging';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any;
  @ViewChild(Nav) nav: Nav;
  pages: Array<{ title: string, component: any; icon: any }>;
  constructor(platform: Platform,
    public storage: Storage,
    statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.overlaysWebView(false);

      // set status bar to white
      statusBar.backgroundColorByHexString('#758d42');
      statusBar.styleDefault();
      splashScreen.hide();
    });
    this.pages = [
      { title: 'Home', component: LoginPage, icon: 'ic_order_summary.png' },
      { title: 'Shopping Trolly', component: ShoppingTrolleyPage, icon: 'ic_shopping_trolly.png' }
      ,
      { title: 'Order Summary', component: OrderSummaryPage, icon: 'ic_order_summary.png' }
      ,
      { title: 'Account Details', component: AccountdetailsPage, icon: 'ic_account_detail.png' }
      ,
      { title: 'Wish List', component: WishListPage, icon: 'ic_unfavorite.png' }
      ,
      { title: 'Wallet', component: WalletPage, icon: 'ic_wallet.png' }
      ,
      { title: 'Referral Code', component: ReferalPage, icon: 'ic_referral_code.png' }
      ,
      { title: 'Feedback', component: FeedbackPage, icon: 'ic_feedback.png' }
      ,
      { title: 'About', component: AboutPage, icon: 'ic_about_us.png' }
      ,
      { title: 'Rate app', component: VerifyPage, icon: 'ic_rate_app.png' },
      { title: 'Terms & Condition', component: PagingPage, icon: 'ic_tearm_condition.png' }
      ,
      { title: 'Profile', component: ProfilePage, icon: 'ic_tearm_condition.png' }
    ];
    this.storage.get('hasLoggedIn')
      .then((hasLoggedIn) => {
        if (hasLoggedIn) {
          this.rootPage = LatestHomePage;
        } else {
          this.rootPage = LoginPage
        }
      });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.push(page.component);
  }
}


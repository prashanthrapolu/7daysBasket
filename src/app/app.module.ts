import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Network } from '@ionic-native/network';
import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/home';
import { ReferralModalPageModule } from '../pages/referral-modal/referral-modal.module';
import { VerifyPageModule } from '../pages/verify/verify.module';
import { LatestHomePageModule } from '../pages/latest-home/latest-home.module';
import { UserDataProvider } from '../providers/userdata/userdata';
import { IonicStorageModule } from '@ionic/storage';
import { FreshVegitablesPageModule } from '../pages/fresh-vegitables/fresh-vegitables.module';
import { CartPageModule } from '../pages/cart/cart.module';
import { VerifyPage } from '../pages/verify/verify';
import { LatestHomePage } from '../pages/latest-home/latest-home';
import { WishListPageModule } from '../pages/wish-list/wish-list.module';
import { ShoppingTrolleyPageModule } from '../pages/shopping-trolley/shopping-trolley.module';
import { AddressModalPageModule } from '../pages/address-modal/address-modal.module';
import { AccountdetailsPageModule } from '../pages/accountdetails/accountdetails.module';
import { OrderSummaryPageModule } from '../pages/order-summary/order-summary.module';
import { OrderHistoryPageModule } from '../pages/order-history/order-history.module';
import { WalletPageModule } from '../pages/wallet/wallet.module';
import { ProfilePageModule } from '../pages/profile/profile.module';
import { UpdateprofilePageModule } from '../pages/updateprofile/updateprofile.module';
import { Camera } from '@ionic-native/camera';
import { FeedbackPageModule } from '../pages/feedback/feedback.module';
import { PromocodeModalPageModule } from '../pages/promocode-modal/promocode-modal.module';
import { ReferalPageModule } from '../pages/referal/referal.module';
import { SocialSharing } from '@ionic-native/social-sharing';
import { AboutPageModule } from '../pages/about/about.module';

import { HttpModule } from '@angular/http';
import { PagingPageModule } from '../pages/paging/paging.module';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    VerifyPage,
    LatestHomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    ReferralModalPageModule,
    IonicStorageModule.forRoot(),
    AddressModalPageModule,
    AccountdetailsPageModule,
    OrderSummaryPageModule,
    OrderHistoryPageModule,
    FreshVegitablesPageModule,
    WalletPageModule,
    CartPageModule,
    WishListPageModule,
    ShoppingTrolleyPageModule,
    ProfilePageModule,
    UpdateprofilePageModule,
    FeedbackPageModule,
    PromocodeModalPageModule,
    ReferalPageModule,
    AboutPageModule,
    HttpModule,
    HttpClientModule,
    PagingPageModule,

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    VerifyPage,
    LatestHomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    HttpClient,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    UserDataProvider,
    Storage,
    Camera,
    Network,
    SocialSharing,
  
    
  ]
})
export class AppModule { }

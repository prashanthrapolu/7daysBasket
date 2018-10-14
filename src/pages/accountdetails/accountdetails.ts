import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the AccountdetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-accountdetails',
  templateUrl: 'accountdetails.html',
})
export class AccountdetailsPage {
  submit = false;
  details = [];
  jsonData = [];

  data = {
    'name': '',
    'email': '',
    'pwd': '',
    'addr': '',
    'str': '',
    'pin': '',
    'mobile': '',
    'key': false,
    'lname': '',
    'dob': ''
  };
  constructor(public navCtrl: NavController,
    public storage: Storage,
    public navParams: NavParams) {
    this.getData();
    this.setData();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad AccountdetailsPage');
  }
  save() {
    this.submit = true;
    this.storage.set('key1', JSON.stringify(this.data));
    console.log(this.data);
    this.data.key = true;
  }
  getData() {
    this.storage.get('key1').then((val) => {
      console.log('', JSON.parse(val));
      this.data = JSON.parse(val);
      this.storage.set('data', JSON.stringify(this.data));
      console.log(this.data, 'jsfdjjkk');
    });
  }
  edit() {
    this.navCtrl.push(AccountdetailsPage)
  }
  delete() {
    //  this.data.splice(0,1)
    // this.data.addr.slice(0, 1)
    // this.data.('name');
    // this.data.name = '';
    // this.data.email = '';
    // this.data.addr = '';
    // this.data.str = '';
    // this.data.mobile = '';
    // this.data.lname = '';
    // this.data.dob = '';
    // this.data.pin = '';
    this.submit = false;
    // this.data.name = '';
    // this.data.name = '';
    // this.data.name = '';
    // this.data.name = '';
    // this.data.name = '';
    this.storage.set('key1', JSON.stringify(this.data));
    console.log(this.data);
  }
  setData() {
  }
}

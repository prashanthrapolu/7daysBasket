import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


/**
 * Generated class for the PagingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-paging',
  templateUrl: 'paging.html',
})
export class PagingPage {
  data: any;
  users: string[];
  errorMessage: string;
  page = 1;
  perPage = 0;
  totalData = 0;
  totalPage = 0;

  constructor(public navCtrl: NavController,
    // public restApi: RestApiProvider,
    public navParams: NavParams) {
    this.getUsers();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PagingPage');
  }
  getUsers() {
    // this.restApi.getUsers(this.page)
    //   .subscribe(
    //     res => {
    //       this.data = res;
    //       this.users = this.data.data;
    //       this.perPage = this.data.per_page;
    //       this.totalData = this.data.total;
    //       this.totalPage = this.data.total_pages;
    //     },
    //     error => this.errorMessage = <any>error);
  }
  doInfinite(infiniteScroll) {
  //   this.page = this.page + 1;
  //   setTimeout(() => {
  //     this.restApi.getUsers(this.page)
  //       .subscribe(
  //         res => {
  //           this.data = res;
  //           this.perPage = this.data.per_page;
  //           this.totalData = this.data.total;
  //           this.totalPage = this.data.total_pages;
  //           for (let i = 0; i < this.data.data.length; i++) {
  //             this.users.push(this.data.data[i]);
  //           }
  //         },
  //         error => this.errorMessage = <any>error);

  //     console.log('Async operation has ended');
  //     infiniteScroll.complete();
  //   }, 1000);
  // }

}
}
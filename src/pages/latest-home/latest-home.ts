import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { FreshVegitablesPage } from '../fresh-vegitables/fresh-vegitables';
import { Storage } from '@ionic/storage';
/**
 * Generated class for the LatestHomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-latest-home',
  templateUrl: 'latest-home.html',
})
export class LatestHomePage {
  fruits: any = [
    {
      'name': 'Fresh Produce', 'img': 'fruit1.jpg'
    }, {
      'name': 'Fruits&Vegs', 'img': 'fruit2.jpg',
    },
    {
      'name': 'Fruits', 'img': 'fruit1.jpg'
    },
    {
      'name': 'Vegs', 'img': 'fruit2.jpg'
    }
  ];

  sort: any = [
    {
      'id': 0, 'name': 'Fruits & Diets', 'img': 'fruit2.jpg', 'key': false,
      'ListFruits': [
        {
          "id": 0, 'veg': 'fruits_diet1.jpg', 'name': 'Orange', 'counter': 0, 'value': false, 'price': 10, 'wish': false, 'trolley': false,
        },
        {
          "id": 1, 'veg': 'fruits_diet2.jpg', 'name': 'Grapes', 'counter': 0, 'value': false, 'price': 12, 'wish': false, 'trolley': false,
        },
        {
          "id": 2, 'veg': 'fruits_diet3.jpg', 'name': 'Watermelon', 'counter': 0, 'value': false, 'price': 10, 'wish': false, 'trolley': false,
        },
        {
          "id": 3, 'veg': 'fruits_diet4.jpg', 'name': 'Mango', 'counter': 0, 'value': false, 'price': 10, 'wish': false, 'trolley': false,
        },
      ]
    }
    ,
    {
      'id': 1, 'name': 'Diet Fruits', 'img': 'fruit1.jpg', 'key': false,
      'ListFruits': [
        {
          "id": 0, 'veg': 'dietfruit1.jpg', 'name': 'Fruits', 'counter': 0, 'value': false, 'price': 10, 'order': 0, 'wish': false, 'trolley': false,
        },
        {
          "id": 1, 'veg': 'dietfruit2.jpg', 'name': 'Straberry', 'counter': 0, 'value': false, 'price': 11, 'order': 0, 'wish': false, 'trolley': false,
        },
        {
          "id": 2, 'veg': 'dietfruit3.jpg', 'name': 'Kewi', 'counter': 0, 'value': false, 'price': 10, 'order': 0, 'wish': false, 'trolley': false,
        },
        {
          "id": 3, 'veg': 'dietfruit4.jpg', 'name': 'Straberries', 'counter': 0, 'value': false, 'price': 12, 'order': 0, 'wish': false, 'trolley': false,
        },
      ]
    },
    {
      'id': 2, 'name': 'Fresh Vegitables', 'img': 'fruit2.jpg', 'key': false,
      'ListFruits': [
        {
          "id": 0, 'veg': 'veg1.jpg', 'name': 'Fruits', 'counter': 0, 'value': false, 'price': 13, 'order': false, 'wish': false, 'trolley': false,
        },
        {
          "id": 1, 'veg': 'veg2.jpg', 'name': 'Straberry', 'counter': 0, 'value': false, 'price': 14, 'order': false, 'wish': false, 'trolley': false,
        },
        {
          "id": 2, 'veg': 'veg3.jpg', 'name': 'Kewi', 'counter': 0, 'value': false, 'price': 15, 'order': false, 'wish': false, 'trolley': false,
        },
        {
          "id": 3, 'veg': 'veg4.jpg', 'name': 'Straberries', 'counter': 0, 'value': false, 'price': 15, 'order': false, 'wish': false, 'trolley': false,
        },
      ]
    },
    {
      'id': 3, 'name': 'Healthy Fruits', 'img': 'fruit1.jpg', 'key': false,
      'ListFruits': [
        {
          "id": 0, 'veg': 'healthy1.jpg', 'name': 'Watermelon', 'counter': 0, 'value': false, 'price': 12, 'order': false, 'wish': false, 'trolley': false,
        },
        {
          "id": 1, 'veg': 'healthy2.jpg', 'name': 'Apple', 'counter': 0, 'value': false, 'price': 18, 'order': false, 'wish': false, 'trolley': false,
        },
        {
          "id": 2, 'veg': 'healthy3.jpg', 'name': 'Pineapple', 'counter': 0, 'value': false, 'price': 12, 'order': false, 'wish': false, 'trolley': false,
        },
        {
          "id": 3, 'veg': 'fruits_diet4.jpg', 'name': 'Mango', 'counter': 0, 'value': false, 'price': 15, 'order': false, 'wish': false, 'trolley': false,
        },
      ]
    }
  ];
  constructor(public navCtrl: NavController,
    public menuCtrl: MenuController,
    public storage: Storage,
    public navParams: NavParams) {
    this.menuCtrl.enable(true, 'myMenu')
    this.setData();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LatestHomePage');
  }
  fruit(item) {
    this.navCtrl.push(FreshVegitablesPage, { data: item })
  }
  setData() {
    this.storage.set('sort', JSON.stringify(this.sort));
    console.log(this.sort, 'sjfkasdjfjkhd');
  }
  doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 3000);
  }
}

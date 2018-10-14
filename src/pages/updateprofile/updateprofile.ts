import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage'
import { ActionSheetController } from 'ionic-angular'
import { Camera, CameraOptions } from '@ionic-native/camera';
import { ProfilePage } from '../profile/profile';
/**
 * Generated class for the UpdateprofilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-updateprofile',
  templateUrl: 'updateprofile.html',
})
export class UpdateprofilePage {

  public photos: any;
  profile = [];
  public base64Image: string;
  public fileImage: string;
  public responseData: any;
  constructor(public navCtrl: NavController,
    public storage: Storage,
    public camera: Camera,
    public actionSheetCtrl: ActionSheetController,
    public navParams: NavParams) {
    this.getData();
    this.setData();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UpdateprofilePage');
  }
  getData() {
    this.storage.get('key1').then((val) => {
      // console.log('Your age is', JSON.parse(val));
      this.profile = JSON.parse(val);
      console.log(this.profile);

    });

  }
  ngOnInit() {
    this.photos = [];
  }
  presentActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Choose Profile Picture',
      buttons: [
        {
          text: 'Camera',
          role: 'Camera',
          handler: () => {
            console.log('Camera clicked');
            this.takePhoto(1);
          }
        },
        {
          text: 'Gallery',
          handler: () => {
            this.takePhoto(0);
            console.log('Archive clicked');
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });

    actionSheet.present();
  }
  takePhoto(sourceType: number) {
    const options: CameraOptions = {
      quality: 50,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true,
      sourceType: sourceType,
    }

    this.camera.getPicture(options).then((imageData) => {
      this.base64Image = "data:image/jpeg;base64," + imageData;
      //console.log(imageData);

      this.photos.push(this.base64Image);
      this.photos.reverse();


      // this.newPostData.media.files.push(fileImage);
    }, (err) => {
      // Handle error
    });
  }
  setData() {
    this.storage.set('image', JSON.stringify(this.photos));
    console.log(this.photos, 'fgh');

  }
  save() {
    this.storage.set('name', JSON.stringify(this.profile))
    console.log(this.profile);
    this.navCtrl.push(ProfilePage)
  }
}

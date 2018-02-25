import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { WineItem } from '../../models/wine-item/wine-item';
/**
 * Generated class for the AddWinePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-wine',
  templateUrl: 'add-wine.html',
})
export class AddWinePage {

  wineItem = {} as WineItem;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddWinePage');
  }

}

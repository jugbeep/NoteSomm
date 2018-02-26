import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { WineItem } from '../../models/wine-item/wine-item';
import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database-deprecated';

@IonicPage()
@Component({
  selector: 'page-add-wine',
  templateUrl: 'add-wine.html',
})
export class AddWinePage {

  wineListRef$: FirebaseListObservable<WineItem[]>

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private database: AngularFireDatabase) {

    this.wineListRef$ = this.database.list('wine-entry');


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddWinePage');
  }

}

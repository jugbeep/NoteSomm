import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database-deprecated'

import { Subscription } from 'rxjs/Subscription'
import { WineItem } from '../../models/wine-item/wine-item';

@IonicPage()
@Component({
  selector: 'page-edit-wine-item',
  templateUrl: 'edit-wine-item.html',
})
export class EditWineItemPage {
  wineItemSubscription: Subscription;
  wineItemRef: FirebaseObjectObservable<WineItem>
  wineItem = {} as WineItem;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private database: AngularFireDatabase) {

      // set scope of firebase object = to the selected wine
      const wineItemId = this.navParams.get('wineItemId');

      console.log(wineItemId)
  
      this.wineItemRef = this.database.object(`wine-entry/${wineItemId}`);

      //subcribe to the object and assign the result to this.wineItem
      this.wineItemSubscription = this.wineItemRef.subscribe(wineItem => this.wineItem = wineItem);  
    }

    // updates firebase with new wine info
  editWineItem(wineItem: WineItem) {
    this.wineItemRef.update(wineItem);

    this.navCtrl.pop();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditWineItemPage');
  }

  ionViewWillLeave() {
    //unsubscribe from observable when leaving the page
    this.wineItemSubscription.unsubscribe();
  }

}

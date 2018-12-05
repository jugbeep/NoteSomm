import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController } from 'ionic-angular';
import { WineItem } from '../../models/wine-item/wine-item';
import { Aroma } from '../../models/aroma'
import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database-deprecated';

@IonicPage()
@Component({
  selector: 'page-add-wine',
  templateUrl: 'add-wine.html',
})
export class AddWinePage {

  wineListRef$: FirebaseListObservable<WineItem[]>
  wineAromas$: FirebaseListObservable<Aroma[]>

  constructor(
    private actionSheet: ActionSheetController,
    public navCtrl: NavController, 
    public navParams: NavParams,
    private database: AngularFireDatabase) {

    this.wineListRef$ = this.database.list('wine-entry');

    }

  selectWineItem(wineItem: WineItem) {
    //CRUD on wine item

    this.actionSheet.create({
      title: `${wineItem.wineName}`,
      buttons: [
        {
          text: 'Edit',
          handler: () => {
            //send user to editwinepage and pass key as param
            this.navCtrl.push('EditWineItemPage', { wineItemId: wineItem.$key });
          } 
        },
        {
          text: 'Delete',
          role: 'destructive',
          handler: () => {
            //delete the current item
            this.wineListRef$.remove(wineItem.$key)
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          handler: ()=> {
            console.log('The user cancelled');
          }
        }
      ]
    }).present();
  }


}

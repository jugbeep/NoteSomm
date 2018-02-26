import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup, RadioControlValueAccessor } from '@angular/forms';
import { Items } from '../../providers/providers';
import { Aromas } from './aromas';
import { WineItem } from '../../models/wine-item/wine-item';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database-deprecated';


@IonicPage()
@Component({
  selector: 'page-item-detail',
  templateUrl: 'item-detail.html'
})
export class ItemDetailPage {
  wineItem = {} as WineItem;
  color: any;
  item: any;
  aromas = Aromas;
  wineItemRef$: FirebaseListObservable<WineItem[]>

  private wine : FormGroup;
  constructor(
    private database: AngularFireDatabase,
    public navCtrl: NavController, 
    public items: Items, 
    public modalCtrl: ModalController,
    navParams: NavParams, 
    private formBuilder: FormBuilder) {
      this.wineItemRef$ = this.database.list('wine-entry')
      this.item = navParams.get('item') || items.defaultItem;
      this.wine = this.formBuilder.group({
        name: ['', Validators.required],
        color: ['', Validators.required],
        aromas: ['', Validators]
      });
  }
  
  //send wine to the db
  addWine(wineItem: WineItem) {
    console.log(wineItem);
    this.wineItemRef$.push(this.wineItem)
    this.wineItem = {} as WineItem;
    this.navCtrl.pop();
  }

}

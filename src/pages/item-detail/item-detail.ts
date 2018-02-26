import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Items } from '../../providers/providers';
import { Aromas } from './aromas';
import { WineItem } from '../../models/wine-item/wine-item';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database-deprecated';
import { AddWinePage } from '../add-wine/add-wine';
import { Camera } from '@ionic-native/camera';
import { ItemCreatePage } from '../item-create/item-create';


@IonicPage()
@Component({
  selector: 'page-item-detail',
  templateUrl: 'item-detail.html'
})
export class ItemDetailPage {
  @ViewChild('fileInput') fileInput;

  wineItem = {} as WineItem;
  color: any;
  item: any;
  aromas = Aromas;
  wineItemRef$: FirebaseListObservable<WineItem[]>
  form: FormGroup;

  private wine : FormGroup;
  constructor(
    private database: AngularFireDatabase,
    public navCtrl: NavController,
    public camera: Camera, 
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
    this.navCtrl.push(AddWinePage);
  }

  picPage() {
    this.navCtrl.push(ItemCreatePage)
  }
}

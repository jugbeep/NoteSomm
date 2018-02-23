import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup, RadioControlValueAccessor } from '@angular/forms';
import { Items } from '../../providers/providers';

@IonicPage()
@Component({
  selector: 'page-item-detail',
  templateUrl: 'item-detail.html'
})
export class ItemDetailPage {
  item: any;
  color: any;
  colors: string[] = [
    "Pale Straw",
    "Medium Straw",
    "Deep Straw",
    "Pale Yellow",
    "Medium Yellow",
    "Deep Yellow",
    "Pale Gold",
    "Medium Gold",
    "Deep Gold",
    "Pale Brown",
    "Medium Brown",
    "Deep Brown",
    "Pale Amber",
    "Medium Amber",
    "Deep Amber",
    "Pale Copper",
    "Medium Copper",
    "Deep Copper",
    "Pale Salmon",
    "Medium Salmon",
    "Deep Salmon",
    "Pale Pink",
    "Medium Pink",
    "Deep Pink",
    "Pale Ruby",
    "Medium Ruby",
    "Deep Ruby",
    "Pale Purple",
    "Medium Purple",
    "Deep Purple",
    "Pale Garnet",
    "Medium Garnet",
    "Deep Garnet",
    "Pale Tawny",
    "Medium Tawny",
    "Deep Tawny"
  ];

  private wine : FormGroup;
  constructor(
    public navCtrl: NavController, 
    navParams: NavParams, 
    items: Items,

    private formBuilder: FormBuilder) {
    this.item = navParams.get('item') || items.defaultItem;
    this.wine = this.formBuilder.group({
      name: ['', Validators.required],
      color: ['', Validators.required]
    });
  }
  
  logForm(){
    console.log(this.wine.value)
  }

}

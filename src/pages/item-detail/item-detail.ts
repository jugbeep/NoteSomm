import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup, RadioControlValueAccessor } from '@angular/forms';
import { Items } from '../../providers/providers';
import { Aromas } from './aromas'

@IonicPage()
@Component({
  selector: 'page-item-detail',
  templateUrl: 'item-detail.html'
})
export class ItemDetailPage {
  item: any;
  color: any;
  Aromas = [
    { id: 1, aroma: 'Mr. Nice' },
    { id: 2, aroma: 'Narco' },
    { id: 3, aroma: 'Bombasto' },
    { id: 4, aroma: 'Celeritas' },
    { id: 5, aroma: 'Magneta' },
    { id: 6, aroma: 'RubberMan' },
    { id: 7, aroma: 'Dynama' },
    { id: 8, aroma: 'Dr IQ' },
    { id: 9, aroma: 'Magma' },
    { id: 0, aroma: 'Tornado' }
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
      color: ['', Validators.required],
      aromas: ['', Validators]
    });
  }
  
  logForm(){
    console.log(this.wine.value)
  }

}

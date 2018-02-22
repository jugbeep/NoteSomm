import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Items } from '../../providers/providers';

@IonicPage()
@Component({
  selector: 'page-item-detail',
  templateUrl: 'item-detail.html'
})
export class ItemDetailPage {
  item: any;
  private wine : FormGroup;

  constructor(
    public navCtrl: NavController, 
    navParams: NavParams, 
    items: Items,
    private formBuilder: FormBuilder) {
    this.item = navParams.get('item') || items.defaultItem;
    this.wine = this.formBuilder.group({
      name: ['', Validators.required],
      description: [''],
    });
  }
  
  logForm(){
    console.log(this.wine.value)
  }

}

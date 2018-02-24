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
  selectedAroma: any;
  aromas = [
    { id: 1, aroma: 'Iris' },
    { id: 2, aroma: 'Peony' },
    { id: 3, aroma: 'Elderflower' },
    { id: 4, aroma: 'Acacia' },
    { id: 5, aroma: 'Lilac' },
    { id: 6, aroma: 'Jasmine' },
    { id: 7, aroma: 'Honeysuckle' },
    { id: 8, aroma: 'Violet' },
    { id: 9, aroma: 'Lavender' },
    { id: 10, aroma: 'Rose' },
    { id: 11, aroma: 'Potpourri' },
    { id: 12, aroma: 'Hibiscus' },
    { id: 13, aroma: 'Lime' },
    { id: 14, aroma: 'Lemon' },
    { id: 15, aroma: 'Grapefruit' },
    { id: 16, aroma: 'Orange' },
    { id: 17, aroma: 'Marmalade' },
    { id: 18, aroma: 'Quince' },
    { id: 19, aroma: 'Apple' },
    { id: 20, aroma: 'Pear' },
    { id: 21, aroma: 'Nectarine' },
    { id: 22, aroma: 'Peach' },
    { id: 23, aroma: 'Apricot' },
    { id: 24, aroma: 'Persimmon' },
    { id: 25, aroma: 'Pineapple' },
    { id: 26, aroma: 'Mango' },
    { id: 27, aroma: 'Guava' },
    { id: 28, aroma: 'Passion Fruit' },
    { id: 29, aroma: 'Lychee' },
    { id: 30, aroma: 'Bubblegum' },
    { id: 31, aroma: 'Cranberry' },
    { id: 32, aroma: 'Red Plum' },
    { id: 33, aroma: 'Pomegranate' },
    { id: 34, aroma: 'Sour Cherry' },
    { id: 35, aroma: 'Strawberry' },
    { id: 36, aroma: 'Cherry' },
    { id: 37, aroma: 'Raspberry' },
    { id: 38, aroma: 'Boysenberry' },
    { id: 39, aroma: 'Black Currant' },
    { id: 40, aroma: 'Black Cherry' },
    { id: 41, aroma: 'Plum' },
    { id: 42, aroma: 'Blackberry' },
    { id: 43, aroma: 'Blueberry' },
    { id: 44, aroma: 'Olive' },
    { id: 45, aroma: 'Raisin' },
    { id: 46, aroma: 'Fig' },
    { id: 47, aroma: 'Date' },
    { id: 48, aroma: 'Fruitcake' },
    { id: 49, aroma: 'Beeswax' },
    { id: 50, aroma: 'Ginger' },
    { id: 51, aroma: 'Honey' },
    { id: 52, aroma: 'White Pepper' },
    { id: 53, aroma: 'Red Pepper' },
    { id: 54, aroma: 'Black Pepper' },
    { id: 55, aroma: 'Cinnamon' },
    { id: 56, aroma: 'Anise' },
    { id: 57, aroma: '5-Spice' },
    { id: 58, aroma: 'Fennel' },
    { id: 59, aroma: 'Eucalyptus' },
    { id: 60, aroma: 'Mint' },
    { id: 61, aroma: 'Thyme' },
    { id: 62, aroma: 'Grass' },
    { id: 63, aroma: 'Tomato Leaf' },
    { id: 64, aroma: 'Gooseberry' },
    { id: 65, aroma: 'Bell Pepper' },
    { id: 66, aroma: 'Jalapeño' },
    { id: 67, aroma: 'Bitter Almond' },
    { id: 68, aroma: 'Tomato' },
    { id: 69, aroma: 'Sun-Dried Tomato' },
    { id: 70, aroma: 'Black Tea' },
    { id: 71, aroma: 'Clay Pot' },
    { id: 72, aroma: 'Slate' },
    { id: 73, aroma: 'Pencil Shavings' },
    { id: 74, aroma: 'Wet Gravel' },
    { id: 75, aroma: 'Potting Soil' },
    { id: 76, aroma: 'Red Beet' },
    { id: 77, aroma: 'Volcanic Rocks' },
    { id: 78, aroma: 'Petroleum' },
    { id: 79, aroma: 'Butter' },
    { id: 80, aroma: 'Cream' },
    { id: 81, aroma: 'Sourdough' },
    { id: 82, aroma: 'Lager' },
    { id: 83, aroma: 'Truffle' },
    { id: 84, aroma: 'Mushroom' },
    { id: 85, aroma: 'Vanilla' },
    { id: 86, aroma: 'Coconut' },
    { id: 87, aroma: 'Baking Spices' },
    { id: 88, aroma: 'Cigar Box' },
    { id: 89, aroma: 'Smoke' },
    { id: 90, aroma: 'Dill' },
    { id: 91, aroma: 'Dried Fruit' },
    { id: 92, aroma: 'Nutty Flavors' },
    { id: 93, aroma: 'Tobacco' },
    { id: 94, aroma: 'Coffee' },
    { id: 95, aroma: 'Cocoa' },
    { id: 96, aroma: 'Leather' },
    { id: 97, aroma: 'Musty Cardboard' },
    { id: 98, aroma: 'Wet Dog' },
    { id: 99, aroma: 'Cured Meat' },
    { id: 100, aroma: 'Boiled Eggs' },
    { id: 101, aroma: 'Burnt Rubber' },
    { id: 102, aroma: 'Lit Match' },
    { id: 103, aroma: 'Garlic' },
    { id: 104, aroma: 'Onion' },
    { id: 105, aroma: 'Cat Pee' },
    { id: 106, aroma: 'Black Cardamon' },
    { id: 107, aroma: 'Band-Aid' },
    { id: 108, aroma: 'Sweaty Leather Saddle' },
    { id: 109, aroma: 'Horse Manure' },
    { id: 110, aroma: 'Toffee' },
    { id: 111, aroma: 'Stewed Fruit' },
    { id: 112, aroma: 'Vinegar' },
    { id: 113, aroma: 'Nail Polish Remover' }

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

  aromasPicked() {
    console.log(this.selectedAroma)
  }

}

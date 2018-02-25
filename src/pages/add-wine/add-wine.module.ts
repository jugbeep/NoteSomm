import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddWinePage } from './add-wine';

@NgModule({
  declarations: [
    AddWinePage,
  ],
  imports: [
    IonicPageModule.forChild(AddWinePage),
  ],
})
export class AddWinePageModule {}

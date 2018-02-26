import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditWineItemPage } from './edit-wine-item';

@NgModule({
  declarations: [
    EditWineItemPage,
  ],
  imports: [
    IonicPageModule.forChild(EditWineItemPage),
  ],
})
export class EditWineItemPageModule {}

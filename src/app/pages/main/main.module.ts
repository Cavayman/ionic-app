import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {MainPageRoutingModule} from './main-routing.module';

import {MainPage} from './main.page';
import {OptionsComponent} from './components/option-component/options.component';
import { ImageModalComponent } from './components/image-modal/image.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MainPageRoutingModule,
  ],
  providers: [],
  declarations: [MainPage, OptionsComponent, ImageModalComponent]
})
export class MainPageModule {}

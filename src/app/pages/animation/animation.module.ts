import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AnimationPage } from './animation.page';
import { AnimationRoutingModule } from './animation-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnimationRoutingModule
  ],
  declarations: [AnimationPage]
})
export class AnimationPageModule {

}

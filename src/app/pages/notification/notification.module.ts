import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NotificationPage } from './notification.page';
import { NotificationRoutingModule } from './notification-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NotificationRoutingModule
  ],
  declarations: [NotificationPage]
})
export class NotificationModule {

}

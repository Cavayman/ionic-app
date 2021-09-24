import { Component, OnInit } from '@angular/core';
import {AlertController, ToastController} from '@ionic/angular';
import { LocalNotifications } from '@capacitor/local-notifications';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.page.html',
  styleUrls: ['./notification.page.scss']
})
export class NotificationPage implements OnInit {

  constructor(private alertController: AlertController, private toastController: ToastController) {
  }

  async ngOnInit() {
    await LocalNotifications.requestPermissions();
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Have a nice day!',
      duration: 2000
    });
    await toast.present();
  }

  async schedule() {
    await LocalNotifications.schedule({
      notifications: [
        {
          title: 'Reminder',
          body: 'Welcome to Ionic app!',
          id: 1,
          extra: {
            data: 'Pass data to your handler'
          },
          iconColor: '#0000FF'
        }
      ]
    });
  }

}

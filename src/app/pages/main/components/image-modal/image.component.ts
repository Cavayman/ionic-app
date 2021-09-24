import { Component, Input } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-image-modal',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageModalComponent {
  public imageUrl;

  constructor(public popoverController: PopoverController) {
    this.popoverController.getTop().then(data => {
      this.imageUrl = data.componentProps.imageUrl;
    });
  }

  closeImage() {
    this.popoverController.dismiss();
  }
}

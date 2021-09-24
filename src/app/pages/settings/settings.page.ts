import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss']
})
export class SettingsPage implements OnInit {

  public darkTheme = false;

  constructor() {
  }

  ngOnInit(): void  {
    this.darkTheme = document.body.classList.contains('dark');
  }

  changeTheme(event) {
    if (event.checked) {
      this.darkTheme = this.darkTheme = true;
    } else {
      this.darkTheme = this.darkTheme = false;
    }

    document.body.classList.toggle('dark');
  }
}

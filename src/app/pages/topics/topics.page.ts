import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topics',
  templateUrl: './topics.page.html',
  styleUrls: ['./topics.page.scss']
})
export class TopicsPage implements OnInit {
  public testArray = [];
  private items = [
    {title: 'Goal Setting', description: 'Single line description text'},
    {title: 'Pandemic', description: 'Single line description text'},
    {title: 'Concentration', description: 'Single line description text'},
    {title: 'Stress', description: 'Single line description text'},
    {title: 'Anxiety', description: 'Single line description text'},
    {title: 'Loneliness', description: 'Single line description text'},
    {title: 'Body Image', description: 'Single line description text'},
    {title: 'Sleeping', description: 'Single line description text'}
  ];

  constructor() {
  }

  ngOnInit(): void {
    let count = 0;
    const interval = setInterval(() => {
      this.testArray.push(this.items[count]);
      count++;
      if (this.items.length === count) {
        clearInterval(interval);
      }
    }, 500);
  }
}
